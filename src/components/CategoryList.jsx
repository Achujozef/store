import React from 'react';
import { categories } from '../dummyData';

const splitArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const CategoryList = () => {
  const chunkSize = Math.ceil(categories.length / 2);
  const [row1, row2] = splitArray(categories, chunkSize);

  return (
    <div className="py-4 px-4">
      <div className="flex overflow-x-auto space-x-2 mb-2 scrollbar-hidden">
        {row1.map(category => (
          <div key={category.id} className="flex flex-col items-center min-w-max mx-1 shadow-sm rounded-2xl">
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-20 h-20 rounded-2xl" 
            />
            <span className="mt-2 text-center text-sm">{category.name}</span>
          </div>
        ))}
      </div>
      <div className="flex overflow-x-auto space-x-2 scrollbar-hidden">
        {row2.map(category => (
          <div key={category.id} className="flex flex-col items-center min-w-max mx-1 shadow-sm rounded-2xl">
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-20 h-20 rounded-2xl" 
            />
            <span className="mt-2 text-center text-sm">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
