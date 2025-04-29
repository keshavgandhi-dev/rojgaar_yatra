from sqlalchemy import Column, DateTime, func, Boolean
from sqlalchemy.ext.declarative import declared_attr
from datetime import datetime

class BaseModel:
    @declared_attr
    def __tablename__(cls):
        return cls.__name__.lower()

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    is_deleted = Column(Boolean, default=False)
    deleted_at = Column(DateTime(timezone=True), nullable=True) 