// SupermarketList.js

import React from 'react';
import SupermarketCard from './SupermarketCard';

const SupermarketList = ({ supermarkets }) => (
  <div className="space-y-4">
    {supermarkets.map((supermarket) => (
      <SupermarketCard key={supermarket.id} supermarket={supermarket} />
    ))}
  </div>
);

export default SupermarketList;
