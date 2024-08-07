// BrandCard.js
import React from 'react';

const BrandCard = ({ name, image }) => (
  <div className="flex flex-col items-center m-2">
    <div className="w-24 h-24 rounded-full overflow-hidden ">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <p className="mt-2 text-sm text-center">{name}</p>
  </div>
);

export default BrandCard;
