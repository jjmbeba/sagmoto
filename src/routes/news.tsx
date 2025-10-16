import { createFileRoute } from "@tanstack/react-router";
import NewsGrid from "@/components/features/news/grid";
import NewsHero from "@/components/features/news/hero";
import NewsletterCTA from "@/components/features/news/newsletter-cta";

export const Route = createFileRoute("/news")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Equipment King Inc. - News",
      },
      {
        name: "description",
        content:
          "Company news, product updates, and insights from Equipment King Inc.",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <div className="min-h-screen">
      <main className="relative z-10 px-6">
        <NewsHero />
        <NewsGrid />
        <NewsletterCTA />
      </main>
    </div>
  );
}
