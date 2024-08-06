import axios from 'axios';

const API_URL = 'http://localhost:5000/api/contents';

export const getContent = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createContent = async (content) => {
  const response = await axios.post(API_URL, content);
  return response.data;
};
