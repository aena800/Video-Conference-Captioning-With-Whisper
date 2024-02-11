// useRecorder.js
import { useState, useEffect } from 'react';

export const useRecorder = () => {
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioData, setAudioData] = useState([]);
    const [isRecording, setIsRecording] = useState(false);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const recorder = new MediaRecorder(stream);
                recorder.ondataavailable = event => {
                    if (event.data.size > 0) {
                        setAudioData(currentData => [...currentData, event.data]);
                    }
                };
                setMediaRecorder(recorder);
            });
    }, []);

    const startRecording = () => {
        if (mediaRecorder && mediaRecorder.state === 'inactive') {
            mediaRecorder.start(1000);
            setIsRecording(true);
        }
    };

    const stopRecording = () => {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
            setIsRecording(false);
        }
    };

    const sendAudioToServer = async () => {
        const audioBlob = new Blob(audioData, { type: 'audio/wav' });
        const formData = new FormData();
        formData.append('audio', audioBlob);

        try {
            const response = await fetch('http://localhost:5000/transcribe', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log(data);
            setAudioData([]);
        } catch (error) {
            console.error('Error sending audio to server:', error);
        }
    };

    return { isRecording, startRecording, stopRecording, sendAudioToServer };
};
