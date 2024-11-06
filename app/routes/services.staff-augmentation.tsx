import { useState } from "react";
import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";
import { Users, Briefcase, ChartBar, Clock, ChevronDown } from "lucide-react";
import CallToAction from "~/components/CallToAction";

export const meta = () => {
  return [
    { title: "Staff Augmentation Services | OnnaSoft" },
    { name: "description", content: "Enhance your team's capabilities with OnnaSoft's staff augmentation services. Access top-tier talent to accelerate your projects and drive innovation." },
  ];
};

export default function StaffAugmentation() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const benefits = [
    {
      icon: Users,
      title: "Access to Specialized Talent",
      description: "Tap into our pool of highly skilled professionals across various technologies and domains.",
    },
    {
      icon: Briefcase,
      title: "Flexibility and Scalability",
      description: "Quickly scale your team up or down based on project requirements and deadlines.",
    },
    {
      icon: ChartBar,
      title: "Cost-Effective Solution",
      description: "Reduce overhead costs associated with full-time hiring while maintaining high-quality output.",
    },
    {
      icon: Clock,
      title: "Faster Time-to-Market",
      description: "Accelerate your project timelines by bringing in ready-to-deploy experts.",
    },
  ];

  const faqs = [
    {
      question: "What is staff augmentation?",
      answer: "Staff augmentation is a flexible outsourcing strategy where we provide skilled professionals to supplement your existing workforce on a temporary basis. This allows you to quickly scale your team's capabilities without the long-term commitment of hiring full-time employees."
    },
    {
      question: "How does OnnaSoft ensure the quality of augmented staff?",
      answer: "We have a rigorous vetting process that includes technical assessments, soft skills evaluation, and background checks. Our professionals are experienced in their fields and undergo regular training to stay updated with the latest technologies and best practices."
    },
    {
      question: "Can I choose the professionals that will join my team?",
      answer: "Yes, we provide profiles of potential team members and you can interview them before making a decision. This ensures that you get the right fit for your team and project requirements."
    },
    {
      question: "What if the augmented staff doesn't meet our expectations?",
      answer: "We have a replacement policy in place. If you're not satisfied with a team member's performance, we'll work quickly to provide a suitable replacement at no additional cost."
    },
  ];

  return (
    <Layout>
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Staff Augmentation Services
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Enhance your team&apos;s capabilities with top-tier talent
          </p>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-8">
            In today&apos;s fast-paced tech landscape, having the right talent at the right time is crucial for project success. OnnaSoft&apos;s staff augmentation services provide a flexible solution to scale your team quickly and efficiently, giving you access to skilled professionals who can hit the ground running.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Why Choose OnnaSoft for Staff Augmentation?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <benefit.icon className="w-12 h-12 text-orange-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Our Staff Augmentation Process
          </h2>
          <ol className="list-decimal pl-6 mb-8 space-y-4">
            <li className="text-lg">
              <strong>Understand Your Needs:</strong> We start by thoroughly understanding your project requirements, team dynamics, and the specific skills you need.
            </li>
            <li className="text-lg">
              <strong>Talent Matching:</strong> Our recruitment team identifies the best-fit candidates from our extensive talent pool, considering both technical skills and cultural fit.
            </li>
            <li className="text-lg">
              <strong>Interview and Selection:</strong> You interview and select the professionals that best match your needs, ensuring a perfect fit for your team.
            </li>
            <li className="text-lg">
              <strong>Onboarding:</strong> We handle all the paperwork and ensure a smooth onboarding process, allowing your new team members to start contributing quickly.
            </li>
            <li className="text-lg">
              <strong>Ongoing Support:</strong> Throughout the engagement, we provide continuous support and performance monitoring to ensure your satisfaction.
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${activeAccordion === index ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {activeAccordion === index && (
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
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