import React, { useContext } from 'react';
import { theme,Row, Col, Typography } from 'antd';
import { ThemeContext } from '../context/ThemeContext';
const { Text } = Typography;

export default function Home() {
  const ctx = useContext(ThemeContext);
  const { useToken } = theme;
  const { token } = useToken();

  const imageContainerStyle = {
    position: 'relative',
    // width: '100%',
    // height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const imageStyle = {
    width: '75%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: `${
      ctx.myTheme
        ? '.25rem .5rem 1rem rgba(0, 0, 0, 0.75)'
        : '.25rem .5rem 1rem rgba(155, 155, 155, 0.75)'
    }`,
  };

  const overlayStyle = {
    position: 'absolute',
    top: '7%',
    left: '12%',
    width: '78%',
    height: '80%',
    border: `4px solid ${
      ctx.myTheme ? token.colorPrimary : 'rgba(200,220, 255, 1)'
    }`,
    transform: 'rotate(-5deg)',
    borderRadius: '10px',
  };

  const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    textWrap: 'pretty',
    justifyContent: 'center',
    padding: '0 2rem',
    textAlign: 'left',
    fontSize: '1.2rem',
    lineHeight: '1.6',
  };

  
  return (
    <Row
      style={imageContainerStyle}
      gutter={[16, 16]}
      justify="center"
      align="middle"
    >
      <Col xs={24} md={12} className='home-left-bar' >
        <img
          className="image"
          src={`${process.env.PUBLIC_URL}/images/home_bg.webp`}
          alt="home_bg"
          style={imageStyle}
        />
        <div className="overlay" style={overlayStyle}></div>
      </Col>
      <Col xs={24} md={12} className="text-container">
        <Text style={textStyle}>
          Hi, I'm Tommy, a passionate{' '}
          <strong>Frontend Developer</strong> with a knack for
          creating elegant and responsive web applications.
        </Text>
      </Col>
    </Row>
  );
}
