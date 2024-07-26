import React from 'react';
import App from './App';
import { render, screen, fireEvent } from '@testing-library/react';

test('my test', () => {
  render(<App />);
});
