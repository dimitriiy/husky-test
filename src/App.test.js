import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  const linkElement = screen.getByText(/learn r2eact/i);
  expect(linkElement).toBeInTheDocument();
});
