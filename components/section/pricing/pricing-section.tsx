import PricingCard from "@/components/pricing-card"
import { SectionWrapper } from "@/components/section-wrapper"
import { SectionHeader } from "@/components/section-header"
import { PricingData } from "@/data/data"

export default function PricingSection() {
  return (
    <SectionWrapper>
      <SectionHeader.Root>
        <SectionHeader.Container>
          <SectionHeader.Title>Pricing</SectionHeader.Title>
          <SectionHeader.Heading>
            Pricing plans that scale
          </SectionHeader.Heading>
          <SectionHeader.Description>
            Simple, transparent pricing that grows with you. Try any plan free
            for 30 days.
          </SectionHeader.Description>
        </SectionHeader.Container>
      </SectionHeader.Root>
          <div className="flex w-full flex-col gap-6 md:flex-row md:justify-center md:gap-8">
            {PricingData.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
      </div>
    </SectionWrapper>
  )
}
