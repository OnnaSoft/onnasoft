import { useContext } from "react";
import { Link } from "@remix-run/react";
import { Button } from "./ui/button";
import LandingContext from "~/contexts/landing";
import { useScrollToSection } from "~/hooks/scrollToSection";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const { blogUrl } = useContext(LandingContext);
  const scrollToSection = useScrollToSection();

  const quickLinks = [
    { name: "Home", section: "hero" },
    { name: "Services", section: "services" },
    { name: "About", section: "about" },
    { name: "Testimonials", section: "testimonials" },
    { name: "FAQ", section: "faq" },
  ];

  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-2xl font-semibold mb-4 text-foreground">
              OnnaSoft, Inc.
            </h4>
            <p className="text-lg text-muted-foreground mb-2">
              Your trusted software factory for innovative solutions
            </p>
            <p className="text-lg text-muted-foreground">
              Delaware C Corporation
            </p>
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-4 text-foreground">
              Quick Links
            </h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.section}>
                  <Button
                    variant="link"
                    className="text-lg p-0 h-auto text-muted-foreground hover:text-primary"
                    onClick={() => scrollToSection(link.section)}
                  >
                    {link.name}
                  </Button>
                </li>
              ))}
              <li>
                <Button
                  variant="link"
                  className="text-lg p-0 h-auto text-muted-foreground hover:text-primary"
                  asChild
                >
                  <Link to={blogUrl}>Blog</Link>
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-semibold mb-4 text-foreground">
              Contact
            </h5>
            <ul className="space-y-2">
              <li className="flex items-center text-lg text-muted-foreground">
                <Mail className="mr-2 h-5 w-5" />
                Julio Cesar Jr Torres Moreno
              </li>
              <li className="flex items-center text-lg text-muted-foreground">
                <Phone className="mr-2 h-5 w-5" />
                +1 (206) 649-8382
              </li>
              <li className="flex items-center text-lg text-muted-foreground">
                <MapPin className="mr-2 h-5 w-5" />
                2261 Market Street, San Francisco, CA 94114 US
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-muted text-center text-lg text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} OnnaSoft, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
