import MaxWidthWrapper from "@/components/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SpecialTreat() {
  return (
    <>
      <section className="relative flex flex-col bg-primary">
        <div className="inset-y-0 left-0 top-0 mx-auto w-full max-w-xl lg:absolute lg:w-1/2 lg:max-w-full">
          <img
            className="h-56 w-full rounded object-cover shadow-lg md:h-96 lg:h-full lg:rounded-none lg:shadow-none"
            src="/services/03.webp"
            alt=""
          />
        </div>
        <MaxWidthWrapper className="flex justify-end py-12 lg:py-28">
          <div className="flex flex-col lg:max-w-lg lg:pl-8">
            <h2 className="first:mt- scroll-m-20 text-xl font-semibold tracking-tight text-yellow-500 lg:text-right">
              EXPERIENCES THAT STAY WITH YOU
            </h2>
            <p className="mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight text-white lg:text-right lg:text-5xl">
              EXPLORE THE HEART OF UTTARAKHAND
            </p>
            <p className="leading-7 text-gray-200 lg:text-right [&:not(:first-child)]:mt-6">
              From the spiritual serenity of Haridwar and Rishikesh to the misty
              mountains of Nainital and Mussoorie, we bring you curated journeys
              that capture the true essence of Uttarakhand. Discover hidden
              trails, local culture, breathtaking viewpoints, and travel
              experiences tailored for families, couples, solo travellers, and
              adventure seekers.
            </p>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "link" }),
                "mt-6 justify-start p-0 text-yellow-500 lg:justify-end"
              )}
            >
              DISCOVER MORE
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="relative flex flex-col-reverse bg-primary lg:flex-col">
        <MaxWidthWrapper className="py-12 lg:py-28">
          <div className="flex flex-col lg:max-w-lg lg:pr-8">
            <h2 className="scroll-m-20 text-xl font-semibold tracking-tight text-yellow-500 first:mt-0">
              TAILORED FOR YOUR ESCAPE
            </h2>
            <p className="mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
              WELLNESS, NATURE & PEACEFUL GETAWAYS
            </p>
            <p className="leading-7 text-gray-200 [&:not(:first-child)]:mt-6">
              Whether you dream of a quiet Himalayan retreat, a yoga &
              meditation tour, or a rejuvenating stay surrounded by pine
              forests, we craft travel plans focused on your peace and
              wellbeing. Experience wellness stays, nature walks, Ganga-side
              meditation, and specially curated rejuvenation tours across
              Uttarakhand and North India.
            </p>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "link" }),
                "mt-6 justify-start p-0 text-yellow-500"
              )}
            >
              PLAN YOUR RETREAT
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </MaxWidthWrapper>
        <div className="inset-y-0 right-0 top-0 mx-auto w-full max-w-xl lg:absolute lg:w-1/2 lg:max-w-full">
          <img
            className="h-56 w-full rounded object-cover shadow-lg md:h-96 lg:h-full lg:rounded-none lg:shadow-none"
            src="services/04.webp"
            alt=""
          />
        </div>
      </section>
      <section className="relative flex flex-col bg-primary">
        <div className="inset-y-0 left-0 top-0 mx-auto w-full max-w-xl lg:absolute lg:w-1/2 lg:max-w-full">
          <img
            className="h-56 w-full rounded object-cover shadow-lg md:h-96 lg:h-full lg:rounded-none lg:shadow-none"
            src="services/05.webp"
            alt=""
          />
        </div>
        <MaxWidthWrapper className="flex justify-end py-12 lg:py-28">
          <div className="flex flex-col lg:max-w-lg lg:pl-8">
            <h2 className="first:mt- scroll-m-20 text-xl font-semibold tracking-tight text-yellow-500 lg:text-right">
              MEMORIES FOR A LIFETIME
            </h2>
            <p className="mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight text-white lg:text-right lg:text-5xl">
              ROMANTIC, ADVENTURE & CUSTOM EXPERIENCES
            </p>
            <p className="leading-7 text-gray-200 lg:text-right [&:not(:first-child)]:mt-6">
              From peaceful lakeside evenings in Nainital to thrilling treks in
              Chopta–Tungnath and romantic stays in Mussoorie, we offer
              experiences that go beyond ordinary travel. Celebrate special
              moments with curated trips, private experiences, adventure
              activities, and personalized travel planning.
            </p>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "link" }),
                "mt-6 justify-start p-0 text-yellow-500 lg:justify-end"
              )}
            >
              EXPLORE EXPERIENCES
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
