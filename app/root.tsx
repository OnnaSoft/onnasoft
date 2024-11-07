import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import "@/tailwind.css";
import LandingContext from "./contexts/landing";

export const links: LinksFunction = () => [];

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const protocol = request.headers.get("x-forwarded-proto");
  return json({
    blogUrl: process.env.BLOG_URL,
    enableChat: process.env.ENABLE_CHAT === "true",
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
    canonical: `${protocol ? protocol + ":" : url.protocol}//${url.host}${
      url.pathname
    }`,
  });
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { canonical, googleAnalyticsId, blogUrl, enableChat } =
    useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href={canonical} rel="canonical" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          onLoad={(evt) => {
            evt.currentTarget.rel = "stylesheet";
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          />
        </noscript>
        <Meta />
        <Links />

        <script
          async
          defer
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        <LandingContext.Provider value={{ blogUrl, enableChat }}>
          {children}
        </LandingContext.Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
