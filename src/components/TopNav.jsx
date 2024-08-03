// import React from 'react';

// const TopNav = () => (
//   <div className="bg-gradient-to-r from-pink-400 to-green-400 text-white p-2 flex justify-between items-center rounded-b-2xl shadow-md relative z-10">
//     <div>Delivery in 15 mins</div>
//     <img src="/images/logo.png" alt="Logo" className="h-8" />
//   </div>
// );

// export default TopNav;



import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar'; // Ensure SearchBar component is imported

const TopNav = () => {
  const [gradient, setGradient] = useState('from-blue-400 to-green-400');

  useEffect(() => {
    const gradients = [
      'from-blue-400 to-green-400',
      'from-purple-400 to-pink-400',
      'from-red-400 to-yellow-400',
      'from-teal-400 to-blue-500'
    ];
    
    let currentGradientIndex = 0;

    const changeGradient = () => {
      currentGradientIndex = (currentGradientIndex + 1) % gradients.length;
      setGradient(gradients[currentGradientIndex]);
    };

    const intervalId = setInterval(changeGradient, 300); // Change every 5 minutes (300000 milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`bg-gradient-to-r ${gradient} text-white p-2 flex flex-col items-center rounded-b-[2rem] rounded-bl-[5rem] shadow-md relative transition-all duration-1500`}
    >
      <div className="flex items-center w-full mb-2">
        <div className="text-sm mr-4">Delivery in 15 mins</div>
        <div className="text-lg font-bold flex-1 text-center">Surnani Mart</div> {/* Add your supermarket name here */}
        <img src="/images/logo.png" alt="Logo" className="h-8" />
      </div>
      <div className="w-full max-w-4xl relative z-10">
        <SearchBar />
      </div>
    </div>
  );
};

export default TopNav;


