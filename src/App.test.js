import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Design menu item', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Design/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Cloud menu item', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Cloud/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Work menu item', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Work/i);
  expect(linkElement).toBeInTheDocument();
});
