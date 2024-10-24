import { Cloud, Code, Globe, Search, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <Code className="h-16 w-16 text-red-500 dark:text-red-400 mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Custom Development
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Tailored software solutions to meet your unique business needs
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <Globe className="h-16 w-16 text-red-500 dark:text-red-400 mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Web & Mobile Apps
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Cutting-edge applications for a connected world
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <Zap className="h-16 w-16 text-red-500 dark:text-red-400 mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Performance Optimization
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Enhancing speed and efficiency of your software
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <Users className="h-16 w-16 text-red-500 dark:text-red-400 mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              IT Outsourcing
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Flexible staffing solutions for your development needs
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <Search className="h-16 w-16 text-red-500 dark:text-red-400 mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              SEO & Positioning
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Boost your online visibility and reach your target audience
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <Cloud className="h-16 w-16 text-red-500 dark:text-red-400 mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Cloud Migration
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Seamless transition of your systems and data to the cloud
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to transform your ideas into reality?
          </h3>
          <Button
            className="text-xl px-10 py-4 bg-red-500 hover:bg-red-600 text-white"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Your Project Now
          </Button>
        </div>
      </div>
    </section>
  );
}
