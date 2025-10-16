import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image?: string;
};

const members: TeamMember[] = [
  { id: 1, name: "Alex Morgan", role: "CEO", image: undefined },
  { id: 2, name: "Priya Patel", role: "Head of Sales", image: undefined },
  { id: 3, name: "Diego Ramirez", role: "Service Director", image: undefined },
  { id: 4, name: "Emma Thompson", role: "Finance Manager", image: undefined },
];

const TeamSection = () => (
  <section className="py-16 sm:py-20">
    <div className="container px-4">
      <div className="mb-10 text-center">
        <h2 className="font-bold text-2xl tracking-tight sm:text-3xl md:text-4xl">
          Meet the Team
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          A dedicated group of specialists helping keep your business moving.
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <li
            className="rounded-xl border p-6 focus:outline-none focus:ring-2 focus:ring-orange-500"
            key={member.id}
          >
            <div className="mb-4 flex items-center gap-4">
              <Avatar className="size-14">
                <AvatarImage alt={member.name} src={member.image ?? ""} />
                <AvatarFallback>
                  {member.name.split(" ")[0].charAt(0) +
                    member.name.split(" ")[1].charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              {member.role} with years of experience supporting fleets and
              operations.
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TeamSection;
