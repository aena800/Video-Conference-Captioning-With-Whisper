import React from 'react';
import JitsiComponent from './components/jitsiComp'; // Adjust the import path as necessary
import AudioRecorderComponent from './components/audioRecorderComp'; // Adjust the path as needed
import CaptionsComponent from './components/captionsComp'; // Make sure to import the CaptionsComponent


function App() {
    return (
        <div className="App">
          <JitsiComponent />
            <AudioRecorderComponent />
            <CaptionsComponent /> {/* Add the CaptionsComponent to display live transcriptions */}
        </div>
    );
}

export default App;
