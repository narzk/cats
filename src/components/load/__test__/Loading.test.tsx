import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '../Loading';

it('test loading element exist', () => {
  render(<Loading />);
  const footerElement = screen.getByTestId("loading");
  expect(footerElement).toBeInTheDocument();
});
