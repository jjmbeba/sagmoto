import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Truck = {
  id: string;
  name: string;
  payload: string;
  range: string;
  features: string[];
  image: string;
};

const truckData = {
  "light-duty": [
    {
      id: "ld-1",
      name: "Urban Delivery 150",
      payload: "2,000 lbs",
      range: "200 miles",
      features: [
        "Easy maneuverability",
        "Low loading height",
        "Fuel efficient",
      ],
      image: "/trucks/light-1.jpg",
    },
    {
      id: "ld-2",
      name: "City Runner 200",
      payload: "3,500 lbs",
      range: "250 miles",
      features: [
        "Spacious cargo area",
        "Advanced safety features",
        "Hybrid option",
      ],
      image: "/trucks/light-2.jpg",
    },
  ],
  "medium-duty": [
    {
      id: "md-1",
      name: "Cargo Master 350",
      payload: "8,000 lbs",
      range: "400 miles",
      features: [
        "Heavy-duty suspension",
        "Large cargo box",
        "Digital dashboard",
      ],
      image: "/trucks/medium-1.jpg",
    },
    {
      id: "md-2",
      name: "Fleet King 400",
      payload: "12,000 lbs",
      range: "450 miles",
      features: ["Air ride suspension", "Sleeper cabin", "Advanced telematics"],
      image: "/trucks/medium-2.jpg",
    },
  ],
  "heavy-duty": [
    {
      id: "hd-1",
      name: "Road Commander 750",
      payload: "35,000 lbs",
      range: "800 miles",
      features: [
        "Powerful engine",
        "Spacious sleeper",
        "Advanced safety systems",
      ],
      image: "/trucks/heavy-1.jpg",
    },
    {
      id: "hd-2",
      name: "Mega Hauler 1000",
      payload: "45,000 lbs",
      range: "1000 miles",
      features: [
        "Maximum payload capacity",
        "Luxury cabin",
        "Satellite navigation",
      ],
      image: "/trucks/heavy-2.jpg",
    },
  ],
  "off-road": [
    {
      id: "or-1",
      name: "Terrain Master X",
      payload: "15,000 lbs",
      range: "300 miles",
      features: [
        "All-wheel drive",
        "High ground clearance",
        "Reinforced chassis",
      ],
      image: "/trucks/offroad-1.jpg",
    },
    {
      id: "or-2",
      name: "Rock Crawler Pro",
      payload: "20,000 lbs",
      range: "350 miles",
      features: ["Extreme terrain capability", "Heavy duty winch", "Roll cage"],
      image: "/trucks/offroad-2.jpg",
    },
  ],
};

const ProductShowcase = () => (
  <section className="py-20">
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
            <ProductGrid trucks={truckData["light-duty"]} />
          </TabsContent>
          <TabsContent value="medium-duty">
            <ProductGrid trucks={truckData["medium-duty"]} />
          </TabsContent>
          <TabsContent value="heavy-duty">
            <ProductGrid trucks={truckData["heavy-duty"]} />
          </TabsContent>
          <TabsContent value="off-road">
            <ProductGrid trucks={truckData["off-road"]} />
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
  <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
    {trucks.map((truck) => (
      <Card className="overflow-hidden" key={truck.id}>
        <CardHeader className="space-y-4">
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
            <div className="h-full w-full" />
          </div>
          <CardTitle className="text-xl">{truck.name}</CardTitle>
          <div className="space-y-2 text-muted-foreground text-sm">
            <div className="flex justify-between">
              <span>Payload:</span>
              <span>{truck.payload}</span>
            </div>
            <div className="flex justify-between">
              <span>Range:</span>
              <span>{truck.range}</span>
            </div>
          </div>
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
