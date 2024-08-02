// src/Contact.js
import React from 'react';
import { Card, Typography } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph, Link } = Typography;

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

function Contact() {
  return (
    <div
      style={{
        position: 'absolute',
        right: 0,
        top: '33%',
        padding: '20px 0 20px 20px',
        // maxWidth: '100%',
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
            borderBottomRightRadius:'0',
          }}
        >
          <Title level={2}>Contact Me</Title>
          <Paragraph>
            You can reach me at: <br />
            <Link href="mailto:tommyy1708@gmail.com">
              tommyy1708@gmail.com
            </Link>
          </Paragraph>
        </Card>
      </motion.div>
    </div>
  );
}

export default Contact;
