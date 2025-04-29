from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime
from app.db.session import get_db
from app.models.application import Application
from app.models.job import Job
from app.models.user import User
from pydantic import BaseModel

router = APIRouter()

class ApplicationBase(BaseModel):
    user_id: int
    job_id: int
    status: str = "pending"

class ApplicationCreate(ApplicationBase):
    pass

class ApplicationUpdate(BaseModel):
    status: str

class ApplicationResponse(ApplicationBase):
    id: int
    applied_at: datetime
    updated_at: Optional[datetime] = None
    user: dict
    job: dict

    class Config:
        from_attributes = True

@router.post("/", response_model=ApplicationResponse)
def create_application(application: ApplicationCreate, db: Session = Depends(get_db)):
    # Check if user exists
    user = db.query(User).filter(User.id == application.user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Check if job exists
    job = db.query(Job).filter(Job.id == application.job_id).first()
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")
    
    # Check if application already exists
    existing = db.query(Application).filter(
        Application.user_id == application.user_id,
        Application.job_id == application.job_id
    ).first()
    if existing:
        raise HTTPException(status_code=400, detail="Application already exists")
    
    db_application = Application(**application.model_dump())
    db.add(db_application)
    db.commit()
    db.refresh(db_application)
    return db_application

@router.get("/", response_model=List[ApplicationResponse])
def get_applications(
    skip: int = 0,
    limit: int = 100,
    status: Optional[str] = None,
    job_id: Optional[int] = None,
    user_id: Optional[int] = None,
    start_date: Optional[datetime] = None,
    end_date: Optional[datetime] = None,
    db: Session = Depends(get_db)
):
    query = db.query(Application)
    
    if status:
        query = query.filter(Application.status == status)
    if job_id:
        query = query.filter(Application.job_id == job_id)
    if user_id:
        query = query.filter(Application.user_id == user_id)
    if start_date:
        query = query.filter(Application.applied_at >= start_date)
    if end_date:
        query = query.filter(Application.applied_at <= end_date)
    
    applications = query.offset(skip).limit(limit).all()
    return applications

@router.get("/{application_id}", response_model=ApplicationResponse)
def get_application(application_id: int, db: Session = Depends(get_db)):
    application = db.query(Application).filter(Application.id == application_id).first()
    if application is None:
        raise HTTPException(status_code=404, detail="Application not found")
    return application

@router.put("/{application_id}", response_model=ApplicationResponse)
def update_application(
    application_id: int,
    application: ApplicationUpdate,
    db: Session = Depends(get_db)
):
    db_application = db.query(Application).filter(Application.id == application_id).first()
    if db_application is None:
        raise HTTPException(status_code=404, detail="Application not found")
    
    for key, value in application.model_dump().items():
        setattr(db_application, key, value)
    
    db.commit()
    db.refresh(db_application)
    return db_application

@router.delete("/{application_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_application(application_id: int, db: Session = Depends(get_db)):
    application = db.query(Application).filter(Application.id == application_id).first()
    if application is None:
        raise HTTPException(status_code=404, detail="Application not found")
    
    db.delete(application)
    db.commit()
    return None

@router.get("/stats/summary", response_model=dict)
def get_application_stats(db: Session = Depends(get_db)):
    total = db.query(Application).count()
    pending = db.query(Application).filter(Application.status == "pending").count()
    approved = db.query(Application).filter(Application.status == "approved").count()
    rejected = db.query(Application).filter(Application.status == "rejected").count()
    
    return {
        "total": total,
        "pending": pending,
        "approved": approved,
        "rejected": rejected
    } 