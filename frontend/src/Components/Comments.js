import React, { useEffect, useState } from 'react';
import { getComments, createComment } from '../services/commentService';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await getComments();
      setComments(data);
    };
    fetchTopics();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = { title, description };
    const createdTopic = await createComment(newComment);
    setComments([...comments, createdTopic]);
  };

  return (
    <div>
      <h2>Comment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <button type="submit">Add Topic</button>
      </form>
      <ul>
        {comments.map((topic) => (
          <li key={topic._id}>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
