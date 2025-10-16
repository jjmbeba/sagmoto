import ArticleCard, { type Article } from "./article-card";

const sampleArticles: Article[] = [
  {
    id: "1",
    title: "New Heavy-Duty Models Arrive",
    excerpt:
      "Explore the latest additions to our heavy-duty lineup, designed for performance and durability.",
    date: "Oct 10, 2025",
    image: "/news-hd.jpg",
    tag: "Announcement",
  },
  {
    id: "2",
    title: "Maintenance Tips For Winter",
    excerpt:
      "Prepare your fleet for cold weather with these essential maintenance tips from our service team.",
    date: "Oct 2, 2025",
    image: "/news-winter.jpg",
    tag: "Tips",
  },
  {
    id: "3",
    title: "Financing Options Expanded",
    excerpt:
      "We have expanded our financing options to support growing businesses with flexible terms.",
    date: "Sep 24, 2025",
    image: "/news-finance.jpg",
    tag: "Update",
  },
];

const NewsGrid = () => (
  <section className="py-16 sm:py-20">
    <div className="container px-4">
      <div className="mb-10 text-center">
        <h2 className="font-bold text-2xl tracking-tight sm:text-3xl md:text-4xl">
          Latest Updates
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Company announcements, product releases, and helpful resources.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sampleArticles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </div>
    </div>
  </section>
);

export default NewsGrid;
