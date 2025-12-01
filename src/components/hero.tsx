import { ChevronRight } from "lucide-react";

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import UserInteraction from "@/components/user-interaction";

export default function Hero() {
  return (
    // <div className="w-full flex flex-col items-center justify-center py-14">
    <div className="relative w-full py-14 flex items-center justify-center h-[800px]">
      {/* <img
        src="/services/01.webp"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 -z-10"></div> */}
      <HeroContent />
    </div>

    // <HeroContent />
    // </div>
  );
}

function HeroContent() {
  return (
    <div className="flex flex-col items-center gap-6 pb-8 text-center z-0">
      <AnimatedTextButton />
      <h1 className=" text-balance bg-gradient-to-br from-black from-30% to-black/50 bg-clip-text text-6xl font-medium leading-none tracking-tighter text-transparent sm:text-3xl md:text-4xl lg:text-6xl">
        Discover the Beauty of{"  "}
        <AnimatedGradientText
          speed={2}
          colorFrom="#4ade80"
          colorTo="#06b6d4"
          className="font-semibold"
        >
          Uttarakhand
        </AnimatedGradientText>
      </h1>
      <p className="text-balance text-lg tracking-tight text-gray-400 md:text-xl">
        Explore handpicked destinations and customized tour packages
      </p>
      <UserInteraction />
    </div>
  );
}

export async function AnimatedTextButton() {
  return (
    <div
      className="z-10 group inline-flex  flex-row items-center justify-center border-[0.5px] pl-2 pr-1 rounded-full border-purple-500   transition-all duration-300 ease-out
    hover:scale-[1.01] hover:shadow-lg"
    >
      <AnimatedGradientText> Top Destinations</AnimatedGradientText>
      <ChevronRight className="ml-1 size-4 text-purple-400 " />
    </div>
  );
}

// export function AnimatedTextButton() {
//   return (
//     <div className="group inline-flex items-center justify-center rounded-full border border-gray-200 px-3 py-1.5
//       transition-all duration-300 ease-out
//       hover:translate-x-1 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-md">

//       <AnimatedGradientText>
//         Top Destinations
//       </AnimatedGradientText>

//       <ChevronRight
//         className="ml-1 size-4 text-gray-400
//         transition-transform duration-300 ease-out
//         group-hover:translate-x-1"
//       />
//     </div>
//   );
// }

{
  /* <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />
        <span
          className={cn(
            `inline text-neutral-600 bg-[length:var(--bg-size)_100%] bg-clip-text`
          )}
        >
          Grab 2025 Deals!!
        </span>
        <ChevronRight className="ml-1 size-4 text-neutral-600 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText> */
}
// animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40]
