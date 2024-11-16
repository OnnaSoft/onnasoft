import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  author: string;
  thumbnail: string;
}

interface MediumFeed {
  status: string;
  feed: {
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: MediumPost[];
}

export const loader: LoaderFunction = async () => {
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

export default function MediumPosts() {
  const { feed, items } = useLoaderData<MediumFeed>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-foreground">
        {feed.title}
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((post) => (
          <div
            key={post.link}
            className="bg-background rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {post.title}
                </a>
              </h2>
              <p className="text-muted-foreground text-sm mb-4">
                By {post.author} on{" "}
                {new Date(post.pubDate).toLocaleDateString()}
              </p>
              {post.thumbnail && (
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
              )}
              <div className="prose dark:prose-invert max-w-none mb-4">
                <p>{post.content.replace(/<[^>]+>/g, "").slice(0, 150)}...</p>
              </div>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
              >
                Read full article on Medium
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
