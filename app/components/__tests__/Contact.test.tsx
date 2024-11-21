import React, { act } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Contact from "../Contact";
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

test("renders Contact component", () => {
  renderWithRouter(<Contact />);

  expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Message/i)).toBeInTheDocument();
});

test("submits the contact form", async () => {
  renderWithRouter(<Contact />);
  // Cambia los valores de los campos del formulario
  fireEvent.change(screen.getByPlaceholderText(/Name/i), {
    target: { value: "John Doe" },
  });
  expect(screen.getByPlaceholderText(/Name/i)).toHaveValue("John Doe");

  fireEvent.change(screen.getByPlaceholderText(/Email/i), {
    target: { value: "john@example.com" },
  });
  expect(screen.getByPlaceholderText(/Email/i)).toHaveValue("john@example.com");

  fireEvent.change(screen.getByPlaceholderText(/Message/i), {
    target: { value: "Hello, this is a test message." },
  });
  expect(screen.getByPlaceholderText(/Message/i)).toHaveValue(
    "Hello, this is a test message."
  );

  // Simula el envío del formulario
  const sendButton = screen.getByRole("button", { name: /Send Message/i });
  expect(sendButton).toBeInTheDocument();

  await act(async () => {
    fireEvent.click(sendButton);
  });
});
