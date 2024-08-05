import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CategoryProductPage from '../pages/CategoryProductPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cat" element={<CategoryProductPage />} />
      {/* Add other routes as needed */}
    </Routes>
  </Router>
);

export default AppRoutes;
