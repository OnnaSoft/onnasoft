import { useEffect, useMemo, useState } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import LandingContext from "@/contexts/landing";
import ChatWindow from "@/components/ChatWindow";
import "@/tailwind.css";
import "@/styles/global.css";

export const links: LinksFunction = () => [];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const protocol = request.headers.get("x-forwarded-proto");
  return Response.json({
    blogUrl: process.env.BLOG_URL ?? "",
    enableChat: process.env.ENABLE_CHAT === "true",
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
    googleAdsConversionId: process.env.GOOGLE_ADS_CONVERSION_ID,
    canonical: `${protocol ? protocol + ":" : url.protocol}//${url.host}${
      url.pathname
    }`,
  });
};

export function Layout({ children }: { readonly children: React.ReactNode }) {
  const {
    canonical,
    googleAnalyticsId,
    blogUrl,
    enableChat,
    googleAdsConversionId,
  } = useLoaderData<typeof loader>();
  const [hydrated, setHydrated] = useState(false);
  const contextValue = useMemo(() => ({ blogUrl, hydrated }), [blogUrl]);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href={canonical} rel="canonical" />
        <link rel="stylesheet" href="https://use.typekit.net/gus8ret.css" />

        <Meta />
        <Links />
        {googleAnalyticsId && (
          <>
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
            <script
              dangerouslySetInnerHTML={{
                __html: `
              gtag('event', 'conversion', {
                  'send_to': '${googleAdsConversionId}',
                  'value': 1.0,
                  'currency': 'COP'
              });
            `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <LandingContext.Provider value={contextValue}>
          {children}
          {hydrated && <ChatWindow enableChat={enableChat} />}
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
