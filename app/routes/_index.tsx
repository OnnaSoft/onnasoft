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
  });
};

function LandingPage({ blogUrl }: { blogUrl: string }) {
  return (
    <Layout blogUrl={blogUrl}>
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
  const { blogUrl } = useLoaderData<typeof loader>();
  return <LandingPage blogUrl={blogUrl} />;
}
