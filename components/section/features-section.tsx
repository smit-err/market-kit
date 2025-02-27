import React from "react"
import { SectionHeader } from "../section-header"
import FeatureCard from "../feature-card"

function FeaturesSection() {
  return (
    <section className="mx-auto max-w-7xl space-y-16 px-4 py-16 lg:py-24">
      <SectionHeader.Root className={"px-4"}>
        <SectionHeader.Container>
          <div className={"space-y-3"}>
            <SectionHeader.Title>Features</SectionHeader.Title>
            <SectionHeader.Heading>
              Analytics that feels like it’s from the future
            </SectionHeader.Heading>
          </div>
          <SectionHeader.Description>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </SectionHeader.Description>
        </SectionHeader.Container>
      </SectionHeader.Root>
      <div className="grid justify-center gap-8 lg:grid-cols-2">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </section>
  )
}

export default FeaturesSection
