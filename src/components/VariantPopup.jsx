// VariantPopup.js
import React from 'react';

const VariantPopup = ({ variants, onClose, onAddClick }) => {
    const handleAddVariant = (variant) => {
      onAddClick(variant);
      onClose(); // Close the popup after adding
    };
  
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 p-4 shadow-lg z-50">
        <div className="flex flex-col space-y-2">
          {variants.map((variant, index) => (
            <div key={index} className="flex justify-between items-center p-2 border-b border-gray-200">
              <span>{variant.size}</span>
              <span>₹{variant.price}</span>
              <button
                onClick={() => handleAddVariant(variant)}
                className="bg-green-500 text-white py-1 px-2 rounded-lg text-xs"
              >
                Add
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-200 py-2 rounded-lg text-center text-gray-700"
        >
          Close
        </button>
      </div>
    );
  };
  
  export default VariantPopup;