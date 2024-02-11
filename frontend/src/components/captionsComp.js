// CaptionsComponent.js
import React, { useEffect, useState } from 'react';

const CaptionsComponent = () => {
    const [captions, setCaptions] = useState([]);

    useEffect(() => {
        // Example WebSocket connection setup
        const ws = new WebSocket('ws://localhost:5000/ws/transcribe');
        
        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type === 'transcription') {
                setCaptions(prevCaptions => [...prevCaptions, message.text]);
            }
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <div className="captions">
            {captions.map((caption, index) => (
                <p key={index}>{caption}</p>
            ))}
        </div>
    );
};

export default CaptionsComponent;
