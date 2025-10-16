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
    <div className="h-[40dvh] sm:h-[60dvh] md:h-[70dvh]">
      <img
        alt="Hero"
        className="h-full w-full object-cover"
        src="/hero-image.png"
      />
    </div>
    <div className="mt-6 flex flex-col items-center justify-center gap-4">
      <h3 className="px-4 text-center font-bold text-2xl sm:text-3xl md:text-4xl">
        Find your next truck
      </h3>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-stretch gap-3 border px-4 py-4 sm:w-11/12 sm:gap-4 sm:px-6 sm:py-6 md:w-4/5 md:flex-row md:items-center lg:w-2/3">
        <Select>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Trucks</SelectItem>
            <SelectItem value="dark">Parts</SelectItem>
            <SelectItem value="system">Services</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Select make" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Trucks</SelectItem>
            <SelectItem value="dark">Parts</SelectItem>
            <SelectItem value="system">Services</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Select model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Trucks</SelectItem>
            <SelectItem value="dark">Parts</SelectItem>
            <SelectItem value="system">Services</SelectItem>
          </SelectContent>
        </Select>
        <Button
          aria-label="Search trucks"
          className="w-full md:w-auto"
          type="button"
        >
          <SearchIcon className="size-4 bg-transparent text-background" />
          <span className="ml-2 bg-transparent">Search</span>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
