import { ChevronRight } from "lucide-react";

export default function CustomSoftwareBenefits() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Why Do Manually What a Custom Program Can Do for You?
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Automation through custom software not only saves time but also
          improves the accuracy and efficiency of your business processes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg"
            >
              <div className="flex items-start mb-4">
                <ChevronRight className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    title: "Time Savings",
    description:
      "Automate repetitive tasks and free up your team to focus on higher-value activities.",
  },
  {
    title: "Error Reduction",
    description:
      "Minimize human errors and improve accuracy in your business processes.",
  },
  {
    title: "Scalability",
    description:
      "Easily adapt your systems as your business grows and evolves.",
  },
  {
    title: "Custom Integration",
    description:
      "Seamlessly connect with your existing systems for a smooth workflow.",
  },
  {
    title: "Data Analysis",
    description:
      "Gain valuable insights with analytics tools designed specifically for your business.",
  },
  {
    title: "Competitive Advantage",
    description:
      "Stand out in your industry with unique technological solutions tailored to your needs.",
  },
];
