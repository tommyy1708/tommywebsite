import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeContext } from './context/ThemeContext';

const themeContextValue = {
  myTheme: true,
  themeChange: jest.fn(),
};

test('renders learn react link', () => {
  render(
    <ThemeContext.Provider value={themeContextValue}>
      <App />
    </ThemeContext.Provider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
