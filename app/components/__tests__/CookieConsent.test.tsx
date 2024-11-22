import { render, screen, fireEvent } from "@testing-library/react";
import CookieConsent from "../CookieConsent";
import "@testing-library/jest-dom";

test("renders CookieConsent component", () => {
  render(<CookieConsent />);
  expect(
    screen.getByText(/We use cookies to enhance your browsing experience/i)
  ).toBeInTheDocument();
});

test("accepts cookies and hides the banner", () => {
  render(<CookieConsent />);
  const acceptButton = screen.getByRole("button", { name: /Accept/i });
  fireEvent.click(acceptButton);
  expect(
    screen.queryByText(/We use cookies to enhance your browsing experience/i)
  ).not.toBeInTheDocument();
});
