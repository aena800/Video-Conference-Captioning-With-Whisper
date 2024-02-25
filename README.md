# REAL-TIME AUDIO TRANSCRIPTION WITH OPENAI'S WHISPER DURING A VIDEO CONFERENCE 

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Objective:
The goal is to enhance a React-based application by integrating Jitsi Meet for video conferencing and implementing an audio recording feature that sends audio data to a Flask backend for real-time transcription using the Whisper model.

### Components and Functionality Developed:

1. **Jitsi Meet Integration:**
   - A React component was created to embed a Jitsi Meet video conference within the application.
   - The component dynamically loads the Jitsi Meet External API script and initializes a video conference with specified options, including room name and UI configurations.
   - Lifecycle management is implemented to ensure proper cleanup of the Jitsi Meet API instance upon component unmounting.

2. **Audio Recording Hook:**
   - Developed a custom React hook to manage audio recording functionality within the application.

3. **Audio Data Transmission:**
   - The Recorder hook includes functionality to periodically send recorded audio data to a Flask backend for transcription.
   - Sending of Audio data is triggered by a button
     
4. **Backend Transcription Service:**
   - A Flask route is set up to handle POST requests containing audio data.
   - The route uses the Hugging Face `transformers` library to access the Whisper model for audio transcription.
   - Received audio data is temporarily saved, processed for transcription, and the transcription results are returned in the response.


### Challenges and Solutions:
- **Real-time Transcription**: Achieving a semblance of real-time transcription by sending audio chunks every 2 seconds while ensuring efficient and accurate processing by the backend.
- **Component Communication**: Managing the separation of concerns between the Jitsi Meet integration and the audio recording/transcription functionality while considering potential future needs for direct interaction (e.g., starting/stopping recording based on Jitsi's mute/unmute events).

### Next Steps:
- [ ] **Improving Real-time Transcription**: Implementing a mechanism to display transcription results in real-time to the user as they are received from the backend.
- [ ] **Enhancing User Interface**: Further development on the UI to make it more intuitive and user-friendly, especially regarding the recording and transcription status.
- [ ] **Components Upgrading**: Upgrading to jitsi-sdk instead of the demo version
- [ ] **Jitsi Mic x Web Recorder**: Removing the independency 

