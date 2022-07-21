import axios from 'axios';

const API_KEY = '27599819-5f2242c0de29668fb10ee249b';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async (searchQuery, page) => {
  const response = await axios.get('/', {
    params: {
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      q: searchQuery,
      page,
    },
  });

  return response.data;
};

// npm i react-toastify@5.2.1
