import { createFileRoute } from "@tanstack/react-router";
import AboutCTA from "@/components/features/about/cta";
import AboutHero from "@/components/features/about/hero";
import MissionSection from "@/components/features/about/mission";
import TeamSection from "@/components/features/about/team";
import TimelineSection from "@/components/features/about/timeline";
import ValuesSection from "@/components/features/about/values";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Equipment King Inc. - About Us",
        description: "Learn more about Equipment King Inc.",
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen">
      <main className="relative z-10 px-6">
        <AboutHero />
        <MissionSection />
        <ValuesSection />
        <TeamSection />
        <TimelineSection />
        <AboutCTA />
      </main>
    </div>
  );
}
