// Puedes almacenar el dominio en tu archivo .env
const DOMAIN = process.env.DOMAIN || "https://onnasoft.us";

export const loader = () => {
  const lastMod = new Date().toISOString();

  // Define todas las rutas basadas en la estructura de archivos actual
  const routes = [
    { path: "/", priority: "1.0" },
    { path: "/contact", priority: "0.8" },
    { path: "/mission", priority: "0.8" },
    { path: "/vision", priority: "0.8" },
    { path: "/privacy-policy", priority: "0.5" },
    // Páginas de servicios
    { path: "/services/api-integration", priority: "0.7" },
    { path: "/services/cloud-migration", priority: "0.7" },
    { path: "/services/custom-development", priority: "0.7" },
    { path: "/services/it-outsourcing", priority: "0.7" },
    { path: "/services/performance-optimization", priority: "0.7" },
    { path: "/services/seo-positioning", priority: "0.7" },
    { path: "/services/staff-augmentation", priority: "0.7" },
    // Archivo del sitemap
    { path: "/sitemap.xml", priority: "0.5" }
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

  // Retornar la respuesta con el contenido, un status 200 y los headers apropiados para un archivo XML
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};
