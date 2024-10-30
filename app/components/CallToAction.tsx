import { Link } from "@remix-run/react";
import { Button } from "./ui/button";

export default function CallToAction() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Ready to Move to the Cloud?
      </h2>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
        Let's discuss how we can help you seamlessly transition to the cloud and
        unlock its full potential for your business.
      </p>
      <Link to="/contact">
        <Button
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-white text-lg"
        >
          Start Your Cloud Journey
        </Button>
      </Link>
    </div>
  );
}
