import { MoveRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionTitle from "@/components/section-title";
import Link from "next/link";

const adventureCategory = [
  {
    title: "River Rafting",
    description:
      "Conquer thrilling rapids across Uttarakhand—from the mighty Ganga in Rishikesh to serene streams in Mori and Tons Valley. Perfect for both beginners and extreme adventure lovers.",
    image: "/services/01.webp",
    explore: "Explore Rafting",
    route: "/service/rafting",
  },
  {
    title: "Trekking",
    description:
      "Explore breathtaking trails like Valley of Flowers, Kedarkantha, Har Ki Dun, Nag Tibba, and more. Uttarakhand offers scenic routes for beginners as well as seasoned trekkers.",
    image: "/services/02.webp",
    explore: "Explore Trekking",
    route: "/service/trekking",
  },
  {
    title: "Camping",
    description:
      "Enjoy peaceful nights under starry skies with riverside, jungle, and snow camping options across Rishikesh, Chopta, Auli, and Jim Corbett. A perfect escape into nature.",
    image: "/services/03.webp",
    explore: "Explore Camping",
    route: "/service/camping",
  },
  {
    title: "Paragliding",
    description:
      "Soar high above the Himalayan valleys in Bhimtal, Mussoorie, and Pithoragarh. Experience breathtaking aerial views and smooth glides across snow-capped peaks.",
    image: "/services/04.webp",
    explore: "Explore Paragliding",
    route: "/service/paragliding",
  },
  {
    title: "Wildlife Safari",
    description:
      "Witness tigers, elephants, deer, and exotic birds on guided jungle safaris in Jim Corbett and Rajaji National Park. Perfect for nature lovers and wildlife enthusiasts.",
    image: "/services/05.webp",
    explore: "Explore Wildlife Safari",
    route: "/service/safari",
  },
  {
    title: "Skiing & Snow Adventures",
    description:
      "Experience India's best snow adventures in Auli—skiing, snowboarding, snow trekking, and more. Ideal for winter lovers and thrill seekers.",
    image: "/services/02.webp",
    explore: "Explore Snow Adventures",
    route: "/service/snow-adventures",
  },
  {
    title: "Bungee Jumping",
    description:
      "Take an adrenaline-pumping jump from high-altitude platforms in Rishikesh. A must-try adventure for those who love pushing their limits.",
    image: "/services/03.webp",
    explore: "Explore Bungee Jumping",
    route: "/service/bungee-jumping",
  },
  {
    title: "Zipline",
    description:
      "Fly above forests, valleys, and rivers with long-distance ziplines in Rishikesh, Mussoorie, and Nainital. Enjoy thrilling speed with stunning panoramic views.",
    image: "/services/04.webp",
    explore: "Explore Zipline",
    route: "/service/zipline",
  },
];

export default function AdventureCategories() {
  return (
    <SectionTitle
      title="Choose Your Adventure"
      description="Find the perfect trip based on your preferences."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
        {adventureCategory.map((adventure, index) => (
          <AdventureCard
            key={index}
            title={adventure.title}
            explore={adventure.explore}
            image={adventure.image}
            description={adventure.description}
            route={adventure.route}
          />
        ))}
      </div>
    </SectionTitle>
  );
}

type CardProps = {
  title: string;
  description: string;
  image: string;
  explore: string;
  route: string;
};

export function AdventureCard({
  title,
  description,
  image,
  explore,
  route,
}: CardProps) {
  return (
    <Card
      className="
        flex flex-col m-auto min-w-xs lg:min-w-md
        transition-all duration-300 
        hover:scale-[1.03] 
        hover:shadow-xl 
        hover:shadow-zinc-400
        rounded-2xl
      "
    >
      <CardContent className="pb-0 overflow-hidden rounded-t-2xl">
        <img
          src={image}
          className="
            mb-4 h-72 w-full object-cover rounded-xl
          "
          alt={title}
          loading="lazy"
          decoding="async"
        />
      </CardContent>

      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button
          asChild
          className="
            w-full 
          "
        >
          <Link href={route}>
            {explore}
            <MoveRight className="ml-2 size-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
