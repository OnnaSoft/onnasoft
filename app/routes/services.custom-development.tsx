import { MetaFunction } from "@remix-run/react";
import Layout from "@/components/Layout";
import {
  Server,
  Users,
  Globe,
  Database,
  Smartphone,
  Cog,
  Zap,
  ChevronDown,
} from "lucide-react";
import heroSrc from "~/assets/1345548207.webp";
import whyCustomSrc from "~/assets/621349102.webp";
import customDevelopmentProcess from "~/assets/174080919.webp";
import { useState } from "react";
import CallToAction from "~/components/CallToAction";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Custom Development: Tailored Software Solutions for Your Business | OnnaSoft",
    },
    {
      property: "og:title",
      content:
        "Custom Development: Tailored Software Solutions for Your Business | OnnaSoft",
    },
    {
      name: "description",
      content:
        "OnnaSoft specializes in creating tailored software solutions designed to fit your unique business needs. From web and mobile applications to APIs and databases, we deliver custom, scalable, and secure software to empower your growth.",
    },
    {
      name: "keywords",
      content:
        "custom software development, tailored software solutions, OnnaSoft, web development, mobile app development, API integration, database solutions, scalable software, secure software, business software solutions, enterprise software, startup software, digital transformation, agile development, software consulting, custom applications",
    },
  ];
};

