import {
  Code,
  DollarSign,
  Lightbulb,
  Rocket,
  Users,
  Zap,
  CheckCircle,
} from "lucide-react";

export default function OutsourceDevelopmentBenefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-8">
          Why You Should Outsource Development
        </h2>
        <p className="text-xl leading-relaxed mb-12 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased text-foreground text-center max-w-3xl">
          Outsourcing your software development can provide numerous advantages,
          from cost savings to access to specialized expertise, enabling your
          business to focus on core competencies while leveraging global talent.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-background p-8 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
            >
              <div className="flex items-center mb-6">
                {benefit.icon}
                <h3 className="text-2xl font-semibold text-foreground ml-4">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-xl leading-relaxed mb-6 break-words text-rendering-optimizelegibility isolate break-word antialiased text-foreground">
                {benefit.description}
              </p>
              <ul className="space-y-4">
                {benefit.points.map((point) => (
                  <li key={point} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg leading-relaxed break-words text-rendering-optimizelegibility isolate break-word antialiased text-foreground">
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
      <DollarSign className="h-12 w-12 text-orange-500 dark:text-orange-400 flex-shrink-0" />
    ),
    title: "Cost Efficiency",
    description:
      "Reduce operational costs and optimize your budget for maximum ROI.",
    points: [
      "Lower overhead expenses",
      "Pay only for the services you need",
      "Avoid costs associated with full-time employees",
    ],
  },
  {
    icon: (
      <Users className="h-12 w-12 text-orange-500 dark:text-orange-400 flex-shrink-0" />
    ),
    title: "Access to Talent",
    description:
      "Tap into a global pool of skilled professionals with diverse expertise.",
    points: [
      "Diverse expertise and specializations",
      "Stay updated with the latest technologies",
      "Overcome local talent shortages",
    ],
  },
  {
    icon: (
      <Rocket className="h-12 w-12 text-orange-500 dark:text-orange-400 flex-shrink-0" />
    ),
    title: "Faster Time-to-Market",
    description:
      "Accelerate your project development and launch to gain a competitive edge.",
    points: [
      "Dedicated teams for quicker turnaround",
      "Round-the-clock development possible",
      "Streamlined processes for efficiency",
    ],
  },
  {
    icon: (
      <Zap className="h-12 w-12 text-orange-500 dark:text-orange-400 flex-shrink-0" />
    ),
    title: "Flexibility and Scalability",
    description:
      "Easily adapt to changing project requirements and market demands.",
    points: [
      "Scale your team up or down as needed",
      "Access to a wide range of technologies",
      "Adjust resources based on project phases",
    ],
  },
  {
    icon: (
      <Lightbulb className="h-12 w-12 text-orange-500 dark:text-orange-400 flex-shrink-0" />
    ),
    title: "Focus on Core Business",
    description:
      "Concentrate on your primary business objectives and strategic initiatives.",
    points: [
      "Delegate technical challenges to experts",
      "Allocate internal resources more effectively",
      "Improve overall business efficiency",
    ],
  },
  {
    icon: (
      <Code className="h-12 w-12 text-orange-500 dark:text-orange-400 flex-shrink-0" />
    ),
    title: "Quality and Expertise",
    description:
      "Benefit from specialized knowledge and industry best practices.",
    points: [
      "Access to experienced developers",
      "Implement industry-standard methodologies",
      "Leverage cutting-edge technologies",
    ],
  },
];
