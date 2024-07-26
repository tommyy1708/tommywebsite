import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
// import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <ConfigProvider
      theme={{
        token: {

          // Modify the token here to changed the theme of the whole app
        },
      }}
    > */}
      <ThemeProvider>
          <App />
      </ThemeProvider>
    {/* </ConfigProvider> */}
  </React.StrictMode>
);
