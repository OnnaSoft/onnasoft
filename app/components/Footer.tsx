import { useContext } from "react";
import LandingContext from "~/contexts/landing";
import { useScrollToSection } from "~/hooks/scrollToSection";

export default function Footer() {
  const { blogUrl } = useContext(LandingContext);
  const scrollToSection = useScrollToSection();
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3  mb-8 md:mb-0">
            <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              OnnaSoft, Inc.
            </h4>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Your trusted software factory for innovative solutions
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
              Delaware C Corporation
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h5 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("hero");
                  }}
                  className="text-lg text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }}
                  className="text-lg text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                  className="text-lg text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("testimonials");
                  }}
                  className="text-lg text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("faq");
                  }}
                  className="text-lg text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href={blogUrl}
                  className="text-lg text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h5 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Contact
            </h5>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Julio Cesar Jr Torres Moreno
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              +1 (206) 649-8382
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              2261 Market Street, San Francisco, CA 94114 US
            </p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-lg text-gray-700 dark:text-gray-300">
          <p>&copy; 2024 OnnaSoft, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
