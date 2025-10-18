import { createFileRoute } from "@tanstack/react-router";
import { Settings, Truck, Zap } from "lucide-react";
import { ProductCard } from "@/components/features/products/product-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import trucksData from "@/data/trucks.json" with { type: "json" };
import type { SagmotoTruckFamilies } from "@/types";

export const Route = createFileRoute("/products/")({
  component: RouteComponent,
});

function RouteComponent() {
  const truckFamilies = trucksData.en.translation
    .sagmoto_truck_families as SagmotoTruckFamilies;

  const categories = [
    {
      key: "heavy_duty_trucks",
      title: "Heavy Duty Trucks",
      description:
        "Powerful trucks designed for demanding transportation needs",
      icon: Truck,
      trucks: truckFamilies.heavy_duty_trucks,
    },
    {
      key: "medium_duty_trucks",
      title: "Medium Duty Trucks",
      description: "Versatile trucks for urban and intercity transportation",
      icon: Settings,
      trucks: truckFamilies.medium_duty_trucks,
    },
    {
      key: "light_duty_trucks",
      title: "Light Duty Trucks",
      description: "Compact and efficient trucks for various applications",
      icon: Zap,
      trucks: truckFamilies.light_duty_trucks,
    },
    {
      key: "electric_light_truck",
      title: "Electric Light Trucks",
      description: "Environmentally friendly electric vehicles",
      icon: Zap,
      trucks: truckFamilies.electric_light_truck,
    },
    {
      key: "off_road_truck",
      title: "Off-Road Trucks",
      description: "Specialized vehicles for challenging terrains",
      icon: Truck,
      trucks: truckFamilies.off_road_truck,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-border border-b py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-bold text-4xl text-foreground tracking-tight sm:text-5xl">
              Our Truck Fleet
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Discover our comprehensive range of trucks designed for every
              transportation need. From heavy-duty haulers to electric vehicles,
              we provide reliable solutions for your business.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Badge className="text-sm" variant="secondary">
                {Object.values(truckFamilies).flat().length} Models Available
              </Badge>
              <Badge className="text-sm" variant="outline">
                Multiple Categories
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div className="space-y-8" key={category.key}>
                  {/* Category Header */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 bg-transparent text-primary" />
                    </div>
                    <div>
                      <h2 className="font-bold text-2xl text-foreground">
                        {category.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                    <Badge className="ml-auto" variant="outline">
                      {category.trucks.length} models
                    </Badge>
                  </div>

                  {/* Products Grid */}
                  {category.trucks.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {category.trucks.map((truck) => (
                        <ProductCard
                          category={category.key}
                          key={truck.modelName}
                          truck={truck}
                        />
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center py-12">
                        <Truck className="h-12 w-12 text-muted-foreground/50" />
                        <p className="mt-4 text-muted-foreground">
                          No trucks available in this category
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
