import { Link } from "@remix-run/react";
import { Button } from "./ui/button";
import { ArrowRight, Rocket } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Launch Your Digital Transformation?
            </h2>
            <p className="text-xl leading-relaxed mb-6 break-words text-rendering-optimizelegibility isolate break-word antialiased text-white text-opacity-90">
              Let&apos;s create tailored solutions that propel your business
              forward in the digital age.
            </p>
            <Link to="/contact" className="inline-block">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-100 text-lg font-semibold px-8 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <div className="md:w-1/3 flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-2xl"></div>
              <Rocket className="h-24 w-24 text-white relative z-10 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
    </section>
  );
}
