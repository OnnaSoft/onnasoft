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

export { loader };

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
