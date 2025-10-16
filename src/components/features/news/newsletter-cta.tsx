import { Button } from "@/components/ui/button";

const NewsletterCTA = () => (
  <section className="py-16">
    <div className="container">
      <div className="mx-auto max-w-3xl rounded-2xl border p-8 text-center md:p-10">
        <h2 className="font-bold text-2xl tracking-tight sm:text-3xl">
          Subscribe to our newsletter
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          Get news and resources delivered to your inbox.
        </p>
        <form
          aria-label="Subscribe to newsletter"
          className="mx-auto mt-6 flex w-full max-w-xl flex-col items-stretch gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            aria-required
            className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
            id="newsletter-email"
            name="email"
            placeholder="you@example.com"
            type="email"
          />
          <Button aria-label="Subscribe" size="lg" type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  </section>
);

export default NewsletterCTA;
