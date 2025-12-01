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

const hotelsCategory = [
  {
    title: "Taj Rishikesh Resort & Spa",
    description:
      "A luxury retreat surrounded by the lower Himalayas, featuring river-view rooms, wellness activities, nature trails, and world-class dining by the Ganges.",
    image: "/services/01.webp",
    explore: "View Details",
    route: "/hotels/taj-rishikesh",
    location: "Rishikesh, Uttarakhand",
    rating: 4.9,
    reviews: 512,
    startingPrice: 18500,
    amenitiesPreview: ["Pool", "Spa", "Free WiFi", "Mountain View"],
  },
  {
    title: "The Oberoi Cecil, Shimla",
    description:
      "A heritage-style luxury hotel offering colonial architecture, elegant wooden interiors, warm hospitality, and panoramic views of Shimla hills.",
    image: "/services/02.webp",
    explore: "View Details",
    route: "/hotels/oberoi-cecil",
    location: "Shimla, Himachal Pradesh",
    rating: 4.8,
    reviews: 389,
    startingPrice: 16500,
    amenitiesPreview: ["Heated Pool", "Spa", "Restaurant", "Valley View"],
  },
  {
    title: "Jaypee Residency Manor, Mussoorie",
    description:
      "A hilltop luxury escape with breathtaking valley views, rooftop lounges, spacious rooms, fine dining, and serene surroundings.",
    image: "/services/03.webp",
    explore: "View Details",
    route: "/hotels/jaypee-manor",
    location: "Mussoorie, Uttarakhand",
    rating: 4.6,
    reviews: 742,
    startingPrice: 9800,
    amenitiesPreview: [
      "Fitness Center",
      "Restaurant",
      "Free Parking",
      "Valley View",
    ],
  },
  {
    title: "Ananda in the Himalayas",
    description:
      "An award-winning wellness resort offering meditation sessions, luxury spa therapies, Ayurvedic treatments, and holistic healing in a peaceful Himalayan setting.",
    image: "/services/04.webp",
    explore: "View Details",
    route: "/hotels/ananda",
    location: "Rishikesh, Uttarakhand",
    rating: 4.9,
    reviews: 218,
    startingPrice: 32000,
    amenitiesPreview: ["Spa", "Yoga Center", "Organic Dining", "Forest View"],
  },
  {
    title: "The Khyber Himalayan Resort, Gulmarg",
    description:
      "A stunning snow-covered luxury resort overlooking the Affarwat peaks, featuring ski-in access, premium rooms, spa treatments, and fine Kashmiri cuisine.",
    image: "/services/01.webp",
    explore: "View Details",
    route: "/hotels/khyber-gulmarg",
    location: "Gulmarg, Jammu & Kashmir",
    rating: 4.7,
    reviews: 654,
    startingPrice: 14500,
    amenitiesPreview: ["Spa", "Restaurant", "Ski Access", "Mountain View"],
  },
  {
    title: "Aahana Resort, Jim Corbett",
    description:
      "A boutique eco-luxury resort surrounded by forest landscapes, known for sustainable architecture, wildlife experiences, and warm premium hospitality.",
    image: "/services/02.webp",
    explore: "View Details",
    route: "/hotels/aahana",
    location: "Jim Corbett, Uttarakhand",
    rating: 4.8,
    reviews: 431,
    startingPrice: 12000,
    amenitiesPreview: ["Pool", "Spa", "Safari Access", "Nature View"],
  },
];

export default function HotelsSection() {
  return (
    <SectionTitle
      title="Top Hotels in North India"
      description="Handpicked luxury and premium stays curated for your perfect getaway."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
        {hotelsCategory.map((hotel, index) => (
          <AdventureCard
            key={index}
            title={hotel.title}
            explore={hotel.explore}
            image={hotel.image}
            description={hotel.description}
            route={hotel.route}
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
        flex flex-col m-auto min-w-xs lg:max-w-sm
        transition-all duration-300 
        hover:scale-[1.03] 
        hover:shadow-xl 
        hover:shadow-zinc-400
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
