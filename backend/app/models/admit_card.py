from sqlalchemy import Column, Integer, String, Text, Date, DateTime, func, ForeignKey
from sqlalchemy.orm import relationship
from app.db.session import Base
from app.models.base import BaseModel

class AdmitCard(Base, BaseModel):
    __tablename__ = "admit_cards"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    description = Column(Text)
    exam_date = Column(Date)
    download_url = Column(String(255))
    status = Column(String(50), default="active")
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Foreign Keys
    user_id = Column(Integer, ForeignKey("users.id"))
    
    # Relationships
    user = relationship("User", back_populates="admit_cards")

    exam_name = Column(String, nullable=False)
    exam_center = Column(String)
    roll_number = Column(String)
    instructions = Column(String) 