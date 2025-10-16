const MissionSection = () => (
  <section className="py-16 sm:py-20">
    <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2">
      <div>
        <h2 className="font-bold text-2xl tracking-tight sm:text-3xl md:text-4xl">
          Our Mission
        </h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          We exist to empower businesses with reliable commercial vehicles and
          long-term support. From first inquiry to after-sale service, our team
          delivers clarity, fairness, and speed—so your operations never slow
          down.
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3">
          <li className="flex items-start gap-3">
            <span
              aria-hidden
              className="mt-1 inline-block size-2 rounded-full bg-orange-500"
            />
            <p className="text-sm sm:text-base">
              Transparent pricing and expert guidance on every purchase
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span
              aria-hidden
              className="mt-1 inline-block size-2 rounded-full bg-orange-500"
            />
            <p className="text-sm sm:text-base">
              Financing options that fit your growth
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span
              aria-hidden
              className="mt-1 inline-block size-2 rounded-full bg-orange-500"
            />
            <p className="text-sm sm:text-base">
              Nationwide delivery and service coverage
            </p>
          </li>
        </ul>
      </div>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border">
        <img
          alt="Technician inspecting a commercial truck"
          className="h-full w-full object-cover"
          src="/about-mission.jpg"
        />
      </div>
    </div>
  </section>
);

export default MissionSection;
