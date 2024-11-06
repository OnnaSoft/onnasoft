import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Contact from "~/components/Contact";
import Layout from "~/components/Layout";
import { loader } from "~/loaders/landing";

export { loader };

export const meta: MetaFunction = () => {
  return [
    {
      title: "Contact Us | OnnaSoft",
    },
    {
      property: "og:title",
      content: "Contact Us | OnnaSoft",
    },
    {
      name: "description",
      content:
        "Get in touch with OnnaSoft for tailored software solutions across web, mobile, API, and database platforms. Our team is here to support your business needs.",
    },
    {
      name: "keywords",
      content:
        "contact OnnaSoft, software development inquiries, custom software solutions, web development contact, mobile app development contact, API integration support, database solutions contact, software consulting, digital transformation support, enterprise software services, scalable software solutions contact",
    },
  ];
};

export default function ContactPage() {
  const { blogUrl, enableChat } = useLoaderData<typeof loader>();

  return (
    <Layout blogUrl={blogUrl} enableChat={enableChat}>
      <Contact />
    </Layout>
  );
}
