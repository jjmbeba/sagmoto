import { Link } from "@tanstack/react-router";
import { Settings, Truck, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Truck as TruckType } from "@/types";

type ProductCardProps = {
  truck: TruckType;
};

export function ProductCard({ truck }: ProductCardProps) {
  const getEmissionBadgeVariant = (emission: string) => {
    switch (emission) {
      case "Euro V": {
        return "default";
      }
      case "Euro III": {
        return "secondary";
      }
      case "Euro II": {
        return "outline";
      }
      default: {
        return "outline";
      }
    }
  };

  const getPrimaryEngine = () => {
    if (!truck.engine || truck.engine.length === 0) {
      return null;
    }
    return truck.engine[0];
  };

  const getPrimaryEmission = () => {
    const engine = getPrimaryEngine();
    return engine?.emission ?? "N/A";
  };

  const getPrimaryPower = () => {
    const engine = getPrimaryEngine();
    if (!engine) {
      return "N/A";
    }
    return typeof engine.power_ps === "string"
      ? engine.power_ps
      : `${engine.power_ps} PS`;
  };

  const getDrivingTypesCount = () => truck.driving_types?.length ?? 0;

  const truncateDescription = (description: string, maxLength = 120) => {
    if (description.length <= maxLength) {
      return description;
    }
    return `${description.substring(0, maxLength).trim()}...`;
  };

  return (
    <Card className="group h-full bg-transparent transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="font-semibold text-foreground text-lg transition-colors group-hover:text-primary">
              {truck.name}
            </CardTitle>
            <CardDescription className="mt-2 text-muted-foreground text-sm">
              {truncateDescription(truck.description)}
            </CardDescription>
          </div>
          <Badge
            className="ml-2 shrink-0"
            variant={getEmissionBadgeVariant(getPrimaryEmission())}
          >
            {getPrimaryEmission()}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Image placeholder with gradient */}
        <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <Truck className="h-16 w-16 text-primary/60" />
          </div>
          <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-background/80 to-transparent p-4">
            <p className="font-medium text-foreground text-sm">
              {truck.modelName}
            </p>
          </div>
        </div>

        {/* Key specifications */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Power:</span>
            <span className="font-medium text-foreground">
              {getPrimaryPower()}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Settings className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Configurations:</span>
            <span className="font-medium text-foreground">
              {getDrivingTypesCount()}
            </span>
          </div>
        </div>

        {/* Features preview */}
        {truck.features && truck.features.length > 0 && (
          <div className="space-y-2">
            <p className="font-medium text-muted-foreground text-xs uppercase tracking-wide">
              Key Features
            </p>
            <div className="flex flex-wrap gap-1">
              {truck.features.slice(0, 2).map((feature) => (
                <Badge className="text-xs" key={feature} variant="outline">
                  {feature}
                </Badge>
              ))}
              {truck.features.length > 2 && (
                <Badge className="text-xs" variant="outline">
                  +{truck.features.length - 2} more
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Action button */}
        <div className="pt-2">
          <Button asChild className="w-full">
            <Link
              params={{ productId: truck.modelName.toLowerCase() }}
              to="/products/$productId"
            >
              View Details
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
