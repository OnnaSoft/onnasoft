import React from "react";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useScrollToSection } from "~/hooks/scrollToSection";
import Footer from "~/components/Footer";
import { useLocation, useNavigate } from "@remix-run/react";
import ChatWindow from "./ChatWindow";
import logoSrc from "~/assets/logo.png";

interface LayoutProps {
  blogUrl: string;
  enableChat: boolean;
}

export default function Layout({
  children,
  blogUrl,
  enableChat,
}: React.PropsWithChildren<LayoutProps>) {
  const scrollToSection = useScrollToSection();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <header className="sticky top-0 z-50 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <div className="flex justify-between items-center">
            <a
              href="#hero"
              onClick={scrollToSection}
              className="flex items-center space-x-2"
            >
              <img src={logoSrc} alt="OnnaSoft, Inc." className="h-8 w-8" />
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                OnnaSoft, Inc.
              </span>
            </a>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                onClick={scrollToSection}
                className="text-lg text-gray-700 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={scrollToSection}
                className="text-lg text-gray-700 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400 transition-colors"
              >
                About
              </a>
              <a
                href="#testimonials"
                onClick={scrollToSection}
                className="text-lg text-gray-700 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400 transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                onClick={scrollToSection}
                className="text-lg text-gray-700 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400 transition-colors"
              >
                FAQ
              </a>
              <a
                href="#contact"
                onClick={scrollToSection}
                className="text-lg text-gray-700 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400 transition-colors"
              >
                Contact
              </a>
              {blogUrl && (
                <a
                  href={blogUrl}
                  className="text-lg text-gray-700 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400 transition-colors flex items-center"
                >
                  <BookOpen className="h-5 w-5 mr-1" />
                  Blog
                </a>
              )}
            </nav>
            <Button
              className="hidden md:inline-flex text-lg bg-red-500 hover:bg-red-600 text-white"
              onClick={(e) => {
                e.preventDefault();

                if (location.pathname !== "/") {
                  navigate("/");
                }

                setTimeout(() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <Footer />
      {enableChat && <ChatWindow />}
    </div>
  );
}
