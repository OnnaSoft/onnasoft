import { useState } from "react";
import Layout from "~/components/Layout";
import { Users, Briefcase, ChartBar, Clock, ChevronDown } from "lucide-react";
import CallToAction from "~/components/CallToAction";

export const meta = () => {
  return [
    { title: "Staff Augmentation Services | OnnaSoft" },
    {
      name: "description",
      content:
        "Enhance your team's capabilities with OnnaSoft's staff augmentation services. Access top-tier talent to accelerate your projects and drive innovation.",
    },
  ];
};

const benefits = [
  {
    icon: Users,
    title: "Access to Specialized Talent",
    description:
      "Tap into our extensive pool of highly skilled professionals across various technologies and domains. Our network includes experts in software development, data science, cloud computing, AI/ML, and more, ensuring you find the perfect match for your project needs, no matter how specialized or cutting-edge.",
  },
  {
    icon: Briefcase,
    title: "Flexibility and Scalability",
    description:
      "Quickly scale your team up or down based on project requirements and deadlines. Our flexible engagement model allows you to adjust your team size and composition as your project evolves, providing the agility needed in today's fast-paced tech landscape.",
  },
  {
    icon: ChartBar,
    title: "Cost-Effective Solution",
    description:
      "Reduce overhead costs associated with full-time hiring while maintaining high-quality output. Eliminate expenses related to recruitment, onboarding, benefits, and training, allowing you to allocate your budget more effectively and focus on core business activities.",
  },
  {
    icon: Clock,
    title: "Faster Time-to-Market",
    description:
      "Accelerate your project timelines by bringing in ready-to-deploy experts. Our professionals integrate seamlessly with your existing teams and processes, providing an immediate productivity boost that can significantly reduce your time-to-market.",
  },
];

const faqs = [
  {
    question: "What is staff augmentation?",
    answer:
      "Staff augmentation is a flexible outsourcing strategy where we provide skilled professionals to supplement your existing workforce on a temporary basis. This allows you to quickly scale your team's capabilities without the long-term commitment of hiring full-time employees. It's particularly useful for projects requiring specialized skills, handling workload spikes, or exploring new technologies without committing to permanent hires.",
  },
  {
    question: "How does OnnaSoft ensure the quality of augmented staff?",
    answer:
      "We have a rigorous vetting process that includes technical assessments, soft skills evaluation, and background checks. Our professionals undergo multiple stages of screening, including initial interviews, technical evaluations conducted by senior developers, practical coding tests, and soft skills assessments. We also verify past work experiences and check references. Additionally, we have an internal rating system based on past project performances and client feedback, ensuring we only provide top-performing professionals for your projects.",
  },
  {
    question: "Can I choose the professionals that will join my team?",
    answer:
      "Yes, we provide profiles of potential team members and you can interview them before making a decision. We typically present a shortlist of 3-5 candidates who best match your criteria. You have the opportunity to review their detailed profiles, conduct interviews, and even administer technical tests if desired. The final decision always rests with you, ensuring you're completely comfortable with the professionals joining your team.",
  },
  {
    question: "What if the augmented staff doesn't meet our expectations?",
    answer:
      "We have a replacement policy in place. If you're not satisfied with a team member's performance, we'll work quickly to provide a suitable replacement at no additional cost. We ask that you communicate your concerns promptly, allowing us to address any issues through additional training or support. If problems persist, we'll initiate our replacement process immediately, leveraging our understanding of your needs and the feedback you've provided to quickly identify and present alternative candidates, ensuring minimal disruption to your project timelines.",
  },
];

export default function StaffAugmentation() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <Layout>
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Staff Augmentation Services
          </h1>
          <p className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
            Enhance your team&apos;s capabilities with top-tier talent
          </p>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
            In the rapidly evolving world of technology, businesses face the
            constant challenge of staying competitive while managing fluctuating
            project demands. OnnaSoft's staff augmentation services offer a
            dynamic solution to this challenge, providing companies with the
            ability to swiftly scale their teams with top-tier talent. Our
            service goes beyond simply filling positions; we offer a strategic
            partnership that enhances your team's capabilities, drives
            innovation, and ensures project success. By leveraging our extensive
            network of skilled professionals, you gain immediate access to
            expertise across a wide range of technologies and domains, allowing
            you to tackle complex projects with confidence and agility.
          </p>

          <p className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
            What sets OnnaSoft apart is our commitment to not just meeting your
            technical requirements, but also aligning with your company's
            culture and work ethic. Our rigorous vetting process ensures that
            each professional we provide brings not only the necessary technical
            skills but also the soft skills and adaptability crucial for
            seamless integration into your team. This holistic approach to staff
            augmentation means you're not just getting additional manpower, but
            true team members who can hit the ground running, contribute
            meaningfully to your projects, and help drive your business forward.
            With OnnaSoft, you're not just filling gaps in your workforce;
            you're strategically enhancing your team's capabilities and
            positioning your company for long-term success in the competitive
            tech landscape.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Why Choose OnnaSoft for Staff Augmentation?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start">
                <benefit.icon className="w-12 h-12 text-orange-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Our Staff Augmentation Process
          </h2>
          <ol className="list-decimal pl-6 mb-8 space-y-4">
            <li className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
              <strong>Understand Your Needs:</strong> We start by thoroughly
              understanding your project requirements, team dynamics, and the
              specific skills you need. Our experienced consultants conduct
              in-depth discussions with your management team to grasp not just
              the technical requirements, but also your company culture, project
              methodologies, and long-term goals.
            </li>
            <li className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
              <strong>Talent Matching:</strong> Our recruitment team identifies
              the best-fit candidates from our extensive talent pool,
              considering both technical skills and cultural fit. We use a
              combination of advanced AI-powered matching algorithms and human
              expertise to shortlist candidates who not only meet your technical
              requirements but also align with your company's values and work
              style.
            </li>
            <li className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
              <strong>Interview and Selection:</strong> You interview and select
              the professionals that best match your needs, ensuring a perfect
              fit for your team. We facilitate this process by arranging
              interviews, providing detailed candidate profiles, and offering
              any additional information you might need to make informed
              decisions quickly.
            </li>
            <li className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
              <strong>Onboarding:</strong> We handle all the paperwork and
              ensure a smooth onboarding process, allowing your new team members
              to start contributing quickly. Our onboarding specialists work
              closely with your HR and IT departments to streamline the
              integration of the augmented staff, setting up access to required
              systems and providing any needed equipment.
            </li>
            <li className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
              <strong>Ongoing Support:</strong> Throughout the engagement, we
              provide continuous support and performance monitoring to ensure
              your satisfaction. Our account managers conduct regular check-ins
              with both you and the augmented staff to address any concerns
              promptly and ensure the engagement remains productive and aligned
              with your goals.
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div
                key={faq.answer}
                className="border-b border-gray-200 dark:border-gray-700 pb-4"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-xl font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      activeAccordion === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeAccordion === index && (
                  <p className="mt-2 text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
                    {faq.answer}
                  </p>
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
