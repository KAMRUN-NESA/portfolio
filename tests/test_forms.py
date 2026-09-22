import pytest
from app import create_app
from app.main.forms import ContactForm

@pytest.fixture
def app():
    app = create_app("testing")
    yield app

def test_contact_form_validation(app):
    with app.test_request_context():
        form = ContactForm(data={"name": "", "email": "invalid", "message": "Hi"})
        assert not form.validate()
        assert "name" in form.errors
        assert "email" in form.errors
