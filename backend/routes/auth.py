
from fastapi import APIRouter
from pydantic import BaseModel
from services.auth_service import AuthService

router = APIRouter(prefix="/auth", tags=["Auth"])

class LoginRequest(BaseModel):
    email: str
    password: str

class RegisterRequest(BaseModel):
    email: str
    password: str

auth_service = AuthService()

@router.post("/login")
async def login(data: LoginRequest):
    return await auth_service.login(data.email, data.password)

@router.post("/register")
async def register(data: RegisterRequest):
    return await auth_service.register(data.email, data.password)
