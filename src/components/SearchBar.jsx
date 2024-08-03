import React from 'react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';

const SearchBar = () => (
  <div className="flex justify-center mt-4 mb-4 relative z-20">
    <div className="relative w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12">
      <input
        type="text"
        className="w-full py-2 px-4 pl-12 pr-12 rounded-2xl shadow-md border focus:outline-none focus:ring-2 focus:ring-green-100 text-sm"
        placeholder="Search for products..."
      />
      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <FaMicrophone className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  </div>
);

export default SearchBar;
