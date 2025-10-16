const CTASection = () => (
  <section className="py-32">
    <div className="container">
      <div className="flex w-full flex-col gap-16 overflow-hidden rounded-lg bg-accent p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12">
        <div className="flex-1">
          <h3 className="mb-3 font-semibold text-2xl md:mb-4 md:text-4xl lg:mb-6">
            Get a Quote
          </h3>
          <p className="max-w-xl text-muted-foreground lg:text-lg">
            Get a quote for your next truck today.
          </p>
        </div>
        <div className="shrink-0">
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-lg sm:h-40 sm:w-40">
              {/* <img src={imageSrc} alt={imageAlt} className="object-cover" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
