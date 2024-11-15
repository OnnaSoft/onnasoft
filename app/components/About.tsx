import { ChevronRight } from "lucide-react";
import teamSrc from "@/assets/1690868311.webp";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              About OnnaSoft, Inc.
            </h2>
            <p className="text-xl leading-relaxed mb-6 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased">
              As a leading software factory, we are dedicated to providing
              innovative and high-quality software solutions. Our team of expert
              developers is committed to driving the success of your business
              through cutting-edge technology. With years of experience and a
              passion for excellence, we strive to deliver solutions that not
              only meet but exceed our clients' expectations.
            </p>
            <ul className="space-y-4">
              {[
                "Expertise in full-stack software development",
                "Focus on innovation and emerging technologies",
                "Commitment to delivering scalable, robust solutions",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-xl leading-relaxed"
                >
                  <ChevronRight
                    className="h-5 w-5 text-orange-500 dark:text-orange-400 mr-3 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="break-words text-rendering-optimizelegibility isolate break-word antialiased">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src={teamSrc}
              alt="OnnaSoft team collaborating on software development"
              className="rounded-lg shadow-md w-full h-auto"
              width={560}
              height={560}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
