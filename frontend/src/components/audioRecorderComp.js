// AudioRecorderComponent.js
import React from 'react';
import { useRecorder } from './useRecorder'; // Adjust the path as needed

const AudioRecorderComponent = () => {
    const { isRecording, startRecording, stopRecording, sendAudioToServer } = useRecorder();

    return (
        <div>
            <button onClick={startRecording} disabled={isRecording}>Start Recording</button>
            <button onClick={stopRecording} disabled={!isRecording}>Stop Recording</button>
            <button onClick={sendAudioToServer} disabled={isRecording}>Send to Server</button>
        </div>
    );
};

export default AudioRecorderComponent;
