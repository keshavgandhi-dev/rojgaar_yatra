from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from google.oauth2 import id_token
from google.auth.transport import requests
from app.core.config import settings
from app.db.session import get_db
from app.models.user import User, UserRole
from app.core.security import create_access_token
from pydantic import BaseModel
import logging

router = APIRouter()
logger = logging.getLogger(__name__)

class GoogleToken(BaseModel):
    token: str

@router.post("/google")
async def google_auth(token: GoogleToken, db: Session = Depends(get_db)):
    try:
        # Verify the Google token
        idinfo = id_token.verify_oauth2_token(
            token.token, 
            requests.Request(), 
            settings.GOOGLE_CLIENT_ID
        )
        
        # Get user info from Google
        email = idinfo['email']
        name = idinfo.get('name', '')
        
        # Check if user exists
        user = db.query(User).filter(User.email == email).first()
        
        if not user:
            # Create new user
            user = User(
                email=email,
                full_name=name,
                role=UserRole.JOB_SEEKER,
                is_active=True,
                is_verified=True
            )
            db.add(user)
            db.commit()
            db.refresh(user)
            logger.info(f"New user created with Google: {email}")
        
        # Create access token
        access_token = create_access_token(data={"sub": user.email})
        
        return {
            "access_token": access_token,
            "token_type": "bearer",
            "user": {
                "id": user.id,
                "email": user.email,
                "full_name": user.full_name,
                "role": user.role
            }
        }
        
    except ValueError as e:
        logger.error(f"Google authentication error: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Google token"
        )
    except Exception as e:
        logger.error(f"Unexpected error during Google authentication: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Authentication failed"
        ) 