import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Michael Rodriguez",
    company: "Rodriguez Logistics",
    role: "Fleet Manager",
    rating: 5,
    text: "Sagmoto made the entire truck buying process seamless. Their financing options were exactly what we needed, and the delivery was faster than expected. Our new Freightliner has been running perfectly for 8 months now.",
    truck: "Freightliner Cascadia",
  },
  {
    id: 2,
    name: "Sarah Chen",
    company: "Chen Construction",
    role: "Operations Director",
    rating: 5,
    text: "Outstanding service from start to finish. The team helped us find the perfect heavy-duty truck for our construction projects. The warranty coverage gives us peace of mind, and the service network is excellent.",
    truck: "Peterbilt 579",
  },
  {
    id: 3,
    name: "David Thompson",
    company: "Thompson Transport",
    role: "Owner",
    rating: 5,
    text: "I've been in the trucking business for 15 years, and Sagmoto is by far the best dealer I've worked with. Their expertise, fair pricing, and ongoing support have made them our go-to partner for fleet expansion.",
    truck: "Chevrolet Silverado 3500HD",
  },
  {
    id: 4,
    name: "Lisa Martinez",
    company: "Martinez Delivery Services",
    role: "CEO",
    rating: 5,
    text: "The electric truck we purchased has exceeded our expectations. The range is perfect for our delivery routes, and the maintenance costs are significantly lower. Sagmoto's support team is always available when we need them.",
    truck: "Ford F-150 Lightning Pro",
  },
  {
    id: 5,
    name: "James Wilson",
    company: "Wilson Heavy Haul",
    role: "Fleet Operations",
    rating: 5,
    text: "We needed a reliable off-road truck for our mining operations, and Sagmoto delivered exactly what we needed. The truck has been performing flawlessly in challenging conditions, and their service network covers our remote locations.",
    truck: "Ford F-650 Super Duty",
  },
];

const TestimonialsSection = () => (
  <section className="py-32">
    <div className="container flex items-center justify-center">
      <Carousel
        className="w-full max-w-5xl"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <div className="flex flex-col items-center text-center">
                <p className="mb-16 max-w-4xl px-8 font-medium lg:text-3xl">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-2 md:gap-4">
                  <Avatar className="size-12 md:size-16">
                    <AvatarImage
                      alt={testimonial.name}
                      src={
                        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                      }
                    />
                    <AvatarFallback>{testimonial.name}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="font-medium text-sm md:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
);

export default TestimonialsSection;
