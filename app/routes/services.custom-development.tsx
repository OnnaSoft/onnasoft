import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";
import { loader } from "~/loaders/landing";
import CallToAction from "~/components/CallToAction";
import {
  Code,
  Server,
  Zap,
  Users,
  Globe,
  Database,
  Smartphone,
  Cog,
} from "lucide-react";

export { loader };

export default function CustomDevelopment() {
  const { blogUrl, enableChat } = useLoaderData<typeof loader>();

  return (
    <Layout blogUrl={blogUrl} enableChat={enableChat}>
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <Code className="h-24 w-24 text-orange-500 dark:text-orange-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Custom Development: Tailored Software Solutions for Your Unique
              Business Needs
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Empowering your business with bespoke software solutions across
              web, mobile, API, and database platforms.
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none mb-16">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              In today's rapidly evolving digital landscape, having software
              that aligns precisely with your business processes and goals is
              crucial for staying competitive. At OnnaSoft, we specialize in
              crafting bespoke software solutions across various platforms,
              including web applications, mobile apps, APIs, and databases. Our
              custom development services empower your business, enabling you to
              optimize operations, enhance productivity, and leverage
              opportunities unique to your industry.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Custom Development?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              Custom software development offers a range of benefits over
              off-the-shelf solutions, providing an edge that can transform the
              way you do business. Here's why custom development with OnnaSoft
              can be a game-changer for your organization:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Zap className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Tailored to Your Exact Needs and Processes:</strong>{" "}
                  Our solutions are crafted to fit seamlessly into your
                  workflow, enhancing productivity and efficiency across web,
                  mobile, API, and database platforms.
                </span>
              </li>
              <li className="flex items-start">
                <Server className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>
                    Scalable and Flexible to Grow with Your Business:
                  </strong>{" "}
                  We design all our solutions with scalability in mind, enabling
                  you to expand functionalities or add new integrations to
                  support growth with minimal disruption.
                </span>
              </li>
              <li className="flex items-start">
                <Cog className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Seamless Integration with Existing Systems:</strong>{" "}
                  Our solutions integrate effortlessly with your current
                  platforms, creating a unified digital ecosystem tailored to
                  your business needs.
                </span>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Ongoing Support and Maintenance:</strong> We offer
                  continuous support and maintenance, keeping your applications,
                  APIs, and databases secure, updated, and optimized as your
                  business and technology evolve.
                </span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Custom Development Process
            </h2>
            <ol className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-orange-500 dark:text-orange-400 font-bold mr-3">
                  1.
                </span>
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Requirements Gathering:</strong> We work closely with
                  your team to analyze your workflows and define requirements
                  for web, mobile, API, and database solutions.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 dark:text-orange-400 font-bold mr-3">
                  2.
                </span>
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Design and Planning:</strong> We create a roadmap that
                  aligns with your unique needs, outlining project plans,
                  wireframes, API structures, and database architectures.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 dark:text-orange-400 font-bold mr-3">
                  3.
                </span>
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Development:</strong> Using agile methodologies, we
                  develop the solution iteratively, ensuring flexibility and
                  continuous feedback across all platforms.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 dark:text-orange-400 font-bold mr-3">
                  4.
                </span>
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Testing and Quality Assurance:</strong> We perform
                  comprehensive testing across web, mobile, API, and database
                  layers to ensure your solution meets the highest standards.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 dark:text-orange-400 font-bold mr-3">
                  5.
                </span>
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Deployment and Training:</strong> We handle deployment
                  carefully and provide comprehensive training for your team to
                  effectively use and maintain the new solution.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 dark:text-orange-400 font-bold mr-3">
                  6.
                </span>
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Ongoing Support:</strong> Our support services ensure
                  that your applications, databases, and APIs stay up-to-date,
                  secure, and capable of adapting to new requirements.
                </span>
              </li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              We have experience developing custom solutions across various
              industries, with expertise in web applications, mobile apps, APIs,
              and databases tailored to each sector's specific needs:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Globe className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Healthcare:</strong> Custom applications for patient
                  data management, mobile health monitoring, secure APIs, and
                  databases for patient records.
                </span>
              </li>
              <li className="flex items-start">
                <Database className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Finance:</strong> Secure transaction processing
                  platforms, mobile banking apps, API integrations with payment
                  systems, and databases for compliance and reporting.
                </span>
              </li>
              <li className="flex items-start">
                <Smartphone className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>E-commerce:</strong> Scalable web stores, mobile
                  shopping apps, APIs for product and inventory management, and
                  databases for customer insights.
                </span>
              </li>
              <li className="flex items-start">
                <Server className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Aerospace:</strong> Web-based monitoring systems,
                  mobile analytics tools, robust APIs for data integration, and
                  databases for operational insights.
                </span>
              </li>
              <li className="flex items-start">
                <Cog className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Manufacturing:</strong> Process automation tools,
                  mobile inspection apps, supply chain APIs, and databases for
                  inventory and resource management.
                </span>
              </li>
            </ul>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              Whether you need a complex enterprise web system, a mobile app for
              field services, APIs for seamless data sharing, or a robust
              database for your growing data needs, our expert team at OnnaSoft
              is ready to bring your vision to life. By choosing custom
              development with us, you gain a partner dedicated to your success,
              equipped to create a solution that propels your business forward
              in today's dynamic digital world.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              With OnnaSoft's custom solutions, you invest in software that
              evolves with you, designed for today's requirements and tomorrow's
              possibilities. Let us help you achieve greater efficiency,
              accessibility, and innovation with a solution tailored to your
              business across web, mobile, API, and database platforms.
            </p>
          </div>

          <CallToAction />
        </div>
      </section>
    </Layout>
  );
}
