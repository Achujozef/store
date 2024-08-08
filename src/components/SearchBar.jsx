import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import RecordingModal from './RecordingModal';

const SearchBar = () => {
  const placeholders = [
    'Search for groceries...',
    'Search for pickles...',
    'Search for spices...',
    'Search for snacks...',
    'Search for dairy products...',
    'Search for fresh fruits...',
    'Search for vegetables...',
    'Search for beverages...',
    'Search for bakery items...',
    'Search for frozen foods...'
  ];

  const [placeholder, setPlaceholder] = useState(placeholders[0]);
  const [isRecording, setIsRecording] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');
  const recognitionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder((prev) => {
        const currentIndex = placeholders.indexOf(prev);
        const nextIndex = (currentIndex + 1) % placeholders.length;
        return placeholders[nextIndex];
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Your browser does not support Speech Recognition');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log('transcript', transcript);
      setSearchText(transcript);
      setIsRecording(false);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
      setError(event.error);
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const handleMicClick = () => {
    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      setError('');
      try {
        recognitionRef.current.start();
        setIsRecording(true);
      } catch (e) {
        console.error('Speech recognition start error', e);
        setError('Failed to start speech recognition. Please try again.');
        setIsRecording(false);
      }
    }
  };

  const handleStopRecording = () => {
    recognitionRef.current.stop();
    setIsRecording(false);
  };

  return (
    <div className="sticky top-4 z-20">
      <div className="flex justify-center mt-4 mb-4 relative">
        <div className="relative w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12">
          <input
            type="text"
            className="w-full py-2 px-4 pl-12 pr-12 rounded-2xl shadow-md border focus:outline-none focus:ring-2 focus:ring-green-100 text-sm placeholder-animated"
            placeholder={placeholder}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <FaMicrophone
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={handleMicClick}
          />
        </div>
        {isRecording && (
          <RecordingModal
            onClose={() => setIsRecording(false)}
            onStop={handleStopRecording}
            error={error}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
