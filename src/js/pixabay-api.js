import axios from 'axios';

export const getImagesByQuery = query => {
  const params = new URLSearchParams({
    key: '46393082-6436aef7da0980f5048308d07',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios
    .get(`https://pixabay.com/api/?${params}`)
    .then(response => response.data);
};