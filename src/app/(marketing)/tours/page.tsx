import Testamonial from "@/components/testamonial";
import WhyChooseUs from "@/components/why-choose-us";
import TourCategories from "./_components/tour";

export default function TourPage() {
  return (
    <div className="bg-zinc-50">
      <TourCategories />
      <WhyChooseUs />
      <Testamonial />
    </div>
  );
}
