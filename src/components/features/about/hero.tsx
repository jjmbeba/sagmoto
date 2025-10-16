import { Button } from "@/components/ui/button";

const AboutHero = () => (
  <section className="overflow-hidden py-6">
    <div className="h-[30dvh] sm:h-[45dvh] md:h-[55dvh]">
      <img
        alt="About Equipment King Inc."
        className="h-full w-full object-cover"
        src="/about-hero.jpg"
      />
    </div>
    <div className="mt-6 flex flex-col items-center justify-center gap-4">
      <h1 className="px-4 text-center font-bold text-3xl sm:text-4xl md:text-5xl">
        Built to Move Business Forward
      </h1>
      <p className="mx-auto max-w-3xl px-4 text-center text-base text-muted-foreground sm:text-lg">
        We help companies find, finance, and maintain the right commercial
        vehicles— with transparent pricing and nationwide support.
      </p>
      <div className="flex items-center gap-3">
        <Button aria-label="Explore our fleet" size="lg" type="button">
          Explore Fleet
        </Button>
        <Button
          aria-label="Contact our team"
          size="lg"
          type="button"
          variant="outline"
        >
          Contact Sales
        </Button>
      </div>
    </div>
  </section>
);

export default AboutHero;
