import { MetaFunction, useLoaderData } from "@remix-run/react";
import CallToAction from "~/components/CallToAction";
import Layout from "~/components/Layout";
import { loader } from "~/loaders/landing";

export { loader };

export const meta: MetaFunction = () => {
  return [
    {
      title: "Our Vision | OnnaSoft",
    },
    {
      property: "og:title",
      content: "Our Vision | OnnaSoft",
    },
    {
      name: "description",
      content:
        "OnnaSoft envisions setting the standard in reliable, high-quality software development, empowering businesses to achieve excellence through innovative technology and agile solutions.",
    },
    {
      name: "keywords",
      content:
        "OnnaSoft vision, quality software development, reliable technology solutions, enterprise software excellence, innovation in tech, agile software development, scalable software solutions, digital leadership, OnnaSoft standards, tech for business growth",
    },
  ];
};

export default function Vision() {
  const { blogUrl, enableChat } = useLoaderData<typeof loader>();

  return (
    <Layout blogUrl={blogUrl} enableChat={enableChat}>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          OnnaSoft, Inc. Vision
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-xl font-semibold mb-6 text-center">
            "To position OnnaSoft as the standard for quality and reliability in
            the development of enterprise technological solutions."
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
            Excellence and Quality as the Norm
          </h2>
          <p className="text-lg mb-6">
            At OnnaSoft, quality is more than a goal: it's a daily commitment.
            We aspire to be a reference for excellence in enterprise software
            development, establishing quality control and assurance practices at
            every phase of the project. From conceptualization to
            implementation, we constantly seek to exceed industry standards,
            ensuring that every solution we deliver meets the highest demands of
            quality, security, and efficiency.
          </p>
          <p className="text-lg mb-6">
            This pursuit of excellence includes continuous investment in
            training and development of our team, as well as incorporating new
            technologies and methodologies to stay at the forefront. OnnaSoft
            will be recognized as an organization of consistent quality, where
            learning and continuous improvement are key elements of our
            organizational culture.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
            Reliability and Transparency in Client Relationships
          </h2>
          <p className="text-lg mb-6">
            Trust is the foundation of our relationship with clients. At
            OnnaSoft, we are committed to offering a reliable and transparent
            development experience, where each client can understand,
            participate in, and supervise their project at all stages. From
            requirement definition to final delivery, we maintain open and
            effective communication that allows our clients to have clarity and
            confidence in the process.
          </p>
          <p className="text-lg mb-6">
            Our team specializes in agile methodologies such as Scrum and
            DevOps, which ensure the delivery of consistent products and allow
            for rapid adaptation to changes in project requirements. Through
            communication and tracking tools like Slack and Jira, clients can
            monitor progress in real-time, which not only ensures transparency
            but also fosters a relationship of collaboration and continuous
            alignment.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
            Adaptable and Scalable Long-Term Technological Solutions
          </h2>
          <p className="text-lg mb-6">
            We understand that each business has specific challenges and needs,
            so our approach focuses on creating customized solutions that not
            only address current client problems but also facilitate long-term
            growth. Our team designs and develops scalable systems that
            integrate easily into our clients' technological ecosystems,
            allowing for continuous development and agile adaptation to future
            needs.
          </p>
          <p className="text-lg mb-6">
            This includes modular and flexible architectures that allow adding
            functionalities without disrupting the company's workflow. With
            experience in creating solutions for web applications, mobile, APIs,
            and databases, as well as for Big Data flows and cloud environment
            management (AWS, Kubernetes, and Cloudflare), OnnaSoft becomes a
            comprehensive partner capable of supporting projects that evolve and
            expand.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
            Preferred Partner in Fintech, Healthcare, E-commerce, and
            Manufacturing Sectors
          </h2>
          <p className="text-lg mb-6">
            Our experience spans a wide range of industries, each with its own
            challenges and specific regulations. In sectors such as fintech and
            healthcare, where security and compliance with regulatory standards
            are fundamental, OnnaSoft positions itself as a trusted ally. We
            comply with regulations such as PCI DSS in fintech and HIPAA in
            healthcare, ensuring that all communications, database connections,
            and authentication and logging processes are handled with the
            highest level of security.
          </p>
          <p className="text-lg mb-6">
            In the e-commerce and manufacturing fields, we work on solutions
            that improve operational efficiency, process automation, and
            integration of multiple platforms. Our team collaborates with
            clients to implement inventory management systems, transaction
            processing, supply chain management, and data analysis, generating a
            significant impact on their efficiency and productivity.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
            Culture of Innovation and World-Class Team
          </h2>
          <p className="text-lg mb-6">
            Our success as a company is based on the talent and passion of our
            team. At OnnaSoft, we foster a work environment where the best
            talents in technology find a space to develop professionally and add
            value to projects. Our team consists of developers, software
            architects, and specialists who apply best practices and
            cutting-edge technologies to ensure that each project is innovative,
            robust, and of the highest quality.
          </p>
          <p className="text-lg mb-6">
            We strive to maintain an elite team, not only in terms of technical
            skills but also in terms of ability to work in teams, collaborate,
            and adapt to the changing needs of our clients. Additionally, we
            have established policies that guarantee strict quality control and
            review processes, especially useful for startups and medium-sized
            companies that can benefit from accessing highly trained personnel
            for key moments without compromising their budget.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
            Responsible and Sustainable Innovation
          </h2>
          <p className="text-lg mb-6">
            At OnnaSoft, innovation is not only pursued as an end in itself but
            also as a means to create responsible and sustainable solutions. We
            seek to reduce the environmental footprint of our developments
            through resource optimization practices and energy efficiency in our
            cloud implementations and software solutions.
          </p>
          <p className="text-lg mb-6">
            We are committed to contributing positively to the industry,
            creating solutions that not only generate immediate value but also
            promote long-term sustainable growth for the companies we
            collaborate with.
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
