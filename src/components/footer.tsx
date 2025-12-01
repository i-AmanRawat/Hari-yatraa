import React from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
// import { BackgroundBeams } from "./ui/background-beams";
import Link from "next/link";

export const STORY = [
  { name: "Philosphy", link: "#" },
  { name: "Founder's Name", link: "#" },
  { name: "Ecology", link: "#" },
  { name: "Artist's Impression", link: "#" },
];

export const PACKAGES = [
  { name: "Fitness & Yoga", link: "#" },
  { name: "Physiotherapy", link: "#" },
  { name: "Wellness Thearpies", link: "#" },
  { name: "Accomodatiion", link: "#" },
  { name: "Resturants", link: "#" },
  { name: "Coordinates", link: "#" },
];

export const COMPANY = [
  { name: "Atmantan Living - Lifestyle Management", link: "#" },
  { name: "Master Cleanse - Detox Retreat", link: "#" },
  { name: "Ayurveda Panchakarma - Ayurveda Retreat", link: "#" },
  { name: "Weight Balance - Weight Loss Retreat", link: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-white">
      <section className="relative z-10 bg-primary">
        <MaxWidthWrapper className=" flex flex-col items-center justify-center py-16 md:py-20">
          <h2 className="mx-auto max-w-2xl scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
            Be Transformed at India Finest Wellness Destination
          </h2>
        </MaxWidthWrapper>
      </section>
      <MaxWidthWrapper className="relative z-10 flex flex-col items-center justify-center pt-16 md:pt-20">
        <ItemsContainer />
        <hr className="my-2 w-full border-muted-foreground" />
        <div className="flex w-full items-center justify-center gap-4 text-sm text-gray-400">
          <span className="py-4 text-center text-white">
            © 2025 Hari Yatra. All rights reserved.
          </span>
        </div>
      </MaxWidthWrapper>
      {/* <BackgroundBeams /> */}
    </footer>
  );
}

const Item = ({
  Links,
  title,
}: {
  Links: { name: string; link: string }[];
  title: string;
}) => {
  return (
    <section>
      <h1 className="mb-2 font-semibold">{title}</h1>
      <ul className="space-y-2">
        {Links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.link}
              className={cn(
                buttonVariants({
                  variant: "link",
                  size: "sm",
                }),
                "break-words p-0 text-gray-400 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

const ItemsContainer = () => {
  return (
    <div className="mb-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Item Links={STORY} title="OUR STORY" />
      <Item Links={PACKAGES} title="WELLNESS PACKAGES" />
      <Item Links={COMPANY} title="MORE LINKS" />
      <Item Links={PACKAGES} title="WELLNESS PACKAGES" />
    </div>
  );
};
