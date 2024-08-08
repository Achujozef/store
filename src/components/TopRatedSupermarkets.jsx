// TopRatedSupermarkets.js

import React from 'react';
import SupermarketCard from './SupermarketCard';

const TopRatedSupermarkets = ({ supermarkets }) => (
  <div className="overflow-x-auto flex space-x-4 py-4">
    {supermarkets.map((supermarket) => (
      <div key={supermarket.id} className="min-w-[200px]">
        <SupermarketCard supermarket={supermarket} />
      </div>
    ))}
  </div>
);

export default TopRatedSupermarkets;
