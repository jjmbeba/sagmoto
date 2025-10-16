import { Award, Handshake, Shield, Truck } from "lucide-react";

type ValueItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ValuesSection = () => {
  const values: ValueItem[] = [
    {
      icon: <Handshake className="size-6 bg-transparent" />,
      title: "Customer-First",
      description:
        "We lead with listening and tailor solutions around your operations.",
    },
    {
      icon: <Shield className="size-6 bg-transparent" />,
      title: "Reliability",
      description:
        "From sourcing to service, we hold high standards for uptime.",
    },
    {
      icon: <Award className="size-6 bg-transparent" />,
      title: "Expertise",
      description:
        "Seasoned specialists guide you to the right vehicle for the job.",
    },
    {
      icon: <Truck className="size-6 bg-transparent" />,
      title: "Coverage",
      description: "Nationwide delivery and service that meet your schedules.",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="font-bold text-2xl tracking-tight sm:text-3xl md:text-4xl">
            Our Values
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Principles that shape how we work and the partnerships we build.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => (
            <article
              className="rounded-xl border p-6 transition-colors hover:border-orange-500"
              key={item.title}
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
                <span aria-hidden className="bg-transparent text-orange-500">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
