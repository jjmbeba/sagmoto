import { Link } from "@tanstack/react-router";
import {
  Book,
  Container,
  Menu,
  Mountain,
  Sunset,
  Trees,
  Truck,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type MenuItem = {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
};

type NavbarProps = {
  logo?: {
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
};

const Navbar = ({
  logo = {
    alt: "logo",
    title: "Equipment King Inc.",
  },
  menu = [
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Light Duty Truck",
          description:
            "Efficient and versatile trucks perfect for everyday commercial use",
          icon: <Truck className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Medium Duty Truck",
          description:
            "Powerful trucks designed for regional hauling and delivery",
          icon: <Truck className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Heavy Duty Truck",
          description:
            "High-capacity trucks built for long-haul transportation and heavy loads",
          icon: <Container className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Off Road Truck",
          description:
            "Rugged trucks engineered for challenging terrain and construction sites",
          icon: <Mountain className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Services",
      url: "#",
      items: [
        {
          title: "Service Policy",
          description:
            "Learn about our policies and guidelines for service delivery",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Find your service provider",
          description:
            "Search and connect with qualified service providers in your area",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Maintenance Service",
          description:
            "Schedule regular maintenance and repairs for your vehicle",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Driving Reminder",
          description:
            "Get helpful reminders and tips for safe and efficient driving",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Safe Driving",
          description: "Learn essential safe driving practices and techniques",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "News",
      url: "#",
    },
    {
      title: "About Us",
      url: "#",
    },
  ],
}: NavbarProps) => {
  return (
    <section className="relative z-50 bg-transparent px-6 py-4 pb-2 md:px-0">
      <div className="container bg-transparent">
        {/* Desktop Menu */}
        <nav className="hidden justify-between bg-transparent lg:flex">
          <div className="flex flex-1 items-center justify-between bg-transparent px-4">
            {/* Logo */}
            <Link className="flex items-center gap-2 bg-transparent" to="/">
              <span className="bg-transparent font-semibold text-lg tracking-tighter">
                {logo.title}
              </span>
            </Link>
            <div className="flex items-center gap-4 bg-transparent">
              {menu.map((item) => (
                <Link
                  className="bg-transparent uppercase hover:text-orange-500"
                  key={item.title}
                  to={item.url}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link className="flex items-center gap-2" to="/">
              <span className="font-semibold text-lg tracking-tighter">
                {logo.title}
              </span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link className="flex items-center gap-2" to="/">
                      <span className="font-semibold text-lg tracking-tighter">
                        {logo.title}
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    className="flex w-full flex-col gap-4"
                    collapsible
                    type="single"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem className="border-b-0" key={item.title} value={item.title}>
        <AccordionTrigger className="py-0 font-semibold text-md hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink item={subItem} key={subItem.title} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a className="font-semibold text-md" href={item.url} key={item.title}>
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => (
  <a
    className="flex min-w-80 select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
    href={item.url}
  >
    <div className="text-foreground">{item.icon}</div>
    <div>
      <div className="font-semibold text-sm">{item.title}</div>
      {item.description && (
        <p className="text-muted-foreground text-sm leading-snug">
          {item.description}
        </p>
      )}
    </div>
  </a>
);

export default Navbar;
