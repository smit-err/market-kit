import FeaturesSection from "@/components/section/features-section"
import HeroSection from "@/components/section/hero-section"
import TestimonialsSection from "@/components/section/testimonials-section"
import TopUsersSection from "@/components/section/top-users-section"
import FaqSection from "@/components/section/faq-section"
import FooterSection from "@/components/section/footer-section"
import { SectionWrapper } from "@/components/section-wrapper"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="mb-10">
      <HeroSection />
      <TopUsersSection />
      <FeaturesSection />
      <FaqSection />
      <TestimonialsSection />
      <SectionWrapper>
        <SectionHeader.Root>
          <SectionHeader.Container>
            <SectionHeader.Heading>
              Start your 30 days trial
            </SectionHeader.Heading>
            <SectionHeader.Description>
              Join over 4,000+ startups already growing with Untitled.
            </SectionHeader.Description>

            <div className={"flex flex-col gap-3 lg:flex-row items-center justify-center mt-2"}>
              <Button size={"lg"} className={"w-full lg:w-fit"}>Get started</Button>
              <Button size={"lg"} className={"w-full lg:w-fit"} variant={"outline"}>Learn more</Button>
            </div>
          </SectionHeader.Container>
        </SectionHeader.Root>
      </SectionWrapper>
      <FooterSection />
    </main>
  )
}
