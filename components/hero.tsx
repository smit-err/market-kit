import React from "react"
import { cn } from "@/lib/utils"

const Root = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-16 pt-16 lg:pt-24",
        className,
      )}
      {...props}
    />
  )
}

const Container = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 lg:px-8",
        className,
      )}
      {...props}
    />
  )
}

const Header = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("flex flex-col gap-4 lg:gap-6", className)}
      {...props}
    />
  )
}

const Title = ({ className, ...props }: React.ComponentProps<"h1">) => {
  return (
    <h1
      className={cn(
        "text-center text-4xl/11 font-semibold tracking-tight lg:text-6xl/18",
        className,
      )}
      {...props}
    />
  )
}

const Description = ({ className, ...props }: React.ComponentProps<"p">) => {
  return (
    <p
      className={cn(
        "mx-auto max-w-md text-center text-lg/7 text-gray-600 lg:text-xl/7.5",
        className,
      )}
      {...props}
    />
  )
}

const Footer = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-3 lg:w-fit lg:flex-row",
        className,
      )}
      {...props}
    />
  )
}

export const Hero = {
  Root: Root,
  Container: Container,
  Header: Header,
  Title: Title,
  Description: Description,
  Footer: Footer,
}
