import { Footer } from "@/components/footer"
import { Icons } from "@/components/icons"
import Link from "next/link"

export default function FooterSection() {
  return (
    <Footer.Root>
      <div
        className={"grid gap-8 lg:grid-cols-[320px_minmax(0,_1fr)] lg:justify-between lg:gap-16"}
      >
        <Footer.Container className={"max-w-80"}>
          <Link href={"/public"} className={"flex items-center gap-2"}>
            <Icons.logo className={"size-7.5  "} />
            <p className={"text-lg font-semibold"}>Scalekit</p>
          </Link>
          <Footer.Description>
            Design amazing digital experiences that create more happy in the
            world.
          </Footer.Description>
        </Footer.Container>

        <Footer.Container
          className={"grid grid-cols-2 justify-between lg:grid-cols-3"}
        >
          <div className={"flex min-w-24 flex-col space-y-4 lg:justify-self-end"}>
            <p className={"text-sm/5 font-semibold text-neutral-500"}>
              Product
            </p>
            <div className={"flex flex-col space-y-3"}>
              <Footer.FooterLink href="/overview">Overview</Footer.FooterLink>
              <Footer.FooterLink href="/overview">Features</Footer.FooterLink>
              <Footer.FooterLink href="/overview">Tutorials</Footer.FooterLink>
              <Footer.FooterLink href="/overview">Pricing</Footer.FooterLink>
              <Footer.FooterLink href="/overview">Releases</Footer.FooterLink>
            </div>
          </div>
          <div className={"flex min-w-24 flex-col space-y-4 lg:justify-self-end"}>
            <p className={"text-sm/5 font-semibold text-neutral-500"}>
              Product
            </p>
            <div className={"flex flex-col space-y-3"}>
              <Footer.FooterLink href="/overview">Overview</Footer.FooterLink>
              <Footer.FooterLink href="/overview">Features</Footer.FooterLink>
              <Footer.FooterLink href="/overview">Tutorials</Footer.FooterLink>
              <Footer.FooterLink href="/overview">Pricing</Footer.FooterLink>
              <Footer.FooterLink href="/overview">Releases</Footer.FooterLink>
            </div>
          </div>
          <div className={"flex min-w-24 flex-col space-y-4 lg:justify-self-end"}>
            <p className={"text-sm/5 font-semibold text-neutral-500"}>
              Product
            </p>
            <div className={"flex flex-col space-y-3"}>
              <Footer.FooterLink href="/overview">Overview</Footer.FooterLink>
              <Footer.FooterLink href="/overview">Features</Footer.FooterLink>
              <Footer.FooterLink href="/overview">Tutorials</Footer.FooterLink>
              <Footer.FooterLink href="/overview">Pricing</Footer.FooterLink>
              <Footer.FooterLink href="/overview">Releases</Footer.FooterLink>
            </div>
          </div>
        </Footer.Container>
      </div>
    </Footer.Root>
  )
}
