import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CategoryProductPage from '../pages/CategoryProductPage';
import SupermarketPage from '../pages/SupermarketPage';
import FeedbackForm from '../components/FeedbackForm'
import '@fortawesome/fontawesome-free/css/all.min.css';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/supermarket/:id" element={<HomePage />} />
      <Route path="/" element={<SupermarketPage />} />
      <Route path="/category/:categoryId" element={<CategoryProductPage />} />
      <Route path="/feedback-form" element={<FeedbackForm />} />
      {/* Add other routes as needed */}
    </Routes>
  </Router>
);

export default AppRoutes;
