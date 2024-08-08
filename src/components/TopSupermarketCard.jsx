import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopSupermarketCard = ({ supermarket }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(supermarket.favorite);

  const handleCardClick = () => {
    navigate(`/supermarket/${supermarket.id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevent card click event
    setIsFavorite(!isFavorite);
  };

  return (
    <div 
      className="relative p-0 rounded-lg mb-4 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative">
        <img 
          src={supermarket.profileImage} 
          alt={supermarket.name} 
          className="w-32 h-32 object-cover rounded-lg" 
        />
        {supermarket.offer && (
          <div className="absolute bottom-0 left-0 w-32 h-1/4 bg-gradient-to-t from-green-800 to-transparent rounded-b-lg"></div>
        )}
        <div 
          className="absolute top-0 right-2 p-1 cursor-pointer"
          onClick={handleFavoriteClick}
        >
          <i 
            className={`fas fa-heart ${isFavorite ? 'text-red-500' : 'text-white'} text-xl`} 
            style={{ width: '20px', height: '20px', display: 'inline-block' }}
          ></i>
        </div>
        {supermarket.offer && (
          <div className="absolute bottom-2 left-2 text-white font-bold text-lg">
            {supermarket.offer}
          </div>
        )}
      </div>
      <div className="mt-2">
        <h3 className="text-lg font-semibold truncate">{supermarket.name}</h3>
        <div className="flex items-center font-semibold space-x-2 text-sm">
          <span className="flex items-center space-x-0.5 text-xs">
            <i className="fas fa-star text-yellow-500 text-xs"></i>
            <span>{supermarket.rating}</span>
          </span>
          <span>{supermarket.deliveryTime}</span>
        </div>
        <div className="mt-1 text-xs text-gray-600 truncate">
          {supermarket.categories.join(', ')}
        </div>
      </div>
    </div>
  );
};

export default TopSupermarketCard;
