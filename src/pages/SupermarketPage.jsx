// src/pages/SupermarketPage.jsx

import React from 'react';
import UserLocation from '../components/UserLocation';
import UserProfile from '../components/UserProfile';
import SearchBar from '../components/SearchBar';
import BannerCarousel from '../components/BannerCarousel';
import TopRatedSupermarkets from '../components/TopRatedSupermarkets';
import SupermarketList from '../components/SupermarketList';
import FeedbackSection from '../components/FeedbackSection';
import ClosedSupermarket from '../components/ClosedSupermarket';
import { userLocation, userProfile, topRatedSupermarkets, allSupermarkets, closedSupermarkets } from '../dummyData';

const SupermarketPage = () => (
  <div className="bg-white min-h-screen p-4">
    <div className="bg-white rounded-lg  mb-4 flex justify-between items-start">
      <UserLocation location={userLocation.location} address={userLocation.address} />
      <UserProfile image={userProfile.image} name={userProfile.name} />
    </div>
    <div className="mb-0">
      <SearchBar />
    </div>
    <div className="mb-4">
      <BannerCarousel />
    </div>
    <h2 className="text-xl font-semibold mb-2">Top Rated Supermarkets</h2>
    <TopRatedSupermarkets supermarkets={topRatedSupermarkets} />
    <h2 className="text-xl font-semibold mb-2">All Supermarkets</h2>
    <SupermarketList supermarkets={allSupermarkets} />
    <h2 className="text-xl font-semibold mb-2">Top Rated Supermarkets</h2>
    <TopRatedSupermarkets supermarkets={topRatedSupermarkets} />
    <h2 className="text-xl font-semibold mb-2">Give Us Your Feedback</h2>
    <FeedbackSection />
    <h2 className="text-xl font-semibold mb-2">Temporarily Closed Supermarkets</h2>
    <ClosedSupermarket supermarkets={closedSupermarkets} />
    <div className="text-center py-4">
      <p>Thank you for visiting our supermarket platform!</p>
    </div>
  </div>
);

export default SupermarketPage;
