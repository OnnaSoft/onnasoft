import { MediumFeed } from "~/models/medium";

export const loader = async () => {
  const mediumFeedUrl = process.env.MEDIUM_FEED_URL;
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${mediumFeedUrl}`;

  try {
    const response = await fetch(apiUrl);
    const data: MediumFeed = await response.json();

    if (data.status !== "ok") {
      throw new Error("Failed to fetch Medium posts");
    }

    return Response.json(data);
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    return Response.json({ status: "error", feed: {}, items: [] });
  }
};
