import {
  Typography,
  Layout,
  Flex,
  Col,
  ConfigProvider,
  theme,
  Switch,
} from 'antd';
import React, {useState, useEffect, useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

const App = () => {
  // const { myTheme, setMyTheme, themeChange } =
    // useContext(ThemeContext);
  const ctx = useContext(ThemeContext);
  const { useToken } = theme;
  const { token } = useToken();

  const headerStyle = {
    textAlign: 'center',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    // backgroundColor:token.colorPrimaryBg ,
  };
  const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 128px)',
    lineHeight: '120px',
  };
  const footerStyle = {
    textAlign: 'center',
    minHeight: 64,
    // backgroundColor: token.colorPrimaryBg,
  };
  const layoutStyle = {
    overflow: 'auto',
    width: '100%',
  };


  useEffect(() => {
    console.log('myTheme', ctx.myTheme);
  }, [ctx.myTheme]);

  return (
    <ConfigProvider
      theme={{
        algorithm: ctx.myTheme
          ? theme.defaultAlgorithm
          : theme.darkAlgorithm,
      }}
    >
      <Layout style={layoutStyle}>
        <Header
          style={{
            ...headerStyle,
            color: ctx.myTheme
              ? token.colorPrimaryBg
              : token.colorPrimaryText,
          }}
        >
          <Flex>
            <Col>
              <Text
                level={4}
                style={{
                  color: ctx.myTheme ? '#f2f2f2' : token.colorPrimaryText,
                }}
              >
                Tommy Zhang
              </Text>
            </Col>
            <Col>
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                onClick={ctx.themeChange}
              />
            </Col>
          </Flex>
        </Header>
        <Content
          style={{
            ...contentStyle,
          }}
        >
          Content
        </Content>
        <Footer
          style={{
            ...footerStyle,
          }}
        >
          Footer
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
