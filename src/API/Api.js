import axios from 'axios';

const API_KEY = '27599819-5f2242c0de29668fb10ee249b';
const BASE_URL = 'pixabay.com/api';

axios.defaults.baseURL = `https://${BASE_URL}`;

export const getImages = async (searchQuery, page) => {
  const response = await axios(
    `/?key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&q=${searchQuery}&page=${page}`
  );

  return response.data;
};
