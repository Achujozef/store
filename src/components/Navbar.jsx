// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaHome, FaBoxOpen, FaListAlt, FaShoppingCart, FaTags } from 'react-icons/fa';

// const Navbar = () => (
//   <nav className="bg-white text-gray-400 py-3 fixed bottom-0 w-full shadow-inner rounded-t-lg">
//     <ul className="flex justify-around">
//       <li className="flex flex-col items-center text-xs">
//         <Link to="/" className="flex flex-col items-center">
//           <FaHome size={16} className="text-gray-500" />
//           <span>Home</span>
//         </Link>
//       </li>
//       <li className="flex flex-col items-center text-xs">
//         <Link to="/products" className="flex flex-col items-center">
//           <FaBoxOpen size={16} className="text-gray-500" />
//           <span>Products</span>
//         </Link>
//       </li>
//       <li className="flex flex-col items-center text-xs">
//         <Link to="/categories" className="flex flex-col items-center">
//           <FaListAlt size={16} className="text-gray-500" />
//           <span>Categories</span>
//         </Link>
//       </li>
//       <li className="flex flex-col items-center text-xs">
//         <Link to="/cart" className="flex flex-col items-center">
//           <FaShoppingCart size={16} className="text-gray-500" />
//           <span>Cart</span>
//         </Link>
//       </li>
//       <li className="flex flex-col items-center text-xs">
//         <Link to="/offers" className="flex flex-col items-center">
//           <FaTags size={16} className="text-gray-500" />
//           <span>Offers</span>
//         </Link>
//       </li>
//     </ul>
//   </nav>
// );

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBoxOpen, FaListAlt, FaShoppingCart, FaTags } from 'react-icons/fa';

const Navbar = () => (
  <nav className="bg-white text-gray-400 py-3 fixed bottom-0 w-full shadow-inner rounded-t-lg z-50">
    <ul className="flex justify-around">
      <li className="flex flex-col items-center text-xs">
        <Link to="/" className="flex flex-col items-center">
          <FaHome size={16} className="text-gray-500" />
          <span>Home</span>
        </Link>
      </li>
      <li className="flex flex-col items-center text-xs">
        <Link to="/products" className="flex flex-col items-center">
          <FaBoxOpen size={16} className="text-gray-500" />
          <span>Products</span>
        </Link>
      </li>
      <li className="flex flex-col items-center text-xs">
        <Link to="/categories" className="flex flex-col items-center">
          <FaListAlt size={16} className="text-gray-500" />
          <span>Categories</span>
        </Link>
      </li>
      <li className="flex flex-col items-center text-xs">
        <Link to="/cart" className="flex flex-col items-center">
          <FaShoppingCart size={16} className="text-gray-500" />
          <span>Cart</span>
        </Link>
      </li>
      <li className="flex flex-col items-center text-xs">
        <Link to="/offers" className="flex flex-col items-center">
          <FaTags size={16} className="text-gray-500" />
          <span>Offers</span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
