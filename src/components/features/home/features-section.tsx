import {
  CheckCircle,
  Clock,
  CreditCard,
  Phone,
  Shield,
  Truck,
  Wrench,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <CreditCard className="h-8 w-8 text-orange-500" />,
      title: "Flexible Financing",
      description:
        "Get approved for competitive financing options with rates as low as 2.9% APR. We work with multiple lenders to find the best terms for your business.",
      benefits: [
        "Low interest rates",
        "Quick approval",
        "Flexible terms",
        "No prepayment penalty",
      ],
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Comprehensive Warranty",
      description:
        "Every truck comes with our industry-leading warranty coverage. Drive with confidence knowing your investment is protected.",
      benefits: [
        "5-year powertrain warranty",
        "3-year bumper-to-bumper",
        "24/7 roadside assistance",
        "Free maintenance for 2 years",
      ],
    },
    {
      icon: <Truck className="h-8 w-8 text-orange-500" />,
      title: "Nationwide Delivery",
      description:
        "We deliver your new truck anywhere in the continental US. Free delivery within 500 miles, competitive rates beyond.",
      benefits: [
        "Free local delivery",
        "Nationwide coverage",
        "Professional transport",
        "Delivery tracking",
      ],
    },
    {
      icon: <Wrench className="h-8 w-8 text-orange-500" />,
      title: "Expert Service Network",
      description:
        "Access our nationwide network of certified service centers. Keep your truck running at peak performance with our expert technicians.",
      benefits: [
        "Certified technicians",
        "Genuine parts",
        "Mobile service available",
        "Service history tracking",
      ],
    },
    {
      icon: <Phone className="h-8 w-8 text-orange-500" />,
      title: "24/7 Customer Support",
      description:
        "Our dedicated support team is available around the clock to help with any questions or concerns about your truck.",
      benefits: [
        "24/7 phone support",
        "Online chat support",
        "Emergency assistance",
        "Technical support",
      ],
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Quick Turnaround",
      description:
        "From inquiry to delivery, we streamline the entire process. Most trucks are ready for delivery within 2-3 business days.",
      benefits: [
        "Fast processing",
        "Same-day quotes",
        "Quick delivery",
        "Express service available",
      ],
    },
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-4xl text-white lg:text-5xl">
            Why Choose Sagmoto?
          </h2>
          <p className="mx-auto max-w-3xl text-slate-300 text-xl">
            We're not just selling trucks – we're providing complete commercial
            vehicle solutions with unmatched service and support.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              className="rounded-xl bg-slate-800 p-8 transition-colors duration-300 hover:bg-slate-700"
              key={index}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <h3 className="font-bold text-white text-xl">
                  {feature.title}
                </h3>
              </div>

              <p className="mb-6 text-slate-300 leading-relaxed">
                {feature.description}
              </p>

              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li
                    className="flex items-center gap-2 text-slate-300"
                    key={benefitIndex}
                  >
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-4xl rounded-xl bg-gradient-to-r from-orange-600 to-orange-700 p-8">
            <h3 className="mb-4 font-bold text-2xl text-white">
              Ready to Find Your Perfect Truck?
            </h3>
            <p className="mb-6 text-orange-100">
              Get a personalized quote and discover financing options tailored
              to your business needs.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                className="rounded-lg bg-white px-8 py-3 font-semibold text-orange-600 transition-colors hover:bg-orange-50"
                type="button"
              >
                Get Free Quote
              </button>
              <button
                className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-orange-600"
                type="button"
              >
                Schedule Test Drive
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
