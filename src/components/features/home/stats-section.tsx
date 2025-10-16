import { Award, Globe, Shield, Truck } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <Truck className="h-8 w-8 text-orange-500" />,
      value: "500+",
      label: "Trucks Sold",
      description: "Commercial vehicles delivered nationwide",
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      value: "15+",
      label: "Years Experience",
      description: "Trusted expertise in commercial vehicles",
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      value: "50+",
      label: "Cities Served",
      description: "Nationwide delivery and service network",
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      value: "98%",
      label: "Customer Satisfaction",
      description: "Rated by our valued customers",
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl md:text-4xl">
            Trusted by Businesses nationwide
          </h2>
          <p>
            Our track record speaks for itself. Join thousands of satisfied
            customers who trust us for their commercial vehicle needs.
          </p>
        </div>
        <div className="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div className="flex flex-col gap-5" key={stat.label}>
              <div className="font-bold text-6xl">{stat.value}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
