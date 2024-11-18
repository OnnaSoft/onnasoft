import About from "~/components/About";
import CookieConsent from "~/components/CookieConsent";
import CustomSoftwareBenefits from "~/components/CustomSoftwareBenefits";
import FrequentlyAskedQuestions from "~/components/FrequentlyAskedQuestions";
import Hero from "~/components/Hero";
import Layout from "~/components/Layout";
import OutsourceDevelopmentBenefits from "~/components/OutsourceDevelopmentBenefits";
import Services from "~/components/Services";
import SoftwareDevelopmentLeadership from "~/components/SoftwareDevelopmentLeadership";
import CallToAction from "~/components/CallToAction";
import { MetaFunction } from "@remix-run/node";
import MediumContext from "~/contexts/medium";
import { loader } from "@/loaders/medium";
import { useLoaderData } from "@remix-run/react";
import MediumPosts from "~/components/MediumPosts";
import CompaniesWorkedWith from "~/components/CompaniesWorkedWith";

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
  const mediumFeed = useLoaderData<typeof loader>();
  return (
    <MediumContext.Provider value={mediumFeed}>
      <Layout>
        <Hero />
        <Services />
        <About />
        <SoftwareDevelopmentLeadership />
        <CustomSoftwareBenefits />
        <OutsourceDevelopmentBenefits />
        <MediumPosts />
        <FrequentlyAskedQuestions />

        <CompaniesWorkedWith />

        <CallToAction />

        <CookieConsent />
      </Layout>
    </MediumContext.Provider>
  );
}
