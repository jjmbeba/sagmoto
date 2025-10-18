import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Battery,
  Fuel,
  Gauge,
  Settings,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    return (
      allTrucks.find(
        (t) => t.modelName.toLowerCase() === productId?.toLowerCase()
      ) ?? null
    );
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
              <Truck className="h-8 w-8 bg-transparent text-primary" />
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

        {/* Product Details */}
        <Tabs className="space-y-6" defaultValue="overview">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="configurations">Configurations</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent className="space-y-6" value="overview">
            <Card className="bg-transparent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    Description
                  </h3>
                  <p className="text-muted-foreground">{truck.description}</p>
                </div>

                {truck.positioning && truck.positioning.length > 0 && (
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      Positioning
                    </h3>
                    <ul className="list-inside list-disc space-y-1">
                      {truck.positioning.map((position) => (
                        <li className="text-muted-foreground" key={position}>
                          {position}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {truck.driving_types && truck.driving_types.length > 0 && (
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      Available Configurations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {truck.driving_types.map((type) => (
                        <Badge key={type} variant="outline">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Specifications Tab */}
          <TabsContent className="space-y-6" value="specifications">
            {/* Engine Specifications */}
            {truck.engine && truck.engine.length > 0 && (
              <Card className="bg-transparent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Fuel className="h-5 w-5" />
                    Engine Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {truck.engine.map((engine) => (
                      <div
                        className="space-y-2 rounded-lg border p-4"
                        key={engine.model}
                      >
                        <h4 className="font-medium text-foreground">
                          {engine.model}
                        </h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Emission:
                            </span>
                            <Badge variant="outline">{engine.emission}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Power:
                            </span>
                            <span className="font-medium">
                              {engine.power_ps} PS
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Torque:
                            </span>
                            <span className="font-medium">
                              {engine.max_torque_nm} Nm
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Capacity:
                            </span>
                            <span className="font-medium">
                              {engine.engine_capacity_l}L
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Transmission Specifications */}
            {truck.transmission && truck.transmission.length > 0 && (
              <Card className="bg-transparent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Transmission Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {truck.transmission.map((transmission) => (
                      <div
                        className="space-y-2 rounded-lg border p-4"
                        key={transmission.model}
                      >
                        <h4 className="font-medium text-foreground">
                          {transmission.model}
                        </h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Type:</span>
                            <span className="font-medium">
                              {transmission.shift_mode}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Gears:
                            </span>
                            <span className="font-medium">
                              {transmission.gears}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Material:
                            </span>
                            <span className="font-medium">
                              {transmission.shell_material}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Torque:
                            </span>
                            <span className="font-medium">
                              {transmission.torque_nm} Nm
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Drive Axle Specifications */}
            {truck.drive_axle && truck.drive_axle.length > 0 && (
              <Card className="bg-transparent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    Drive Axle Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {truck.drive_axle.map((axle) => (
                      <div
                        className="space-y-2 rounded-lg border p-4"
                        key={axle.model}
                      >
                        <h4 className="font-medium text-foreground">
                          {axle.model}
                        </h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Type:</span>
                            <span className="font-medium">{axle.type}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Load:</span>
                            <span className="font-medium">
                              {axle.axle_load_kg || axle.axle_load_ton}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Torque:
                            </span>
                            <span className="font-medium">
                              {axle.torque_nm} Nm
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Ratio:
                            </span>
                            <span className="font-medium">
                              {axle.speed_ratio}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Electric Vehicle Specifications */}
            {truck.drive_motor && truck.drive_motor.length > 0 && (
              <Card className="bg-transparent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Electric Motor Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {truck.drive_motor.map((motor) => (
                      <div
                        className="space-y-2 rounded-lg border p-4"
                        key={motor.model}
                      >
                        <h4 className="font-medium text-foreground">
                          {motor.model}
                        </h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Power:
                            </span>
                            <span className="font-medium">
                              {motor.power_ps} PS
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Torque:
                            </span>
                            <span className="font-medium">
                              {motor.max_torque_nm} Nm
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Battery Specifications */}
            {truck.battery && truck.battery.length > 0 && (
              <Card className="bg-transparent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Battery className="h-5 w-5" />
                    Battery Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {truck.battery.map((battery) => (
                      <div
                        className="space-y-2 rounded-lg border p-4"
                        key={battery.model}
                      >
                        <h4 className="font-medium text-foreground">
                          {battery.brand} {battery.model}
                        </h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Performance:
                            </span>
                            <span className="font-medium text-xs">
                              {battery.charging_performance}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Charging Time:
                            </span>
                            <span className="font-medium text-xs">
                              {battery.charging_time}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Features Tab */}
          <TabsContent className="space-y-6" value="features">
            <Card className="bg-transparent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gauge className="h-5 w-5" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                {truck.features && truck.features.length > 0 ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {truck.features.map((feature) => (
                      <div
                        className="flex items-start gap-3 rounded-lg border p-3"
                        key={feature}
                      >
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Zap className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">
                    No features listed for this model.
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configurations Tab */}
          <TabsContent className="space-y-6" value="configurations">
            {truck.specific_configurations &&
            truck.specific_configurations.length > 0 ? (
              <div className="space-y-6">
                {truck.specific_configurations.map((config) => (
                  <Card className="bg-transparent" key={config.model}>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {config.model_name}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm">
                        Model: {config.model}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div>
                          <h4 className="mb-2 font-medium text-foreground">
                            Vehicle Specifications
                          </h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                GVW:
                              </span>
                              <span className="font-medium">
                                {config.gvw_t} tons
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Wheelbase:
                              </span>
                              <span className="font-medium">
                                {config.wheelbase_mm}mm
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Dimensions:
                              </span>
                              <span className="font-medium text-xs">
                                {config.vehicle_dimension_mm}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="mb-2 font-medium text-foreground">
                            Engine
                          </h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Brand:
                              </span>
                              <span className="font-medium">
                                {config.engine.brand}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Model:
                              </span>
                              <span className="font-medium text-xs">
                                {config.engine.model}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Power:
                              </span>
                              <span className="font-medium">
                                {config.engine.rated_power}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Displacement:
                              </span>
                              <span className="font-medium">
                                {config.engine.displacement_l}L
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="mb-2 font-medium text-foreground">
                            Transmission
                          </h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Brand:
                              </span>
                              <span className="font-medium">
                                {config.transmission.brand}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Model:
                              </span>
                              <span className="font-medium text-xs">
                                {config.transmission.model}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <h4 className="mb-2 font-medium text-foreground">
                          Additional Details
                        </h4>
                        <div className="grid gap-2 text-sm sm:grid-cols-2">
                          <div>
                            <span className="text-muted-foreground">
                              Steering:
                            </span>{" "}
                            <span className="font-medium">
                              {config.steering_position}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              Transmission Type:
                            </span>{" "}
                            <span className="font-medium">
                              {config.transmission_type}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              Front Axle:
                            </span>{" "}
                            <span className="font-medium">
                              {config.front_axle}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              Rear Axle:
                            </span>{" "}
                            <span className="font-medium text-xs">
                              {config.rear_axle}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Tire:</span>{" "}
                            <span className="font-medium text-xs">
                              {config.tire}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Body:</span>{" "}
                            <span className="font-medium text-xs">
                              {config.body}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="bg-transparent">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Settings className="h-12 w-12 text-muted-foreground/50" />
                  <p className="mt-4 text-muted-foreground">
                    No specific configurations available for this model.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
