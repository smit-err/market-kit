import { cn } from "@/lib/utils"

import Link from "next/link"

const Description = ({ className, ...props }: React.ComponentProps<"p">) => {
  return <p className={cn("text-muted-foreground", className)} {...props} />
}

const Root = ({ className, ...props }: React.ComponentProps<"footer">) => {
  return (
    <footer
      className={cn("mx-auto max-w-7xl py-12 lg:py-16", className)}
      {...props}
    />
  )
}

const Container = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div className={cn("flex flex-col gap-6 px-4", className)} {...props} />
  )
}

const FooterLink = ({
  className,
  ...props
}: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      className={cn("text-base font-semibold text-neutral-600", className)}
      {...props}
    />
  )
}

export const Footer = {
  Description: Description,
  Container: Container,
  Root: Root,
  FooterLink: FooterLink,
}
