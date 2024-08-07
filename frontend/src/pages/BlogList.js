import React, { useEffect, useState } from 'react';
import { List, Typography, Spin, message, Card } from 'antd';

const { Title } = Typography;

const PostList = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch(
          'http://localhost:3001/api/topics'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch topics');
        }
        const data = await response.json();
        setTopics(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching topics:', error);
        message.error('Failed to fetch topics');
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Title
        level={2}
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        Topics
      </Title>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={topics}
        renderItem={(topic) => (
          <List.Item>
            <Card
              title={
                <a
                  href={`http://localhost:3000/topics/${topic._id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '1.2em' }}
                >
                  {topic.title}
                </a>
              }
            >
              <Typography.Paragraph
                ellipsis={{
                  rows: 2,
                  expandable: true,
                  symbol: 'more',
                }}
              >
                {topic.description}
              </Typography.Paragraph>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default PostList;
