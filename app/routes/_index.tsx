import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import About from "~/components/About";
import Contact from "~/components/Contact";
import CookieConsent from "~/components/CookieConsent";
import FAQ from "~/components/FAQ";
import Hero from "~/components/Hero";
import Layout from "~/components/Layout";
import Services from "~/components/Services";
import Testimonials from "~/components/Testimonials";

export const loader: LoaderFunction = async () => {
  return json({
    blogUrl: process.env.BLOG_URL,
    enableChat: process.env.ENABLE_CHAT === "true",
  });
};

interface LandingPageProps {
  blogUrl: string;
  enableChat: boolean;
}

function LandingPage({ blogUrl, enableChat }: LandingPageProps) {
  return (
    <Layout blogUrl={blogUrl} enableChat={enableChat}>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />

      <CookieConsent />
    </Layout>
  );
}

export default function Index() {
  const { blogUrl, enableChat } = useLoaderData<typeof loader>();
  return <LandingPage blogUrl={blogUrl} enableChat={enableChat} />;
}
