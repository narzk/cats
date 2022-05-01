import React from 'react';
import { render, screen } from '@testing-library/react';
import CategoryNav from '../CategoryNav';

it('container exist', () => {
  render(<CategoryNav categoriesList={[{id:1, name:'someName'}]} handleCategoryNumber={()=>{}}/>);
  const footerElement = screen.getByTestId("topBar");
  expect(footerElement).toBeInTheDocument();
});

it('button exist', () => {
    render(<CategoryNav categoriesList={[{id:1, name:'someName'}]} handleCategoryNumber={()=>{}}/>);
    const footerElement = screen.getByTestId("button-id");
    expect(footerElement).toBeInTheDocument();
  });
