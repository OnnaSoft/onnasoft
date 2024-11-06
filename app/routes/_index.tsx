import { useLoaderData } from "@remix-run/react";
import About from "~/components/About";
import CookieConsent from "~/components/CookieConsent";
import CustomSoftwareBenefits from "~/components/CustomSoftwareBenefits";
import FAQ from "~/components/FAQ";
import Hero from "~/components/Hero";
import Layout from "~/components/Layout";
import OutsourceDevelopmentBenefits from "~/components/OutsourceDevelopmentBenefits";
import Services from "~/components/Services";
import SoftwareDevelopmentLeadership from "~/components/SoftwareDevelopmentLeadership";
import Testimonials from "~/components/Testimonials";
import { loader } from "../loaders/landing";
import CallToAction from "~/components/CallToAction";
import { MetaFunction } from "@remix-run/node";

export { loader };

export const meta: MetaFunction = () => {
  return [
    {
      title: "Custom Development | OnnaSoft",
    },
    {
      property: "og:title",
      content: "Custom Development | OnnaSoft",
    },
    {
      name: "description",
      content:
        "Tailored software solutions for web, mobile, API, and database platforms",
    },
    {
      name: "keywords",
      content:
        "custom software development, scalable software solutions, web development, mobile development, API integration services, cloud computing solutions, DevOps automation, high-performance software, secure software solutions, fintech software development, healthcare software development, agile development processes, digital transformation, OnnaSoft software factory, software for enterprise businesses, software for startups and SMBs, custom software consulting, software engineering services, end-to-end software solutions, scalable SaaS applications, secure big data processing",
    },
  ];
};

export default function IndexPage() {
  const { blogUrl, enableChat } = useLoaderData<typeof loader>();
  return (
    <Layout blogUrl={blogUrl} enableChat={enableChat}>
      <Hero />
      <Services />
      <About />
      <SoftwareDevelopmentLeadership />
      <CustomSoftwareBenefits />
      <OutsourceDevelopmentBenefits />
      <Testimonials />
      <FAQ />
      <section
        id="call-to-action"
        className="py-20 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <CallToAction />
        </div>
      </section>
      <CookieConsent />
    </Layout>
  );
}
