import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const FeedbackForm = () => {
  const [feedbackOptions, setFeedbackOptions] = useState({
    productQuality: false,
    packaging: false,
    pricing: false,
    delivery: false,
    customerService: false,
    other: false,
  });
  const [emojiRating, setEmojiRating] = useState(3);
  const [additionalFeedback, setAdditionalFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleOptionChange = (option) => {
    setFeedbackOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  const handleEmojiRating = (rating) => {
    setEmojiRating(rating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process feedback submission logic here
    setSubmitted(true);
  };

  const isSubmitDisabled = !Object.values(feedbackOptions).includes(true);

  const handleBackClick = () => {
    // Navigate back in history if possible, otherwise go to the home page
    if (location.state?.from) {
      navigate(location.state.from); // Navigate to the previous location
    } else {
      navigate('/'); // Default to the home page
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* <div className="relative p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md"> */}
        {submitted ? (
         <div className="text-center bg-white p-6 rounded-lg shadow-md">
         <img src='./done.svg' alt="Done" className="mx-auto mb-4 w-16 h-16" />
         <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
         <p>Your feedback has been received. We appreciate your input and will use it to improve our services.</p>
         <button
              onClick={() => navigate('/')}
              className="w-full bg-green-500 text-white mt-4 px-6 py-3 shadow border rounded-lg"
            >
              Back to Home
            </button>
       </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
           <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-200 to-blue-400">
                Share Your Feedback
              </h2>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600 text-3xl"
                onClick={handleBackClick}
              >
                &times;
              </button>            </div>
            <hr className="border-gray-300 mb-4" />


            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-500">What would you like to give feedback on? (Select all that apply)</h3>
              <div className="space-y-2 text-gray-500">
                {Object.keys(feedbackOptions).map((option) => (
                  <div key={option}>
                    <input
                      type="checkbox"
                      id={option}
                      checked={feedbackOptions[option]}
                      onChange={() => handleOptionChange(option)}
                    />
                    <label htmlFor={option} className="ml-2 capitalize ">{option.replace(/([A-Z])/g, ' $1')}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-500">How was your overall experience?</h3>
              <div className="flex space-x-4">
                {['angry', 'sad', 'neutral', 'happy', 'very happy'].map((emoji, index) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => handleEmojiRating(index + 1)}
                    className={`text-2xl transition-shadow duration-300 p-1.5 rounded-full ${
                      emojiRating === index + 1 ? 'shadow-lg shadow-green-300' : 'text-gray-400'
                    }`}
                  >
                    {emoji === 'angry' ? '😠' : emoji === 'sad' ? '😢' : emoji === 'neutral' ? '😐' : emoji === 'happy' ? '😊' : '😁'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-gray-500">Tell us More</h3>
              <textarea
                value={additionalFeedback}
                onChange={(e) => setAdditionalFeedback(e.target.value)}
                rows="4"
                className="w-full p-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Additional feedback (optional)"
              />
            </div>
            
            <button
              type="submit"
              className={`w-full bg-green-500 text-white px-6 py-3 shadow border rounded-lg ${isSubmitDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-400'}`}
              disabled={isSubmitDisabled}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    // </div>
  );
};

export default FeedbackForm;
