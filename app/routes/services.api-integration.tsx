import { Link, useLoaderData } from "@remix-run/react";
import Layout from "@/components/Layout";
import { loader } from "~/loaders/landing";
import CallToAction from "~/components/CallToAction";
import {
  Globe,
  Server,
  Zap,
  Users,
  Code,
  Lock,
  MessageSquare,
  Mail,
  MapPin,
  BarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import bannerSrc from "~/assets/926493504.webp";

export { loader };

export default function ServicesApiIntegration() {
  const { blogUrl, enableChat } = useLoaderData<typeof loader>();

  return (
    <Layout blogUrl={blogUrl} enableChat={enableChat}>
      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Third-Party API Integration: Seamless Connections
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Expand your application's capabilities with tailored API
                integrations
              </p>
              <Link to="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src={bannerSrc}
                alt="API Integration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our API Integration Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Our API Integration Services?
          </h2>
          <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6">
            <p>
              In today's rapidly evolving and interconnected business landscape,
              leveraging external services has become not just beneficial, but
              essential for providing a seamless, powerful, and competitive user
              experience. The ability to integrate diverse functionalities and
              data sources can be the difference between a good application and
              a great one that truly meets user needs and expectations.
            </p>
            <p>
              Our API integration services are designed to transform your
              systems into a robust, feature-rich ecosystem that perfectly
              aligns with your unique business needs and significantly enhances
              your user experience. By seamlessly connecting your application
              with best-in-class third-party services, we enable you to focus on
              your core competencies while leveraging the strengths of
              specialized providers.
            </p>
            <p>
              Whether you're looking to incorporate secure payment gateways,
              harness the power of AI-driven chatbots, implement advanced
              analytics, or tap into social media platforms, our expert team
              ensures smooth, efficient, and secure integrations. We don't just
              connect systems; we create synergies that drive business growth,
              improve operational efficiency, and deliver exceptional value to
              your users.
            </p>
            <p>
              With our API integration services, you're not just keeping pace
              with the digital transformation – you're staying ahead of the
              curve, ready to adapt to new technologies and market demands as
              they emerge. Choose us to unlock the full potential of your
              applications and provide your users with a truly integrated,
              powerful, and seamless experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: Zap,
                title: "Expanded Functionality",
                description:
                  "Access advanced features to elevate user experience and streamline operations.",
              },
              {
                icon: Server,
                title: "Improved Efficiency",
                description:
                  "Simplify workflows by linking your applications with essential external services.",
              },
              {
                icon: Code,
                title: "Customized Solutions",
                description:
                  "Tailor our API integration services to meet your specific requirements.",
              },
              {
                icon: Users,
                title: "Enhanced User Experience",
                description:
                  "Offer a unified platform where users can complete various tasks seamlessly.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
              >
                <feature.icon className="h-12 w-12 text-orange-500 dark:text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our API Integration Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our API Integration Process
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
            We follow a comprehensive and systematic approach to ensure seamless
            integration of third-party APIs into your existing systems. Our
            process is designed to maximize efficiency, minimize risks, and
            deliver optimal results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Requirements Analysis",
                description:
                  "Understand your integration goals and identify key APIs.",
              },
              {
                step: "2",
                title: "API Evaluation",
                description:
                  "Evaluate each API for compatibility, security, and performance.",
              },
              {
                step: "3",
                title: "Integration Design",
                description:
                  "Develop a comprehensive plan for API interactions.",
              },
              {
                step: "4",
                title: "Development and Testing",
                description: "Implement and thoroughly test API integrations.",
              },
              {
                step: "5",
                title: "Deployment and Monitoring",
                description:
                  "Carefully deploy and establish monitoring systems.",
              },
              {
                step: "6",
                title: "Ongoing Support",
                description: "Provide continuous monitoring and updates.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <div className="text-3xl font-bold text-orange-500 dark:text-orange-400 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of API Integrations We Offer Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Types of API Integrations We Offer
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
            We specialize in integrating a wide range of third-party APIs to
            enhance your application's functionality. From payment processing to
            social media integration, we've got you covered.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Payment Gateways",
                description:
                  "Integrate trusted payment platforms for secure transactions.",
              },
              {
                icon: MessageSquare,
                title: "AI-Powered Bots",
                description:
                  "Enhance user interactions with AI-driven chatbots and support systems.",
              },
              {
                icon: Mail,
                title: "Bulk Email Services",
                description:
                  "Connect with popular email platforms for mass communications.",
              },
              {
                icon: Globe,
                title: "Social Media Platforms",
                description:
                  "Streamline engagement and content sharing across social networks.",
              },
              {
                icon: MapPin,
                title: "Mapping Services",
                description:
                  "Incorporate geolocation and mapping capabilities.",
              },
              {
                icon: Server,
                title: "Cloud Services",
                description:
                  "Connect with cloud platforms for scalable data storage and processing.",
              },
              {
                icon: BarChart,
                title: "Analytics and Reporting",
                description:
                  "Implement advanced data analytics and reporting tools.",
              },
            ].map((integration, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
              >
                <integration.icon className="h-12 w-12 text-orange-500 dark:text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {integration.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <CallToAction />
        </div>
      </section>
    </Layout>
  );
}
