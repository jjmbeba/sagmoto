import type { LucideIcon } from "lucide-react";
import { Award, Globe, Shield, Truck } from "lucide-react";

type StatItem = {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
};

const StatsSection = () => {
  const stats: StatItem[] = [
    {
      icon: Truck,
      value: "500+",
      label: "Trucks Sold",
      description: "Commercial vehicles delivered nationwide",
    },
    {
      icon: Award,
      value: "15+",
      label: "Years Experience",
      description: "Trusted expertise in commercial vehicles",
    },
    {
      icon: Globe,
      value: "50+",
      label: "Cities Served",
      description: "Nationwide delivery and service network",
    },
    {
      icon: Shield,
      value: "98%",
      label: "Customer Satisfaction",
      description: "Rated by our valued customers",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <div className="flex max-w-2xl flex-col gap-3 text-center">
          <h2 className="font-bold text-2xl tracking-tight sm:text-3xl md:text-4xl">
            Trusted by Businesses nationwide
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Our track record speaks for itself. Join thousands of satisfied
            customers who trust us for their commercial vehicle needs.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                className="flex items-start gap-3 sm:items-center sm:gap-4"
                key={stat.label}
              >
                <div className="flex size-14 items-center justify-center rounded-full">
                  <Icon className="size-6 bg-transparent text-orange-500" />
                </div>
                <div className="flex flex-col">
                  <div className="font-extrabold text-3xl tracking-tight sm:text-4xl md:text-5xl">
                    {stat.value}
                  </div>
                  <p className="font-medium text-muted-foreground text-sm sm:text-base">
                    {stat.label}
                  </p>
                  <p className="mt-1 hidden text-muted-foreground text-xs sm:block">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
