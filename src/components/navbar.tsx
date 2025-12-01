"use client";
import React from "react";
import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronDownIcon, MenuIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { siteConfig } from "@/config";
import Link from "next/link";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Hotel Rudreshwar",
    href: "/hotel-rudreshwar",
    description:
      "Discover a world of luxury and sophistication at Hotel Rudreshwar.",
  },
  {
    title: "Homestay Rishikesh",
    href: "/homestay-rishikesh",
    description:
      "We invite you to experience the warmth of a home and the convenience of modern amenities in the spiritual heart of Rishikesh.",
  },
  {
    title: "Shrivan River Resort",
    href: "/shrivan-river-resort",
    description:
      "If you are an adventure traveler & love the view of hills, river, jungle & camping, we have the perfect place for you, Shrivan River Resort”in the jungle of yog nagri - Rishikesh. Step into our idyllic abode, where each house reveals awe-inspiring views of the valley below, allowing you to fully immerse yourself in the natural beauty that surrounds you.",
  },

  {
    title: "Wellness Resort",
    href: "/wellness-resort",
    description:
      "Enjoy the beauty of the lush greenery, the open and fresh air from the hills and maa gangaji river, full of the peaceful serenity of nature. The resort is the ideal place to unwind and relax in peace and tranquility. The resort, situated at the bank of Maa Ganga and adjoining Rajaji National Park, is embraced by Mother Nature.",
  },
  {
    title: "Homestay Champawat",
    href: "/homestay-champawat",
    description:
      "Explore the unexplored beauty of Champawat, a destination that unveils nature's wonders. Visit the ancient Baleshwar Temple, find serenity by having the himalayan darshan, and witness breathtaking views from Abbott Mount. For adventure seekers, trek through lush forests and raft down pristine rivers. Champawat invites you to experience the unseen, where every moment is a discovery.",
  },
];

export default function Navbar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [openDropdown, setOpenDropdown] = React.useState(false);
  const [openSheet, setOpenSheet] = React.useState(false);
  return (
    <>
      <nav
        className={cn(
          "hidden items-center space-x-4 lg:flex lg:space-x-6",
          className
        )}
        {...props}
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" className={navigationMenuTriggerStyle()}>
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/hotels" className={navigationMenuTriggerStyle()}>
                Hotels
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/tours" className={navigationMenuTriggerStyle()}>
                Tours
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/adventure" className={navigationMenuTriggerStyle()}>
                Adventure
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/gallery" className={navigationMenuTriggerStyle()}>
                Gallery
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" className={navigationMenuTriggerStyle()}>
                About Us
              </Link>
            </NavigationMenuItem>

            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>Accommodation</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 lg:w-[500px] lg:grid-cols-2 ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}

            <NavigationMenuItem>
              <Link href="/contact" className={navigationMenuTriggerStyle()}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <section className="lg:hidden">
        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
          <SheetTrigger asChild>
            <Button variant="outline">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <Link href="/">
                  <img
                    src="/logo.jpg
                    "
                    alt={`${siteConfig.name} Logo`}
                    className="h-12 w-auto"
                    title={`${siteConfig.name} Logo`}
                  />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-3 pt-6">
              <Link
                href=""
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-full justify-start text-left"
                )}
              >
                Home
              </Link>

              <Link
                href="/hotels"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-full justify-start text-left"
                )}
              >
                Hotels
              </Link>

              <Link
                href="/restaurants"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-full justify-start text-left"
                )}
              >
                Restaurants
              </Link>

              <Link
                href="/tours"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-full justify-start text-left"
                )}
              >
                Tours
              </Link>

              <Link
                href="/activities"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-full justify-start text-left"
                )}
              >
                Activities
              </Link>

              <Link
                href="/gallery"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-full justify-start text-left"
                )}
              >
                Gallery
              </Link>

              {/* <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
                <DropdownMenuTrigger>
                  <div
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                      }),
                      "w-full items-center justify-between text-left "
                    )}
                  >
                    Packages
                    <ChevronDownIcon className="h-5 w-5" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {components.map((component) => (
                    <DropdownMenuItem
                      key={component.title}
                      onClick={() => {
                        setOpenDropdown(false);
                        setOpenSheet(false);
                      }}
                    >
                      <Link href={component.href} className="w-full text-wrap">
                        {component.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu> */}

              <Link
                href="/about"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-full justify-start text-left"
                )}
              >
                About us
              </Link>

              <Link
                href="/contact"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-full justify-start text-left"
                )}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </section>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={href || "/"}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
