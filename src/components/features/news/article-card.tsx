type Article = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  tag?: string;
};

const ArticleCard = ({ article }: { article: Article }) => (
  <article className="flex flex-col overflow-hidden rounded-xl border">
    <div className="relative aspect-video w-full overflow-hidden">
      <img
        alt={article.title}
        className="h-full w-full object-cover"
        src={article.image ?? "/news-placeholder.jpg"}
      />
      {article.tag ? (
        <span className="absolute top-3 left-3 rounded bg-orange-500 px-2 py-0.5 font-medium text-white text-xs">
          {article.tag}
        </span>
      ) : null}
    </div>
    <div className="flex flex-1 flex-col p-5">
      <time className="text-muted-foreground text-xs">{article.date}</time>
      <h3 className="mt-2 font-semibold text-lg">{article.title}</h3>
      <p className="mt-2 text-muted-foreground text-sm">{article.excerpt}</p>
      <div className="mt-auto pt-4">
        <a
          aria-label={`Read more: ${article.title}`}
          className="font-medium text-orange-500 text-sm hover:underline"
          href="/news"
        >
          Read more
        </a>
      </div>
    </div>
  </article>
);

export type { Article };
export default ArticleCard;
