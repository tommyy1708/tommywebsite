import React, { useEffect, useState } from 'react';
import { getTopics, createTopic } from '../services/topicService';

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await getTopics();
      setTopics(data);
    };
    fetchTopics();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTopic = { title, description };
    const createdTopic = await createTopic(newTopic);
    setTopics([...topics, createdTopic]);
  };

  return (
    <div>
      <h2>Topics</h2>
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
        {topics.map((topic) => (
          <li key={topic._id}>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topics;
