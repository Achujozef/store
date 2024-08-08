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
//   ];'/images/fruits.jpg'
// dummyData.js
export const popularBrands = [
    { id: 1, name: 'Brand A', image: '/images/fruits.jpg' },
    { id: 2, name: 'Brand B', image: '/images/fruits.jpg' },
    { id: 3, name: 'Brand C', image: '/images/fruits.jpg' },
    { id: 4, name: 'Brand D', image: '/images/fruits.jpg' },
    { id: 5, name: 'Brand E', image: '/images/fruits.jpg' },
    { id: 6, name: 'Brand F', image: '/images/fruits.jpg' },
    { id: 7, name: 'Brand G', image: '/images/fruits.jpg' },
    { id: 8, name: 'Brand H', image: '/images/fruits.jpg' },
    // Add more brands as needed
  ];
  
  
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
            {id: '11v21',  size: 'Small', price: '90' , image: '/images/fruits.jpg'},
            { id: 2, size: 'Medium', price: '100'  , image: '/images/fruits.jpg'},
            { id: 3, size: 'Large', price: '110', image: '/images/fruits.jpg' }
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
          { id: 2, size: 'Single', price: '5' },
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


export const userLocation = {
    location: "New York",
    address: "123 Main St, Apartment 4B, New York, NY...",
  };
  
  export const userProfile = {
    name: "John Doe",
    image: 'profile.jpg', 
  };
  
  export const topRatedSupermarkets = [
    {
      id: 1,
      name: "Best Supermarket",
      rating: 4.5,
      deliveryTime: "10 - 15 mins",
      offer: "20% OFF",
      offerDetail: "upto $50",
      profileImage: "supermarket1.jpg",
      favorite: true,
      categories: ["Fish", "Vegitables", "Home made"]
    },
    {
      id: 2,
      name: "Super Saver",
      rating: 4.7,
      deliveryTime: "15 - 20 mins",
      offer: "25% OFF",
      offerDetail: "upto $60",
      profileImage: "supermarket2.jpg",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
    {
      id: 3,
      name: "Quality Mart",
      rating: 4.6,
      deliveryTime: "5 - 10 mins",
      offer: null,
      offerDetail: "upto $40",
      profileImage: "supermarket3.jpeg",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
    {
      id: 4,
      name: "Family Supermarket",
      rating: 4.8,
      deliveryTime: "20 - 25 mins",
      offer: "10% OFF",
      offerDetail: "upto $30",
      profileImage: "supermarket4.jpg",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
    {
      id: 5,
      name: "Budget Grocery",
      rating: 4.9,
      deliveryTime: "10 - 15 mins",
      offer: "5% OFF",
      offerDetail: "upto $20",
      profileImage: "supermarket5.jpg",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
    {
      id: 6,
      name: "Local Market",
      rating: 4.3,
      deliveryTime: "25 - 30 mins",
      offer: "15% OFF",
      offerDetail: "upto $25",
      profileImage: "supermarket6.jpg",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
    {
      id: 7,
      name: "Organic Store",
      rating: 4.7,
      deliveryTime: "10 - 15 mins",
      offer: "20% OFF",
      offerDetail: "upto $50",
      profileImage: "supermarket7.jpg",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
    {
      id: 8,
      name: "Fresh Mart",
      rating: 4.5,
      deliveryTime: "5 - 10 mins",
      offer: "25% OFF",
      offerDetail: "upto $60",
      profileImage: "supermarket8.jpeg",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
    {
      id: 9,
      name: "Super Store",
      rating: 4.6,
      deliveryTime: "15 - 20 mins",
      offer: "10% OFF",
      offerDetail: "upto $30",
      profileImage: "supermarket9.jpeg",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
    {
      id: 10,
      name: "Happy Shopper",
      rating: 4.4,
      deliveryTime: "20 - 25 mins",
      offer: "5% OFF",
      offerDetail: "upto $20",
      profileImage: "supermarket10.jpeg",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
  ];
  
  export const allSupermarkets = [
    {
      id: 1,
      name: "Supermarket One",
      rating: 4.2,
      deliveryTime: "20 - 25 mins",
      totalOrders: 100,
      place: "New York",
      distance: "1.5 km",
      profileImage: "supermarket2.jpg",
      offer: "15% OFF",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
    {
      id: 2,
      name: "Supermarket Two",
      rating: 4.1,
      deliveryTime: "20 - 25 mins",
      totalOrders: 150,
      place: "Los Angeles",
      distance: "2.0 km",
      profileImage: "supermarket3.jpeg",
      offer: "10% OFF",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
    {
      id: 3,
      name: "Supermarket Three",
      rating: 4.3,
      deliveryTime: "20 - 25 mins",
      totalOrders: 200,
      place: "Chicago",
      distance: "1.0 km",
      profileImage: "supermarket4.jpg",
      offer: "20% OFF",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
    {
      id: 4,
      name: "Supermarket Four",
      rating: 4.0,
      deliveryTime: "20 - 25 mins",
      totalOrders: 250,
      place: "Houston",
      distance: "3.0 km",
      profileImage: "supermarket5.jpg",
      offer: "5% OFF",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
    {
      id: 5,
      name: "Supermarket Five",
      rating: 4.2,
      deliveryTime: "20 - 25 mins",
      totalOrders: 300,
      place: "Phoenix",
      distance: "1.8 km",
      profileImage: "supermarket6.jpg",
      offer: "15% OFF",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
    {
      id: 6,
      name: "Supermarket Six",
      rating: 4.1,
      deliveryTime: "20 - 25 mins",
      totalOrders: 180,
      place: "Philadelphia",
      distance: "2.5 km",
      profileImage: "supermarket7.jpg",
      offer: "10% OFF",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
    {
      id: 7,
      name: "Supermarket Seven",
      rating: 4.4,
      deliveryTime: "20 - 25 mins",
      totalOrders: 220,
      place: "San Antonio",
      distance: "1.3 km",
      profileImage: "supermarket8.jpeg",
      offer: "20% OFF",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
    {
      id: 8,
      name: "Supermarket Eight",
      rating: 4.3,
      deliveryTime: "20 - 25 mins",
      totalOrders: 170,
      place: "San Diego",
      distance: "1.7 km",
      profileImage: "supermarket9.jpeg",
      offer: "5% OFF",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
    {
      id: 9,
      name: "Supermarket Nine",
      rating: 4.5,
      deliveryTime: "20 - 25 mins",
      totalOrders: 230,
      place: "Dallas",
      distance: "2.2 km",
      profileImage: "supermarket10.jpeg",
      offer: "15% OFF",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
    {
      id: 10,
      name: "Supermarket Ten",
      rating: 4.6,
      deliveryTime: "20 - 25 mins",
      totalOrders: 280,
      place: "San Jose",
      distance: "1.6 km",
      profileImage: "supermarket1.jpg",
      offer: "10% OFF",
      favorite: false,
      categories: ["Fish", "Vegitables", "Home made"]
    },
  ];
  
  export const closedSupermarkets = [
    {
        id: 1,
        name: "Supermarket One",
        rating: 4.2,
        deliveryTime: "20 - 25 mins",
        totalOrders: 100,
        place: "New York",
        distance: "1.5 km",
        profileImage: "supermarket2.jpg",
        offer: "15% OFF",
        favorite: false,
        categories: ["Fish", "Vegitables", "Home made"]
      },
      {
        id: 2,
        name: "Supermarket Two",
        rating: 4.1,
        deliveryTime: "20 - 25 mins",
        totalOrders: 150,
        place: "Los Angeles",
        distance: "2.0 km",
        profileImage: "supermarket3.jpeg",
        offer: "10% OFF",
        favorite: false,
        categories: ["Fish", "Vegitables", "Home made"]
      },
      {
        id: 3,
        name: "Supermarket Three",
        rating: 4.3,
        deliveryTime: "20 - 25 mins",
        totalOrders: 200,
        place: "Chicago",
        distance: "1.0 km",
        profileImage: "supermarket4.jpg",
        offer: "20% OFF",
        favorite: false,
        categories: ["Fish", "Vegitables", "Home made"]
      },
];