import React from 'react';
import { useNavigate } from 'react-router-dom';

const SupermarketCard = ({ supermarket }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/supermarket/${supermarket.id}`);
  };

  return (
    <div 
      className="relative p-4 bg-white rounded-lg shadow-md mb-4 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="absolute top-2 right-2">
        <i className={`fas fa-heart ${supermarket.favorite ? 'text-red-500' : 'text-gray-300'}`}></i>
      </div>
      <img src={supermarket.profileImage} alt={supermarket.name} className="w-full h-32 object-cover rounded-lg mb-2" />
      <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
        {supermarket.offer}
      </div>
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{supermarket.name}</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span className="flex items-center space-x-1">
            <i className="fas fa-star text-yellow-500"></i>
            <span>{supermarket.rating}</span>
          </span>
          <span>{supermarket.deliveryTime}</span>
        </div>
      </div>
    </div>
  );
};

export default SupermarketCard;
