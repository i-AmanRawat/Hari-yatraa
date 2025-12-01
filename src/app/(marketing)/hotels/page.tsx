import WhyChooseUs from "@/components/why-choose-us";

import Testamonial from "@/components/testamonial";
import HotelsSection from "./_components/hotels";

export default function HotelsPage() {
  return (
    <div className="bg-zinc-50">
      <HotelsSection />
      <WhyChooseUs />
      <Testamonial />
    </div>
  );
}
