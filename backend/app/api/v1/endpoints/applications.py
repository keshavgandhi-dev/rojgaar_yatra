from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from enum import Enum

router = APIRouter()

class ApplicationStatus(str, Enum):
    PENDING = "pending"
    REVIEWED = "reviewed"
    ACCEPTED = "accepted"
    REJECTED = "rejected"

class ApplicationBase(BaseModel):
    job_id: int
    cover_letter: Optional[str] = None

class ApplicationCreate(ApplicationBase):
    pass

class Application(ApplicationBase):
    id: int
    user_id: int
    status: ApplicationStatus
    applied_at: datetime

    class Config:
        from_attributes = True

@router.get("/", response_model=List[Application])
async def read_applications():
    # TODO: Implement application listing
    return []

@router.post("/", response_model=Application)
async def create_application(application: ApplicationCreate):
    # TODO: Implement application creation
    return application 