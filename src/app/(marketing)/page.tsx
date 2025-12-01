import Amenities from "@/components/amenities";
import Hero from "@/components/hero";
import OurStory from "@/components/our-story";
import SpecialTreat from "@/components/special-treat";
import Testamonial from "@/components/testamonial";
import UniqueExperiences from "@/components/unique-experiences";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    // <div className="flex min-h-screen items-center justify-center flex-col bg-zinc-50 font-sans dark:bg-black">
    <div className="bg-zinc-50 font-sans">
      <Hero />
      <Amenities />
      <WhyChooseUs />
      <SpecialTreat />
      <UniqueExperiences />
      <Testamonial />
      <OurStory />
    </div>
    // </div>
  );
}
