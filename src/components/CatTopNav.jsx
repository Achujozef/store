import React, { useState, useMemo } from 'react';
import { FaArrowLeft, FaSearch, FaShare } from 'react-icons/fa';
import SearchBar from './SearchBar'; // Import the SearchBar component
import { useNavigate, useLocation ,useParams } from 'react-router-dom'; 
import { categories } from '../dummyData'; 

const CatTopNav = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const navigate = useNavigate(); 
  const location = useLocation();
  const { categoryId } = useParams();


  const categoryName = useMemo(() => {
    const category = categories.find(cat => cat.id === parseInt(categoryId));
    return category ? category.name : 'Category Name'; // Default name if not found
  }, [categoryId]);

  const handleSearchClick = () => {
    setIsSearchVisible((prev) => !prev);
  };
  const handleBackClick = () => {
    // Navigate back in history if possible, otherwise go to the home page
    if (location.state?.from) {
      navigate(location.state.from); // Navigate to the previous location
    } else {
      navigate('/'); // Default to the home page
    }
  };



  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this category!',
        text: `Category: ${categoryName}`,
        url: window.location.href, // Share the current URL
      }).then(() => {
        console.log('Thanks for sharing!');
      }).catch((error) => {
        console.error('Something went wrong sharing the content', error);
      });
    } else {
      // Fallback for browsers that do not support Web Share API
      console.log('Web Share API not supported.');
    }
  };


  return (
    <div className="relative">
      <div className="flex justify-between items-center p-4 bg-white shadow-md z-10">
        <div className="flex items-center space-x-2">
          <button onClick={handleBackClick} className="text-gray-600">
            <FaArrowLeft />
          </button>
          <span className="text-lg font-bold">{categoryName}</span>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={handleSearchClick} className="text-gray-600">
            <FaSearch />
          </button>
        <button onClick={handleShareClick} className="text-gray-600">
            <FaShare />
          </button>
        </div>
      </div>
      {isSearchVisible && (
        <div className="absolute top-0 left-0 right-0 z-20">
          <SearchBar />
        </div>
      )}
    </div>
  );
};

export default CatTopNav;
