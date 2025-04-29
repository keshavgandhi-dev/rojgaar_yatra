from sqlalchemy import Column, String, Text, Integer, ForeignKey, Enum
from sqlalchemy.orm import relationship
from app.models.base import BaseModel
from app.db.session import Base
import enum

class ApplicationStatus(str, enum.Enum):
    PENDING = "pending"
    REVIEWING = "reviewing"
    SHORTLISTED = "shortlisted"
    REJECTED = "rejected"
    SELECTED = "selected"

class Application(Base, BaseModel):
    __tablename__ = "applications"

    id = Column(Integer, primary_key=True, index=True)
    cover_letter = Column(Text)
    status = Column(Enum(ApplicationStatus), default=ApplicationStatus.PENDING)
    
    # Foreign Keys
    job_id = Column(Integer, ForeignKey("jobs.id"))
    applicant_id = Column(Integer, ForeignKey("users.id"))
    
    # Relationships
    job = relationship("Job", back_populates="applications")
    applicant = relationship("User", back_populates="applications")
    documents = relationship("Document", back_populates="application") 