import { json, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return json({
    blogUrl: process.env.BLOG_URL,
    enableChat: process.env.ENABLE_CHAT === "true",
  });
};
