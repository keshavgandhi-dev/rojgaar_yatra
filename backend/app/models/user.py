from sqlalchemy import Column, Integer, String, Boolean, DateTime, func, Enum
from sqlalchemy.orm import relationship
from app.models.base import BaseModel
from app.db.session import Base
import enum
from datetime import datetime

class UserRole(str, enum.Enum):
    ADMIN = "admin"
    JOB_SEEKER = "job_seeker"
    EMPLOYER = "employer"

class User(Base, BaseModel):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    full_name = Column(String)
    phone_number = Column(String)
    password_hash = Column(String)
    role = Column(Enum(UserRole), default=UserRole.JOB_SEEKER)
    is_active = Column(Boolean, default=True)
    is_verified = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Profile fields
    profile_picture = Column(String)
    resume = Column(String)
    skills = Column(String)  # JSON string of skills
    experience = Column(String)  # JSON string of experience
    education = Column(String)  # JSON string of education
    
    # Job preferences
    experience_years = Column(Integer, default=0)
    expected_salary = Column(String)
    
    # Additional fields for tracking
    last_login = Column(DateTime(timezone=True))
    login_count = Column(Integer, default=0)

    # Relationships
    jobs = relationship("Job", back_populates="employer")
    applications = relationship("Application", back_populates="applicant")
    documents = relationship("Document", back_populates="user")
    admit_cards = relationship("AdmitCard", back_populates="user")
    results = relationship("Result", back_populates="user") 