import {
  Typography,
  Layout,
  ConfigProvider,
  theme,
  Switch,
  Menu,
  Row,
  Col,
} from 'antd';
import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

const App = () => {
  const ctx = useContext(ThemeContext);
  const { useToken } = theme;
  const { token } = useToken();

  const layoutStyle = {
    overflow: 'auto',
    width: '100%',
  };

  const headerStyle = {
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    lineHeight: '64px',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  };

  const contentStyle = {
    display: 'flex',
    paddingTop: '4rem',
    paddingBottom: '4rem',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: 'calc(100vh - 4rem)',
    lineHeight: '120px',
    backgroundColor: ctx.myTheme ? token.colorBgBase : '',
  };

  const footerStyle = {
    textAlign: 'center',
    minHeight: 64,
    backgroundColor: ctx.myTheme ? token.colorBgBase : '',
  };

  const menuItems = [
    { key: 'about', label: 'About Me' },
    { key: 'projects', label: 'Projects' },
    { key: 'experience', label: 'Experience' },
    { key: 'contact', label: 'Contact' },
  ];

  const menuStyle = {
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'flex-end',
    borderBottom: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const imageStyle = {
    width: '75%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const overlayStyle = {
    position: 'absolute',
    top: '10%',
    left: '12%',
    width: '78%',
    height: '75%',
    border: `4px solid ${ctx.myTheme ? token.colorPrimary : '#333'}`,
    transform: 'rotate(-5deg)',
    borderRadius: '10px',
  };

  const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 2rem',
    maxWidth: '800px',
    textAlign: 'left',
    fontSize: '1.2rem',
    lineHeight: '1.6',
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: ctx.myTheme
          ? theme.defaultAlgorithm
          : theme.darkAlgorithm,
        token: {
          // Modify the token here to changed the theme only at the Layout level
        },
      }}
    >
      <Layout style={layoutStyle}>
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
                inlineCollapsed={false}
              ></Menu>
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
        <Content style={contentStyle}>
          <Row
            style={imageContainerStyle}
            justify="center"
            align="middle"
            gutter={[16, 16]}
          >
            <Col xs={24} md={12}>
              <img
                src="/images/home_bg.webp" // Replace with your optimized photo path
                alt="Tommy Z"
                style={imageStyle}
              />
              <div style={overlayStyle}></div>
            </Col>
            <Col xs={24} md={12}>
              <Text style={textStyle}>
                Hi, I'm Tommy, a passionate Frontend Developer with a
                knack for creating elegant and responsive web
                applications. I enjoy turning complex problems into
                simple, beautiful, and intuitive designs. Let's build
                something amazing together!
              </Text>
            </Col>
          </Row>
        </Content>
        <Footer style={footerStyle}>
          <Row justify="center">
            <Col>
              <Text>© 2024 Tommy Zhang</Text>
              <br />
              <a
                href="https://github.com/tommyy1708"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {' | '}
              <a
                href="https://www.linkedin.com/in/hua-zhang-fiu22"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              {' | '}
              <a
                href="/resume/Hua_FIU_CS.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
