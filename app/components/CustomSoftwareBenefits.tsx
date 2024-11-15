import {
  Clock,
  ShieldCheck,
  ArrowUpCircle,
  Layers,
  BarChart2,
  Award,
} from "lucide-react";

export default function CustomSoftwareBenefits() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-8">
          Why Do Manually What a Custom Program Can Do for You?
        </h2>
        <p className="text-xl leading-relaxed mb-12 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased text-foreground text-center max-w-3xl">
          Embrace the power of automation through custom software. It's not just
          about saving time; it's about revolutionizing your business processes,
          enhancing accuracy, and driving efficiency to new heights. Let
          technology work for you, freeing your team to focus on innovation and
          growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-zinc-50 p-8 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg"
            >
              <div className="flex items-start mb-4">
                {benefit.icon}
                <h3 className="text-2xl font-semibold text-foreground ml-4">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-xl leading-relaxed break-words text-rendering-optimizelegibility isolate break-word antialiased text-foreground">
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
    icon: (
      <Clock className="h-8 w-8 text-orange-500 dark:text-orange-400 flex-shrink-0" />
    ),
    title: "Time Savings",
    description:
      "Automate repetitive tasks and free up your team to focus on higher-value activities, boosting overall productivity and innovation.",
  },
  {
    icon: (
      <ShieldCheck className="h-8 w-8 text-orange-500 dark:text-orange-400 flex-shrink-0" />
    ),
    title: "Error Reduction",
    description:
      "Minimize human errors and improve accuracy in your business processes, ensuring consistent quality and reliability in operations.",
  },
  {
    icon: (
      <ArrowUpCircle className="h-8 w-8 text-orange-500 dark:text-orange-400 flex-shrink-0" />
    ),
    title: "Scalability",
    description:
      "Easily adapt your systems as your business grows and evolves, with custom software that can be quickly modified to meet changing needs.",
  },
  {
    icon: (
      <Layers className="h-8 w-8 text-orange-500 dark:text-orange-400 flex-shrink-0" />
    ),
    title: "Custom Integration",
    description:
      "Seamlessly connect with your existing systems for a smooth workflow, eliminating data silos and improving overall operational efficiency.",
  },
  {
    icon: (
      <BarChart2 className="h-8 w-8 text-orange-500 dark:text-orange-400 flex-shrink-0" />
    ),
    title: "Data Analysis",
    description:
      "Gain valuable insights with analytics tools designed specifically for your business, enabling data-driven decision making and strategic planning.",
  },
  {
    icon: (
      <Award className="h-8 w-8 text-orange-500 dark:text-orange-400 flex-shrink-0" />
    ),
    title: "Competitive Advantage",
    description:
      "Stand out in your industry with unique technological solutions tailored to your needs, giving you an edge over competitors using off-the-shelf software.",
  },
];
