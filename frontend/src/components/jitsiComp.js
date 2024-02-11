import React, { useRef, useEffect } from 'react';
const JitsiComponent = () => {
  const jitsiContainerRef = useRef(null);
  const apiRef = useRef(null); // Use a ref to persist the Jitsi API instance

  const loadJitsiScript = () => {
    const script = document.createElement('script');
    script.src = 'https://meet.jit.si/external_api.js';
    script.async = true;
    script.onload = () => initJitsi();
    document.body.appendChild(script);
  };

  const initJitsi = () => {
    // Prevent multiple instances by checking if apiRef.current is already set
    if (apiRef.current) {
      return;
    }

    const domain = 'meet.jit.si';
    const options = {
      roomName: 'YourMeetingRoom',
      width: '100%',
      height: 500,
      parentNode: jitsiContainerRef.current,
      interfaceConfigOverwrite: {
        filmStripOnly: false,
        SHOW_JITSI_WATERMARK: false,
      },
      configOverwrite: {
        startWithAudioMuted: true,
      },
    };

    apiRef.current = new window.JitsiMeetExternalAPI(domain, options);
    // Now apiRef.current will persist across renders
  };

  useEffect(() => {
    if (!window.JitsiMeetExternalAPI) {
      loadJitsiScript();
    } else {
      initJitsi();
    }

    // Cleanup function to dispose of the Jitsi Meet API instance when the component unmounts
    return () => {
      if (apiRef.current) {
        apiRef.current.dispose();
        apiRef.current = null; // Reset the ref for cleanup
      }
    };
  }, []);

  return <div ref={jitsiContainerRef} style={{ height: '500px', width: '100%' }} />;
};

export default JitsiComponent;


