# backend/app/__init__.py
from flask import Flask
# import sys
# sys.path.append('D:/CloudClinic_internship/jitsi-whisper-app/backend/venv/Lib/site-packages')
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    from .routes import register_routes
    register_routes(app)
    return app
