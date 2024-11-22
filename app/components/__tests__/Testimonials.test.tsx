import { render, screen } from "@testing-library/react";
import Testimonials from "../Testimonials";
import "@testing-library/jest-dom";

test("renders Testimonials component", () => {
  render(<Testimonials />);
  expect(
    screen.getByText(/OnnaSoft has been instrumental/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Carlos Alberto Navarrete Arias/i)
  ).toBeInTheDocument();
});
