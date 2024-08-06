// import React, { useState } from 'react';
// import { featuredProducts } from '../dummyData';
// import { FaPlus, FaMinus } from 'react-icons/fa';
// import { ClasicOfferIcon } from './OfferIcon'; // Ensure this is the correct import

// const VerticalProducts = () => {
//   const [cart, setCart] = useState({}); 

//   const handleAddClick = (id) => {
//     setCart((prevCart) => ({
//       ...prevCart,
//       [id]: (prevCart[id] || 0) + 1
//     }));
//   };

//   const handleRemoveClick = (id) => {
//     setCart((prevCart) => ({
//       ...prevCart,
//       [id]: Math.max((prevCart[id] || 0) - 1, 0)
//     }));
//   };

//   return (
//     <div className="py-4 px-4">
//       <div className="grid grid-cols-2 gap-4">
//         {featuredProducts.map(product => (
//           <div key={product.id} className="relative flex flex-col items-center min-w-max mx-1 rounded-lg p-2  border-gray-300">
//             {/* Offer Icon */}
//             {product.offer > 0 && (
//               <div className="absolute -top-4 -left-4 w-20 h-20 flex items-center justify-center">
//                 <ClasicOfferIcon offer={product.offer} />
//               </div>
//             )}

//             <img src={product.image} alt={product.name} className="w-full h-24 object-cover rounded-lg" />
//             <h3 className="mt-2 text-base font-semibold">{product.name}</h3>
//             <p className="text-xs text-gray-600">{product.brand}</p>
//             <p className="text-xs text-gray-600">{product.quantity}</p>
//             <div className="flex justify-between items-end w-full mt-1">
//               <div>
//                 <p className="text-xs text-green-600">₹{product.actualPrice}</p>
//                 <p className="text-xs text-gray-500 line-through">₹{product.mrp}</p>
//               </div>
//               <div className="absolute bottom-2 right-2 flex items-center space-x-2">
//                 {cart[product.id] > 0 ? (
//                   <div className="flex items-center border rounded-lg text-xs">
//                     <button onClick={() => handleRemoveClick(product.id)} className="p-1 text-green-600 hover:bg-gray-200">
//                       <FaMinus />
//                     </button>
//                     <span className="px-2">{cart[product.id]}</span>
//                     <button onClick={() => handleAddClick(product.id)} className="p-1 text-green-600 hover:bg-gray-200">
//                       <FaPlus />
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     onClick={() => handleAddClick(product.id)}
//                     className="bg-white-500 text-lime-700 py-0.5 px-2 rounded-lg text-xs hover:bg-blue-600 font-bold border border-lime-700"
//                   >
//                     Add
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VerticalProducts;


import React, { useState } from 'react';
import { featuredProducts } from '../dummyData';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { ClasicOfferIcon } from './OfferIcon'; // Ensure this is the correct import

const VerticalProducts = () => {
  const [cart, setCart] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null); // State to manage selected product for variants
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleAddClick = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const handleRemoveClick = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: Math.max((prevCart[id] || 0) - 1, 0),
    }));
  };

  const handleSelectClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleVariantAddClick = (variantId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [variantId]: (prevCart[variantId] || 0) + 1,
    }));
  };

  const handleVariantRemoveClick = (variantId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [variantId]: Math.max((prevCart[variantId] || 0) - 1, 0),
    }));
  };

  return (
    <div className="py-4 px-4">
      <div className="grid grid-cols-2 gap-4">
        {featuredProducts.map((product) => (
          <div key={product.id} className="relative flex flex-col items-center min-w-max mx-1 rounded-lg p-2 border-gray-300">
            {/* Offer Icon */}
            {product.offer > 0 && (
              <div className="absolute -top-4 -left-4 w-20 h-20 flex items-center justify-center">
                <ClasicOfferIcon offer={product.offer} />
              </div>
            )}

            <img src={product.image} alt={product.name} className="w-full h-24 object-cover rounded-lg" />
            <h3 className="mt-2 text-base font-semibold">{product.name}</h3>
            <p className="text-xs text-gray-600">{product.brand}</p>
            <p className="text-xs text-gray-600">{product.quantity}</p>
            <div className="flex justify-between items-end w-full mt-1">
              <div>
                <p className="text-xs text-green-600">₹{product.actualPrice}</p>
                <p className="text-xs text-gray-500 line-through">₹{product.mrp}</p>
              </div>
              <div className="absolute bottom-2 right-2 flex items-center space-x-2">
                {cart[product.id] > 0 ? (
                  <div className="flex items-center border rounded-lg text-xs">
                    <button onClick={() => handleRemoveClick(product.id)} className="p-1 text-green-600 hover:bg-gray-200">
                      <FaMinus />
                    </button>
                    <span className="px-2">{cart[product.id]}</span>
                    <button onClick={() => handleAddClick(product.id)} className="p-1 text-green-600 hover:bg-gray-200">
                      <FaPlus />
                    </button>
                  </div>
                ) : product.variants && product.variants.length > 0 ? (
                  <button
                    onClick={() => handleSelectClick(product)}
                    className="bg-white-500 text-lime-700 py-0.5 px-2 rounded-lg text-xs hover:bg-blue-600 font-bold border border-lime-700"
                  >
                    Select
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddClick(product.id)}
                    className="bg-white-500 text-lime-700 py-0.5 px-2 rounded-lg text-xs hover:bg-blue-600 font-bold border border-lime-700"
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for variant selection */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Select Variant</h3>
            {selectedProduct.variants.map((variant) => (
              <div key={variant.id} className="flex justify-between items-center mb-2">
                <img src={variant.image} alt={variant.name} className="w-16 h-16 object-cover rounded-lg" />
                <span>{variant.size}</span>
                <span>₹{variant.price}</span>
                <div className="flex items-center border rounded-lg text-xs">
                  <button onClick={() => handleVariantRemoveClick(variant.id)} className="p-1 text-green-600 hover:bg-gray-200">
                    <FaMinus />
                  </button>
                  <span className="px-2">{cart[variant.id] || 0}</span>
                  <button onClick={() => handleVariantAddClick(variant.id)} className="p-1 text-green-600 hover:bg-gray-200">
                    <FaPlus />
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-red-500 text-white py-0.5 px-2 rounded-lg text-xs hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerticalProducts;



