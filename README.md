# Rojgaar Yatra - Job Portal

A comprehensive job portal platform built with Next.js and FastAPI.

## Features

- User Authentication (Email/Phone & Google OAuth)
- Job Search and Applications
- User Dashboard
- Admin Panel
- Responsive Design (Mobile & Desktop)
- Real-time Notifications

## Tech Stack

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn UI
- React Query
- Zustand

### Backend
- FastAPI
- PostgreSQL
- SQLAlchemy
- JWT Authentication
- Google OAuth

## Setup Instructions

### Prerequisites
- Node.js 18+
- Python 3.11+
- PostgreSQL
- pnpm

### Backend Setup

1. Create and activate virtual environment:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Initialize database:
```bash
alembic upgrade head
```

5. Start the server:
```bash
uvicorn app.main:app --reload
```

### Frontend Setup

1. Install dependencies:
```bash
cd frontend
pnpm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

3. Start the development server:
```bash
pnpm dev
```

## Development

### Backend Development
- API documentation available at `/docs`
- Follow PEP 8 style guide
- Use type hints
- Write tests for new features

### Frontend Development
- Follow component-based architecture
- Use TypeScript for type safety
- Implement responsive design
- Follow accessibility guidelines

## Deployment

### Backend
1. Set up production environment variables
2. Use gunicorn for production server
3. Set up proper CORS configuration
4. Configure SSL/TLS

### Frontend
1. Build the application:
```bash
pnpm build
```
2. Deploy to your preferred hosting service

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License. 