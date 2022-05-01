import React from "react";
import { render, screen } from "@testing-library/react";
import CategorySideBar from "../CategorySideBar";

it("container sidebar exist", () => {
  render(
    <CategorySideBar
      categoriesList={[{ id: 1, name: "someName" }]}
      handleCategoryNumber={() => {}}
      handleOpenClose={() => {}}
      isOpen
    />
  );
  const footerElement = screen.getByTestId("sideBar");
  expect(footerElement).toBeInTheDocument();
});

it("items exist", () => {
  render(
    <CategorySideBar
      categoriesList={[{ id: 1, name: "someName" }]}
      handleCategoryNumber={() => {}}
      handleOpenClose={() => {}}
      isOpen
    />
  );
  const footerElement = screen.getByTestId("item-id");
  expect(footerElement).toBeInTheDocument();
});
