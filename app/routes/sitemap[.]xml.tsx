import { json } from "@remix-run/node";

// You can store this in your .env file
const DOMAIN = process.env.DOMAIN || "https://onnasoft.us";

export const loader = () => {
  const lastMod = new Date().toISOString();

  // Define all routes based on the actual file structure
  const routes = [
    { path: "/", priority: "1.0" },
    { path: "/contact", priority: "0.8" },
    { path: "/mission", priority: "0.8" },
    { path: "/vision", priority: "0.8" },
    { path: "/privacy-policy", priority: "0.5" },
    // Services pages
    { path: "/services/api-integration", priority: "0.7" },
    { path: "/services/cloud-migration", priority: "0.7" },
    { path: "/services/custom-development", priority: "0.7" },
    { path: "/services/it-outsourcing", priority: "0.7" },
    { path: "/services/performance-optimization", priority: "0.7" },
    { path: "/services/seo-positioning", priority: "0.7" },
  ];

  const content = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map(
          (route) => `
      <url>
        <loc>${DOMAIN}${route.path}</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>${route.priority}</priority>
      </url>`
        )
        .join("")}
    </urlset>`;

  // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};
