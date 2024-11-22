import { useContext, useState } from "react";
import { Link, useLocation } from "@remix-run/react";
import {
  BookOpen,
  ChevronDown,
  Zap,
  Cloud,
  Menu,
  X,
  Laptop,
  Puzzle,
  Rocket,
  Building,
} from "lucide-react";
import logoSrc from "@/assets/logo2.png";
import LandingContext from "~/contexts/landing";

const services = [
  {
    icon: Laptop,
    title: "Custom Development",
    link: "/services/custom-development",
  },
  {
    icon: Puzzle,
    title: "Third-Party API Integration",
    link: "/services/api-integration",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    link: "/services/performance-optimization",
  },
  {
    icon: Building,
    title: "IT Outsourcing",
    link: "/services/it-outsourcing",
  },
  {
    icon: Rocket,
    title: "SEO & Positioning",
    link: "/services/seo-positioning",
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    link: "/services/cloud-migration",
  },
];

export default function Navigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { blogUrl } = useContext(LandingContext);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoSrc} alt="Home" className="h-8 w-8" />
            <span className="text-3xl font-bold text-foreground">
              OnnaSoft, Inc.
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-lg text-foreground hover:text-orange-500 transition-colors flex items-center"
              >
                Services
                <ChevronDown className="h-5 w-5 ml-1" />
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-background rounded-lg shadow-lg py-2 z-10">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      to={service.link}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors duration-150 ease-in-out"
                    >
                      <div className="flex items-center">
                        <service.icon className="h-5 w-5 mr-3 text-orange-500" />
                        <div className="font-medium">{service.title}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/mission"
              className={`text-lg ${
                location.pathname === "/mission"
                  ? "text-orange-500"
                  : "text-foreground hover:text-orange-500"
              } transition-colors`}
            >
              Mission
            </Link>
            <Link
              to="/vision"
              className={`text-lg ${
                location.pathname === "/vision"
                  ? "text-orange-500"
                  : "text-foreground hover:text-orange-500"
              } transition-colors`}
            >
              Vision
            </Link>
            {blogUrl && (
              <a
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-foreground hover:text-orange-500 transition-colors flex items-center"
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
            className="md:hidden text-foreground"
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
        <div className="md:hidden bg-background py-2">
          <div className="container mx-auto px-4">
            <div className="space-y-2">
              {services.map((service) => (
                <Link
                  key={service.title}
                  to={service.link}
                  className="block py-2 text-sm text-foreground hover:bg-muted transition-colors duration-150 ease-in-out"
                  onClick={toggleMobileMenu}
                >
                  <div className="flex items-center">
                    <service.icon className="h-5 w-5 mr-3 text-orange-500" />
                    <div className="font-medium">{service.title}</div>
                  </div>
                </Link>
              ))}
              <Link
                to="/mission"
                className="block py-2 text-sm text-foreground hover:bg-muted transition-colors duration-150 ease-in-out"
                onClick={toggleMobileMenu}
              >
                Mission
              </Link>
              <Link
                to="/vision"
                className="block py-2 text-sm text-foreground hover:bg-muted transition-colors duration-150 ease-in-out"
                onClick={toggleMobileMenu}
              >
                Vision
              </Link>
              {blogUrl && (
                <a
                  href={blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-sm text-foreground hover:bg-muted transition-colors duration-150 ease-in-out"
                  onClick={toggleMobileMenu}
                >
                  Blog
                </a>
              )}
              <Link
                to="/contact"
                className="block py-2 text-sm bg-orange-500 hover:bg-orange-600 text-white rounded transition-colors duration-150 ease-in-out text-center"
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
