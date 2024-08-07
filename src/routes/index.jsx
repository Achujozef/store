import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CategoryProductPage from '../pages/CategoryProductPage';
import FeedbackForm from '../components/FeedbackForm'
const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:categoryId" element={<CategoryProductPage />} />
      <Route path="/feedback-form" element={<FeedbackForm />} />
      {/* Add other routes as needed */}
    </Routes>
  </Router>
);

export default AppRoutes;
