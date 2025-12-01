import WhyChooseUs from "@/components/why-choose-us";
import AdventureCategories from "./_components/adventure";
import Testamonial from "@/components/testamonial";

export default function AdventuresPage() {
  return (
    <div className="bg-zinc-50">
      <AdventureCategories />
      <WhyChooseUs />
      <Testamonial />
    </div>
  );
}
