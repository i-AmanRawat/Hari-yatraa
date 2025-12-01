"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL, PHONE } from "@/config";

export default function Contact() {
  return (
    <section className="">
      <MaxWidthWrapper className="py-16 md:py-20">
        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
          <ContactInfo />
          <ContactForm />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    console.log("contact form");
  }

  return (
    <section className="w-full">
      <div className="col-span-1 w-full lg:col-span-1">
        <div className="relative rounded-xl border border-secondary bg-secondary p-8 shadow-2xl sm:p-12">
          <div className="mb-5 space-y-3">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
              Book Now!
            </h2>
            <h3 className="scroll-m-20 text-base font-normal tracking-tight text-foreground">
              You can reach us anytime
            </h3>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Your Name</Label>
              <Input
                autoFocus
                onChange={(e: any) => setName(e.target.value)}
                value={name}
                type="text"
                id="name"
                name="name"
                placeholder="john"
                required
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Your Email</Label>
              <Input
                onChange={(e: any) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                name="email"
                placeholder="john@gmail.com"
                required
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                onChange={(e: any) => setPhone(e.target.value)}
                value={phone}
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 00000 00000"
                required
              />
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Your message</Label>
              <Textarea
                onChange={(e: any) => setMessage(e.target.value)}
                value={message}
                name="message"
                placeholder="Leave a Message..."
                className="w-full"
                rows={4}
                id="message"
              />
            </div>

            <div>
              <Button type="submit" name="submit" className="w-full">
                <span className="relative block px-6 py-3 text-base font-normal leading-7 sm:text-lg">
                  {loading ? (
                    <div
                      className="mx-auto h-5 w-5 animate-spin rounded-full border-2 border-white "
                      style={{ borderRightColor: "transparent" }}
                    />
                  ) : (
                    "Submit"
                  )}
                </span>
              </Button>

              <p className="mx-auto text-center leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
                By contacting us, you agree to our <br />
                <Link
                  href={"/privacy"}
                  className=" font-semibold text-gray-800"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  const pointers = [
    {
      title: "customer support",
      description:
        "Our support team is available around the clock to address any concerns or queries you may have.",
    },
    {
      title: "feedback and suggestions",
      description:
        "We value your feedback and are continously working to improve {shakti}. Your input is crucial in shaping the future of {shakti}",
    },
    {
      title: "destination queries",
      description: `For destination-related questions or room inquiries, please contact us !`,
    },
  ];

  return (
    <div className="col-span-1 flex w-full flex-col p-3 md:p-8 lg:col-span-2">
      <div className="mb-8 lg:mb-0">
        <div className="mb-3">
          <h1 className="scroll-m-20 text-4xl font-extrabold capitalize tracking-tight lg:text-5xl">
            contact us
          </h1>
        </div>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          possimus vel ut quod cumque, repellendus facere, aut tempore
          praesentium, temporibus minus pariatur quos corporis. Voluptate
          officiis voluptatum quam ad doloremque. Voluptate dicta mollitia
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="my-8 flex w-full max-w-md ">
            <div className="mr-6 flex h-[46px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-md border sm:h-[56px] sm:max-w-[70px]">
              <Mail className="h-8 w-8" />
            </div>
            <div className="w-full">
              <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
                Email Address
              </h4>
              <a
                href={`mailto:${EMAIL}`}
                className="leading-7 text-blue-500 lg:text-base [&:not(:first-child)]:mt-6"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="flex w-full max-w-md md:my-8">
            <div className="mr-6 flex h-[46px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-md border  sm:h-[56px] sm:max-w-[70px]">
              <Phone className="h-8 w-8" />
            </div>
            <div className="w-full">
              <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
                Phone Number
              </h4>
              <a
                href={`tel:+91${PHONE}`}
                className="leading-7 text-blue-500 lg:text-base [&:not(:first-child)]:mt-6"
              >
                {PHONE}
              </a>
            </div>
          </div>
        </div>

        <div className="">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            For help, connect advisors.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col space-x-0 space-y-10 sm:flex-row sm:space-x-10 sm:space-y-0">
        {pointers.map((pointer, index) => (
          <div key={index} className="w-full">
            <h3 className=" scroll-m-20 text-base font-semibold capitalize tracking-tight">
              {pointer.title}
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              {pointer.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
