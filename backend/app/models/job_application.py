from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Enum
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.base_class import Base
import enum

class ApplicationStatus(str, enum.Enum):
    APPLIED = "applied"
    REVIEWING = "reviewing"
    SHORTLISTED = "shortlisted"
    INTERVIEW = "interview"
    REJECTED = "rejected"
    OFFERED = "offered"
    ACCEPTED = "accepted"

class JobApplication(Base):
    __tablename__ = "job_applications"

    id = Column(Integer, primary_key=True, index=True)
    job_id = Column(Integer, ForeignKey("jobs.id"))
    user_id = Column(Integer, ForeignKey("users.id"))
    status = Column(Enum(ApplicationStatus), default=ApplicationStatus.APPLIED)
    cover_letter = Column(String)
    resume = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Application details
    current_salary = Column(String)
    expected_salary = Column(String)
    notice_period = Column(String)
    availability = Column(String)
    
    # Interview details
    interview_date = Column(DateTime(timezone=True))
    interview_location = Column(String)
    interview_notes = Column(String)
    
    # Relationships
    job = relationship("Job", back_populates="applications")
    user = relationship("User", back_populates="applications") 