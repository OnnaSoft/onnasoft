import { useLoaderData } from "@remix-run/react";
import Layout from "@/components/Layout";
import {
  BarChart,
  Globe,
  Target,
  Zap,
  Users,
  FileText,
  Cpu,
  Clock,
  ChartBar,
} from "lucide-react";
import { loader } from "~/loaders/landing";
import CallToAction from "~/components/CallToAction";
import { MetaFunction } from "@remix-run/node";
import bannerSrc from "~/assets/936409880.webp";

export { loader };

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "SEO Positioning: Boost Your Online Visibility and Organic Traffic | OnnaSoft",
      description:
        "Enhance your website's visibility, improve search engine rankings, and attract more qualified leads with OnnaSoft's expert SEO positioning services.",
      keywords:
        "SEO positioning, online visibility, organic traffic, search engine optimization, SEO services, website ranking improvement, content optimization, keyword strategy, technical SEO, OnnaSoft SEO solutions, boost visibility, attract leads, digital marketing strategy",
    },
  ];
};

export default function SEOPositioningServices() {
  const { blogUrl, enableChat } = useLoaderData<typeof loader>();

  return (
    <Layout blogUrl={blogUrl} enableChat={enableChat}>
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            SEO Positioning: Boost Your Online Visibility and Organic Traffic
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Elevate your website's search engine rankings and attract more
            qualified leads
          </p>
          <img
            src={bannerSrc}
            alt="SEO Positioning"
            className="w-full h-auto rounded-lg shadow-xl mb-12"
          />
        </header>

        <div className="prose dark:prose-invert max-w-none mb-16">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            In today's digital landscape, high search engine visibility is
            crucial to success. At OnnaSoft, we specialize in SEO positioning
            strategies tailored to increase your website's search engine
            rankings, attract organic traffic, and drive more qualified leads.
            Our holistic approach integrates technical SEO, keyword-driven
            content creation, and off-page strategies to help your business
            achieve long-term visibility and growth in a competitive market.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose Our SEO Positioning Services?
          </h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <BarChart className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Increased Organic Traffic:</strong> Our SEO tactics are
                designed to raise your website's presence in search results,
                delivering a steady stream of organic visitors.
              </span>
            </li>
            <li className="flex items-start">
              <Target className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Targeted Audience Reach:</strong> We identify and focus
                on keywords that attract your ideal customers, increasing both
                traffic quality and conversion potential.
              </span>
            </li>
            <li className="flex items-start">
              <Zap className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Enhanced User Experience:</strong> Our SEO optimizations
                not only improve ranking but also make your site more intuitive
                and user-friendly.
              </span>
            </li>
            <li className="flex items-start">
              <Users className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Brand Credibility:</strong> Higher search engine
                visibility translates to increased authority and credibility
                within your industry.
              </span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our SEO Positioning Process
          </h2>
          <ol className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-orange-500 dark:text-orange-400 font-bold mr-3">
                1.
              </span>
              <span className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Comprehensive SEO Audit:</strong> We start by conducting
                an in-depth audit of your website's current SEO standing. This
                analysis covers on-page elements, technical SEO factors,
                backlink profile, keyword performance, and web performance
                metrics such as Largest Contentful Paint (LCP). By identifying
                areas for improvement, we can ensure your website adheres to
                Google's Core Web Vitals, which are key for better ranking
                potential.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 dark:text-orange-400 font-bold mr-3">
                2.
              </span>
              <span className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Keyword Research and Strategy:</strong> We research and
                identify a mix of high-value, relevant keywords specific to your
                industry and target audience. Our process considers search
                volume, keyword difficulty, and relevance to your business to
                ensure each term aligns with user intent. We also study
                competitors' strategies and target long-tail keywords for better
                conversion rates.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 dark:text-orange-400 font-bold mr-3">
                3.
              </span>
              <span className="text-lg text-gray-700 dark:text-gray-300">
                <strong>On-Page Optimization:</strong> We update and optimize
                content, meta titles, descriptions, and headers to increase
                relevance to the chosen keywords. We also improve internal
                linking structure to boost navigation, authority, and relevance.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 dark:text-orange-400 font-bold mr-3">
                4.
              </span>
              <span className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Technical SEO Implementation:</strong> Our team
                addresses technical aspects of SEO, such as site speed, mobile
                compatibility, and crawlability. We prioritize Core Web Vitals,
                including Largest Contentful Paint (LCP), to enhance loading
                times and meet Google's performance criteria for optimal
                ranking.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 dark:text-orange-400 font-bold mr-3">
                5.
              </span>
              <span className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Content Strategy and Creation:</strong> We develop a
                detailed content strategy aligned with your business objectives.
                Our team produces high-quality, informative, and
                keyword-optimized content, including blog posts, articles, and
                landing pages. We also keep your content fresh by regularly
                updating existing pages.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 dark:text-orange-400 font-bold mr-3">
                6.
              </span>
              <span className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Off-Page SEO and Link Building:</strong> We implement
                ethical link-building strategies, pursuing quality backlinks
                from reputable websites. We also leverage partnerships and guest
                blogging opportunities to build your reputation and increase
                visibility.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 dark:text-orange-400 font-bold mr-3">
                7.
              </span>
              <span className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Monitoring and Reporting:</strong> We continuously track
                the performance of your SEO efforts, providing regular reports
                on keyword rankings, traffic trends, and areas for improvement,
                allowing for agile adjustments to enhance results.
              </span>
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our SEO Positioning Services
          </h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <Globe className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Local SEO:</strong> Tailor your online presence for
                local searches, improving your visibility in Google Maps and
                search results specific to your geographic area.
              </span>
            </li>
            <li className="flex items-start">
              <FileText className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Content Optimization:</strong> We optimize existing and
                new content for SEO to ensure it appeals to search engines and
                resonates with your target audience.
              </span>
            </li>
            <li className="flex items-start">
              <Cpu className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Technical SEO:</strong> Improve site structure, speed,
                and mobile responsiveness, creating a solid foundation for
                successful SEO performance.
              </span>
            </li>
            <li className="flex items-start">
              <Clock className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Core Web Vitals Optimization:</strong> We ensure metrics
                like LCP, First Input Delay (FID), and Cumulative Layout Shift
                (CLS) meet Google's standards for higher search ranking
                potential.
              </span>
            </li>
            <li className="flex items-start">
              <ChartBar className="h-6 w-6 text-orange-500 dark:text-orange-400 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Keyword Research and Strategy:</strong> Discover and
                focus on high-value keywords that align with your business
                goals, improve rankings, and attract your target audience.
              </span>
            </li>
          </ul>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            At OnnaSoft, our approach to SEO positioning is data-driven and
            highly customized. By blending technical precision with engaging,
            keyword-rich content, we ensure that your website not only ranks
            higher but also attracts, engages, and converts your ideal audience.
            Let us help you build a robust online presence and harness the full
            potential of SEO to drive your business growth.
          </p>
        </div>
      </article>

      {/* Call to Action Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <CallToAction />
        </div>
      </section>
    </Layout>
  );
}
