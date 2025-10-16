import { ArrowRight, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="overflow-hidden py-32">
    <div className="container">
      <div className="flex flex-col gap-5">
        <div className="relative flex flex-col gap-5">
          <div
            className="-z-10 absolute top-1/2 left-1/2 mx-auto size-[800px] rounded-full border p-16 [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] md:size-[1300px] md:p-32"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="size-full rounded-full border-white p-16 md:p-32">
              <div className="size-full rounded-full border-white" />
            </div>
          </div>
          <span className="mx-auto flex size-16 items-center justify-center rounded-full border md:size-20">
            <Wifi />
          </span>
          <h2 className="mx-auto max-w-5xl text-balance text-center font-medium text-3xl md:text-6xl">
            Get a Quote
          </h2>
          <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg">
            Get a quote for your next truck today.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 pt-3 pb-12">
            <Button size="lg">
              Get a Quote <ArrowRight className="size-5 text-white" />
            </Button>
            <div className="text-muted-foreground text-xs">
              We'll get back to you within 24 hours.
            </div>
          </div>
        </div>
        <img
          alt={"Hero Image"}
          className="mx-auto h-full max-h-[524px] w-full max-w-5xl rounded-2xl object-cover"
          src={
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
          }
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
