import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const VariantPopup = ({ variants, cart, onClose, onAddClick, onRemoveClick }) => {
  const handleAddVariant = (variant) => {
    onAddClick(variant.id);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 p-4 shadow-lg z-50">
      <div className="flex flex-col space-y-2">
        {variants.map((variant, index) => (
          <div key={index} className="flex justify-between items-center p-2 border-b border-gray-200">
            <span>{variant.size}</span>
            <span>₹{variant.price}</span>
            <div className="flex items-center space-x-2">
              {cart[variant.id] > 0 ? (
                <div className="flex items-center border rounded-lg text-xs">
                  <button onClick={() => onRemoveClick(variant.id)} className="p-1 text-green-600 hover:bg-gray-200">
                    <FaMinus />
                  </button>
                  <span className="px-2">{cart[variant.id]}</span>
                  <button onClick={() => onAddClick(variant.id)} className="p-1 text-green-600 hover:bg-gray-200">
                    <FaPlus />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleAddVariant(variant)}
                  className="bg-green-500 text-white py-1 px-2 rounded-lg text-xs"
                >
                  Add
                </button>
              )}
            </div>
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
