import { Link } from "@tanstack/react-router";

type MenuItem = {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
};

type FooterProps = {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
};

const Footer = ({
  logo = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "Sagmoto",
    url: "https://www.shadcnblocks.com",
  },
  tagline = "Components made easy.",
  menuItems = [
    {
      title: "Products",
      links: [
        { text: "Light Duty Truck", url: "#light-duty-truck" },
        { text: "Medium Duty Truck", url: "#medium-duty-truck" },
        { text: "Heavy Duty Truck", url: "#heavy-duty-truck" },
        { text: "Off Road Truck", url: "#off-road-truck" },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "Service Policy", url: "#service-policy" },
        { text: "Find your service provider", url: "#find-service-provider" },
        { text: "Maintenance Service", url: "#maintenance-service" },
        { text: "Driving Reminder", url: "#driving-reminder" },
        { text: "Safe Driving", url: "#safe-driving" },
      ],
    },
    {
      title: "News",
      links: [{ text: "Latest News", url: "#news" }],
    },
    {
      title: "About Us",
      links: [{ text: "About Us", url: "#about-us" }],
    },
  ],
  copyright = `© ${new Date().getFullYear()} ${logo.title}. All rights reserved.`,
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: FooterProps) => (
  <section className="px-4 py-32">
    <div className="container">
      <footer>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          <div className="col-span-2 mb-8 lg:mb-0">
            <div className="flex items-center gap-2 lg:justify-start">
              <Link className="flex items-center gap-2" to="/">
                <img
                  alt={logo.alt}
                  className="max-h-8 dark:invert"
                  height={32}
                  src={logo.src}
                  width={32}
                />
                <span className="font-semibold text-lg tracking-tighter">
                  {logo.title}
                </span>
              </Link>
            </div>
            <p className="mt-4 font-bold">{tagline}</p>
          </div>
          {menuItems.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-bold">{section.title}</h3>
              <ul className="space-y-4 text-muted-foreground">
                {section.links.map((link) => (
                  <li className="font-medium hover:text-primary" key={link.url}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 font-medium text-muted-foreground text-sm md:flex-row md:items-center">
          <p>{copyright}</p>
          <ul className="flex gap-4">
            {bottomLinks.map((link) => (
              <li className="underline hover:text-primary" key={link.url}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  </section>
);

export default Footer;
