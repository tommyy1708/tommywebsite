import {
  Typography,
  Layout,
  ConfigProvider,
  theme,
  Row,
  Col,
} from 'antd';
import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import HeaderMenu from './Components/HeaderMenu';

const { Footer, Content } = Layout;
const { Text } = Typography;

const App = () => {
  const ctx = useContext(ThemeContext);
  const {myTheme} = ctx;
  const { useToken } = theme;
  const { token } = useToken();

  const layoutStyle = {
    overflow: 'auto',
    width: '100%',
  };


  const contentStyle = {
    display: 'flex',
    paddingTop: '4rem',
    paddingBottom: '4rem',
    alignItems: 'stretch',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: 'calc(100vh - 4rem)',
    lineHeight: '120px',

    backgroundColor: myTheme ? token.colorBgBase : '',
  };

  const footerStyle = {
    textAlign: 'center',
    minHeight: 64,
    backgroundColor: myTheme ? token.colorBgBase : '',
  };

  console.log(`${process.env.PUBLIC_URL}/public/resume/Hua_FIU_CS.pdf`);

  return (
    <ConfigProvider
      theme={{
        algorithm: myTheme
          ? theme.defaultAlgorithm
          : theme.darkAlgorithm,
        token: {
          // Modify the token here to changed the theme only at the Layout level
        },
      }}
    >
      <Router basename="/tommywebsite">
        <Layout style={layoutStyle}>
          <HeaderMenu />
          <Content className="image-container" style={contentStyle}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
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
                  href={`${process.env.PUBLIC_URL}/public/resume/Hua_FIU_CS.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Col>
            </Row>
          </Footer>
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
