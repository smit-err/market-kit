import { Icons } from "../icons"

export default function TopUsersSection() {
  return (
    <div className="flex flex-col items-center gap-8 px-4 py-16 lg:py-24">
      <p className="text-muted-foreground font-medium">
        Used by Top players in Industry
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <Icons.LogoIpsumOne className="aspect-auto h-7 w-fit lg:h-8" />
        <Icons.LogoIpsumTwo className="aspect-auto h-7 w-fit lg:h-8" />
        <Icons.LogoIpsumThree className="aspect-auto h-7 w-fit lg:h-8" />
        <Icons.LogoIpsumFour className="aspect-auto h-7 w-fit lg:h-8" />
        <Icons.LogoIpsumFive className="aspect-auto h-7 w-fit lg:h-8" />
      </div>
    </div>
  )
}
