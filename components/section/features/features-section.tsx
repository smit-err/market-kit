import React from "react"
import { SectionHeader } from "../../section-header"
import FeatureText from "@/components/section/features/feature-text"
import { MessagesSquare } from "lucide-react"
import { FeatureTextData } from "@/data/data"

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
      <div className="grid justify-center gap-10 lg:gap=16 lg:grid-cols-3">
        {
          FeatureTextData.map((item, i) => {
            return (
              <FeatureText
                key={i}
                icon={item.icon}
                title={item.title}
                description={
                  item.description
                }
              />
            )
          })
        }

      </div>
    </section>
  )
}

export default FeaturesSection
