import React from 'react';
import { subcategories } from '../dummyData'; // Add your subcategories data

const Subcategory = () => {
  return (
    <div className="p-2">
      {subcategories.map((sub) => (
        <div key={sub.id} className="flex flex-col items-center mb-4">
          <img src={sub.image} alt={sub.name} className="w-12 h-12 object-cover rounded-full mb-1" />
          <span className="text-xs text-gray-500">{sub.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Subcategory;
