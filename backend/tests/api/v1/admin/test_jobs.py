import pytest
from app.models.job import Job

def test_create_job(client, db_session):
    job_data = {
        "title": "Software Engineer",
        "description": "Looking for a skilled software engineer",
        "company": "Tech Corp",
        "location": "Remote",
        "salary_range": "$80k-$100k",
        "requirements": ["Python", "FastAPI", "PostgreSQL"]
    }
    
    response = client.post("/api/v1/admin/jobs/", json=job_data)
    assert response.status_code == 200
    data = response.json()
    assert data["title"] == job_data["title"]
    assert data["company"] == job_data["company"]
    assert data["location"] == job_data["location"]

def test_get_jobs(client, db_session):
    # Create a test job
    job = Job(
        title="Test Job",
        description="Test Description",
        company="Test Company",
        location="Test Location"
    )
    db_session.add(job)
    db_session.commit()
    
    response = client.get("/api/v1/admin/jobs/")
    assert response.status_code == 200
    data = response.json()
    assert len(data) > 0
    assert data[0]["title"] == "Test Job"

def test_get_job(client, db_session):
    # Create a test job
    job = Job(
        title="Test Job",
        description="Test Description",
        company="Test Company",
        location="Test Location"
    )
    db_session.add(job)
    db_session.commit()
    
    response = client.get(f"/api/v1/admin/jobs/{job.id}")
    assert response.status_code == 200
    data = response.json()
    assert data["title"] == "Test Job"
    assert data["id"] == job.id

def test_update_job(client, db_session):
    # Create a test job
    job = Job(
        title="Test Job",
        description="Test Description",
        company="Test Company",
        location="Test Location"
    )
    db_session.add(job)
    db_session.commit()
    
    update_data = {
        "title": "Updated Job",
        "description": "Updated Description",
        "company": "Updated Company",
        "location": "Updated Location"
    }
    
    response = client.put(f"/api/v1/admin/jobs/{job.id}", json=update_data)
    assert response.status_code == 200
    data = response.json()
    assert data["title"] == "Updated Job"
    assert data["company"] == "Updated Company"

def test_delete_job(client, db_session):
    # Create a test job
    job = Job(
        title="Test Job",
        description="Test Description",
        company="Test Company",
        location="Test Location"
    )
    db_session.add(job)
    db_session.commit()
    
    response = client.delete(f"/api/v1/admin/jobs/{job.id}")
    assert response.status_code == 204
    
    # Verify job is deleted
    response = client.get(f"/api/v1/admin/jobs/{job.id}")
    assert response.status_code == 404 