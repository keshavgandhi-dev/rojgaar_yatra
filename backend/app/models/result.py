from sqlalchemy import Column, String, Integer, ForeignKey, Float, DateTime
from sqlalchemy.orm import relationship
from app.models.base import BaseModel
from app.db.session import Base

class Result(Base, BaseModel):
    __tablename__ = "results"

    id = Column(Integer, primary_key=True, index=True)
    exam_name = Column(String, nullable=False)
    exam_date = Column(DateTime(timezone=True))
    total_marks = Column(Float)
    obtained_marks = Column(Float)
    percentage = Column(Float)
    rank = Column(Integer)
    remarks = Column(String)
    
    # Foreign Keys
    user_id = Column(Integer, ForeignKey("users.id"))
    
    # Relationships
    user = relationship("User", back_populates="results") 