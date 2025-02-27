import { SectionHeader } from "@/components/section-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionWrapper } from "@/components/section-wrapper"

import {FaqData} from "@/data/data"

export default function FaqSection() {
  return (
    <SectionWrapper>
      <SectionHeader.Root>
        <SectionHeader.Container>
          <SectionHeader.Heading>
            Frequently Asked Questions
          </SectionHeader.Heading>
          <SectionHeader.Description>
            Everything you need to know about the product and billing.
          </SectionHeader.Description>
        </SectionHeader.Container>
      </SectionHeader.Root>

      <div className={"mx-auto w-full max-w-3xl"}>
        {FaqData.map((faq, index) => (
          <Accordion key={index} type="single" collapsible className={"w-full"}>
            <AccordionItem value="item-1">
              <AccordionTrigger className={"text-lg/7 font-medium"}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className={"text-muted-foreground text-base"}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </SectionWrapper>
  )
}
