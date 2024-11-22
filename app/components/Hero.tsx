import { Link } from "@remix-run/react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Your Trusted{" "}
            <span className="text-orange-500 dark:text-orange-400">
              Software Factory
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-8">
            Empowering Your Vision with Expert Software Solutions
          </p>
          <p className="text-xl mb-10 md:text-2xl max-w-3xl mx-auto">
            OnnaSoft, Inc. is a premier software factory dedicated to delivering
            innovative, high-quality software solutions. From custom development
            to outsourcing, we&apos;re your partner in digital success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="default"
              size="lg"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow w-full md:w-auto text-xl px-10 py-1 h-10 bg-orange-500 hover:bg-orange-600 text-white rounded-md"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Our Services
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="inline-block w-full md:w-auto text-xl px-10 py-1 h-10 bg-white hover:bg-gray-50 text-orange-500 hover:text-orange-600 font-medium rounded-md transition-colors duration-300 text-center border-2 border-orange-500 hover:border-orange-600"
            >
              <Link to="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
