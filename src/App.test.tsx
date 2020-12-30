import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('show sample text', () => {
  render(<App />);
  const sampleTextElement = screen.getByText(/aaabbb/i);
  expect(sampleTextElement).toBeInTheDocument();
});
