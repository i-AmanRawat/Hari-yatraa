"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="">
      <MaxWidthWrapper className="py-16 md:py-20">
        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="self-center">
            <FaqForm />
          </div>
          <Faqs />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

function FaqForm() {
  return (
    <div className="flex flex-col items-start lg:h-[350px] ">
      <h4 className=" scroll-m-20 text-3xl font-normal uppercase tracking-tight">
        faq
      </h4>
      <h3 className="my-3 scroll-m-20 text-4xl font-semibold capitalize tracking-tight md:text-4xl">
        Do you have any <br /> questions for us?
      </h3>
      <p className="mb-3 text-wrap text-muted-foreground">
        If there are question you want to ask. <br /> we will answer all your
        question.
      </p>
    </div>
  );
}

function Faqs() {
  const faqsData = [
    {
      item: "item-1",
      ques: "How can I book a trip with your travel agency?",
      ans: "You can book your trip directly through our website, via WhatsApp, or by calling our travel experts. Once we understand your requirements, we will share a customized itinerary and confirm your booking.",
    },
    {
      item: "item-2",
      ques: "Do you offer customized travel packages?",
      ans: "Yes! All our Uttarakhand and North India tours can be fully customized. Whether it's a family trip, honeymoon, adventure tour, or spiritual journey, we tailor the itinerary according to your budget, dates, and preferences.",
    },
    {
      item: "item-3",
      ques: "What is included in your travel packages?",
      ans: "Our packages typically include accommodation, sightseeing, transportation, driver allowance, toll taxes, and itinerary planning. Depending on the package, meals, adventure activities, and special experiences can also be added.",
    },
    {
      item: "item-4",
      ques: "Do you arrange transportation for the trips?",
      ans: "Yes, we provide all types of transportation including hatchbacks, sedans, SUVs, tempo travellers, and luxury vehicles. Pick-up and drop-off can be arranged from any location across Uttarakhand and North India.",
    },
    {
      item: "item-5",
      ques: "What is your cancellation and refund policy?",
      ans: "Our cancellation policy varies based on the package and hotel/transport partners. Generally, cancellations made 7–15 days prior to the trip are partially refundable. Full details are shared during booking.",
    },
    {
      item: "item-6",
      ques: "Can I plan a last-minute trip?",
      ans: "Yes, we do handle last-minute bookings depending on availability of hotels and transportation. Contact us directly, and we’ll do our best to arrange everything quickly.",
    },
    {
      item: "item-7",
      ques: "Do you offer adventure activities?",
      ans: "Absolutely! We arrange trekking, camping, river rafting, paragliding, skiing, jungle safaris, and more across Uttarakhand’s top adventure locations.",
    },
    {
      item: "item-8",
      ques: "Is your agency based in Uttarakhand?",
      ans: "Yes, we are locally based, which helps us offer authentic experiences, reliable support, and the best recommendations for destinations across Uttarakhand and North India.",
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full min-h-[600px] overflow-y-auto"
    >
      {faqsData.map((faq, index) => (
        <AccordionItem key={index} value={faq.item}>
          <AccordionTrigger className="hover:no-underline">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {faq.ques}
            </h4>
          </AccordionTrigger>
          <AccordionContent>
            <p className="h-auto text-base leading-5 [&:not(:first-child)]:mt-6">
              {faq.ans}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
