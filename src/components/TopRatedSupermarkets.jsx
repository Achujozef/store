import React from 'react';
import TopSupermarketCard from './TopSupermarketCard';

const TopRatedSupermarkets = ({ supermarkets }) => (
  <div className="overflow-x-auto flex py-4 scrollbar-hidden space-x-4">
    {supermarkets.map((supermarket) => (
      <div key={supermarket.id} className="flex-shrink-0 w-32">
        <TopSupermarketCard supermarket={supermarket} />
      </div>
    ))}
  </div>
);

export default TopRatedSupermarkets;
