from app.core.config import Settings
import os
from pathlib import Path

class ProductionSettings(Settings):
    # Override settings for production
    DATABASE_POOL_SIZE: int = 20
    DATABASE_MAX_OVERFLOW: int = 30
    RATE_LIMIT_PER_MINUTE: int = 100
    
    # Production-specific settings
    DEBUG: bool = False
    ENVIRONMENT: str = "production"
    
    # File upload settings
    UPLOAD_DIR: str = "/var/www/rojgaar_yatra/uploads"
    MAX_UPLOAD_SIZE: int = 10 * 1024 * 1024  # 10MB
    
    # Security settings
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 15  # Shorter token lifetime in production
    
    # Logging
    LOG_LEVEL: str = "INFO"
    LOG_FILE: str = "/var/log/rojgaar_yatra/app.log"
    
    class Config:
        env_file = ".env.production"
        case_sensitive = True

# Create upload directory if it doesn't exist
upload_dir = Path(ProductionSettings().UPLOAD_DIR)
upload_dir.mkdir(parents=True, exist_ok=True) 