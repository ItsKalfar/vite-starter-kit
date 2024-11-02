import PageLayout from "@/components/layouts/page-layout";
import MaxWidthWrapper from "@/components/layouts/max-width-wrapper";
import {
  GridBackground,
  GridSmallBackground,
} from "@/components/grid-background";
import { Balancer } from "react-wrap-balancer";
import { buttonVariants } from "@/components/ui/button";
import { FeaturesSection } from "@/components/feature-card";
import { Link } from "react-router-dom";
import { landingPage } from "@/constants/landingPage.constants";
import { SectionHeader } from "@/components/section-header";

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
    </PageLayout>
  );
}
