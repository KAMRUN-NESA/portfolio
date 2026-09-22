from flask import Flask, render_template
from app.config import config_by_name
from app.extensions import mail, csrf, limiter
from app.data import portfolio_data
import logging
from logging.handlers import RotatingFileHandler
import os

def create_app(config_name="development"):
    app = Flask(__name__)
    app.config.from_object(config_by_name[config_name])

    # Extensions init
    mail.init_app(app)
    csrf.init_app(app)
    limiter.init_app(app)

    # Global template context — makes `data` available in ALL templates
    @app.context_processor
    def inject_portfolio_data():
        return dict(data=portfolio_data)

    # Blueprints
    from app.main import main_bp
    app.register_blueprint(main_bp)

    # Error handlers
    @app.errorhandler(404)
    def not_found(e):
        return render_template("errors/404.html"), 404

    @app.errorhandler(500)
    def server_error(e):
        app.logger.error(f"Server Error: {e}")
        return render_template("errors/500.html"), 500

    # Production logging
    if not app.debug and not app.testing:
        if not os.path.exists("logs"):
            os.mkdir("logs")
        file_handler = RotatingFileHandler("logs/portfolio.log", maxBytes=10240, backupCount=5)
        file_handler.setFormatter(logging.Formatter(
            "%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]"
        ))
        file_handler.setLevel(logging.INFO)
        app.logger.addHandler(file_handler)
        app.logger.setLevel(logging.INFO)
        app.logger.info("Portfolio startup")

    return app
