import React from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="contact-page">
      <Row justify="center" align="middle" style={{ height: '100%' }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <div className="contact-card">
            <Title
              level={2}
              style={{ textAlign: 'center', marginBottom: '20px' }}
            >
              Contact Us
            </Title>
            <Paragraph
              style={{ textAlign: 'center', marginBottom: '40px' }}
            >
              We'd love to hear from you! Please fill out the form
              below and we'll get in touch with you shortly.
            </Paragraph>
            <Form
              form={form}
              name="contact"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your name',
                  },
                ]}
              >
                <Input placeholder="Your name" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your email',
                  },
                  {
                    type: 'email',
                    message: 'Please enter a valid email',
                  },
                ]}
              >
                <Input placeholder="Your email" />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your message',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Your message" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{ borderRadius: '5px' }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
