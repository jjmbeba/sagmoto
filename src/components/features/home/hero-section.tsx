import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroSection = () => (
  <section className="overflow-hidden py-6">
    <div className="h-[70dvh]">
      <img
        alt="Hero"
        className="h-full w-full object-cover"
        src="/hero-image.png"
      />
    </div>
    <div className="mt-6 flex flex-col items-center justify-center gap-4">
      <h3 className="font-bold text-4xl">Find your next truck</h3>
      <div className="mx-auto flex w-2/3 items-center gap-4 border p-6">
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Trucks</SelectItem>
            <SelectItem value="dark">Parts</SelectItem>
            <SelectItem value="system">Services</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select make" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Trucks</SelectItem>
            <SelectItem value="dark">Parts</SelectItem>
            <SelectItem value="system">Services</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Trucks</SelectItem>
            <SelectItem value="dark">Parts</SelectItem>
            <SelectItem value="system">Services</SelectItem>
          </SelectContent>
        </Select>
        <Button>
          <SearchIcon className="size-4 bg-transparent text-background" />
          Search
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
