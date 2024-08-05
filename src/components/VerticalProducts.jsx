import React, { useState } from 'react';
import { featuredProducts } from '../dummyData';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { ClasicOfferIcon } from './OfferIcon'; // Ensure this is the correct import

const VerticalProducts = () => {
  const [cart, setCart] = useState({}); 

  const handleAddClick = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1
    }));
  };

  const handleRemoveClick = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: Math.max((prevCart[id] || 0) - 1, 0)
    }));
  };

  return (
    <div className="py-4 px-4">
      <div className="grid grid-cols-2 gap-4">
        {featuredProducts.map(product => (
          <div key={product.id} className="relative flex flex-col items-center min-w-max mx-1 rounded-lg p-2  border-gray-300">
            {/* Offer Icon */}
            {product.offer > 0 && (
              <div className="absolute -top-4 -left-4 w-20 h-20 flex items-center justify-center">
                <ClasicOfferIcon offer={product.offer} />
              </div>
            )}

            <img src={product.image} alt={product.name} className="w-full h-24 object-cover rounded-lg" />
            <h3 className="mt-2 text-base font-semibold">{product.name}</h3>
            <p className="text-xs text-gray-600">{product.brand}</p>
            <p className="text-xs text-gray-600">{product.quantity}</p>
            <div className="flex justify-between items-end w-full mt-1">
              <div>
                <p className="text-xs text-green-600">₹{product.actualPrice}</p>
                <p className="text-xs text-gray-500 line-through">₹{product.mrp}</p>
              </div>
              <div className="absolute bottom-2 right-2 flex items-center space-x-2">
                {cart[product.id] > 0 ? (
                  <div className="flex items-center border rounded-lg text-xs">
                    <button onClick={() => handleRemoveClick(product.id)} className="p-1 text-green-600 hover:bg-gray-200">
                      <FaMinus />
                    </button>
                    <span className="px-2">{cart[product.id]}</span>
                    <button onClick={() => handleAddClick(product.id)} className="p-1 text-green-600 hover:bg-gray-200">
                      <FaPlus />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleAddClick(product.id)}
                    className="bg-white-500 text-lime-700 py-0.5 px-2 rounded-lg text-xs hover:bg-blue-600 font-bold border border-lime-700"
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalProducts;
