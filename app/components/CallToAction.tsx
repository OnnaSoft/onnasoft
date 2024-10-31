import { Link } from "@remix-run/react";
import { Button } from "./ui/button";

export default function CallToAction() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Ready to Build Your Custom Solution?
      </h2>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
        Let's discuss how we can create tailored systems that meet your unique
        business needs and drive your success.
      </p>
      <Link to="/contact">
        <Button
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-white text-lg"
        >
          Start Your Development Journey
        </Button>
      </Link>
    </div>
  );
}
