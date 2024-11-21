import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import About from "../About";

test("renders About component", () => {
  render(<About />);
  const linkElement = screen.getByText(/about/i);
  // @ts-ignore
  expect(linkElement).toBeInTheDocument();
});
