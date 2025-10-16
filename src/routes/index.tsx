import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/features/home/hero-section";
import ProductShowcase from "@/components/features/home/product-showcase";
import StatsSection from "@/components/features/home/stats-section";
import TestimonialsSection from "@/components/features/home/testimonials-section";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="min-h-screen">
      <main className="relative z-10 px-6">
        <HeroSection />
        <ProductShowcase />
        <StatsSection />
        <TestimonialsSection />
        {/* <CTASection /> */}
      </main>
    </div>
  );
}
