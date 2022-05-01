import React from "react";
import { render, screen } from "@testing-library/react";
import CardContainer from "../CardContainer";

it("container exist", () => {
  render(
    <CardContainer
      listItems={[
        {
          breeds: [],
          categories: [{ id: 1, name: "someName" }],
          height: 10,
          id: "1",
          url: "",
          width: 10,
        },
      ]}
    />
  );
  const footerElement = screen.getByTestId("container");
  expect(footerElement).toBeInTheDocument();
});


