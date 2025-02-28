import { PlayCircle } from "lucide-react"
import { Button } from "../../ui/button"
import Image from "next/image"

import React from "react"
import { Hero } from "@/components/hero"
import ImageWrapper from "@/components/image-wrapper"
import { Badge } from "@/components/ui/badge"

export default function HeroSectionOne() {
  return (
    <section>
      <Hero.Root>
        <Hero.Container>
          <Hero.Header className={"items-center"}>
            <Badge variant={"outline"}>v2.0 is live!</Badge>
            <Hero.Title>
              Centralize your <br />
              sales with Scalekit.
            </Hero.Title>
            <Hero.Description>
              Track custom events, enhance conversion rates, and streamline your
              sales process with.
            </Hero.Description>
          </Hero.Header>
          <Hero.Footer>
            <Button size={"lg"}>Sign up</Button>
            <Button size={"lg"} variant={"outline"}>
              <PlayCircle />
              Demo
            </Button>
          </Hero.Footer>
        </Hero.Container>

        <Hero.Container>
          <ImageWrapper>
            <Image
              width={1336}
              height={926}
              src={"/hero-image.png"}
              alt={"HeroSectionOne image"}
            />
          </ImageWrapper>
        </Hero.Container>
      </Hero.Root>
    </section>
  )
}
