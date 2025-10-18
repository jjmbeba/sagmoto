import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import trucksData from "@/data/trucks.json" with { type: "json" };
import type { SagmotoTruckFamilies, Truck as TruckType } from "@/types";

export const Route = createFileRoute("/products/$productId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { productId } = Route.useParams();
  const truckFamilies = trucksData.en.translation
    .sagmoto_truck_families as SagmotoTruckFamilies;

  // Find the truck by modelName across all categories
  const findTruck = (): TruckType | null => {
    const allTrucks = [
      ...truckFamilies.heavy_duty_trucks,
      ...truckFamilies.medium_duty_trucks,
      ...truckFamilies.light_duty_trucks,
      ...truckFamilies.electric_light_truck,
      ...truckFamilies.off_road_truck,
    ];
    return allTrucks.find((t) => t.modelName === productId) ?? null;
  };

  const truck = findTruck();

  if (!truck) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16">
              <Truck className="h-16 w-16 text-muted-foreground/50" />
              <h1 className="mt-4 font-bold text-2xl text-foreground">
                Truck Not Found
              </h1>
              <p className="mt-2 text-muted-foreground">
                The truck model "{productId}" could not be found.
              </p>
              <Button asChild className="mt-6">
                <Link to="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Products
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>

        {/* Product Header */}
        <div className="mb-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <Truck className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h1 className="font-bold text-3xl text-foreground">
                {truck.name}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                {truck.modelName}
              </p>
              <p className="mt-4 text-muted-foreground">{truck.description}</p>
            </div>
          </div>
        </div>

        {/* Product Details Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Detailed product information for {truck.name} will be displayed
              here. This includes comprehensive specifications, features, and
              technical details.
            </p>
            <div className="mt-6">
              <h3 className="mb-3 font-semibold text-foreground text-lg">
                Quick Specs
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {truck.engine && truck.engine.length > 0 && (
                  <div>
                    <h4 className="font-medium text-foreground">Engine</h4>
                    <p className="text-muted-foreground text-sm">
                      {truck.engine[0].model} - {truck.engine[0].power_ps} PS
                    </p>
                  </div>
                )}
                {truck.driving_types && (
                  <div>
                    <h4 className="font-medium text-foreground">
                      Configurations
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {truck.driving_types.length} driving types available
                    </p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
