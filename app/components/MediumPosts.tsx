import { useContext } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import MediumContext from "~/contexts/medium";
import LandingContext from "~/contexts/landing";

export default function MediumPosts() {
  const { hydrated } = useContext(LandingContext);
  const { feed, items } = useContext(MediumContext);

  const truncateContent = (content: string, maxLength: number) => {
    const strippedContent = content.replace(/<[^>]+>/g, "").trim();
    if (strippedContent.length <= maxLength) return strippedContent;
    return strippedContent.slice(0, maxLength) + "...";
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-8">
          {feed?.title ?? "Stories by OnnaSoft, Inc on Medium"}
        </h2>
        <p className="text-xl leading-relaxed mb-12 mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased text-foreground text-center max-w-3xl">
          Discover insights, stories, and updates from our company directly on
          Medium. Explore how we innovate, solve problems, and share expertise
          through engaging articles designed to inspire and inform. Stay
          connected with our journey and let our experience guide you toward new
          possibilities.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hydrated &&
            items.map((post) => (
              <a
                href={post.link}
                key={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="flex flex-col transition-shadow hover:shadow-lg">
                  {post.thumbnail && (
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  )}
                  <CardContent className="flex-grow p-6 pb-3">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xl leading-relaxed mx-auto break-words text-rendering-optimizelegibility isolate break-word antialiased line-clamp-6">
                      {truncateContent(post.content, 300)}
                    </p>
                  </CardContent>
                  <CardFooter className="p-3 pt-0 mt-auto">
                    <p className="text-sm text-muted-foreground ml-auto">
                      {new Date(post.pubDate).toLocaleDateString()}
                    </p>
                  </CardFooter>
                </Card>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
