import { Metadata } from "next";

import Contact from "./_components/contact";
import Faq from "./_components/faq";
import Map from "./_components/map";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="">
      <Contact />
      <Map />
      <Faq />
    </section>
  );
}
