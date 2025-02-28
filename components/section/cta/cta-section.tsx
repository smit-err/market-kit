import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"

export default function CtaSection() {
  return(
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
  )
}