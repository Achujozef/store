// FeedbackSection.js
import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const messages = [
    "Your feedback is vital to us.",
    "Tell us how we can improve.",
    "We value your thoughts and ideas.",
    "Help us make our services better.",
    "Your input helps us grow.",
    "Share your experience with us."
  ];
  
const FeedbackSection = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleRedirect = () => {
    navigate('/feedback-form');
  };

  return (
    <div className="bg-green-800 py-8 px-4 flex items-center justify-between">
    <div className="text-left w-2/3">
      <h2 className="text-2xl text-white font-semibold mb-4">We Value Your Feedback!</h2>
      <p className="mb-4 text-lg text-white">
        {messages[messageIndex]}
      </p>
      <button
        onClick={handleRedirect}
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
      >
        Tell Us
      </button>
    </div>
    <div className="bg-white p-2 rounded-ful shadow-lg flex items-center justify-center">
      <video 
        src="/feedback.mp4" 
        autoPlay 
        loop 
        muted 
        className="w-48 h-48 object-cover mb-4 animation-pulse" 
      />
    </div>
  </div>
  );
};

export default FeedbackSection;
