import {
  ArrowRight,
  Code,
  DollarSign,
  Lightbulb,
  Rocket,
  Users,
  Zap,
  ChevronRight,
} from "lucide-react";

export default function OutsourceDevelopmentBenefits() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Why You Should Outsource Development
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Outsourcing your software development can provide numerous advantages,
          from cost savings to access to specialized expertise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                {benefit.icon}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white ml-3">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {benefit.description}
              </p>
              <ul className="space-y-4">
                {benefit.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: (
      <DollarSign className="h-16 w-16 text-orange-500 dark:text-orange-400" />
    ),
    title: "Cost Efficiency",
    description: "Reduce operational costs and optimize your budget.",
    points: [
      "Lower overhead expenses",
      "Pay only for the services you need",
      "Avoid costs associated with full-time employees",
    ],
  },
  {
    icon: <Users className="h-16 w-16 text-orange-500 dark:text-orange-400" />,
    title: "Access to Talent",
    description: "Tap into a global pool of skilled professionals.",
    points: [
      "Diverse expertise and specializations",
      "Stay updated with the latest technologies",
      "Overcome local talent shortages",
    ],
  },
  {
    icon: <Rocket className="h-16 w-16 text-orange-500 dark:text-orange-400" />,
    title: "Faster Time-to-Market",
    description: "Accelerate your project development and launch.",
    points: [
      "Dedicated teams for quicker turnaround",
      "Round-the-clock development possible",
      "Streamlined processes for efficiency",
    ],
  },
  {
    icon: <Zap className="h-16 w-16 text-orange-500 dark:text-orange-400" />,
    title: "Flexibility and Scalability",
    description: "Easily adapt to changing project requirements.",
    points: [
      "Scale your team up or down as needed",
      "Access to a wide range of technologies",
      "Adjust resources based on project phases",
    ],
  },
  {
    icon: (
      <Lightbulb className="h-16 w-16 text-orange-500 dark:text-orange-400" />
    ),
    title: "Focus on Core Business",
    description: "Concentrate on your primary business objectives.",
    points: [
      "Delegate technical challenges to experts",
      "Allocate internal resources more effectively",
      "Improve overall business efficiency",
    ],
  },
  {
    icon: <Code className="h-16 w-16 text-orange-500 dark:text-orange-400" />,
    title: "Quality and Expertise",
    description: "Benefit from specialized knowledge and best practices.",
    points: [
      "Access to experienced developers",
      "Implement industry-standard methodologies",
      "Leverage cutting-edge technologies",
    ],
  },
];
