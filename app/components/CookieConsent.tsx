import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 p-4 shadow-lg z-50">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 sm:mb-0">
          We use cookies to enhance your browsing experience and analyze our
          traffic. By clicking &quot;Accept&quot;, you consent to our use of
          cookies.
        </p>
        <div className="flex space-x-4">
          <Button
            onClick={handleAccept}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Accept
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open("/privacy-policy", "_blank")}
            className="text-orange-500 hover:text-orange-600 border-orange-500 hover:border-orange-600"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
