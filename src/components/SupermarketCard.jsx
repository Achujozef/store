import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SupermarketCard = ({ supermarket, onHide, onAddToFavorite }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(supermarket.favorite);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    navigate(`/supermarket/${supermarket.id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevent card click event
    setIsFavorite(!isFavorite);
    onAddToFavorite(supermarket.id, !isFavorite); // Call parent callback
  };

  const handleMoreOptionsClick = (e) => {
    e.stopPropagation(); // Prevent card click event
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleHideSupermarket = () => {
    onHide(supermarket.id); // Call parent callback
    handleCloseModal();
  };

  const handleAddToFavorite = () => {
    handleFavoriteClick(); // Toggle favorite status
    handleCloseModal();
  };

  return (
    <div 
      className="relative flex rounded-lg mb-4 cursor-pointer overflow-hidden"
      onClick={handleCardClick}
    >
      <div className="relative flex-shrink-0">
        <img 
          src={supermarket.profileImage} 
          alt={supermarket.name} 
          className="w-32 h-32 object-cover rounded-l-lg" 
        />
        <div 
          className="absolute top-2 right-2 p-1 cursor-pointer"
          onClick={handleFavoriteClick}
        >
          <i 
            className={`fas fa-heart ${isFavorite ? 'text-red-500' : 'text-white'} text-xl`} 
            style={{ width: '20px', height: '20px', display: 'inline-block' }}
          ></i>
        </div>
      </div>
      <div className="flex-1 p-4">
        <div className="relative">
          {supermarket.offer && (
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-green-800 to-transparent rounded-b-lg"></div>
          )}
          {supermarket.offer && (
            <div className="absolute bottom-2 left-2 text-white font-bold text-lg">
              {supermarket.offer}
            </div>
          )}
        </div>
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
      {/* Three-Dot Icon */}
      <div 
        className="absolute top-2 right-2 p-2 cursor-pointer bg-black rounded-full"
        onClick={handleMoreOptionsClick}
      >
        <i className="fas fa-ellipsis-v text-white text-xl"></i>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-80">
            <h3 className="text-lg font-semibold mb-4">Options</h3>
            <button
              className="block w-full text-left p-2 text-red-500 hover:bg-gray-200 rounded"
              onClick={handleHideSupermarket}
            >
              Hide Supermarket
            </button>
            <button
              className="block w-full text-left p-2 text-green-500 hover:bg-gray-200 rounded"
              onClick={handleAddToFavorite}
            >
              {isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
            </button>
            <button
              className="block w-full text-left p-2 text-gray-500 hover:bg-gray-200 rounded mt-4"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupermarketCard;
