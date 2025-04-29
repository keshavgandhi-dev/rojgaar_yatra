from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter()

class UserBase(BaseModel):
    email: str
    full_name: Optional[str] = None
    phone_number: Optional[str] = None

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    is_active: bool

    class Config:
        from_attributes = True

@router.post("/", response_model=User)
async def create_user(user: UserCreate):
    # TODO: Implement user creation
    return user

@router.get("/me", response_model=User)
async def read_users_me():
    # TODO: Implement get current user
    return {"email": "test@example.com", "id": 1, "is_active": True} 