export default function CustomDevelopment() {
  const [activeWhyChoose, setActiveWhyChoose] = useState<number | null>(null);
  const [activeProcess, setActiveProcess] = useState<number | null>(null);

  const toggleWhyChoose = (index: number) => {
    setActiveWhyChoose(activeWhyChoose === index ? null : index);
  };

  const toggleProcess = (index: number) => {
    setActiveProcess(activeProcess === index ? null : index);
  };

  const whyChooseItems = [
    {
      icon: Zap,
      title: "Tailored to Your Exact Needs and Processes",
      description:
        "We design solutions that fit seamlessly into your existing workflows, enhancing productivity across web, mobile, API, and database platforms.",
    },
    {
      icon: Server,
      title: "Scalable and Flexible to Grow with Your Business",
      description:
        "Our solutions are built with the future in mind, allowing for easy expansion and adaptation as your business evolves.",
    },
    {
      icon: Cog,
      title: "Seamless Integration with Existing Systems",
      description:
        "We ensure that our custom software integrates smoothly with your current tech stack, creating a cohesive digital ecosystem.",
    },
    {
      icon: Users,
      title: "Ongoing Support and Maintenance",
      description:
        "Our commitment doesn't end at deployment. We provide continuous support to keep your software secure, up-to-date, and optimized.",
    },
  ];

  const processSteps = [
    {
      title: "Requirements Gathering",
      description:
        "We begin by working closely with your team to thoroughly understand your business processes, challenges, and objectives.",
    },
    {
      title: "Design and Planning",
      description:
        "We create a detailed roadmap that outlines the project plan, wireframes, API structures, and database architectures.",
    },
    {
      title: "Development",
      description:
        "Using agile methodologies, our expert developers bring your solution to life.",
    },
    {
      title: "Testing and Quality Assurance",
      description:
        "Rigorous testing is performed across all aspects of the solution.",
    },
    {
      title: "Deployment and Training",
      description:
        "We carefully manage the deployment process and provide thorough training to your team.",
    },
    {
      title: "Ongoing Support",
      description:
        "We offer continuous support services to ensure your applications remain up-to-date and secure.",
    },
  ];

  return (
    <Layout>
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Custom Development: Tailored Software Solutions for Your Business
          </h1>
          <p className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
            Empowering your business with bespoke software solutions designed to
            meet your unique needs and drive growth
          </p>
          <img
            src={heroSrc}
            alt="Custom Software Development"
            className="w-full h-auto rounded-lg shadow-xl mb-12"
          />
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
            In today&apos;s rapidly evolving digital landscape, businesses are
            constantly seeking ways to stay ahead of the competition and
            optimize their operations. One powerful strategy that has gained
            significant traction is custom software development. At OnnaSoft, we
            specialize in creating bespoke software solutions that are tailored
            to meet the unique needs of businesses across various industries.
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Why Choose Custom Development?
              </h2>
              <p className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
                Custom software development offers a range of benefits over
                off-the-shelf solutions, providing an edge that can transform
                the way you do business. Here&apos;s why custom development with
                OnnaSoft can be a game-changer for your organization:
              </p>
              <ul className="text-lg space-y-4">
                {whyChooseItems.map((item, index) => (
                  <li
                    key={index}
                    className="border-b border-gray-200 dark:border-gray-700 pb-4"
                  >
                    <button
                      onClick={() => toggleWhyChoose(index)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <span className="flex items-center">
                        <item.icon className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" />
                        <strong>{item.title}</strong>
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transform transition-transform ${
                          activeWhyChoose === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeWhyChoose === index && (
                      <p className="mt-2 text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
                        {item.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src={whyCustomSrc}
                alt="Custom Development Benefits"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 mb-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Our Custom Development Process
              </h2>
              <p className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
                At OnnaSoft, we follow a comprehensive and systematic approach
                to ensure that every custom software solution we deliver meets
                the highest standards of quality and functionality. Our process
                includes:
              </p>
              <ul className="text-lg space-y-4">
                {processSteps.map((step, index) => (
                  <li
                    key={index}
                    className="border-b border-gray-200 dark:border-gray-700 pb-4"
                  >
                    <button
                      onClick={() => toggleProcess(index)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <span className="flex items-center">
                        <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                          {index + 1}
                        </div>
                        <strong>{step.title}</strong>
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transform transition-transform ${
                          activeProcess === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeProcess === index && (
                      <p className="mt-2 text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
                        {step.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src={customDevelopmentProcess}
                alt="Development Process"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
            Our expertise spans across various industries, allowing us to
            deliver tailored solutions that address sector-specific challenges
            and requirements. Some of the key industries we serve include:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="flex items-center text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                <Globe className="h-8 w-8 text-orange-500 mr-3" />
                Healthcare
              </h3>
              <p className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
                We develop custom applications for patient data management,
                mobile health monitoring, secure APIs, and databases for patient
                records, all while ensuring HIPAA compliance.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="flex items-center text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                <Database className="h-8 w-8 text-orange-500 mr-3" />
                Finance
              </h3>
              <p className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
                Our solutions include secure transaction processing platforms,
                mobile banking apps, API integrations with payment systems, and
                databases for compliance and reporting, adhering to strict
                financial regulations.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="flex items-center text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                <Smartphone className="h-8 w-8 text-orange-500 mr-3" />
                E-commerce
              </h3>
              <p className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
                We create scalable web stores, mobile shopping apps, APIs for
                product and inventory management, and databases for customer
                insights, helping businesses thrive in the digital marketplace.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="flex items-center text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                <Cog className="h-8 w-8 text-orange-500 mr-3" />
                Manufacturing
              </h3>
              <p className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
                Our custom solutions include process automation tools, mobile
                inspection apps, supply chain APIs, and databases for inventory
                and resource management, optimizing manufacturing operations.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Conclusion
          </h2>
          <p className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
            Custom software development is more than just a technological
            upgrade; it&apos;s a strategic investment in your business&apos;s
            future. By choosing OnnaSoft for your custom development needs,
            you&apos;re partnering with a team that&apos;s committed to
            understanding your unique challenges and delivering solutions that
            drive real, measurable results.
          </p>
          <p className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
            Whether you&apos;re looking to streamline your operations, enhance
            customer experiences, or gain a competitive edge in your industry,
            our tailored approach to software development can help you achieve
            your goals. Let&apos;s work together to transform your vision into
            reality and set your business on the path to digital success.
          </p>
        </div>
      </article>

      {/* Call to Action Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <CallToAction />
        </div>
      </section>
    </Layout>
  );
}
