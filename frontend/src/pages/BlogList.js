import React, { useEffect, useState } from 'react';
import { List, Card, Typography, Spin } from 'antd';
import { getTopics } from '../services/topicService';

const { Title, Paragraph } = Typography;

const BlogList = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTopics = await getTopics();
        setTopics(fetchedTopics);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <div>
      {topics.map((topic) => (
        <div key={topic._id} style={{ marginBottom: '2rem' }}>
          <Title level={2}>{topic.title}</Title>
          <Paragraph>{topic.description}</Paragraph>
          <List
            grid={{ gutter: 16, column: 1 }}
            renderItem={(blog) => (
              <List.Item>
                <Card title={blog.topic.title}>
                  <Title level={4}>{blog.title}</Title>
                  <Paragraph>{blog.body}</Paragraph>
                </Card>
              </List.Item>
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
