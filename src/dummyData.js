// Dummy data for the supermarket

// export const banners = [
//     {
//       id: 1,
//       image: 'https://via.placeholder.com/800x400?text=Banner+1',
//       link: '/shop-now'
//     },
//     {
//       id: 2,
//       image: 'https://via.placeholder.com/800x400?text=Banner+2',
//       link: '/shop-now'
//     }
//   ];
export const subcategories = [
  { id: 1, name: 'Citrus', image: '/images/fruits.jpg' },
  { id: 2, name: 'Tropical', image: '/images/dairy.png' },
  { id: 3, name: 'Berries', image: '/images/veg.png' },
  { id: 4, name: 'Leafy Greens', image: '/images/fruits.jpg' },
  { id: 5, name: 'Root Vegetables', image: '/images/dairy.png' },
  { id: 6, name: 'Cheese', image: '/images/veg.png' },
  { id: 7, name: 'Milk Products', image: '/images/fruits.jpg' },
  { id: 8, name: 'Breads', image: '/images/dairy.png' },
  { id: 9, name: 'Cakes', image: '/images/veg.png' },
  { id: 10, name: 'Pastries', image: '/images/fruits.jpg' },
  { id: 11, name: 'Citrus', image: '/images/fruits.jpg' },
  { id: 12, name: 'Tropical', image: '/images/dairy.png' },
  { id: 13, name: 'Berries', image: '/images/veg.png' },
  { id: 14, name: 'Leafy Greens', image: '/images/fruits.jpg' },
  { id: 15, name: 'Root Vegetables', image: '/images/dairy.png' },
  { id: 16, name: 'Cheese', image: '/images/veg.png' },
  { id: 17, name: 'Milk Products', image: '/images/fruits.jpg' },
  { id: 18, name: 'Breads', image: '/images/dairy.png' },
  { id: 19, name: 'Cakes', image: '/images/veg.png' },
  { id: 20, name: 'Pastries', image: '/images/fruits.jpg' }
];
export const banners = [
  { id: 1, image: '/images/banner3.jpg', link: '/shop' },
  { id: 2, image: '/images/banner2.jpg', link: '/shop' },
  { id: 3, image: '/images/banner5.jpg', link: '/shop' },
  // { id: 4, image: '/images/banner1.avif', link: '/shop' },
  { id: 5, image: '/images/banner4.avif', link: '/shop' },
];

  export const categories = [
    { id: 1, name: 'Fruits', image: '/images/fruits.jpg' },
    { id: 2, name: 'Vegetables', image: '/images/dairy.png' },
    { id: 3, name: 'Dairy', image: '/images/veg.png' },
    { id: 4, name: 'Bakery', image: '/images/fruits.jpg' },
    { id: 5, name: 'Dairy', image: '/images/dairy.png' },
    { id: 6, name: 'Bakery', image: '/images/veg.png' },
    { id: 1, name: 'Fruits', image: '/images/fruits.jpg' },
    { id: 2, name: 'Vegetables', image: '/images/dairy.png' },
    { id: 3, name: 'Dairy', image: '/images/fruits.jpg' },
    { id: 4, name: 'Bakery', image: '/images/fruits.jpg' },
    { id: 5, name: 'Dairy', image: '/images/dairy.png' },
    { id: 6, name: 'Bakery', image: '/images/veg.png' }
];
  
