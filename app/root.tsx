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
import Analytics from "@/components/Analytics";
import "@/tailwind.css";
import "@/styles/global.css";

export const links: LinksFunction = () => [];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const protocol = request.headers.get("x-forwarded-proto");
  const result = {
    blogUrl: process.env.BLOG_URL ?? "",
    enableChat: process.env.ENABLE_CHAT === "true",
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
    googleAdsConversionId: process.env.GOOGLE_ADS_CONVERSION_ID,
    canonical: `${protocol ? protocol + ":" : url.protocol}//${url.host}${
      url.pathname
    }`,
  };
  return Response.json(result) as any as typeof result;
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
  const contextValue = useMemo(
    () => ({ blogUrl, hydrated }),
    [blogUrl, hydrated]
  );

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    const preconnect = document.createElement("link");
    preconnect.rel = "preconnect";
    preconnect.href = "https://use.typekit.net";
    document.head.appendChild(preconnect);

    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "https://use.typekit.net/gus8ret.css";
    stylesheet.media = "print"; // No bloqueará el renderizado
    stylesheet.onload = () => (stylesheet.media = "all");
    document.head.appendChild(stylesheet);

    return () => {
      document.head.removeChild(preconnect);
      document.head.removeChild(stylesheet);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href={canonical} rel="canonical" />

        <Meta />
        <Links />
      </head>
      <body>
        <LandingContext.Provider value={contextValue}>
          {children}
          <ChatWindow enableChat={enableChat} />
        </LandingContext.Provider>
        <Analytics
          googleAnalyticsId={googleAnalyticsId}
          googleAdsConversionId={googleAdsConversionId}
        />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
