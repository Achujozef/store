import React from 'react';
import TopNav from '../components/TopNav';
import Navbar from '../components/Navbar';
import BannerCarousel from '../components/BannerCarousel';
import CategoryList from '../components/CategoryList';
import Products from '../components/Products';
import TrendingProducts from '../components/TrendingProducts';
import ClasicProducts from '../components/ClasicProducts';
import StandradProducts from '../components/StandradProducts';

const HomePage = () => (
    <div className="">
    <TopNav />
    <Navbar />

    <BannerCarousel />
    <CategoryList />
    <Products />
    <Products />
    <TrendingProducts/>
    <ClasicProducts/>
    <StandradProducts/>
    <ClasicProducts/>
  </div>
);

export default HomePage;
