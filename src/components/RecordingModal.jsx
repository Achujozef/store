import React, { useState, useEffect } from 'react';

const RecordingModal = ({ onClose, onStop, error }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <div className="mb-4">
          {error ? (
            <div className="text-red-500 mb-2">Error: {error}</div>
          ) : (
            <>
              <div className="recording-animation mb-2">Recording...</div>
              <div className="text-lg">{timer}s</div>
            </>
          )}
        </div>
        <button
          onClick={() => {
            onStop();
            onClose();
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Stop Recording
        </button>
      </div>
    </div>
  );
};

export default RecordingModal;
