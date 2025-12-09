from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.auth import router as auth_router

app = FastAPI(title="OpenSuite Learning API")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(auth_router)

@app.get("/")
def root():
    return {"status": "OK"}

@app.get("/health")
def health():
    return {"status": "healthy"}

