import { Cloud, Code, Globe, Search, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              to={service.link}
              key={service.title}
              className="bg-background p-8 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1 block focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              <service.icon
                className="h-12 w-12 text-orange-500 dark:text-orange-400 mb-6"
                aria-hidden="true"
              />
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-xl">{service.description}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Ready to transform your ideas into reality?
          </h3>
          <Button
            asChild
            size="lg"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md px-8 bg-orange-500 hover:bg-orange-600 text-white text-lg"
          >
            <Link to="/contact">Start Your Project Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
