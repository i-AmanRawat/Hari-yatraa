import { cn } from "@/lib/utils";

import SectionTitle from "@/components/section-title";

const whyChooseUsData = [
  {
    image: "/services/01.webp",
    title: "Expertise in Adventure Tourism",
    description:
      "With over a decade of experience, our team of expert guides ensures that every adventure is meticulously planned and executed. From thrilling expeditions to serene nature trails, we offer unrivaled knowledge, making every journey safe, exciting, and unforgettable.",
  },
  {
    image: "/services/02.webp",
    title: "Tailor-made Packages",
    description:
      "We believe every adventurer is unique, which is why we offer tailor-made packages that cater to your preferences. Whether you're seeking a high-adrenaline expedition or a peaceful trek, we customize your experience, giving you full control over your adventure.",
  },
  {
    image: "/services/03.webp",
    title: "Safe & Secure Travels",
    description:
      "Your safety is our priority. Partnering with trusted providers, we ensure every aspect of your journey is secure, from transportation to equipment. Rest easy knowing that your adventures are backed by reliable safety protocols and expert support at every step.",
  },
  {
    image: "/services/04.webp",
    title: "Customer Satisfaction",
    description:
      "Our commitment to excellence shines through in the feedback we receive. With hundreds of positive reviews, our adventurers consistently praise us for our dedication to delivering memorable experiences. We strive to exceed expectations with every adventure.",
  },
];

export default function WhyChooseUs() {
  return (
    <SectionTitle title="Why Choose Hari Yatra?">
      {whyChooseUsData.map((why, index) => (
        <section
          className="bg-zinc-50 text-gray-900 container mx-auto py-10 px-4 md:px-16"
          key={index}
        >
          <div className="space-y-12">
            <div
              className={cn(
                "flex flex-col items-center md:items-start md:justify-around",
                (index + 1) % 2 === 0 ? "md:flex-row" : " md:flex-row-reverse"
              )}
            >
              <div className="md:w-5/12 h-full my-auto">
                <h2 className="text-2xl font-bold mb-4">{why.title}</h2>
                <p className="text-gray-600 mb-6 text-center md:text-left">
                  {why.description}
                </p>
              </div>

              <div className="md:w-5/12 max-w-sm">
                <img
                  className="rounded-md border-none h-72 w-full object-cover"
                  src={why.image}
                  alt={why.title}
                />
              </div>
            </div>

            {/* <div className="flex flex-col items-center md:items-start md:justify-between">
              <div className="md:w-5/12">
                <h2 className="text-2xl font-bold mb-4">Bible Trivia</h2>
                <p className="text-gray-600 mb-6 text-center md:text-left">
                  Challenge yourself with Bible Trivia and sharpen your biblical
                  knowledge through engaging games. Test your memory on biblical
                  events, characters, locations, and teachings. Choose your
                  difficulty level and enjoy a fun, personalized learning
                  journey at your own pace.
                </p>
              </div>

              <div className="md:w-5/12 max-w-sm">
                <img
                  className="rounded-md border-none"
                  src="https://i.imgur.com/h7TsTPl.png"
                  alt="Bible Trivia Image"
                />
              </div>
            </div> */}
          </div>
        </section>
      ))}
    </SectionTitle>
  );
}
