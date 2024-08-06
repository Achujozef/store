import React, { useState, useEffect } from 'react';
import { FaSearch, FaMicrophone, FaArrowLeft } from 'react-icons/fa';

const CatSearchbar = ({ onClose }) => {
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

  return (
    <div className="flex justify-center mt-4 mb-4 relative z-20">
      <div className="relative w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12">
        <input
          type="text"
          className="w-full py-2 px-4 pl-12 pr-12 rounded-2xl shadow-md border focus:outline-none focus:ring-2 focus:ring-green-100 text-sm placeholder-animated"
          placeholder={placeholder}
        />
        <FaMicrophone className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <button
          onClick={onClose}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <FaArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default CatSearchbar;
