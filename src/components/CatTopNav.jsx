import React, { useState } from 'react';
import { FaArrowLeft, FaSearch, FaShare } from 'react-icons/fa';
import SearchBar from './SearchBar'; // Import the SearchBar component

const CatTopNav = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible((prev) => !prev);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center p-4 bg-white shadow-md z-10">
        <div className="flex items-center space-x-2">
          <button className="text-gray-600">
            <FaArrowLeft />
          </button>
          <span className="text-lg font-bold">Category Name</span>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={handleSearchClick} className="text-gray-600">
            <FaSearch />
          </button>
          <button className="text-gray-600">
            <FaShare />
          </button>
        </div>
      </div>
      {isSearchVisible && (
        <div className="absolute top-0 left-0 right-0 z-20">
          <SearchBar />
        </div>
      )}
    </div>
  );
};

export default CatTopNav;
