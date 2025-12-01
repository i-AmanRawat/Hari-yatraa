import Link from "next/link";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

export default function UserInteraction() {
  return (
    <div className="flex items-center justify-center space-x-3">
      <Link
        href="/contact"
        className={cn(buttonVariants({ variant: "secondary" }))}
      >
        Explore Packages
      </Link>
      <CTA />
    </div>
  );
}

export function CTA() {
  return (
    <Link
      href="/contact"
      className={cn(buttonVariants({ variant: "outline" }))}
    >
      Book Now
    </Link>
  );
}
