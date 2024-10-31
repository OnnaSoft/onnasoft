import { Link, useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";
import { loader } from "~/loaders/landing";
import CallToAction from "~/components/CallToAction";
import {
  Server,
  Users,
  Globe,
  Database,
  Smartphone,
  Cog,
  ChevronDown,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroSrc from "~/assets/1345548207.webp";
import whyCustomSrc from "~/assets/621349102.webp";
import customDevelopmentProcess from "~/assets/2168753305.webp";

export { loader };

export default function CustomDevelopment() {
  const { blogUrl, enableChat } = useLoaderData<typeof loader>();
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <Layout blogUrl={blogUrl} enableChat={enableChat}>
      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Custom Development: Tailored Software Solutions
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Empowering your business with bespoke software solutions across
                web, mobile, API, and database platforms.
              </p>
              <Link to="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src={heroSrc}
                alt="Custom Software Development"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Custom Development Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Custom Development?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Custom software development offers a range of benefits over
                off-the-shelf solutions, providing an edge that can transform
                the way you do business. Here's why custom development with
                OnnaSoft can be a game-changer for your organization:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700 dark:text-gray-300">
                    <strong>Tailored to Your Exact Needs and Processes</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <Server className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700 dark:text-gray-300">
                    <strong>
                      Scalable and Flexible to Grow with Your Business
                    </strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <Cog className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700 dark:text-gray-300">
                    <strong>Seamless Integration with Existing Systems</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700 dark:text-gray-300">
                    <strong>Ongoing Support and Maintenance</strong>
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src={whyCustomSrc}
                alt="Custom Development Benefits"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Custom Development Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Custom Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={customDevelopmentProcess}
                alt="Development Process"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-4">
              {[
                {
                  id: "requirements",
                  title: "Requirements Gathering",
                  content:
                    "We work closely with your team to analyze your workflows and define requirements for web, mobile, API, and database solutions.",
                },
                {
                  id: "design",
                  title: "Design and Planning",
                  content:
                    "We create a roadmap that aligns with your unique needs, outlining project plans, wireframes, API structures, and database architectures.",
                },
                {
                  id: "development",
                  title: "Development",
                  content:
                    "Using agile methodologies, we develop the solution iteratively, ensuring flexibility and continuous feedback across all platforms.",
                },
                {
                  id: "testing",
                  title: "Testing and Quality Assurance",
                  content:
                    "We perform comprehensive testing across web, mobile, API, and database layers to ensure your solution meets the highest standards.",
                },
                {
                  id: "deployment",
                  title: "Deployment and Training",
                  content:
                    "We handle deployment carefully and provide comprehensive training for your team to effectively use and maintain the new solution.",
                },
                {
                  id: "support",
                  title: "Ongoing Support",
                  content:
                    "Our support services ensure that your applications, databases, and APIs stay up-to-date, secure, and capable of adapting to new requirements.",
                },
              ].map((step) => (
                <div
                  key={step.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  <button
                    className="flex justify-between items-center w-full p-4 text-left"
                    onClick={() => toggleAccordion(step.id)}
                  >
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transform transition-transform ${
                        activeAccordion === step.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeAccordion === step.id && (
                    <div className="p-4 bg-gray-50 dark:bg-gray-800">
                      <p className="text-lg text-gray-600 dark:text-gray-300">
                        {step.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Healthcare",
                description:
                  "Custom applications for patient data management, mobile health monitoring, secure APIs, and databases for patient records.",
              },
              {
                icon: Database,
                title: "Finance",
                description:
                  "Secure transaction processing platforms, mobile banking apps, API integrations with payment systems, and databases for compliance and reporting.",
              },
              {
                icon: Smartphone,
                title: "E-commerce",
                description:
                  "Scalable web stores, mobile shopping apps, APIs for product and inventory management, and databases for customer insights.",
              },
              {
                icon: Server,
                title: "Aerospace",
                description:
                  "Web-based monitoring systems, mobile analytics tools, robust APIs for data integration, and databases for operational insights.",
              },
              {
                icon: Cog,
                title: "Manufacturing",
                description:
                  "Process automation tools, mobile inspection apps, supply chain APIs, and databases for inventory and resource management.",
              },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
              >
                <industry.icon className="h-12 w-12 text-orange-500 dark:text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {industry.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <CallToAction />
        </div>
      </section>
    </Layout>
  );
}
