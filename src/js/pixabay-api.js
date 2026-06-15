import axios from 'axios';

const API_KEY = '46393082-6436aef7da0980f5048308d07';
const BASE_URL = 'https://pixabay.com';

export const getImagesByQuery = async (query, page) => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
  });

  const response = await axios.get(`${BASE_URL}?${params}`);
  return response.data;
};