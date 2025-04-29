from sqlalchemy import Column, Integer, String, Text, DateTime, func, Enum
from sqlalchemy.orm import relationship
from app.models.base import BaseModel
from app.db.session import Base
import enum

class DocumentType(str, enum.Enum):
    RESUME = "resume"
    COVER_LETTER = "cover_letter"
    CERTIFICATE = "certificate"
    ID_PROOF = "id_proof"
    OTHER = "other"

class Document(Base, BaseModel):
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    description = Column(Text)
    file_url = Column(String(255))
    category = Column(String(100))
    status = Column(String(50), default="active")
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    file_path = Column(String, nullable=False)
    file_name = Column(String, nullable=False)
    file_type = Column(String)
    document_type = Column(Enum(DocumentType))
    
    # Foreign Keys
    user_id = Column(Integer, ForeignKey("users.id"))
    application_id = Column(Integer, ForeignKey("applications.id"), nullable=True)
    
    # Relationships
    user = relationship("User", back_populates="documents")
    application = relationship("Application", back_populates="documents") 