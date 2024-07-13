import React from 'react';
import { render, screen } from '@testing-library/react';
import FundRacing from './fund-racing';

test('renders learn react link', () => {
  render(<FundRacing />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
