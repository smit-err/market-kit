import FeaturesSection from "@/components/section/features/features-section"
import HeroSectionOne from "@/components/section/hero/hero-section-one"
import TestimonialsSection from "@/components/section/testimonials/testimonials-section"
import TopUsersSection from "@/components/section/top-users-section"
import FaqSectionOne from "@/components/section/faq/faq-section-one"
import FooterSection from "@/components/section/footer/footer-section"
import PricingSection from "@/components/section/pricing/pricing-section"
import CtaSection from "@/components/section/cta/cta-section"

export default function Home() {
  return (
    <main className="mb-10">
      <HeroSectionOne />
      <TopUsersSection />
      <FeaturesSection />
      <FaqSectionOne />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <FooterSection />
    </main>
  )
}
