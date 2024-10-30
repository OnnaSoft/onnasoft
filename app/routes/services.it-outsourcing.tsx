import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";
import { loader } from "~/loaders/landing";
import CallToAction from "~/components/CallToAction";
import {
  Users,
  DollarSign,
  Globe,
  Clock,
  Shield,
  Code,
  Headphones,
  Briefcase,
  BarChart,
} from "lucide-react";

export { loader };

export default function ItOutsourcing() {
  const { blogUrl, enableChat } = useLoaderData<typeof loader>();

  return (
    <Layout blogUrl={blogUrl} enableChat={enableChat}>
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <Users className="h-24 w-24 text-orange-500 dark:text-orange-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              IT Outsourcing: Flexible Staffing Solutions for Your Development
              Needs
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Bridging the gap between your business needs and top-notch IT
              talent
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none mb-16">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              In industries where technology is not the primary focus, hiring
              and maintaining a full-time IT team can be costly and complex.
              Finding experienced developers, designers, and IT specialists
              often requires a substantial investment in time, money, and
              management resources. At OnnaSoft, we offer IT Outsourcing
              Services designed to bridge this gap, giving your business access
              to top-notch IT talent without the overhead and hassle of
              full-time hiring. Our solutions allow you to stay competitive and
              focus on your business while we handle your tech challenges.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Our IT Outsourcing Services?
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Users className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Access to Skilled Professionals:</strong> Our team of
                  developers, designers, and IT specialists bring diverse
                  experience and expertise to your projects, ensuring you get
                  the right skills for each task. Rather than spending time on
                  recruitment, training, and skill assessments, you gain instant
                  access to experienced professionals.
                </span>
              </li>
              <li className="flex items-start">
                <DollarSign className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Cost-Effective Solutions:</strong> Maintaining an
                  in-house IT team can be prohibitively expensive, especially
                  for non-tech companies. Our outsourcing model helps you reduce
                  costs associated with full-time hiring, infrastructure, and
                  ongoing training, providing a cost-effective alternative
                  without compromising on quality.
                </span>
              </li>
              <li className="flex items-start">
                <BarChart className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Scalability and Flexibility:</strong> Your business
                  needs may fluctuate, and our IT Outsourcing services allow you
                  to easily scale your team up or down based on current projects
                  and resource requirements. This flexibility ensures that you
                  have the right-sized team at every stage of your project
                  without long-term commitments.
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Faster Time-to-Market:</strong> Outsourcing IT talent
                  enables faster project execution and time-to-market. With our
                  ready-to-deploy professionals, you can accelerate development
                  timelines and stay ahead in a competitive environment.
                </span>
              </li>
              <li className="flex items-start">
                <Shield className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Risk Mitigation:</strong> Hiring in-house can pose
                  risks—like mismatched skills, project delays, or even
                  turnover. By outsourcing to OnnaSoft, you reduce these risks
                  as our team is fully managed, experienced, and equipped to
                  integrate seamlessly into your project.
                </span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our IT Outsourcing Process
            </h2>
            <ol className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-orange-500 dark:text-orange-400 font-bold mr-3">
                  1.
                </span>
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Requirements Analysis:</strong> We work closely with
                  you to understand your unique business needs, technical
                  requirements, and existing team dynamics. This collaborative
                  analysis helps us tailor the ideal team composition for your
                  project.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 dark:text-orange-400 font-bold mr-3">
                  2.
                </span>
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Team Selection:</strong> Based on your project
                  requirements, we assemble a team of skilled professionals who
                  are the best match for your objectives and company culture.
                  Our talent pool covers a wide range of technical expertise,
                  from development to quality assurance.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 dark:text-orange-400 font-bold mr-3">
                  3.
                </span>
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Integration and Onboarding:</strong> We ensure a
                  smooth onboarding process that aligns our team with your
                  workflows, tools, and communication channels, ensuring a
                  seamless integration with your existing operations.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 dark:text-orange-400 font-bold mr-3">
                  4.
                </span>
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Project Execution:</strong> Our dedicated team works
                  diligently on your project, maintaining open communication and
                  meeting agreed-upon timelines and milestones. This allows you
                  to maintain oversight without day-to-day management stress.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 dark:text-orange-400 font-bold mr-3">
                  5.
                </span>
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Continuous Support and Optimization:</strong> We
                  provide ongoing support and performance reviews, making
                  adjustments as needed to keep your project on track and
                  ensuring optimal results from start to finish.
                </span>
              </li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our IT Outsourcing Services
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Code className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Software Development:</strong> Comprehensive
                  development solutions, including full-stack development,
                  mobile and web development, and custom software solutions,
                  tailored to meet your unique requirements.
                </span>
              </li>
              <li className="flex items-start">
                <Briefcase className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>IT Consulting:</strong> Strategic consulting to guide
                  your digital transformation, system architecture, and
                  technology planning, enabling you to make informed decisions
                  and implement effective IT strategies.
                </span>
              </li>
              <li className="flex items-start">
                <Shield className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Quality Assurance:</strong> Rigorous software testing,
                  including manual and automated testing services, to ensure
                  your product meets the highest quality standards before
                  deployment.
                </span>
              </li>
              <li className="flex items-start">
                <Headphones className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>IT Support and Maintenance:</strong> Reliable support
                  to keep your systems running smoothly, along with ongoing
                  maintenance and troubleshooting services for optimal uptime
                  and minimal disruptions.
                </span>
              </li>
              <li className="flex items-start">
                <Globe className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">
                  <strong>Cloud Services:</strong> Cloud migration, management,
                  and optimization services to streamline operations, reduce
                  costs, and improve scalability.
                </span>
              </li>
            </ul>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              At OnnaSoft, we're committed to providing flexible, reliable, and
              cost-effective IT outsourcing solutions that empower your business
              to thrive in the digital age. Our expert team stands ready to
              support your IT needs, allowing you to focus on what you do best
              while we handle the technology challenges. Let us be your trusted
              IT partner, driving your business forward with our expertise and
              dedication.
            </p>
          </div>

          <CallToAction />
        </div>
      </section>
    </Layout>
  );
}
