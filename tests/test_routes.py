import pytest
from app import create_app

@pytest.fixture
def client():
    app = create_app("testing")
    with app.test_client() as client:
        yield client

def test_home_page_loads(client):
    response = client.get("/")
    assert response.status_code == 200
    assert b"Kamrun Nesa" in response.data

def test_404_page(client):
    response = client.get("/this-page-does-not-exist")
    assert response.status_code == 404

def test_contact_form_missing_fields(client):
    response = client.post("/contact", data={})
    assert response.status_code in (200, 302, 400)
