import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import CallToAction from "../CallToAction";
import "@testing-library/jest-dom";

beforeAll(() => {
  // Mock para suprimir las advertencias de React Router
  const originalWarn = console.warn;
  jest.spyOn(console, "warn").mockImplementation((message, ...args) => {
    if (
      typeof message === "string" &&
      (message.includes("React Router Future Flag Warning") ||
        message.includes("v7_startTransition"))
    ) {
      return;
    }
    originalWarn(message, ...args);
  });
});

afterAll(() => {
  jest.restoreAllMocks();
});

test("renders CallToAction component", () => {
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: <CallToAction />,
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
      },
    }
  );

  const { getByText } = render(<RouterProvider router={router} />);

  expect(
    getByText("Ready to Launch Your Digital Transformation?")
  ).toBeInTheDocument();
  expect(getByText("Start Your Journey")).toBeInTheDocument();
});
