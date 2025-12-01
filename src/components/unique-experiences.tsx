import MaxWidthWrapper from "@/components/max-width-wrapper";
import { LayoutGrid } from "@/components/ui/layout-grid";
import React from "react";

export default function UniqueExperiences() {
  return (
    <>
      <MaxWidthWrapper className="relative z-10 flex flex-col items-center justify-center py-16 md:py-20">
        <h2 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
          Unique Experiences
        </h2>

        <p className="mt-4 max-w-3xl pb-8 text-center leading-7 text-muted-foreground">
          Discover handpicked travel experiences across North India - crafted
          for nature lovers, adventurers, spiritual seekers, and families
          looking for meaningful journeys.
        </p>
        <div className="h-[500px] w-full">
          <LayoutGrid cards={cards} />
        </div>
      </MaxWidthWrapper>
    </>
  );
}

const CardOne = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-white">Adventure Trails</p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Experience the thrill of Uttarakhand&apos;s most iconic adventure spots—
        from trekking in Chopta-Tungnath to camping under the stars in Auli.
        Whether you&apos;re a beginner or seasoned explorer, we design adventure
        journeys that excite and inspire.
      </p>
    </div>
  );
};

const CardTwo = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-white">Wellness Retreats</p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Reconnect with yourself through peaceful yoga sessions, meditation by
        the Ganga, and rejuvenating stays surrounded by the Himalayas. Ideal for
        wellness-seekers and anyone needing a calm escape from city life.
      </p>
    </div>
  );
};

const CardThree = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-white">Culture & Heritage Tours</p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Explore Uttarakhand&apos;s vibrant culture—ancient temples, local
        villages, historic architecture, and traditional Himalayan lifestyles.
        Perfect for travelers who love meaningful and authentic experiences.
      </p>
    </div>
  );
};

const CardFour = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-white">
        Romantic & Family Getaways
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Whether it&apos;s a romantic Mussoorie stay, a peaceful Nainital
        lakeside holiday, or a fun-filled family trip to Jim Corbett—our curated
        getaway packages offer comfort, scenic beauty, and unforgettable
        memories.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <CardOne />,
    className: "md:col-span-2",
    thumbnail: "services/01.webp",
  },
  {
    id: 2,
    content: <CardTwo />,
    className: "col-span-1",
    thumbnail: "services/02.webp",
  },
  {
    id: 3,
    content: <CardThree />,
    className: "col-span-1",
    thumbnail: "services/03.webp",
  },
  {
    id: 4,
    content: <CardFour />,
    className: "md:col-span-2",
    thumbnail: "services/04.webp",
  },
];
