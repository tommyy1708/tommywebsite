import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';

const { TextArea } = Input;

const NewPost = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    setLoading(true);
    const topicData = {
      title: values.title,
      description: values.description,
    };

    try {
      // Create the Topic
      const topicResponse = await fetch(
        'http://localhost:3001/api/topics',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(topicData),
        }
      );

      if (!topicResponse.ok) {
        throw new Error('Failed to create topic');
      }

      const topic = await topicResponse.json();

      // Create the Content
      const contentData = {
        topic: topic._id,
        title: values.title, // assuming content should also have a title
        body: values.body,
      };

      const contentResponse = await fetch(
        'http://localhost:3001/api/contents',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contentData),
        }
      );

      if (!contentResponse.ok) {
        throw new Error('Failed to create content');
      }

      const content = await contentResponse.json();

      console.log('New Post Created:', { topic, content });
      message.success('New post created successfully');
      form.resetFields();
    } catch (error) {
      console.error('Error creating post:', error);
      message.error('Failed to create post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="title"
          label="Title"
          rules={[
            { required: true, message: 'Please enter the title' },
          ]}
        >
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: 'Please enter the description',
            },
          ]}
        >
          <TextArea placeholder="Description" rows={4} />
        </Form.Item>
        <Form.Item
          name="body"
          label="Content Body"
          rules={[
            {
              required: true,
              message: 'Please enter the content body',
            },
          ]}
        >
          <TextArea placeholder="Content Body" rows={6} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Create Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewPost;
