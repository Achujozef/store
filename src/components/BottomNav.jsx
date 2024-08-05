import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span className="text-xs text-gray-600">Items: 3</span>
        <span className="text-xs text-gray-600">Total: ₹1200</span>
      </div>
      <button className="bg-green-600 text-white py-1 px-3 rounded-lg flex items-center space-x-1">
        <FaShoppingCart />
        <span>Go to Cart</span>
      </button>
    </div>
  );
};

export default BottomNav;
