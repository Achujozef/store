import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { TrendingOfferIcon } from './OfferIcon'; // Importing TrendingOfferIcon component
import { featuredProducts } from '../dummyData';

const TrendingProducts = () => {
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
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hidden">
        <div className="flex flex-col">
          {/* First Row */}
          <div className="flex space-x-2 mb-4">
            {firstRowProducts.map(product => (
              <div key={product.id} className="relative flex flex-col items-center min-w-max mx-1  rounded-lg p-2  overflow-hidden">
                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg" />
                {product.offer > 0 && (
                  <div className="absolute -top-4 -left-4 w-20 h-20 flex items-center justify-center">
                    <TrendingOfferIcon offer={product.offer} />
                  </div>
                )}
                <h3 className="mt-2 text-base">{product.name}</h3>
                <p className="text-xs text-gray-600">{product.brand}</p>
                <p className="text-xs text-gray-600">{product.quantity}</p>
                <div className="flex justify-between items-end w-full mt-1">
                  <div>
                    <p className="text-xs text-green-600">₹{product.actualPrice}</p>
                    <p className="text-xs text-gray-500 line-through">₹{product.mrp}</p>
                  </div>
                  <div className="absolute top-2 right-2 flex items-center space-x-2">
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

          {/* Second Row */}
          <div className="flex space-x-2">
            {secondRowProducts.map(product => (
              <div key={product.id} className="relative flex flex-col items-center min-w-max mx-1  rounded-lg p-2  overflow-hidden">
                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg" />
                {product.offer > 0 && (
                  <div className="absolute -top-4 -left-4 w-20 h-20 flex items-center justify-center">
                    <TrendingOfferIcon offer={product.offer} />
                  </div>
                )}
                <h3 className="mt-2 text-base">{product.name}</h3>
                <p className="text-xs text-gray-600">{product.brand}</p>
                <p className="text-xs text-gray-600">{product.quantity}</p>
                <div className="flex justify-between items-end w-full mt-1">
                  <div>
                    <p className="text-xs text-green-600">₹{product.actualPrice}</p>
                    <p className="text-xs text-gray-500 line-through">₹{product.mrp}</p>
                  </div>
                  <div className="absolute top-2 right-2 flex items-center space-x-2">
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
      </div>
    </div>
  );
};

export default TrendingProducts;
