from sqlalchemy.orm import Session
from app.models.user import User, UserRole
from app.core.security import get_password_hash
import logging

logger = logging.getLogger(__name__)

def create_default_admin(db: Session) -> None:
    """
    Creates the default admin account if it doesn't exist.
    Default admin credentials:
    - Email: admin@rojgaaryatra.com
    - Password: Admin@123
    """
    admin_email = "admin@rojgaaryatra.com"
    admin = db.query(User).filter(User.email == admin_email).first()
    
    if not admin:
        admin = User(
            email=admin_email,
            hashed_password=get_password_hash("Admin@123"),
            full_name="System Admin",
            role=UserRole.ADMIN,
            is_active=True,
            is_verified=True
        )
        db.add(admin)
        db.commit()
        logger.info("Default admin account created successfully")
    else:
        logger.info("Default admin account already exists") 