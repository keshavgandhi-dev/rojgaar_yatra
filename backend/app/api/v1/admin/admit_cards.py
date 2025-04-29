from fastapi import APIRouter, Depends, HTTPException, status, Query, UploadFile, File
from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime, date
from app.db.session import get_db
from app.models.admit_card import AdmitCard
from pydantic import BaseModel
import os
from app.core.config import settings

router = APIRouter()

class AdmitCardBase(BaseModel):
    title: str
    description: Optional[str] = None
    exam_date: Optional[date] = None
    status: str = "active"

class AdmitCardCreate(AdmitCardBase):
    pass

class AdmitCardUpdate(AdmitCardBase):
    pass

class AdmitCardResponse(AdmitCardBase):
    id: int
    download_url: Optional[str] = None
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

@router.post("/", response_model=AdmitCardResponse)
async def create_admit_card(
    admit_card: AdmitCardCreate,
    file: Optional[UploadFile] = File(None),
    db: Session = Depends(get_db)
):
    # Handle file upload
    download_url = None
    if file:
        # Create upload directory if it doesn't exist
        os.makedirs(settings.UPLOAD_DIR, exist_ok=True)
        
        # Generate unique filename
        file_extension = os.path.splitext(file.filename)[1]
        unique_filename = f"admit_card_{datetime.now().strftime('%Y%m%d_%H%M%S')}{file_extension}"
        file_path = os.path.join(settings.UPLOAD_DIR, unique_filename)
        
        # Save file
        with open(file_path, "wb") as buffer:
            content = await file.read()
            buffer.write(content)
        
        download_url = f"/uploads/{unique_filename}"
    
    # Create admit card
    db_admit_card = AdmitCard(
        **admit_card.model_dump(),
        download_url=download_url
    )
    db.add(db_admit_card)
    db.commit()
    db.refresh(db_admit_card)
    return db_admit_card

@router.get("/", response_model=List[AdmitCardResponse])
def get_admit_cards(
    skip: int = 0,
    limit: int = 100,
    status: Optional[str] = None,
    exam_date: Optional[date] = None,
    search: Optional[str] = None,
    db: Session = Depends(get_db)
):
    query = db.query(AdmitCard)
    
    if status:
        query = query.filter(AdmitCard.status == status)
    if exam_date:
        query = query.filter(AdmitCard.exam_date == exam_date)
    if search:
        search = f"%{search}%"
        query = query.filter(
            (AdmitCard.title.ilike(search)) |
            (AdmitCard.description.ilike(search))
        )
    
    admit_cards = query.offset(skip).limit(limit).all()
    return admit_cards

@router.get("/{admit_card_id}", response_model=AdmitCardResponse)
def get_admit_card(admit_card_id: int, db: Session = Depends(get_db)):
    admit_card = db.query(AdmitCard).filter(AdmitCard.id == admit_card_id).first()
    if admit_card is None:
        raise HTTPException(status_code=404, detail="Admit card not found")
    return admit_card

@router.put("/{admit_card_id}", response_model=AdmitCardResponse)
async def update_admit_card(
    admit_card_id: int,
    admit_card: AdmitCardUpdate,
    file: Optional[UploadFile] = File(None),
    db: Session = Depends(get_db)
):
    db_admit_card = db.query(AdmitCard).filter(AdmitCard.id == admit_card_id).first()
    if db_admit_card is None:
        raise HTTPException(status_code=404, detail="Admit card not found")
    
    # Handle file upload
    if file:
        # Create upload directory if it doesn't exist
        os.makedirs(settings.UPLOAD_DIR, exist_ok=True)
        
        # Generate unique filename
        file_extension = os.path.splitext(file.filename)[1]
        unique_filename = f"admit_card_{datetime.now().strftime('%Y%m%d_%H%M%S')}{file_extension}"
        file_path = os.path.join(settings.UPLOAD_DIR, unique_filename)
        
        # Save file
        with open(file_path, "wb") as buffer:
            content = await file.read()
            buffer.write(content)
        
        # Delete old file if exists
        if db_admit_card.download_url:
            old_file_path = os.path.join(settings.UPLOAD_DIR, os.path.basename(db_admit_card.download_url))
            if os.path.exists(old_file_path):
                os.remove(old_file_path)
        
        db_admit_card.download_url = f"/uploads/{unique_filename}"
    
    # Update admit card
    for key, value in admit_card.model_dump(exclude_unset=True).items():
        setattr(db_admit_card, key, value)
    
    db.commit()
    db.refresh(db_admit_card)
    return db_admit_card

@router.delete("/{admit_card_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_admit_card(admit_card_id: int, db: Session = Depends(get_db)):
    admit_card = db.query(AdmitCard).filter(AdmitCard.id == admit_card_id).first()
    if admit_card is None:
        raise HTTPException(status_code=404, detail="Admit card not found")
    
    # Delete file if exists
    if admit_card.download_url:
        file_path = os.path.join(settings.UPLOAD_DIR, os.path.basename(admit_card.download_url))
        if os.path.exists(file_path):
            os.remove(file_path)
    
    db.delete(admit_card)
    db.commit()
    return None

@router.get("/stats/summary", response_model=dict)
def get_admit_card_stats(db: Session = Depends(get_db)):
    total = db.query(AdmitCard).count()
    active = db.query(AdmitCard).filter(AdmitCard.status == "active").count()
    upcoming = db.query(AdmitCard).filter(AdmitCard.exam_date > date.today()).count()
    past = db.query(AdmitCard).filter(AdmitCard.exam_date <= date.today()).count()
    
    return {
        "total": total,
        "active": active,
        "upcoming": upcoming,
        "past": past
    } 