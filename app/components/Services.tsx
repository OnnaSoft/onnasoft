import { Cloud, Code, Globe, Search, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "@remix-run/react";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Custom Development",
      description:
        "Tailored software solutions to meet your unique business needs",
      link: "/services/custom-development",
    },
    {
      icon: Globe,
      title: "Third-Party API Integration",
      description:
        "Seamless integration of external services into your applications",
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
      description:
        "Boost your online visibility and reach your target audience",
      link: "/services/seo-positioning",
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless transition of your systems and data to the cloud",
      link: "/services/cloud-migration",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md transition-transform hover:scale-105 block"
            >
              <service.icon className="h-16 w-16 text-orange-500 dark:text-orange-400 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to transform your ideas into reality?
          </h3>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg"
            >
              Start Your Project Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
