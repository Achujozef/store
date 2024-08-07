// PopularBrands.js
import React from 'react';
import BrandCard from './BrandCard';
import { popularBrands } from '../dummyData';

const PopularBrands = () => {
  const halfIndex = Math.ceil(popularBrands.length / 2);
  const firstRowBrands = popularBrands.slice(0, halfIndex);
  const secondRowBrands = popularBrands.slice(halfIndex);

  return (
    <div className="relative py-4 px-4">
    <h2 className="text-xl font-semibold mb-0">Popular Brands</h2>
    <button className="absolute top-4 right-4 text-blue-600 hover:underline">
      View All
    </button>
    <div className="overflow-x-scroll scrollbar-hidden mt-0">
      <div className="flex flex-row space-x-2 mb-1">
        {firstRowBrands.map((brand) => (
          <BrandCard key={brand.id} name={brand.name} image={brand.image} />
        ))}
      </div>
      <div className="flex flex-row space-x-2 mb-1">
        {secondRowBrands.map((brand) => (
          <BrandCard key={brand.id} name={brand.name} image={brand.image} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default PopularBrands;
