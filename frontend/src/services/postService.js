import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/post`;


export const createPost = async (values) => {
  const newPost = {
    title: values.title,
    description: values.description,
    body: values.body,
    topic: values.topic,
  };
  // const response = await axios.get(API_URL);
  const response = await fetch('http://localhost:3001/api/contents/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  });
  if (response.ok) {
    const createdPost = await response.json();
    console.log('New Post Created:', createdPost);
  } else {
    throw new Error('Failed to create post');
  }
  // } catch (error) {
  //   console.error('Error creating post:', error);
  //   message.error('Failed to create post');
  // }
  return response.data;
};

// export const createPost = async(values) => {
//   const response = await axios.post(API_URL, values);
//   return response.data;
// };
