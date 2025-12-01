import {
  MountainSnow,
  Flame,
  Tv2,
  Coffee,
  Heater,
  Utensils,
  Bath,
  Car,
  LibraryBig,
  FlameKindling,
  HeartHandshake,
  Droplets,
} from "lucide-react";

import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function Amenities() {
  const features = [
    { icon: <MountainSnow className="h-8 w-8" />, title: "Vally View Rooms" },
    { icon: <Droplets className="h-8 w-8" />, title: "Spa" },
    { icon: <Flame className="h-8 w-8" />, title: "Fireplace" },
    { icon: <Tv2 className="h-8 w-8" />, title: "Entertainment" },
    { icon: <Coffee className="h-8 w-8" />, title: "Tea and Coffee Maker" },
    { icon: <Heater className="h-8 w-8" />, title: "Heater" },
    { icon: <Utensils className="h-8 w-8" />, title: "Food" },
    { icon: <Bath className="h-8 w-8" />, title: "Bathing Facilities" },
    { icon: <Car className="h-8 w-8" />, title: "Transport Assistance" },
    { icon: <LibraryBig className="h-8 w-8" />, title: "Library" },
    { icon: <FlameKindling className="h-8 w-8" />, title: "Bone Fire" },
    { icon: <HeartHandshake className="h-8 w-8" />, title: "24×7 Help Desk" },
  ];

  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center py-16 md:py-20">
      <h2 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        What We Offer
      </h2>
      <p className="mt-4 max-w-3xl text-center leading-7 text-muted-foreground">
        We have a variety of amenities to choose from. Each of our amenities is
        designed to make your stay as comfortable as possible.
      </p>

      <div className="mt-8 grid w-full grid-cols-2 items-center justify-between md:grid-cols-3 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-center justify-center rounded-md p-4 text-primary transition-colors duration-100 ease-in-out hover:bg-secondary"
          >
            {feature.icon}
            <span className="text-md mt-2 text-center font-medium text-muted-foreground">
              {feature.title}
            </span>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
