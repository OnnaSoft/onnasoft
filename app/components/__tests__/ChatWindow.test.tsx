import React, { act } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ChatWindow from "../ChatWindow";
import "@testing-library/jest-dom";

// Mock de `fetch` para pruebas
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        data: { threadId: "12345", assistantResponse: "Assistant reply" },
      }),
  })
) as jest.Mock;

global.Audio = jest.fn().mockImplementation(() => ({
  play: jest.fn().mockResolvedValue(undefined),
}));

describe("ChatWindow Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders ChatWindow component and toggles chat window", async () => {
    render(<ChatWindow enableChat={true} />);

    // Verifica que el botón inicial está presente
    const openChatButton = screen.getByRole("button", { name: /open chat/i });
    expect(openChatButton).toBeInTheDocument();

    // Haz clic en el botón para abrir el chat
    await act(async () => {
      fireEvent.click(openChatButton);
    });

    // Verifica que el título aparece en el DOM
    const titleElement = await screen.findByTestId("title");
    expect(titleElement).toBeInTheDocument();
    // Cierra el chat
    const closeChatButton = screen.getByRole("button", { name: /close chat/i });
    await act(async () => {
      fireEvent.click(closeChatButton);
    });
    //expect(screen.getByTestId("title")).not.toBeInTheDocument();
  });

  test("displays the initial message", async () => {
    render(<ChatWindow enableChat={true} />);

    // Abre el chat
    const openChatButton = screen.getByRole("button", { name: /open chat/i });
    await act(async () => {
      fireEvent.click(openChatButton);
    });
    // Verifica el mensaje inicial
    expect(
      screen.getByText(/Hello! How can I help you today?/i)
    ).toBeInTheDocument();
  });

  test("sends a user message and displays assistant reply", async () => {
    render(<ChatWindow enableChat={true} />);

    // Abre el chat
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /open chat/i }));
    });

    // Escribe un mensaje en el campo de entrada
    const input = screen.getByPlaceholderText(/type your message.../i);
    await act(async () => {
      fireEvent.change(input, { target: { value: "Test message" } });
    });
    expect(input).toHaveValue("Test message");

    // Simula el envío del mensaje
    const sendButton = screen.getByTestId("send-button");
    expect(sendButton).toBeInTheDocument();
    //const sendButton = screen.getByRole("button", { name: /send/i });
    await act(async () => {
      fireEvent.click(sendButton);
    });

    // Verifica que el mensaje del usuario aparece
    await waitFor(() => {
      expect(screen.getByText(/Test message/i)).toBeInTheDocument();
    });

    // Verifica que la respuesta del asistente aparece
    await waitFor(() => {
      expect(screen.getByText(/Assistant reply/i)).toBeInTheDocument();
    });
  });

  test("handles errors when creating a thread", async () => {
    // Mock para simular un error en la creación del thread
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ) as jest.Mock;

    render(<ChatWindow enableChat={true} />);

    // Abre el chat
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /open chat/i }));
    });
    // Verifica que aparece un mensaje de error
    await waitFor(() => {
      expect(
        screen.getByText(
          /Failed to create a chat session. Please try again later./i
        )
      ).toBeInTheDocument();
    });
  });

  test("displays an error message if sending fails", async () => {
    // Mock para simular un error en el envío del mensaje
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: { threadId: "12345" } }),
      })
    ) as jest.Mock;

    render(<ChatWindow enableChat={true} />);

    // Abre el chat
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /open chat/i }));
    });

    // Simula un error en el envío del mensaje
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
      })
    );

    // Escribe un mensaje
    const input = screen.getByPlaceholderText(/type your message.../i);
    await act(async () => {
      fireEvent.change(input, { target: { value: "Test message" } });
    });

    // Envía el mensaje
    const sendButton = screen.getByTestId("send-button");
    await act(async () => {
      fireEvent.click(sendButton);
    });

    // Verifica que aparece un mensaje de error
    await act(async () => {
      await waitFor(() => {
        expect(
          screen.getByText(/Failed to send message. Please try again later./i)
        ).toBeInTheDocument();
      });
    });
  });
});
