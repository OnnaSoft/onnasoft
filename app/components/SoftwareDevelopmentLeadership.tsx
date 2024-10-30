import {
  Lightbulb,
  Code,
  Layout,
  Rocket,
  Users,
  ChevronRight,
} from "lucide-react";

export default function SoftwareDevelopmentLeadership() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Pioneering Custom Software Solutions for Businesses
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          We're dedicated to crafting bespoke software solutions that align
          perfectly with your unique business needs, driving innovation and
          efficiency in your operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Approach
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              We combine strategic thinking with creative problem-solving to
              deliver comprehensive solutions. Our team becomes your ideal
              partner, supporting you through every phase necessary to turn your
              business idea into a resounding success.
            </p>
            <ul className="space-y-4">
              {[
                "Client-centric research",
                "Tailored execution",
                "Continuous result evaluation",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-lg text-gray-700 dark:text-gray-300"
                >
                  <ChevronRight className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Expertise
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              As experts in custom software development, we offer a strategic
              and creative approach to provide you with a complete solution. Our
              expertise spans across various technologies and industries,
              ensuring we can meet your specific needs.
            </p>
            <ul className="space-y-4">
              {[
                "Cutting-edge technologies",
                "Industry-specific solutions",
                "Scalable architectures",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-lg text-gray-700 dark:text-gray-300"
                >
                  <ChevronRight className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Development Process
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {developmentPhases.map((phase, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md text-center transition-transform hover:scale-105"
            >
              {phase.icon}
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">
                {phase.title}
              </h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const developmentPhases = [
  {
    icon: (
      <Lightbulb className="h-16 w-16 text-orange-500 dark:text-orange-400 mx-auto" />
    ),
    title: "Planning",
    description: "Analyzing business model and requirements",
  },
  {
    icon: (
      <Layout className="h-16 w-16 text-orange-500 dark:text-orange-400 mx-auto" />
    ),
    title: "Wireframing",
    description: "Creating interactive prototypes",
  },
  {
    icon: (
      <Users className="h-16 w-16 text-orange-500 dark:text-orange-400 mx-auto" />
    ),
    title: "UX/UI Design",
    description: "Crafting intuitive user experiences",
  },
  {
    icon: (
      <Code className="h-16 w-16 text-orange-500 dark:text-orange-400 mx-auto" />
    ),
    title: "Development",
    description: "Building robust and scalable solutions",
  },
  {
    icon: (
      <Rocket className="h-16 w-16 text-orange-500 dark:text-orange-400 mx-auto" />
    ),
    title: "Launch",
    description: "Deploying and ensuring smooth operations",
  },
];
