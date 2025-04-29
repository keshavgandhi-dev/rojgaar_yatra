from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, JSON
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.base_class import Base

class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    company = Column(String, nullable=False)
    description = Column(String, nullable=False)
    requirements = Column(String, nullable=False)
    location = Column(String, nullable=False)
    salary_range = Column(String)
    job_type = Column(String)  # Full-time, Part-time, Contract, etc.
    experience_level = Column(String)  # Entry, Mid, Senior
    posted_by = Column(Integer, ForeignKey("users.id"))
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Additional fields
    skills_required = Column(JSON)  # Array of required skills
    benefits = Column(JSON)  # Array of benefits
    application_deadline = Column(DateTime(timezone=True))
    total_applications = Column(Integer, default=0)
    
    # Relationships
    posted_by_user = relationship("User", back_populates="posted_jobs")
    applications = relationship("JobApplication", back_populates="job") 