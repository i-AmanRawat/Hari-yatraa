import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { EMAIL, PHONE, siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <section className="bg-secondary">
        <MaxWidthWrapper className={"flex items-center justify-end gap-4 py-2"}>
          <div className="flex items-center gap-2 text-xs font-medium md:text-sm">
            <MailIcon className="h-4 w-4 text-primary" />
            <Link
              href={"mailto:" + EMAIL}
              className={cn(
                buttonVariants({ size: "sm", variant: "link" }),
                "p-0"
              )}
            >
              {EMAIL}
            </Link>
          </div>
          <Link
            href={"tel:" + PHONE}
            className={cn(
              buttonVariants({ size: "sm", variant: "outline" }),
              "group rounded-md border-2 border-primary bg-secondary hover:bg-primary hover:text-background"
            )}
          >
            <PhoneIcon className="h-4 w-4 text-primary group-hover:text-secondary" />
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "sm" }), "")}
          >
            Book Now
          </Link>
        </MaxWidthWrapper>
      </section>
      <div className="sticky inset-x-0 top-0 z-50 h-16 bg-background">
        <header className="relative border-b">
          <MaxWidthWrapper>
            <div className="flex h-16 items-center justify-between">
              <Link href="/">
                <img
                  src="/logo.jpg"
                  alt={`${siteConfig.name} Logo`}
                  className="h-8 w-auto"
                  title={`${siteConfig.name} Logo`}
                />
              </Link>
              <Navbar />
            </div>
          </MaxWidthWrapper>
        </header>
      </div>
      <div className="flex-1 flex-grow">{children}</div>
      <Footer />
    </>
  );
}
