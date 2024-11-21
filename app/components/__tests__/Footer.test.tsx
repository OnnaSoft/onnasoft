import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Footer from "../Footer";
import "@testing-library/jest-dom";

// Función para renderizar componentes con Router
const renderWithRouter = (ui: React.ReactElement, route = "/") => {
  const router = createMemoryRouter(
    [
      {
        path: route,
        element: ui,
      },
    ],
    {
      initialEntries: [route],
    }
  );
  return render(<RouterProvider router={router} />);
};

// Suprime warnings específicos
beforeAll(() => {
  const originalWarn = console.warn;
  jest.spyOn(console, "warn").mockImplementation((message, ...args) => {
    if (
      typeof message === "string" &&
      (message.includes("React Router Future Flag Warning") ||
        message.includes("Warning:"))
    ) {
      return;
    }
    originalWarn(message, ...args);
  });
});

afterAll(() => {
  jest.restoreAllMocks();
});

test("renders Footer component", () => {
  renderWithRouter(<Footer />);

  expect(screen.getByText(/Julio Cesar Jr Torres Moreno/i)).toBeInTheDocument();
  expect(screen.getByText(/\+1 \(206\) 649-8382/i)).toBeInTheDocument();
  expect(
    screen.getByText(/2261 Market Street, San Francisco, CA 94114 US/i)
  ).toBeInTheDocument();
});
