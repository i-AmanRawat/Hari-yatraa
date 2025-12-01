import { Metadata } from "next";

import OurStory from "@/components/our-story";
import SpecialTreat from "@/components/special-treat";
import WhyChooseUs from "@/components/why-choose-us";
import Contact from "../contact/_components/contact";
import UniqueExperiences from "@/components/unique-experiences";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <OurStory />
      <WhyChooseUs />
      {/* <OurHotels /> */}
      <SpecialTreat />
      <UniqueExperiences />
      {/* <Contact /> */}
    </>
  );
}
