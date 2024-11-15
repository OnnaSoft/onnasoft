import {
  json,
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
import "~/styles/global.css";

export const links: LinksFunction = () => [];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const protocol = request.headers.get("x-forwarded-proto");
  return json({
    blogUrl: process.env.BLOG_URL ?? "",
    assistantId: process.env.OPENAI_ASSISTANT_ID ?? "",
    enableChat: process.env.ENABLE_CHAT === "true",
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
    canonical: `${protocol ? protocol + ":" : url.protocol}//${url.host}${
      url.pathname
    }`,
  });
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { canonical, googleAnalyticsId, blogUrl, assistantId } =
    useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href={canonical} rel="canonical" />
        <link rel="stylesheet" href="https://use.typekit.net/gus8ret.css" />

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
        <LandingContext.Provider value={{ blogUrl }}>
          {children}

          <ChatWindow assistantId={assistantId} />
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
