import { ChevronRight } from "lucide-react";
import teamSrc from "@/assets/1690868311.webp";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              About OnnaSoft, Inc.
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              As a leading software factory, we are dedicated to providing
              innovative and high-quality software solutions. Our team of expert
              developers is committed to driving the success of your business
              through cutting-edge technology.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-lg text-gray-700 dark:text-gray-300">
                <ChevronRight className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3" />
                Expertise in full-stack software development
              </li>
              <li className="flex items-center text-lg text-gray-700 dark:text-gray-300">
                <ChevronRight className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3" />
                Focus on innovation and emerging technologies
              </li>
              <li className="flex items-center text-lg text-gray-700 dark:text-gray-300">
                <ChevronRight className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3" />
                Commitment to delivering scalable, robust solutions
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src={teamSrc}
              alt="OnnaSoft team working"
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
