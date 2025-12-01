"use client";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import React from "react";
export default function OurStory() {
  return (
    <>
      <MaxWidthWrapper className="relative py-16 md:py-20">
        <section className="relative z-10 flex flex-col items-center justify-center rounded-md bg-secondary/50 p-4 py-8 shadow-lg backdrop-blur-md">
          <h2 className="max-w-4xl scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
            Discover Uttarakhand With a Trusted Local Travel Partner
          </h2>

          <div className="max-w-3xl text-center leading-7 text-gray-800 [&:not(:first-child)]:mt-6">
            <p className="[&:not(:first-child)]:mt-6">
              At our travel agency, we believe journeys are more than just
              vacations—they’re life-changing experiences. That’s why we
              specialize in creating memorable, comfortable, and perfectly
              planned trips across Uttarakhand.
            </p>

            <p className="[&:not(:first-child)]:mt-6">
              From the peaceful lakes of Nainital to the divine aura of
              Kedarnath, and the adventurous trails of Chopta, our team curates
              travel packages that combine scenic beauty, cultural richness, and
              seamless travel arrangements. Whether you&apos;re a solo explorer,
              a family seeking a relaxed getaway, or an adventure lover, we
              ensure every journey fits your style and budget.
            </p>

            <p className="[&:not(:first-child)]:mt-6">
              With local expertise, transparent pricing, and dedicated support,
              we strive to make your Uttarakhand experience truly effortless and
              unforgettable. Your adventure begins with a single click—let us
              take care of the rest.
            </p>
          </div>

          <Button className="mt-8" size={"lg"}>
            Explore Packages
          </Button>
        </section>
      </MaxWidthWrapper>
    </>
  );
}
