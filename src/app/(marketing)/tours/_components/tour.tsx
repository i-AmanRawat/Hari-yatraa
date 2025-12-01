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

const TourCategory = [
  // 1
  {
    title: "Char Dham Yatra",
    description:
      "Embark on the sacred journey to Yamunotri, Gangotri, Kedarnath, and Badrinath—Uttarakhand’s most divine pilgrimage route.",
    image: "/services/01.webp",
    explore: "Explore Char Dham Packages",
    route: "/packages/char-dham-yatra",
  },

  // 2
  {
    title: "Kedarnath Yatra",
    description:
      "Experience a soulful journey to Baba Kedarnath with guided travel, stay, and assistance. Ideal for pilgrims and families.",
    image: "/services/02.webp",
    explore: "Explore Kedarnath",
    route: "/packages/kedarnath",
  },

  // 3
  {
    title: "Badrinath Yatra",
    description:
      "Visit the sacred shrine of Lord Badri Vishal nestled among majestic Himalayan peaks. Perfect for spiritual travellers.",
    image: "/services/03.webp",
    explore: "Explore Badrinath",
    route: "/packages/badrinath",
  },

  // 4
  {
    title: "Haridwar & Rishikesh Tour",
    description:
      "Witness Ganga Aarti, explore ashrams, enjoy adventure sports, and experience the spiritual aura of both holy cities.",
    image: "/services/04.webp",
    explore: "Explore Haridwar & Rishikesh",
    route: "/packages/haridwar-rishikesh",
  },

  // 5
  {
    title: "Rishikesh Adventure Tour",
    description:
      "Enjoy rafting, cliff jumping, bungee, zipline, camping, and riverside activities in India’s adventure capital.",
    image: "/services/05.webp",
    explore: "Explore Rishikesh Adventures",
    route: "/packages/rishikesh-adventure",
  },

  // 6
  {
    title: "Mussoorie & Dehradun Getaway",
    description:
      "A refreshing hill holiday with waterfalls, viewpoints, cafes, and serene nature trails in the Queen of Hills.",
    image: "/services/01.webp",
    explore: "Explore Mussoorie",
    route: "/packages/mussoorie-dehradun",
  },

  // 7
  {
    title: "Nainital & Bhimtal Lakes Tour",
    description:
      "Boating, lake views, ropeways, zoo visit, and peaceful hills—perfect for couples, families, and weekend trips.",
    image: "/services/02.webp",
    explore: "Explore Nainital",
    route: "/packages/nainital",
  },

  // 8
  {
    title: "Corbett Wildlife Safari",
    description:
      "Enjoy thrilling jungle jeep safaris, riverside resorts, bird watching, and nature trails inside Jim Corbett.",
    image: "/services/03.webp",
    explore: "Explore Corbett Safari",
    route: "/packages/jim-corbett",
  },

  // 9
  {
    title: "Auli Snow & Skiing Tour",
    description:
      "Experience skiing, snowboarding, cable car rides, and stunning views of Nanda Devi at India’s top winter destination.",
    image: "/services/04.webp",
    explore: "Explore Auli",
    route: "/packages/auli",
  },

  // 10
  {
    title: "Chopta–Tungnath–Chandrashila Tour",
    description:
      "Explore Mini Switzerland of Uttarakhand with trekking, camping, temples, and breathtaking sunrise views.",
    image: "/services/05.webp",
    explore: "Explore Chopta",
    route: "/packages/chopta",
  },

  // 11
  {
    title: "Valley of Flowers Trek",
    description:
      "Walk through vibrant Himalayan meadows, rare alpine flowers, and stunning landscapes. A monsoon special trek.",
    image: "/services/01.webp",
    explore: "Explore Valley of Flowers",
    route: "/packages/valley-of-flowers",
  },

  // 12
  {
    title: "Kedarkantha Winter Trek",
    description:
      "A perfect beginner winter trek offering snow trails, campsites, and panoramic Himalayan views.",
    image: "/services/02.webp",
    explore: "Explore Kedarkantha",
    route: "/packages/kedarkantha",
  },

  // 13
  {
    title: "Nag Tibba Trek",
    description:
      "A short and scenic weekend trek near Mussoorie—ideal for beginners and nature lovers.",
    image: "/services/03.webp",
    explore: "Explore Nag Tibba",
    route: "/packages/nag-tibba",
  },

  // 14
  {
    title: "Har Ki Dun Trek",
    description:
      "A beautiful trail through forests, rivers, ancient villages, and Himalayan valleys. Perfect for nature enthusiasts.",
    image: "/services/04.webp",
    explore: "Explore Har Ki Dun",
    route: "/packages/har-ki-dun",
  },

  // 15
  {
    title: "Dayara Bugyal Trek",
    description:
      "Known for vast grasslands, snow-covered meadows, and clear mountain views—one of Uttarakhand’s best easy treks.",
    image: "/services/05.webp",
    explore: "Explore Dayara Bugyal",
    route: "/packages/dayara-bugyal",
  },

  // 16
  {
    title: "Lansdowne Weekend Escape",
    description:
      "Quiet pine forests, peaceful viewpoints, cafes, and army heritage—perfect for a relaxing short trip.",
    image: "/services/01.webp",
    explore: "Explore Lansdowne",
    route: "/packages/lansdowne",
  },

  // 17
  {
    title: "Kanatal Nature Retreat",
    description:
      "Enjoy camping, valley views, adventure activities, and peaceful forest stays near Dhanaulti.",
    image: "/services/02.webp",
    explore: "Explore Kanatal",
    route: "/packages/kanatal",
  },

  // 18
  {
    title: "Ranikhet & Almora Tour",
    description:
      "A cultural and scenic Himalayan retreat with temples, forests, viewpoints, and local Kumaoni experiences.",
    image: "/services/03.webp",
    explore: "Explore Almora & Ranikhet",
    route: "/packages/almora-ranikhet",
  },

  // 19
  {
    title: "Mukteshwar Adventure & Nature Stay",
    description:
      "A peaceful hill destination offering rock climbing, paragliding, nature walks, and orchard stays.",
    image: "/services/04.webp",
    explore: "Explore Mukteshwar",
    route: "/packages/mukteshwar",
  },

  // 20
  {
    title: "Pithoragarh & Munsiyari Himalayan Tour",
    description:
      "Explore untouched beauty, snow peaks, waterfalls, and remote Himalayan villages for an offbeat experience.",
    image: "/services/05.webp",
    explore: "Explore Munsiyari",
    route: "/packages/munsiyari",
  },

  // 21
  {
    title: "Hemkund Sahib Yatra",
    description:
      "A sacred Sikh pilgrimage combined with nature-filled trekking through lush meadows and valleys.",
    image: "/services/01.webp",
    explore: "Explore Hemkund Sahib",
    route: "/packages/hemkund",
  },

  // 22
  {
    title: "Uttarakhand Honeymoon Special",
    description:
      "Romantic stays in Mussoorie, Nainital, Auli, or Chopta—customized for couples seeking peace and luxury.",
    image: "/services/02.webp",
    explore: "Explore Honeymoon Trips",
    route: "/packages/honeymoon",
  },

  // 23
  {
    title: "Uttarakhand Family Tour",
    description:
      "A perfect vacation covering hill stations, lakes, temples, safaris, adventure, and peaceful stays.",
    image: "/services/03.webp",
    explore: "Explore Family Packages",
    route: "/packages/family-tour",
  },

  // 24
  {
    title: "Uttarakhand Corporate Trip",
    description:
      "Team outings, adventure activities, resort stays, and group experiences tailored for corporate teams.",
    image: "/services/04.webp",
    explore: "Explore Corporate Tours",
    route: "/packages/corporate",
  },

  // 25
  {
    title: "Delhi–Agra–Jaipur Golden Triangle",
    description:
      "A cultural journey through heritage sites, forts, palaces, and world wonders like the Taj Mahal.",
    image: "/services/05.webp",
    explore: "Explore Golden Triangle",
    route: "/packages/golden-triangle",
  },

  // 26
  {
    title: "Manali & Kasol Himachal Tour",
    description:
      "Enjoy snow peaks, riverside cafes, trekking, hot springs, and breathtaking mountain landscapes.",
    image: "/services/01.webp",
    explore: "Explore Himachal",
    route: "/packages/manali-kasol",
  },

  // 27
  {
    title: "Shimla & Kufri Himachal Tour",
    description:
      "A refreshing holiday to India’s favourite hill destination with temples, mall road, and snowy vibes.",
    image: "/services/02.webp",
    explore: "Explore Shimla",
    route: "/packages/shimla",
  },

  // 28
  {
    title: "Amritsar & Wagah Border Tour",
    description:
      "Visit the Golden Temple, Jallianwala Bagh, local markets, and experience the iconic Wagah Border ceremony.",
    image: "/services/03.webp",
    explore: "Explore Amritsar",
    route: "/packages/amritsar",
  },

  // 29
  {
    title: "Ayodhya–Kashi–Prayagraj Spiritual Tour",
    description:
      "A deeply spiritual journey covering Ram Mandir, Kashi Vishwanath, Sangam Ghat, and ancient temples.",
    image: "/services/04.webp",
    explore: "Explore Religious Tours",
    route: "/packages/ayodhya-kashi",
  },

  // 30
  {
    title: "Jaipur–Udaipur Rajasthan Heritage Tour",
    description:
      "Discover royal palaces, colourful markets, lakes, forts, and Rajasthani culture in two iconic cities.",
    image: "/services/05.webp",
    explore: "Explore Rajasthan",
    route: "/packages/rajasthan",
  },
];

export default function TourCategories() {
  return (
    <SectionTitle
      title="Choose Your Destination"
      description="Find the perfect destination based on your preferences."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
        {TourCategory.map((tour, index) => (
          <TourCard
            key={index}
            title={tour.title}
            explore={tour.explore}
            image={tour.image}
            description={tour.description}
            route={tour.route}
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

export function TourCard({
  title,
  description,
  image,
  explore,
  route,
}: CardProps) {
  return (
    <Card
      className="
        flex flex-col m-auto min-w-xs lg:max-w-sm
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
