import React from 'react';
import TopSupermarketCard from './TopSupermarketCard';
import SupermarketCard from './SupermarketCard';
const ClosedSupermarket = ({ supermarkets }) => (
  <div className="overflow-x-auto flex py-4 scrollbar-hidden space-x-4">
    {supermarkets.map((supermarket) => (
      <div 
        key={supermarket.id} 
        className="flex-shrink-0 w-32 filter grayscale opacity-50 pointer-events-none"
      >
        {/* <TopSupermarketCard supermarket={supermarket} /> */}
        <SupermarketCard supermarket={supermarket} />

      </div>
    ))}
  </div>
);

export default ClosedSupermarket;
