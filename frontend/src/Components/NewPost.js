import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { createContent } from '../services/contentService';
import { getTopics } from '../services/topicService';

const { Option } = Select;
const { TextArea } = Input;

const NewPost = () => {
  const [topics, setTopics] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const topics = await getTopics();
        setTopics(topics);
      } catch (error) {
        console.error('Failed to fetch topics:', error);
      }
    };
    fetchTopics();
  }, []);

  const handleSubmit = async (values) => {
    const newPost = {
      topic: values.topic,
      body: values.body,
    };
    try {
      const createdPost = await createContent(newPost);
      console.log('New Post Created:', createdPost);
      message.success('New post created successfully');
      form.resetFields();
    } catch (error) {
      console.error('Error creating post:', error);
      message.error('Failed to create post');
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
        <Form.Item
          name="topic"
          label="Select Topic"
          rules={[
            { required: true, message: 'Please select a topic' },
          ]}
        >
          <Select placeholder="Select Topic">
            {topics.map((topic) => (
              <Option key={topic._id} value={topic._id}>
                {topic.title}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewPost;
