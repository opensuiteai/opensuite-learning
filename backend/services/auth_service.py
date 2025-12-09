
from fastapi import HTTPException
from supabase import create_client
from config import SUPABASE_URL, SUPABASE_KEY

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

class AuthService:

    async def login(self, email: str, password: str):
        try:
            response = supabase.auth.sign_in_with_password({
                "email": email,
                "password": password
            })

            if not response.user:
                raise HTTPException(status_code=400, detail="Invalid credentials")

            return {
                "success": True,
                "user": {
                    "id": response.user.id,
                    "email": response.user.email
                },
                "session": response.session.access_token
            }

        except Exception as e:
            raise HTTPException(status_code=400, detail=f"Login failed: {str(e)}")

    async def register(self, email: str, password: str):
        try:
            response = supabase.auth.sign_up({
                "email": email,
                "password": password
            })

            if not response.user:
                raise HTTPException(status_code=400, detail="Register failed")

            return {
                "success": True,
                "user": {
                    "id": response.user.id,
                    "email": response.user.email
                }
            }

        except Exception as e:
            raise HTTPException(status_code=400, detail=f"Register failed: {str(e)}")
