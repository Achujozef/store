// import React from 'react';

// const TopNav = () => (
//   <div className="bg-gradient-to-r from-pink-400 to-green-400 text-white p-2 flex justify-between items-center rounded-b-2xl shadow-md relative z-10">
//     <div>Delivery in 15 mins</div>
//     <img src="/images/logo.png" alt="Logo" className="h-8" />
//   </div>
// );

// export default TopNav;

import React from 'react';
import SearchBar from './SearchBar'; // Ensure SearchBar component is imported

const TopNav = () => (
  <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white p-2 flex flex-col items-center rounded-b-[0rem] rounded-bl-[0rem] shadow-md relative">
    <div className="flex items-center w-full mb-2">
      <div className="text-sm mr-4">Delivery in 15 mins</div>
      <div className="text-lg font-bold flex-1 text-center">Surnani Mart </div> {/* Add your supermarket name here */}
      <img src="/images/logo.png" alt="Logo" className="h-8" />
    </div>
    <div className="w-full max-w-4xl relative z-10">

    </div>
  </div>
);

export default TopNav;


