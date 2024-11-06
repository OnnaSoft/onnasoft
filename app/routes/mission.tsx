import { MetaFunction, useLoaderData } from "@remix-run/react";
import CallToAction from "~/components/CallToAction";
import Layout from "~/components/Layout";
import { loader } from "~/loaders/landing";

export { loader };

export const meta: MetaFunction = (args) => {
  return [
    {
      title: "Our Mission | OnnaSoft",
    },
    {
      property: "og:title",
      content: "Our Mission | OnnaSoft",
    },
    {
      name: "description",
      content:
        "Discover OnnaSoft's mission to drive digital transformation by delivering scalable and innovative software solutions for established businesses and ambitious startups.",
    },
    {
      name: "keywords",
      content:
        "OnnaSoft mission, digital transformation, custom software development, scalable software solutions, enterprise digital innovation, support for startups, agile software processes, software quality standards, technology for business growth, mission-driven software solutions",
    },
  ];
};

export default function Mission() {
  const { blogUrl, enableChat } = useLoaderData<typeof loader>();

  return (
    <Layout blogUrl={blogUrl} enableChat={enableChat}>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          OnnaSoft, Inc. Mission
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            At OnnaSoft, Inc., our mission is to drive the digital
            transformation of businesses of all sizes by implementing tailored
            technological solutions that not only respond to their current needs
            but are designed to grow and adapt alongside them.
          </p>

          <p className="text-lg mb-6">
            We firmly believe that the success of a development team depends on
            a clear structure, where each decision is based on precise
            requirement management and strict quality standards that guide every
            line of code.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
            For Large Enterprises
          </h2>
          <p className="text-lg mb-6">
            We offer a team of highly trained experts who understand the
            importance of complying with rigorous and complex guidelines, common
            in regulated or high-demand industries such as finance, healthcare,
            or advanced manufacturing. We know that these companies require not
            only solid results but also development that meets the highest
            standards of security and reliability. Therefore, we structure our
            work so that each stage of development is aligned with their
            internal policies and industry regulations, optimizing each process
            and ensuring that the final product is robust, scalable, and
            strategically designed to face current and future challenges.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
            For Medium-sized Businesses and New Ventures
          </h2>
          <p className="text-lg mb-6">
            We focus on providing a solid development foundation that allows
            them to compete with established companies without compromising
            quality. We implement clear policies and methodologies, adjusted to
            industry best practices, that allow teams to work autonomously while
            always maintaining excellence in every process. This approach
            ensures that, regardless of the individual experience level of each
            programmer, consistent and high-quality results are achieved.
          </p>

          <p className="text-lg mb-6">
            Additionally, we offer our clients the possibility to access highly
            trained and specialized personnel for critical issues, providing the
            flexibility to have experts who can contribute advanced knowledge
            without implying a constant investment in high-cost resources.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
            Our Commitment
          </h2>
          <p className="text-lg mb-6">
            At OnnaSoft, we know that the digital success of any organization
            depends on a coherent integration of technology in all aspects of
            the business. That's why we commit to being a strategic partner that
            not only leads the implementation of software solutions but also
            guides our clients in building processes that guarantee solid and
            sustainable growth.
          </p>

          <p className="text-lg mb-6">
            Thus, we accompany established companies and entrepreneurs on their
            path to digitalization, generating an impact that strengthens their
            operational capabilities and positions them to respond with agility
            to the changing demands of a competitive and constantly evolving
            digital environment.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <CallToAction />
        </div>
      </section>
    </Layout>
  );
}
