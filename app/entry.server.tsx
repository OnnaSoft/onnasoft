import { PassThrough } from "node:stream";

import type { EntryContext } from "@remix-run/node";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToPipeableStream } from "react-dom/server";

const ABORT_DELAY = 5_000;

const contentSecurityPolicy = [
  "default-src 'self';",
  "img-src 'self' https:;", 
  "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com https://www.googletagmanager.com;",
  "style-src 'self' 'unsafe-inline' https://p.typekit.net https://use.typekit.net;", 
  "connect-src 'self';",
  "font-src 'self' https://use.typekit.net;"
].join(" ");

const securityHeaders = {
  "Content-Type": "text/html",
  "Content-Security-Policy": contentSecurityPolicy,
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
  "X-Permitted-Cross-Domain-Policies": "none",
  "Cross-Origin-Resource-Policy": "same-origin",
  "Cross-Origin-Embedder-Policy": "require-corp",
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cache-Control": "public, max-age=2592000, s-maxage=2592000",
  "Set-Cookie": "sessionId=abc123; HttpOnly; Secure; SameSite=Strict",
  Server: "",
  "Expect-CT": "max-age=86400, enforce",
};


export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      <RemixServer
        context={remixContext}
        url={request.url}
        abortDelay={ABORT_DELAY}
      />,
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          // Establece todas las cabeceras en un solo paso
          Object.entries(securityHeaders).forEach(([key, value]) => {
            responseHeaders.set(key, value);
          });

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          if (error instanceof Error) {
            reject(error);
          }
          reject(new Error(String(error)));
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
