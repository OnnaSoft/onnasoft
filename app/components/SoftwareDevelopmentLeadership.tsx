import {
  Lightbulb,
  Code,
  Layout,
  Rocket,
  Users,
  ChevronRight,
  Zap,
  Shield,
  Target,
  Cog,
} from "lucide-react";

export default function SoftwareDevelopmentLeadership() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-8">
          Pioneering Custom Software Solutions for Businesses
        </h2>
        <p className="text-xl leading-relaxed mb-12 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased text-foreground text-center max-w-3xl">
          At OnnaSoft, we're dedicated to crafting bespoke software solutions
          that align perfectly with your unique business needs. Our innovative
          approach drives efficiency and growth, transforming your vision into
          powerful, scalable software.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Target className="h-8 w-8 text-orange-500 dark:text-orange-400 mr-3" />
              Our Approach
            </h3>
            <p className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased text-foreground">
              We combine strategic thinking with creative problem-solving to
              deliver comprehensive solutions. Our team becomes your ideal
              partner, supporting you through every phase necessary to turn your
              business idea into a resounding success.
            </p>
            <ul className="space-y-4">
              {[
                "In-depth client-centric research",
                "Tailored execution strategies",
                "Continuous result evaluation and optimization",
                "Agile methodology for flexibility and rapid delivery",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-xl leading-relaxed break-words text-rendering-optimizelegibility isolate break-word antialiased text-foreground"
                >
                  <ChevronRight className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Cog className="h-8 w-8 text-orange-500 dark:text-orange-400 mr-3" />
              Our Expertise
            </h3>
            <p className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased text-foreground">
              As leaders in custom software development, we offer a strategic
              and creative approach to provide you with complete, cutting-edge
              solutions. Our expertise spans across various technologies and
              industries, ensuring we can meet your specific needs and exceed
              expectations.
            </p>
            <ul className="space-y-4">
              {[
                "Cutting-edge technologies and frameworks",
                "Industry-specific, tailored solutions",
                "Scalable and maintainable architectures",
                "Cloud-native and serverless applications",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-xl leading-relaxed break-words text-rendering-optimizelegibility isolate break-word antialiased text-foreground"
                >
                  <ChevronRight className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
          Our Development Process
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {developmentPhases.map((phase, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-md text-center transition-all hover:shadow-lg"
            >
              {phase.icon}
              <h4 className="text-xl font-semibold text-foreground mt-4 mb-2">
                {phase.title}
              </h4>
              <p className="text-xl leading-relaxed break-words text-rendering-optimizelegibility isolate break-word antialiased text-foreground">
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
      <Lightbulb className="h-12 w-12 text-orange-500 dark:text-orange-400 mx-auto" />
    ),
    title: "Discovery & Planning",
    description: "Analyzing business needs and defining project scope",
  },
  {
    icon: (
      <Layout className="h-12 w-12 text-orange-500 dark:text-orange-400 mx-auto" />
    ),
    title: "Design & Prototyping",
    description: "Creating intuitive UX/UI and interactive prototypes",
  },
  {
    icon: (
      <Code className="h-12 w-12 text-orange-500 dark:text-orange-400 mx-auto" />
    ),
    title: "Development & Testing",
    description: "Building robust solutions with rigorous quality assurance",
  },
  {
    icon: (
      <Rocket className="h-12 w-12 text-orange-500 dark:text-orange-400 mx-auto" />
    ),
    title: "Deployment & Support",
    description: "Launching your solution and providing ongoing maintenance",
  },
];
