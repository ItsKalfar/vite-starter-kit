import PageLayout from "@/components/layouts/page-layout";
import MaxWidthWrapper from "@/components/layouts/max-width-wrapper";
import {
  GridBackground,
  GridSmallBackground,
  DotBackground,
} from "@/components/grid-background";
import { Balancer } from "react-wrap-balancer";
import { buttonVariants } from "@/components/ui/button";
import { FeaturesSection } from "@/components/feature-card";
import { Link } from "react-router-dom";
import { landingPage } from "@/constants/landingPage.constants";
import { SectionHeader } from "@/components/section-header";
import { PricingSection } from "@/components/pricing-section";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <PageLayout>
      <GridBackground>
        <MaxWidthWrapper className="text-center flex flex-col items-center justify-center">
          <h1 className="text-6xl mb-4 font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            {landingPage.heroSection.heading}
          </h1>
          <Balancer className="max-w-[30rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8 mb-8">
            {landingPage.heroSection.subheading}
          </Balancer>
          <div className="grid gap-4 grid-cols-2">
            <Link to="/sign-up" className={buttonVariants()}>
              Get Started
            </Link>
            <Link to="/sign-in" className={buttonVariants()}>
              Sign In
            </Link>
          </div>
        </MaxWidthWrapper>
      </GridBackground>
      <GridSmallBackground fadedLook={false}>
        <MaxWidthWrapper className="text-center flex flex-col items-center justify-center">
          <SectionHeader
            heading={landingPage.featuresSection.heading}
            subheading={landingPage.featuresSection.subheading}
          />
          <FeaturesSection />
        </MaxWidthWrapper>
      </GridSmallBackground>
      <GridSmallBackground fadedLook={false}>
        <MaxWidthWrapper className="text-center flex flex-col items-center justify-center">
          <SectionHeader
            heading={landingPage.topFeatures.heading}
            subheading={landingPage.topFeatures.subheading}
          />
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
      <DotBackground fadedLook={false}>
        <MaxWidthWrapper className="text-center flex flex-col items-center justify-center">
          <SectionHeader
            heading={landingPage.pricing.heading}
            subheading={landingPage.pricing.subheading}
          />
          <PricingSection />
        </MaxWidthWrapper>
      </DotBackground>
    </PageLayout>
  );
}
