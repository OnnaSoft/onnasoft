import { useLoaderData } from "@remix-run/react";
import Contact from "~/components/Contact";
import Layout from "~/components/Layout";
import { loader } from "~/loaders/landing";

export { loader };

export default function ContactPage() {
  const { blogUrl, enableChat } = useLoaderData<typeof loader>();

  return (
    <Layout blogUrl={blogUrl} enableChat={enableChat}>
      <Contact />
    </Layout>
  );
}
