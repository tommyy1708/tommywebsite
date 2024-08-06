import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/topics`;

export const getTopics = async () => {
  console.log('API_URL = ',API_URL);
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTopic = async (topic) => {
  const response = await axios.post(API_URL, topic);
  return response.data;
};
