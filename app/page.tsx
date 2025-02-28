import FeaturesSection from "@/components/section/features/features-section"
import HeroSectionOne from "@/components/section/hero/hero-section-one"
import TestimonialsSection from "@/components/section/testimonials/testimonials-section"
import TopUsersSection from "@/components/section/top-users-section"
import FaqSectionOne from "@/components/section/faq/faq-section-one"
import FooterSection from "@/components/section/footer/footer-section"
import { SectionWrapper } from "@/components/section-wrapper"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import PricingSection from "@/components/section/pricing/pricing-section"

export default function Home() {
  return (
    <main className="mb-10">
      <HeroSectionOne />
      <TopUsersSection />
      <FeaturesSection />
      <FaqSectionOne />
      <TestimonialsSection />
      <PricingSection />
      <SectionWrapper>
        <SectionHeader.Root>
          <SectionHeader.Container>
            <SectionHeader.Heading>
              Start your 30 days trial
            </SectionHeader.Heading>
            <SectionHeader.Description>
              Join over 4,000+ startups already growing with Untitled.
            </SectionHeader.Description>

            <div
              className={
                "mt-2 flex flex-col items-center justify-center gap-3 lg:flex-row"
              }
            >
              <Button size={"lg"} className={"w-full lg:w-fit"}>
                Get started
              </Button>
              <Button
                size={"lg"}
                className={"w-full lg:w-fit"}
                variant={"outline"}
              >
                Learn more
              </Button>
            </div>
          </SectionHeader.Container>
        </SectionHeader.Root>
      </SectionWrapper>
      <FooterSection />
    </main>
  )
}
