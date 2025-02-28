import React from "react"
import { SectionHeader } from "../../section-header"
import Testimonial from "@/components/testimonial-card"
import { testimonialsData } from "@/data/data"
import { SectionWrapper } from "@/components/section-wrapper"

function TestimonialsSection() {
  return (
    <SectionWrapper>
      <SectionHeader.Root>
        <SectionHeader.Container>
          <SectionHeader.Heading>
            Don’t just take our word for it
          </SectionHeader.Heading>
          <SectionHeader.Description>
            Hear first-hand from our incredible community of customers.
          </SectionHeader.Description>
        </SectionHeader.Container>
      </SectionHeader.Root>

      <div
        className={
          "columns-1 gap-5 space-y-5 sm:columns-2 sm:gap-6 sm:space-y-6 lg:block lg:columns-xs lg:gap-6 lg:space-y-8"
        }
      >
        {testimonialsData.map((item, index) => (
          <Testimonial.Root key={index}>
            <Testimonial.Content>
              {item.logo && <Testimonial.Logo>{item.logo}</Testimonial.Logo>}
              <Testimonial.Quote>{item.quote}</Testimonial.Quote>
            </Testimonial.Content>
            <Testimonial.Author>
              <Testimonial.Avatar
                src={item.author_image_url}
                fallback={item.author_image_fallback}
              />
              <Testimonial.AuthorInfo
                name={item.author_name}
                role={item.author_role}
              />
            </Testimonial.Author>
          </Testimonial.Root>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default TestimonialsSection
