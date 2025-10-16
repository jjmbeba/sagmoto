import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import resources from "@/data/trucks.json" with { type: "json" };
import type { Truck } from "@/types";

const MAX_TRUCKS_PER_TAB = 6;

const ProductShowcase = () => (
  <section className="pt-20">
    <div className="container">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-bold text-4xl lg:text-5xl">
          Our Premium Truck Fleet
        </h2>
        <p className="mx-auto max-w-3xl text-muted-foreground text-xl">
          From light-duty delivery trucks to heavy-duty haulers, we have the
          perfect vehicle for your business needs.
        </p>
      </div>
      <div className="flex w-full items-center justify-center">
        <Tabs className="w-full" defaultValue="light-duty">
          <TabsList>
            <TabsTrigger value="light-duty">Light Duty</TabsTrigger>
            <TabsTrigger value="medium-duty">Medium Duty</TabsTrigger>
            <TabsTrigger value="heavy-duty">Heavy Duty</TabsTrigger>
            <TabsTrigger value="off-road">Off-Road</TabsTrigger>
          </TabsList>
          <TabsContent value="light-duty">
            <ProductGrid
              trucks={resources.en.translation.sagmoto_truck_families.heavy_duty_trucks.slice(
                0,
                MAX_TRUCKS_PER_TAB
              )}
            />
          </TabsContent>
          <TabsContent value="medium-duty">
            <ProductGrid
              trucks={resources.en.translation.sagmoto_truck_families.medium_duty_trucks.slice(
                0,
                MAX_TRUCKS_PER_TAB
              )}
            />
          </TabsContent>
          <TabsContent value="heavy-duty">
            <ProductGrid
              trucks={resources.en.translation.sagmoto_truck_families.heavy_duty_trucks.slice(
                0,
                MAX_TRUCKS_PER_TAB
              )}
            />
          </TabsContent>
          <TabsContent value="off-road">
            <ProductGrid
              trucks={resources.en.translation.sagmoto_truck_families.off_road_truck.slice(
                0,
                MAX_TRUCKS_PER_TAB
              )}
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* View All Button */}
      <div className="mt-12 text-center">
        <Button className="px-8 py-3 text-lg" size="lg" variant="outline">
          View All Trucks
        </Button>
      </div>
    </div>
  </section>
);

const ProductGrid = ({ trucks }: { trucks: Truck[] }) => (
  <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    {trucks.map((truck) => (
      <Card className="overflow-hidden bg-transparent" key={truck.modelName}>
        <CardHeader className="space-y-4">
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
            <div className="aspect-square h-full w-full border" />
          </div>
          <CardTitle className="text-xl">{truck.name}</CardTitle>
          <ul className="space-y-1 text-sm">
            {truck.features.map((feature) => (
              <li className="text-muted-foreground" key={feature}>
                • {feature}
              </li>
            ))}
          </ul>
        </CardHeader>
      </Card>
    ))}
  </div>
);

export default ProductShowcase;
