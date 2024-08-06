import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/comments';
const API_URL = `${process.env.REACT_APP_API_URL}/comments`;

export const getComments = async () => {
  console.log('API_URL = ',API_URL);
  const response = await axios.get(API_URL);
  return response.data;
};

export const createComment = async (comment) => {
  const response = await axios.post(API_URL, comment);
  return response.data;
};
