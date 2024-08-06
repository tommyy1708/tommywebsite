import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Row, Col, Switch, Typography } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { ThemeContext } from '../context/ThemeContext';
const { Header } = Layout;
const { Text } = Typography;

const HeaderMenu = () => {
  const location = useLocation();
  const ctx = useContext(ThemeContext);
  const [current, setCurrent] = useState(location.pathname);

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location]);

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const headerStyle = {
    textAlign: 'center',
    position: 'fixed', // Fix the header at the top
    top: 0,
    left: 0,
    width: '100%',
    lineHeight: '64px',
    backgroundColor: `${ctx.myTheme ? '#fff' : '#40a9ff'}`,
    zIndex: 1000, // Ensure the header stays on top
    // boxShadow: `${ctx.myTheme ? 'none' : '0 2px 8px #f0f1f2'}`, // Optional: Add a shadow for better separation
  };

  const menuStyle = {
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'flex-end',
    borderBottom: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  };

  const menuItems = [
    { key: '/', label: <Link to="/">About Me</Link> },
    { key: '/projects', label: <Link to="/projects">Projects</Link> },
    { key: '/blog', label: <Link to="/blog">Blog</Link> },
    { key: '/contact', label: <Link to="/contact">Contact</Link> },
  ];

  return (
    <Header style={headerStyle}>
      <Row justify="space-between" align="middle">
        <Col xs={10} md={8}>
          <Text level={4}>Tommy Zhang</Text>
        </Col>
        <Col offset={4} xs={4} md={8}>
          <Menu
            style={menuStyle}
            mode="horizontal"
            items={menuItems}
            selectedKeys={[current]}
            onClick={onClick}
          />
        </Col>
        <Col span={2} xs={4} md={4}>
          <Switch
            checkedChildren={<SunOutlined />}
            unCheckedChildren={<MoonOutlined />}
            checked={ctx.myTheme}
            onClick={ctx.themeChange}
          />
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderMenu;
