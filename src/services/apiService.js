import { API_URL } from '../constants';

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  const data = await response.json();
  return data;
};
import { API_URL } from '../constants/apiEndpoints';

export const fetchBanners = async () => {
  const response = await fetch(`${API_URL}/banners`);
  const data = await response.json();
  return data;
};

export const fetchCategories = async () => {
  const response = await fetch(`${API_URL}/categories`);
  const data = await response.json();
  return data;
};

export const fetchFeaturedProducts = async () => {
  const response = await fetch(`${API_URL}/featured-products`);
  const data = await response.json();
  return data;
};
