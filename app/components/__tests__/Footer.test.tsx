import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import "@testing-library/jest-dom";

test("renders Footer component", () => {
  render(<Footer />);
  expect(screen.getByText(/Julio Cesar Jr Torres Moreno/i)).toBeInTheDocument();
  expect(screen.getByText(/\+1 \(206\) 649-8382/i)).toBeInTheDocument();
  expect(
    screen.getByText(/2261 Market Street, San Francisco, CA 94114 US/i)
  ).toBeInTheDocument();
});
