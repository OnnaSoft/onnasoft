import { Link } from "@remix-run/react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section id="hero" className="py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8">
            Your Trusted{" "}
            <span className="text-orange-500 dark:text-orange-400">
              Software Factory
            </span>
          </h1>
          <p className="text-3xl text-gray-800 dark:text-gray-200 mb-8">
            Empowering Your Vision with Expert Software Solutions
          </p>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            OnnaSoft, Inc. is a premier software factory dedicated to delivering
            innovative, high-quality software solutions. From custom development
            to outsourcing, we're your partner in digital success.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <Button
              className="w-full md:w-auto text-xl px-10 py-1 h-10 bg-orange-500 hover:bg-orange-600 text-white rounded-md"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Our Services
            </Button>
            <Link
              to="/contact"
              className="inline-block w-full md:w-auto text-xl px-10 py-1 h-10 bg-white hover:bg-gray-50 text-orange-500 hover:text-orange-600 font-medium rounded-md transition-colors duration-300 text-center border-2 border-orange-500 hover:border-orange-600"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
