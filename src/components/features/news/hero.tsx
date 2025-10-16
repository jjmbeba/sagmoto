const NewsHero = () => (
  <section className="overflow-hidden py-6">
    <div className="h-[30dvh] sm:h-[45dvh] md:h-[55dvh]">
      <img
        alt="Company news and updates"
        className="h-full w-full object-cover"
        src="/news-hero.jpg"
      />
    </div>
    <div className="mt-6 flex flex-col items-center justify-center gap-3">
      <h1 className="px-4 text-center font-bold text-3xl sm:text-4xl md:text-5xl">
        Company News & Insights
      </h1>
      <p className="mx-auto max-w-3xl px-4 text-center text-base text-muted-foreground sm:text-lg">
        Explore updates, product launches, and resources to keep your fleet
        moving.
      </p>
    </div>
  </section>
);

export default NewsHero;
