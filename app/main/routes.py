from flask import render_template, request, current_app
from app.main import main_bp
from app.main.forms import ContactForm
from app.extensions import limiter
from app.data import portfolio_data

@main_bp.route("/")
def index():
    form = ContactForm()
    return render_template("index.html", form=form, data=portfolio_data)

@main_bp.route("/contact", methods=["POST"])
@limiter.limit("5 per hour")
def contact():
    form = ContactForm()
    if form.validate_on_submit():
        # TODO: Implement email sending logic here
        return "Message sent successfully!", 200
    
    return render_template("index.html", form=form), 400

@main_bp.route("/robots.txt")
def robots():
    return current_app.send_static_file("robots.txt")

@main_bp.route("/sitemap.xml")
def sitemap():
    return current_app.send_static_file("sitemap.xml")
