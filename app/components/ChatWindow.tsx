import React, { useState, useEffect, useRef, useCallback } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";

export type ChatWindowProps = Readonly<{
  enableChat: boolean;
}>;

let isOpened = false;
const disableAutoOpen = true

export default function ChatWindow({ enableChat }: ChatWindowProps) {
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    [
      {
        isUser: false,
        text: "Hello! How can I help you today?",
      },
    ]
  );
  const [inputMessage, setInputMessage] = useState("");
  const [threadId, setThreadId] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isTabActive, setIsTabActive] = useState(true);
  const [originalTitle, setOriginalTitle] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);

  const notifyUser = useCallback(() => {
    if (!isTabActive) {
      let messageCount = 0;
      const interval = setInterval(() => {
        document.title =
          messageCount % 2 === 0 ? "New message!" : originalTitle;
        messageCount++;
        if (messageCount > 10 || isTabActive) {
          clearInterval(interval);
          document.title = originalTitle;
        }
      }, 1000);

      return () => {
        clearInterval(interval);
        document.title = originalTitle;
      };
    }
  }, [isTabActive, originalTitle]);

  const playSound = useCallback(() => {
    if (audio && hasInteracted) {
      audio
        .play()
        .catch((error) => console.error("Error playing sound:", error));
    }
  }, [audio, hasInteracted]);

  const toggleChat = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (newIsOpen) {
      isOpened = true;
    }
  };

  const createThread = async () => {
    try {
      const response = await fetch("/api/chat/thread", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error("Failed to create chat thread");
      }

      const data = await response.json();
      setThreadId(data.data.threadId);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Failed to create a chat session. Please try again later.",
          isUser: false,
        },
      ]);
      console.error("Failed to create chat thread:", error);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isSending || !threadId) return;

    const userMessage = inputMessage.trim();
    setMessages([...messages, { text: userMessage, isUser: true }]);
    setInputMessage("");
    setIsSending(true);

    try {
      const response = await fetch(`/api/chat/thread/${threadId}/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      const assistantResponse =
        data.data.assistantResponse || "No response received.";

      setMessages((prev) => [
        ...prev,
        { text: assistantResponse, isUser: false },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Failed to send message. Please try again later.",
          isUser: false,
        },
      ]);
      console.error("Failed to send message:", error);
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
      document.removeEventListener("click", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
    };
  }, []);

  useEffect(() => {
    setAudio(new Audio("/notification-sound.mp3"));
    setOriginalTitle(document.title);

    const handleVisibilityChange = () => {
      setIsTabActive(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!chatWindowRef.current?.scrollTo) return;
    chatWindowRef.current?.scrollTo({
      top: chatWindowRef.current.scrollHeight,
      behavior: "smooth",
    });
    if (messages.length > 1 && !messages[messages.length - 1].isUser) {
      playSound();
      notifyUser();
    }
  }, [messages, playSound, notifyUser]);

  useEffect(() => {
    if (isOpen && !threadId) {
      createThread();
    }
  }, [isOpen, threadId]);

  useEffect(() => {
    if (disableAutoOpen) return;
    const timer = setTimeout(() => {
      if (isOpened) return;
      setIsOpen(true);
      isOpened = true;
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!enableChat) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="rounded-full w-16 h-16 bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </Button>
      )}
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl md:w-[28rem] w-[22rem] h-[36rem] flex flex-col">
          <div className="p-4 bg-orange-500 text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold" data-testid="title">
              Chat with us (beta)
            </h3>
            <Button
              onClick={toggleChat}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-orange-600 rounded-full"
              aria-label="Close chat"
            >
              <X size={20} />
            </Button>
          </div>
          <div ref={chatWindowRef} className="flex-grow p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={msg.text + index}
                className={`mb-2 ${msg.isUser ? "text-right" : "text-left"}`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    msg.isUser
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  }`}
                >
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </span>
              </div>
            ))}
          </div>
          <form
            onSubmit={sendMessage}
            className="p-4 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex gap-2">
              <input
                id="message"
                type="text"
                name="message"
                autoComplete="off"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-3 py-2 border rounded-l-md h-10 bg-white"
              />
              <Button
                data-testid="send-button"
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 h-10 text-white rounded-r-md"
                disabled={isSending}
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
