import React from 'react';
import CatTopNav from '../components/CatTopNav';
import Subcategory from '../components/Subcategory';
import VerticalProducts from '../components/VerticalProducts';
import BottomNav from '../components/BottomNav';

const CategoryProductPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <CatTopNav />
      <div className="flex flex-1 overflow-hidden">
        {/* Subcategory section */}
        <div className="w-1/6 overflow-y-auto h-full scrollbar-hidden"> {/* Reduced width */}
          <Subcategory />
        </div>
        {/* Product section */}
        <div className="w-5/6 overflow-y-auto h-full scrollbar-hidden"> {/* Adjusted width */}
          <VerticalProducts />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default CategoryProductPage;
