type Milestone = {
  year: string;
  title: string;
  description: string;
};

const milestones: Milestone[] = [
  {
    year: "2010",
    title: "Founded",
    description: "Started with a commitment to fair, transparent truck sales.",
  },
  {
    year: "2015",
    title: "Nationwide Delivery",
    description: "Expanded logistics network to deliver across 30+ cities.",
  },
  {
    year: "2020",
    title: "Service Network",
    description: "Launched maintenance partnerships across the country.",
  },
  {
    year: "2024",
    title: "500+ Trucks Sold",
    description: "A milestone made possible by our customers' trust.",
  },
];

const TimelineSection = () => (
  <section className="py-16 sm:py-20">
    <div className="container px-4">
      <div className="mb-10 text-center">
        <h2 className="font-bold text-2xl tracking-tight sm:text-3xl md:text-4xl">
          Our Journey
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Key milestones that shaped who we are today.
        </p>
      </div>
      <ol className="relative mx-auto max-w-3xl border-l pl-6">
        {milestones.map((m) => (
          <li className="mb-10 ml-6" key={`${m.year}-${m.title}`}>
            <span
              aria-hidden
              className="-left-3 absolute mt-1 inline-flex size-5 items-center justify-center rounded-full border bg-background text-orange-500"
            >
              ●
            </span>
            <time className="font-semibold text-orange-500">{m.year}</time>
            <h3 className="mt-1 font-semibold">{m.title}</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              {m.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default TimelineSection;
