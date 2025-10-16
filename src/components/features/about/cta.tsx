import { Button } from "@/components/ui/button";

const AboutCTA = () => (
  <section className="py-16">
    <div className="container">
      <div className="mx-auto max-w-4xl rounded-2xl border p-8 text-center md:p-12">
        <h2 className="font-bold text-2xl tracking-tight sm:text-3xl md:text-4xl">
          Ready to Grow Your Fleet?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Talk with our specialists to explore vehicles, financing, and delivery
          timelines tailored to your business.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button aria-label="Get a quote" size="lg" type="button">
            Get a Quote
          </Button>
          <Button
            aria-label="Contact support"
            size="lg"
            type="button"
            variant="outline"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutCTA;
