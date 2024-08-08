import React from 'react';
import { useNavigate } from 'react-router-dom';

const TopNav = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white p-2 flex flex-col items-center rounded-b-[0rem] rounded-bl-[0rem] shadow-md relative">
      <div className="flex items-center w-full mb-2">
        <button onClick={handleBackClick} className="mr-4 text-sm">
          <i className="fas fa-arrow-left"></i> 
        </button>
        <div className="text-sm mr-4">Delivery in 15 mins</div>
        <div className="text-lg font-bold flex-1 text-center">Surnani Mart</div>
        <img src="/images/logo.png" alt="Logo" className="h-8" />
      </div>
      <div className="w-full max-w-4xl relative z-10">
        {/* SearchBar could be added here if needed */}
      </div>
    </div>
  );
};

export default TopNav;
