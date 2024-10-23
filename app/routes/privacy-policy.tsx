import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import CookieConsent from "~/components/CookieConsent";
import Layout from "~/components/Layout";

export const loader: LoaderFunction = async () => {
  return json({
    blogUrl: process.env.BLOG_URL,
  });
};

function PrivacyPolicy({ blogUrl }: { blogUrl: string }) {
  return (
    <Layout blogUrl={blogUrl}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Privacy Policy
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            1. Introduction
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            At OnnaSoft, Inc., we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            2. Information We Collect
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We may collect personal information that you provide directly to us,
            such as:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
            <li>Name and contact information</li>
            <li>Company information</li>
            <li>Information provided through our contact forms</li>
            <li>Any other information you choose to provide</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We also automatically collect certain information when you visit our
            website, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on those pages</li>
            <li>Referring website addresses</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
            <li>Providing and improving our services</li>
            <li>Communicating with you about our services</li>
            <li>Analyzing website usage and trends</li>
            <li>Complying with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            4. Cookies and Similar Technologies
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We use cookies and similar tracking technologies to collect and
            store information about your interactions with our website. You can
            manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            5. Data Security
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            6. Your Rights
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Depending on your location, you may have certain rights regarding
            your personal information, including the right to access, correct,
            or delete your data. To exercise these rights, please contact us
            using the information provided below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            7. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            8. Contact Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            OnnaSoft, Inc.
            <br />
            2261 Market Street, San Francisco, CA 94114 US
            <br />
            Email: privacy@onnasoft.com
            <br />
            Phone: +1 (206) 649-8382
          </p>
        </section>

        <p className="text-gray-600 dark:text-gray-400 italic">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
      <CookieConsent />
    </Layout>
  );
}

export default function PrivacyPolicyPage() {
  const { blogUrl } = useLoaderData<typeof loader>();
  return <PrivacyPolicy blogUrl={blogUrl} />;
}
