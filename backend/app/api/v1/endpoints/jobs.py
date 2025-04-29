from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

router = APIRouter()

class JobBase(BaseModel):
    title: str
    description: str
    company: str
    location: str
    salary: Optional[str] = None
    requirements: List[str] = []

class JobCreate(JobBase):
    pass

class Job(JobBase):
    id: int
    posted_at: datetime
    is_active: bool

    class Config:
        from_attributes = True

@router.get("/", response_model=List[Job])
async def read_jobs():
    # TODO: Implement job listing
    return []

@router.post("/", response_model=Job)
async def create_job(job: JobCreate):
    # TODO: Implement job creation
    return job 