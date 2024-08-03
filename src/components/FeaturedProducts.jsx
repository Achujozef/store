import React from 'react';
import { featuredProducts } from '../dummyData';

const FeaturedProducts = () => (
  <div className="grid grid-cols-2 gap-4 p-4">
    {featuredProducts.map(product => (
      <div key={product.id} className="border rounded-lg p-4 flex flex-col items-center">
        <img src={product.image} alt={product.name} className="w-32 h-32 object-cover" />
        <h3 className="mt-2 text-lg">{product.name}</h3>
        <p className="text-xl text-green-600">{product.price}</p>
        <p className="text-yellow-500">{'⭐'.repeat(Math.round(product.rating))}</p>
      </div>
    ))}
  </div>
);

export default FeaturedProducts;
