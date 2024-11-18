import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-muted">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl md:text-2xl font-semibold text-foreground">
          {question}
        </span>
        {isOpen ? (
          <MinusCircle className="h-7 w-7 text-orange-500 dark:text-orange-400 flex-shrink-0" />
        ) : (
          <PlusCircle className="h-7 w-7 text-orange-500 dark:text-orange-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-xl leading-relaxed break-words text-rendering-optimizelegibility isolate break-word antialiased text-foreground">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default function FrequentlyAskedQuestions() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <FAQItem
            question="What are the benefits of hiring a software consultancy like OnnaSoft?"
            answer="Hiring a software consultancy like OnnaSoft brings a wealth of benefits to your projects. First and foremost, you gain access to a diverse team of highly skilled professionals with expertise across various technologies and industries. This breadth of knowledge allows us to tackle complex challenges efficiently and innovatively. Additionally, partnering with a consultancy offers great flexibility - you can scale your team up or down as project needs change, without the long-term commitments and overhead costs associated with full-time hires. Our experience working across multiple projects and industries also means we bring best practices and fresh perspectives to your business, potentially identifying opportunities for improvement you might not have considered. Lastly, by outsourcing your software development needs, you free up your internal resources to focus on core business activities, ultimately driving growth and success for your company."
          />
          <FAQItem
            question="How long does a typical software project take with OnnaSoft?"
            answer="The duration of a software project can vary significantly depending on its complexity, scope, and specific requirements. At OnnaSoft, we've successfully delivered projects ranging from quick, few-week engagements to long-term, multi-year partnerships. For instance, a straightforward website or mobile app might take 2-3 months, while a complex enterprise solution could span 6-12 months or more. However, we don't believe in one-size-fits-all timelines. During our initial consultation, we work closely with you to understand your project needs, business goals, and any time constraints. Based on this, we provide a detailed project plan with realistic timelines and milestones. We also employ agile methodologies, which allow for flexible, iterative development. This means you'll see progress and can provide feedback throughout the development process, ensuring the final product aligns perfectly with your vision and requirements."
          />
          <FAQItem
            question="What is OnnaSoft's approach to ensuring project quality and success?"
            answer="At OnnaSoft, ensuring the highest quality in our deliverables is paramount. We employ a comprehensive, multi-faceted approach to quality assurance that spans the entire development lifecycle. This begins with thorough requirements gathering and analysis to ensure we fully understand your needs. During development, we follow industry-standard best practices like test-driven development (TDD) and continuous integration/continuous deployment (CI/CD). Our developers conduct regular code reviews to maintain code quality and consistency. We utilize automated testing tools for unit, integration, and end-to-end tests, which helps us catch and fix issues early. Additionally, we have a dedicated QA team that performs rigorous manual testing, including functional, usability, and performance testing. We also believe in transparent communication throughout the project. Regular status updates, demo sessions, and open channels for feedback ensure that you're always in the loop and that the project aligns with your expectations. Post-launch, we provide thorough documentation and offer support and maintenance services to ensure the long-term success of your software."
          />
          <FAQItem
            question="How does OnnaSoft handle data security and privacy in its projects?"
            answer="At OnnaSoft, we consider data security and privacy to be of utmost importance in all our projects. We implement a multi-layered approach to ensure the highest standards of data protection. First, we adhere strictly to data protection regulations such as GDPR, CCPA, and other relevant local laws, ensuring compliance in all aspects of our work. Our development practices follow security-by-design principles, incorporating security measures from the earliest stages of project planning. This includes using encryption for data at rest and in transit, implementing secure authentication and authorization mechanisms, and following the principle of least privilege in system design. We regularly conduct security audits and penetration testing to identify and address potential vulnerabilities. Our team is trained in the latest security best practices and stays updated on emerging threats. When working with client data, we implement strict access controls and can work within your existing security protocols. We're also happy to sign comprehensive Non-Disclosure Agreements (NDAs) to provide additional reassurance. Furthermore, we can assist in implementing compliance measures specific to your industry, such as HIPAA for healthcare or PCI DSS for financial services. Our commitment to data security extends beyond the development phase - we also provide guidance on secure deployment practices and can assist with ongoing security monitoring and updates."
          />
          <FAQItem
            question="How does OnnaSoft collaborate with existing in-house teams?"
            answer="At OnnaSoft, we pride ourselves on our ability to seamlessly integrate with in-house teams, creating a collaborative environment that leverages the strengths of both parties. Our approach to collaboration is flexible and tailored to your specific needs and existing workflows. We typically begin by holding in-depth meetings with your team to understand your current processes, tools, and team dynamics. This allows us to adapt our working style to complement yours effectively. We can work in various capacities - whether you need us to lead certain aspects of the project, work alongside your team in equal partnership, or provide specialized support in specific areas. Our team is experienced in popular project management and collaboration tools like JIRA, Trello, Slack, and Microsoft Teams, enabling smooth communication and task management. We also emphasize knowledge transfer throughout the project. This involves regular code reviews, pair programming sessions, and documentation creation, ensuring that your in-house team fully understands the work we're doing and can maintain and extend it in the future. Additionally, we can provide training sessions on new technologies or methodologies we introduce. Our goal is not just to deliver a project, but to enhance your team's capabilities and leave you better equipped for future challenges. We believe that by the end of our engagement, your team should feel empowered and upskilled, ready to take ownership of the solution we've built together."
          />
        </div>
      </div>
    </section>
  );
}
