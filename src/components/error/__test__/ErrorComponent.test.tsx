import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorComponent from '../ErrorComponent';

it('test footer element exist', () => {
  render(<ErrorComponent />);
  const footerElement = screen.getByTestId("footer");
  expect(footerElement).toBeInTheDocument();
});
