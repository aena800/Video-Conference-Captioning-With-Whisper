# backend/app/routes.py
from flask import request, jsonify
import tempfile
from transformers import pipeline

def register_routes(app):
    # @app.route('/')
    # def home():
    #     return "hmmm, App is working"
    
    @app.route('/transcribe', methods=['POST'])
    def transcribe_audio():
        print("Request method:", request.method)
        if 'audio' not in request.files:
            return jsonify({"error": "No audio file"}), 400
        
        audio_file = request.files['audio']
        # Save the file temporarily
        temp = tempfile.NamedTemporaryFile(delete=False)
        audio_file.save(temp.name)
        temp.close()

        pipe = pipeline("automatic-speech-recognition", model="openai/whisper-small")
        transcription = pipe(temp.name)
        
        return jsonify(transcription)
