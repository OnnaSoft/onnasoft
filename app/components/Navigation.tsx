import { useState } from "react";
import { Link, useLocation } from "@remix-run/react";
import {
  BookOpen,
  ChevronDown,
  Code,
  Globe,
  Zap,
  Users,
  Search,
  Cloud,
  Menu,
  X,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored software solutions to meet your unique business needs",
    link: "/services/custom-development",
  },
  {
    icon: Globe,
    title: "Third-Party API Integration",
    description: "Seamless integration of external services into your applications",
    link: "/services/api-integration",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Enhancing speed and efficiency of your software",
    link: "/services/performance-optimization",
  },
  {
    icon: Users,
    title: "IT Outsourcing",
    description: "Flexible staffing solutions for your development needs",
    link: "/services/it-outsourcing",
  },
  {
    icon: Search,
    title: "SEO & Positioning",
    description: "Boost your online visibility and reach your target audience",
    link: "/services/seo-positioning",
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamless transition of your systems and data to the cloud",
    link: "/services/cloud-migration",
  },
];

const programmingLanguages = [
  { name: "Golang", link: "/languages/golang" },
  { name: "JavaScript/TypeScript", link: "/languages/javascript-typescript" },
  { name: "Python", link: "/languages/python" },
  { name: "SQL", link: "/languages/sql" },
];

export default function Navigation({ blogUrl }: { blogUrl?: string }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgrammingLanguagesOpen, setIsProgrammingLanguagesOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="OnnaSoft, Inc." className="h-8 w-8" />
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              OnnaSoft, Inc.
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-lg text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors flex items-center"
              >
                Services
                <ChevronDown className="h-5 w-5 ml-1" />
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-[600px] bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 grid grid-cols-2">
                  <div>
                    <h3 className="px-4 py-2 text-sm font-semibold">Services</h3>
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        <div className="flex items-center">
                          <service.icon className="h-5 w-5 mr-2" />
                          <div>
                            <div className="font-semibold">{service.title}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {service.description}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div>
                    <h3 className="px-4 py-2 text-sm font-semibold">Programming Languages</h3>
                    {programmingLanguages.map((lang, index) => (
                      <Link
                        key={index}
                        to={lang.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        {lang.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/mission"
              className={`text-lg ${
                location.pathname === "/mission"
                  ? "text-orange-500 dark:text-orange-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
              } transition-colors`}
            >
              Mission
            </Link>
            <Link
              to="/vision"
              className={`text-lg ${
                location.pathname === "/vision"
                  ? "text-orange-500 dark:text-orange-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
              } transition-colors`}
            >
              Vision
            </Link>
            {blogUrl && (
              <a
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors flex items-center"
              >
                <BookOpen className="h-5 w-5 mr-1" />
                Blog
              </a>
            )}
          </nav>
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="text-lg bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
            >
              Schedule a Demo
            </Link>
          </div>
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 py-2">
          <div className="container mx-auto px-4">
            <div className="space-y-2">
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full text-left text-lg text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors flex items-center justify-between"
                >
                  Services
                  <ChevronDown className="h-5 w-5" />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 space-y-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.link}
                        className="block pl-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                        onClick={() => {
                          setIsServicesOpen(false);
                          toggleMobileMenu();
                        }}
                      >
                        <div className="flex items-center">
                          <service.icon className="h-5 w-5 mr-2" />
                          <div>{service.title}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => setIsProgrammingLanguagesOpen(!isProgrammingLanguagesOpen)}
                  className="w-full text-left text-lg text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors flex items-center justify-between"
                >
                  Programming Languages
                  <ChevronDown className="h-5 w-5" />
                </button>
                {isProgrammingLanguagesOpen && (
                  <div className="mt-2 space-y-2">
                    {programmingLanguages.map((lang, index) => (
                      <Link
                        key={index}
                        to={lang.link}
                        className="block pl-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                        onClick={() => {
                          setIsProgrammingLanguagesOpen(false);
                          toggleMobileMenu();
                        }}
                      >
                        {lang.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/mission"
                className="block text-lg text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                Mission
              </Link>
              <Link
                to="/vision"
                className="block text-lg text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                Vision
              </Link>
              {blogUrl && (
                <a
                  href={blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors flex items-center"
                  onClick={toggleMobileMenu}
                >
                  <BookOpen className="h-5 w-5 mr-1" />
                  Blog
                </a>
              )}
              <Link
                to="/contact"
                className="block text-lg bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
                onClick={toggleMobileMenu}
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}