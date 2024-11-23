import PageLayout from "@/components/layouts/page-layout";
import MaxWidthWrapper from "@/components/layouts/max-width-wrapper";
import {
  GridBackground,
  GridSmallBackground,
  DotBackground,
  NoBackground,
} from "@/components/ui/grid-background";
import { Balancer } from "react-wrap-balancer";
import { Button, buttonVariants } from "@/components/ui/button";
import { TechStackSection } from "@/components/feature-card";
import { Link } from "react-router-dom";
import { landingPage } from "@/constants/landingPage.constants";
import { SectionHeader } from "@/components/section-header";
import { PricingSection } from "@/components/pricing-section";
import { Testimonials } from "@/components/testimonials";
import { LogoCloud } from "@/components/logo-cloud";
import { SquareArrowOutUpRight } from "lucide-react";
import { TopFeatures } from "@/components/top-features";
import { FaqSection } from "@/components/faq-section";

export default function Home() {
  return (
    <PageLayout>
      <GridBackground className="h-[50rem]">
        <MaxWidthWrapper className="text-center flex flex-col items-center justify-center">
          <h1 className="text-6xl mb-4 font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            {landingPage.heroSection.heading}
          </h1>
          <Balancer className="max-w-[30rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8 mb-8">
            {landingPage.heroSection.subheading}
          </Balancer>
          <div className="grid gap-4 grid-cols-2">
            <Link to="/sign-in" className={buttonVariants()}>
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className={buttonVariants({
                variant: "link",
              })}
            >
              Get Started
            </Link>
          </div>
          <div className="mt-16">
            <h2 className="text-xl my-4 font-medium">
              Trusted by the best companies
            </h2>
            <LogoCloud />
          </div>
        </MaxWidthWrapper>
      </GridBackground>
      <GridSmallBackground fadedLook={false} className="flex-col">
        <MaxWidthWrapper className="text-center flex flex-col items-center justify-center">
          <SectionHeader
            heading={landingPage.technologies.heading}
            subheading={landingPage.technologies.subheading}
          />
          <TechStackSection />
        </MaxWidthWrapper>
        <MaxWidthWrapper className="text-center flex flex-col items-center justify-center">
          <SectionHeader
            heading={landingPage.topFeatures.heading}
            subheading={landingPage.topFeatures.subheading}
          />
          <TopFeatures />
        </MaxWidthWrapper>
      </GridSmallBackground>
      <DotBackground fadedLook={false}>
        <MaxWidthWrapper className="text-center flex flex-col items-center justify-center">
          <SectionHeader
            heading={landingPage.testimonials.heading}
            subheading={landingPage.testimonials.subheading}
          />
          <Testimonials />
        </MaxWidthWrapper>
      </DotBackground>
      <NoBackground fadedLook={false}>
        <MaxWidthWrapper
          className="text-center flex flex-col items-center justify-center"
          id="#pricing"
        >
          <SectionHeader
            heading={landingPage.pricing.heading}
            subheading={landingPage.pricing.subheading}
          />
          <PricingSection />
        </MaxWidthWrapper>
      </NoBackground>
      <NoBackground fadedLook={false}>
        <MaxWidthWrapper
          className="text-center flex flex-col items-center justify-center"
          id="#pricing"
        >
          <SectionHeader
            heading={landingPage.faqSection.heading}
            subheading={landingPage.faqSection.subheading}
          />
          <FaqSection />
        </MaxWidthWrapper>
      </NoBackground>
      <DotBackground fadedLook={false}>
        <MaxWidthWrapper className="grid grid-cols-1 md:grid-cols-3 gap-6 py-24">
          <div className="col-span-2">
            <h2 className="text-xl mb-4 mr-4 font-semibold leading-tight tracking-tighter md:text-2xl lg:text-4xl lg:leading-[1.1]">
              Buy for your team of 10 people and get pro upgrade absolutely
              free.
            </h2>
            <p className="mb-8 mr-8">
              Get a Free Pro Upgrade When You Purchase for a Team of 10—Enhance
              Collaboration and Boost Productivity at No Extra Cost!
            </p>
            <Button>
              Buy Now <SquareArrowOutUpRight />
            </Button>
          </div>
          <div></div>
        </MaxWidthWrapper>
      </DotBackground>
    </PageLayout>
  );
}
