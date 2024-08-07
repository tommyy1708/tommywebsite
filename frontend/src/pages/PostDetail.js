import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Typography, Spin, List, message } from 'antd';

const { Title, Paragraph } = Typography;

const PostDetail = () => {
  const { id } = useParams(); // Get the topic ID from the URL
  const [content, setContent] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/contents/topic/${id}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch post details');
        }
        const data = await response.json();
        setContent(data.content);
        setComments(data.comments);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post details:', error);
        message.error('Failed to fetch post details');
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <Spin size="large" />;
  }

  if (!content) {
    return (
      <Typography.Text>
        No content found for this topic.
      </Typography.Text>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <Card style={{ marginBottom: '20px' }}>
        <Title level={2}>{content.topic.title}</Title>
        <Paragraph>{content.body}</Paragraph>
      </Card>
      <Title level={3}>Comments</Title>
      <List
        bordered
        dataSource={comments}
        renderItem={(comment) => (
          <List.Item>
            <Typography.Text>{comment.text}</Typography.Text>
          </List.Item>
        )}
      />
    </div>
  );
};

export default PostDetail;
