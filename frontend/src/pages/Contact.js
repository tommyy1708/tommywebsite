// src/Contact.js
import React from 'react';
import { Card, Typography } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph, Link, Text } = Typography;

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};
  const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    textWrap: 'pretty',
    justifyContent: 'center',
    padding: '0 2rem',
    fontSize: '1.2rem',
    lineHeight: '1.6',
  };

function Contact() {
  return (
    <div
      style={{
        position: 'absolute',
        right: 0,
        top: '33%',
        padding: '20px 0 20px 20px',
        margin: 0,
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Card
          style={{
            right: 0,
            width: '40rem',
            textAlign: 'center',
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0',
          }}
        >
          <Title level={2}>Contact Me by Email</Title>
          <Paragraph>
            <Link href="mailto:tommyy1708@gmail.com">
              <Text style={textStyle}>tommyy1708@gmail.com</Text>
            </Link>
          </Paragraph>
        </Card>
      </motion.div>
    </div>
  );
}

export default Contact;
