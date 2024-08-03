import React from 'react';
import TopNav from '../components/TopNav';
import Navbar from '../components/Navbar';
import BannerCarousel from '../components/BannerCarousel';
import CategoryList from '../components/CategoryList';
import FeaturedProducts from '../components/FeaturedProducts';
import SearchBar from '../components/SearchBar';
const HomePage = () => (
  <div>
    <TopNav />
    <Navbar />
    {/* <SearchBar /> */}
    <BannerCarousel />
    <CategoryList />
    <FeaturedProducts />
  </div>
);

export default HomePage;
