import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadMore from '../LoadMore';

it('test footer element exist', () => {
  render(<LoadMore handleLoading={()=>{}}/>);
  const footerElement = screen.getByTestId("footer");
  expect(footerElement).toBeInTheDocument();
});

it('test loader element exist', () => {
    render(<LoadMore handleLoading={()=>{}}/>);
    const footerElement = screen.getByTestId("loader");
    expect(footerElement).toBeInTheDocument();
  });
  