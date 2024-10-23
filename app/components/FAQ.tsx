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
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold text-gray-900 dark:text-white">
          {question}
        </span>
        {isOpen ? (
          <MinusCircle className="h-7 w-7 text-orange-500 dark:text-orange-400" />
        ) : (
          <PlusCircle className="h-7 w-7 text-orange-500 dark:text-orange-400" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-lg text-gray-700 dark:text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <FAQItem
            question="What are the benefits of hiring a software consultancy?"
            answer="Hiring a software consultancy brings expertise, flexibility, and cost-effectiveness to your projects. You gain access to a diverse team of skilled professionals, reduce overhead costs, and can scale resources as needed."
          />
          <FAQItem
            question="How long does a typical software project take?"
            answer="Project duration varies depending on complexity and scope. Simple projects might take a few weeks, while complex enterprise solutions can take several months. We provide detailed timelines during our initial consultation."
          />
          <FAQItem
            question="What is your approach to ensuring project quality?"
            answer="We employ a rigorous quality assurance process, including code reviews, automated testing, and continuous integration. Our team follows industry best practices and maintains open communication throughout the development process."
          />
          <FAQItem
            question="How do you handle data security and privacy?"
            answer="Data security is our top priority. We implement robust security measures, follow data protection regulations like GDPR, and use secure development practices. We can also sign NDAs and work within your security protocols."
          />
          <FAQItem
            question="Can you work with our existing team?"
            answer="We're experienced in collaborating with in-house teams. We can integrate seamlessly with your existing workflow, provide training, and transfer knowledge to ensure long-term success."
          />
        </div>
      </div>
    </section>
  );
}
