// About.js
import React from 'react';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const About = () => (
  <Content style={{ padding: '4rem' }}>
    <Title>About Me</Title>
    <Paragraph>This is the About page content.</Paragraph>
  </Content>
);

export default About;
