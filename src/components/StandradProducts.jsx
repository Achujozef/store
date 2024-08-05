import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { TrendingOfferIcon } from './OfferIcon'; // Importing TrendingOfferIcon component
import { featuredProducts } from '../dummyData';

const StandradProducts = () => {
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

  // Divide products into two arrays
  const midIndex = Math.ceil(featuredProducts.length / 2);
  const firstRowProducts = featuredProducts.slice(0, midIndex);
  const secondRowProducts = featuredProducts.slice(midIndex);

  return (
    <div className="py-4 px-4">
            <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Standrad Products</h2>
        <button className="text-blue-600 hover:underline">View All</button>
      </div>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hidden">
        <div className="flex flex-col">
          {/* First Row */}
          <div className="flex space-x-2 mb-4">
            {firstRowProducts.map(product => (
              <div key={product.id} className="relative flex flex-col items-center min-w-max mx-1  rounded-lg p-2 overflow-hidden">
                {/* Offer Icon */}
                {product.offer > 0 && (
                  <div className="absolute -top-4 -left-4 w-20 h-20 flex items-center justify-center">
                    <TrendingOfferIcon offer={product.offer} />
                  </div>
                )}

                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg" />
                <h3 className="mt-2 text-base">{product.name}</h3>
                <p className="text-xs text-gray-600">{product.brand}</p>
                <p className="text-xs text-gray-600">{product.quantity}</p>
                <div className="flex justify-between items-end w-full mt-1">
                  <div>
                    <p className="text-xs text-green-600">₹{product.actualPrice}</p>
                    <p className="text-xs text-gray-500 line-through">₹{product.mrp}</p>
                  </div>
                </div>

                {/* Add and Remove Buttons */}
                <div className="absolute top-2 right-2 flex flex-col items-center space-y-1">
                  {cart[product.id] > 0 ? (
                    <div className="flex items-center space-x-1 bg-white border border-green-600 rounded-lg shadow-md p-0.5">
                    <button onClick={() => handleRemoveClick(product.id)} className="flex-1 p-1.5 text-green-600 hover:bg-gray-100">
                        <FaMinus />
                    </button>
                    <span className="px-1 py-1.5 bg-white-600 text-green rounded-lg text-xs">{cart[product.id]}</span>
                    <button onClick={() => handleAddClick(product.id)} className="flex-1 p-1.5 text-green-600 hover:bg-gray-100">
                        <FaPlus />
                    </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAddClick(product.id)}
                      className="p-2 bg-white text-green-600 border border-green-600 rounded-lg shadow-md flex items-center justify-center"
                    >
                      <FaPlus />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex space-x-2">
            {secondRowProducts.map(product => (
              <div key={product.id} className="relative flex flex-col items-center min-w-max mx-1  rounded-lg p-2  overflow-hidden">
                {/* Offer Icon */}
                {product.offer > 0 && (
                  <div className="absolute -top-4 -left-4 w-20 h-20 flex items-center justify-center">
                    <TrendingOfferIcon offer={product.offer} />
                  </div>
                )}

                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg" />
                <h3 className="mt-2 text-base">{product.name}</h3>
                <p className="text-xs text-gray-600">{product.brand}</p>
                <p className="text-xs text-gray-600">{product.quantity}</p>
                <div className="flex justify-between items-end w-full mt-1">
                  <div>
                    <p className="text-xs text-green-600">₹{product.actualPrice}</p>
                    <p className="text-xs text-gray-500 line-through">₹{product.mrp}</p>
                  </div>
                </div>

                {/* Add and Remove Buttons */}
                <div className="absolute top-2 right-2 flex flex-col items-center space-y-1">
                  {cart[product.id] > 0 ? (
                    <div className="flex items-center space-x-1 bg-white border border-green-600 rounded-lg shadow-md p-0.5">
                    <button onClick={() => handleRemoveClick(product.id)} className="flex-1 p-1.5 text-green-600 hover:bg-gray-100">
                        <FaMinus />
                    </button>
                    <span className="px-1 py-1.5 bg-white-600 text-green rounded-lg text-xs">{cart[product.id]}</span>
                    <button onClick={() => handleAddClick(product.id)} className="flex-1 p-1.5 text-green-600 hover:bg-gray-100">
                        <FaPlus />
                    </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAddClick(product.id)}
                      className="p-2 bg-white text-green-600 border border-green-600 rounded-lg shadow-md flex items-center justify-center"
                    >
                      <FaPlus />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandradProducts;
