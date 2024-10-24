import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";

export default function ChatWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );
  const [inputMessage, setInputMessage] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, isUser: true }]);
      setInputMessage("");
      // Simulate a response (replace with actual chat logic)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "Thanks for your message! Our team will get back to you soon.",
            isUser: false,
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="rounded-full w-16 h-16 bg-red-500 hover:bg-red-600 text-white shadow-lg"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </Button>
      )}
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="p-4 bg-red-500 text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat with us</h3>
            <Button
              onClick={toggleChat}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-red-600 rounded-full"
              aria-label="Close chat"
            >
              <X size={20} />
            </Button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${msg.isUser ? "text-right" : "text-left"}`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    msg.isUser
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <form
            onSubmit={sendMessage}
            className="p-4 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-3 py-2 border rounded-l-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <Button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white rounded-r-md"
              >
                <Send size={20} />
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
