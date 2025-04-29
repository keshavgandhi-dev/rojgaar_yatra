from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.core.middleware import RateLimitMiddleware, RequestLoggingMiddleware, ErrorHandlingMiddleware
from app.api.v1.admin import jobs, applications, users, admit_cards, documents, results, settings as admin_settings
from app.api.v1.auth import google as auth_google
from app.api.v1.auth.test import router as test_router
import logging
from app.db.session import init_db, get_db
from app.core.admin_setup import create_default_admin

# Configure logging
logging.basicConfig(
    level=settings.LOG_LEVEL,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Backend API for Rojgaar Yatra job portal",
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# Add middleware
app.add_middleware(RateLimitMiddleware)
app.add_middleware(RequestLoggingMiddleware)
app.add_middleware(ErrorHandlingMiddleware)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth_google.router, prefix=f"{settings.API_V1_STR}/auth", tags=["auth"])
app.include_router(test_router, prefix=f"{settings.API_V1_STR}/auth", tags=["auth"])
app.include_router(jobs.router, prefix=f"{settings.API_V1_STR}/admin/jobs", tags=["jobs"])
app.include_router(applications.router, prefix=f"{settings.API_V1_STR}/admin/applications", tags=["applications"])
app.include_router(users.router, prefix=f"{settings.API_V1_STR}/admin/users", tags=["users"])
app.include_router(admit_cards.router, prefix=f"{settings.API_V1_STR}/admin/admit-cards", tags=["admit-cards"])
app.include_router(documents.router, prefix=f"{settings.API_V1_STR}/admin/documents", tags=["documents"])
app.include_router(results.router, prefix=f"{settings.API_V1_STR}/admin/results", tags=["results"])
app.include_router(admin_settings.router, prefix=f"{settings.API_V1_STR}/admin/settings", tags=["settings"])

@app.on_event("startup")
async def startup_event():
    logger.info("Starting up application...")
    init_db()
    
    # Create default admin
    db = next(get_db())
    try:
        create_default_admin(db)
    finally:
        db.close()
    
    logger.info("Application startup complete")

@app.on_event("shutdown")
async def shutdown_event():
    logger.info("Shutting down application...")

@app.get("/")
async def root():
    return {
        "message": "Welcome to Rojgaar Yatra API",
        "version": "1.0.0",
        "docs": "/api/docs"
    } 