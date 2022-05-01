import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemCard from '../ItemCard';

it('item card exist', () => {
  render(<ItemCard />);
  const footerElement = screen.getByTestId("card");
  expect(footerElement).toBeInTheDocument();
});

it('item image card exist', () => {
    render(<ItemCard />);
    const imageElement = screen.getByTestId("image");
    expect(imageElement).toBeInTheDocument();
  });