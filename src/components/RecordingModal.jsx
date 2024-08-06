import React, { useState, useEffect } from 'react';

const RecordingModal = ({ onClose, onStop, error }) => {
  const [timer, setTimer] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Hello, I'm listening...",
    "Speak now...",
    "Recording in progress...",
    "Keep talking...",
    "Almost done..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % messages.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg text-center max-w-xs w-full">
        <div className="mb-4">
          {error ? (
            <div className="text-red-500 mb-2">Error: {error}</div>
          ) : (
            <>
              <div className="mb-4">
                <div className="text-lg mb-2">{messages[messageIndex]}</div>
                <video 
                  src="/microphone-recording.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  className="w-32 h-32 object-cover mx-auto"
                />
              </div>
              <div className="text-lg">{timer}s</div>
            </>
          )}
        </div>
        <button
          onClick={() => {
            onStop();
            onClose();
          }}
          className="bg-white text-gray-600 px-3 py-1.5 rounded-lg border"
        >
          Stop Recording
        </button>
      </div>
    </div>
  );
};

export default RecordingModal;
