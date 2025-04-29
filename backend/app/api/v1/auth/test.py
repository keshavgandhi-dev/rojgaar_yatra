from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.core.config import settings
import logging

router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/test-auth")
async def test_auth(db: Session = Depends(get_db)):
    try:
        # Test database connection
        db.execute("SELECT 1")
        
        # Check if admin user exists
        admin_user = db.execute(
            "SELECT * FROM users WHERE email = :email",
            {"email": settings.FIRST_SUPERUSER}
        ).first()
        
        return {
            "status": "success",
            "message": "Authentication system is working correctly",
            "admin_user_exists": bool(admin_user),
            "google_client_id": bool(settings.GOOGLE_CLIENT_ID),
            "google_client_secret": bool(settings.GOOGLE_CLIENT_SECRET)
        }
    except Exception as e:
        logger.error(f"Test auth error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Authentication test failed: {str(e)}"
        ) 