export const featuredProducts = [
  { 
      id: 1, 
      name: 'Apple', 
      brand: 'Brand A', 
      quantity: '1 kg', 
      mrp: '120', 
      actualPrice: '100', 
      image: '/images/fruits.jpg', 
      offer: "10", 
      variants: [
          { size: 'Small', price: '90' },
          { size: 'Medium', price: '100' },
          { size: 'Large', price: '110' }
      ]
  },
  { 
      id: 2, 
      name: 'Banana', 
      brand: 'Brand B', 
      quantity: '1 dozen', 
      mrp: '60', 
      actualPrice: '50', 
      image: '/images/veg.png', 
      offer: "30", 
      variants: [
          { size: 'Single', price: '5' },
          { size: 'Bunch', price: '50' }
      ]
  },
  { 
      id: 3, 
      name: 'Carrot', 
      brand: 'Brand C', 
      quantity: '500 g', 
      mrp: '40', 
      actualPrice: '30', 
      image: '/images/fruits.jpg', 
      variants: {} // Empty variants object
  },
  { 
      id: 4, 
      name: 'Milk', 
      brand: 'Brand D', 
      quantity: '1 liter', 
      mrp: '70', 
      actualPrice: '60', 
      image: '/images/veg.png', 
      offer: "30", 
      variants: [
          { type: 'Full Cream', price: '60' },
          { type: 'Skimmed', price: '55' }
      ]
  },
  { 
      id: 5, 
      name: 'Apple', 
      brand: 'Brand A', 
      quantity: '1 kg', 
      mrp: '120', 
      actualPrice: '100', 
      image: '/images/fruits.jpg', 
      variants: {} // Empty variants object
  },
  { 
      id: 6, 
      name: 'Banana', 
      brand: 'Brand B', 
      quantity: '1 dozen', 
      mrp: '60', 
      actualPrice: '50', 
      image: '/images/veg.png', 
      offer: "0", 
      variants: [
          { size: 'Single', price: '5' }
      ]
  },
  { 
      id: 7, 
      name: 'Carrot', 
      brand: 'Brand C', 
      quantity: '500 g', 
      mrp: '40', 
      actualPrice: '30', 
      image: '/images/fruits.jpg', 
      offer: "40", 
      variants: [
          { type: 'Organic', price: '35' },
          { type: 'Non-Organic', price: '30' }
      ]
  },
  { 
      id: 8, 
      name: 'Milk', 
      brand: 'Brand D', 
      quantity: '1 liter', 
      mrp: '70', 
      actualPrice: '60', 
      image: '/images/fruits.jpg', 
      variants: {} // Empty variants object
  },
  // Repeat or additional items as needed
  { 
      id: 9, 
      name: 'Apple', 
      brand: 'Brand A', 
      quantity: '1 kg', 
      mrp: '120', 
      actualPrice: '100', 
      image: '/images/fruits.jpg', 
      offer: "10", 
      variants: [
          { size: 'Small', price: '90' },
          { size: 'Medium', price: '100' },
          { size: 'Large', price: '110' }
      ]
  },
  { 
      id: 10, 
      name: 'Banana', 
      brand: 'Brand B', 
      quantity: '1 dozen', 
      mrp: '60', 
      actualPrice: '50', 
      image: '/images/veg.png', 
      offer: "30", 
      variants: [
          { size: 'Single', price: '5' },
          { size: 'Bunch', price: '50' }
      ]
  },
  { 
      id: 11, 
      name: 'Carrot', 
      brand: 'Brand C', 
      quantity: '500 g', 
      mrp: '40', 
      actualPrice: '30', 
      image: '/images/veg.png', 
      variants: {} // Empty variants object
  },
  { 
      id: 12, 
      name: 'Milk', 
      brand: 'Brand D', 
      quantity: '1 liter', 
      mrp: '70', 
      actualPrice: '60', 
      image: '/images/fruits.jpg', 
      offer: "30", 
      variants: [
          { type: 'Full Cream', price: '60' },
          { type: 'Skimmed', price: '55' }
      ]
  },
  { 
      id: 13, 
      name: 'Apple', 
      brand: 'Brand A', 
      quantity: '1 kg', 
      mrp: '120', 
      actualPrice: '100', 
      image: '/images/fruits.jpg', 
      variants: {} // Empty variants object
  },
  { 
      id: 14, 
      name: 'Banana', 
      brand: 'Brand B', 
      quantity: '1 dozen', 
      mrp: '60', 
      actualPrice: '50', 
      image: '/images/fruits.jpg', 
      offer: "0", 
      variants: [
          { size: 'Single', price: '5' }
      ]
  },
  { 
      id: 15, 
      name: 'Carrot', 
      brand: 'Brand C', 
      quantity: '500 g', 
      mrp: '40', 
      actualPrice: '30', 
      image: '/images/veg.png', 
      offer: "40", 
      variants: [
          { type: 'Organic', price: '35' },
          { type: 'Non-Organic', price: '30' }
      ]
  },
  { 
      id: 16, 
      name: 'Milk', 
      brand: 'Brand D', 
      quantity: '1 liter', 
      mrp: '70', 
      actualPrice: '60', 
      image: '/images/fruits.jpg', 
      variants: {} // Empty variants object
  }
];


