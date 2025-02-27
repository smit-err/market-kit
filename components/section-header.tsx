import { cn } from "@/lib/utils"

import React from "react"

const Root = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("flex max-w-7xl flex-col gap-4 lg:pl-14", className)}
      {...props}
    />
  )
}

const Container = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-3xl flex-col gap-5 text-center",
        className,
      )}
      {...props}
    />
  )
}

const Title=({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div className={cn("text-sm/5 font-semibold text-cyan-700 text-center lg:text-base",className)} {...props}/>
  )
}

const Heading = ({ className, ...props }: React.ComponentProps<"h2">) => {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold tracking-tight lg:text-4xl",
        className,
      )}
      {...props}
    />
  )
}

const Description = ({ className, ...props }: React.ComponentProps<"p">) => {
  return (
    <p
      className={cn("text-muted-foreground text-lg/7 lg:text-xl", className)}
      {...props}
    />
  )
}

export const SectionHeader = {
  Root: Root,
  Title: Title,
  Heading:Heading,
  Description: Description,
  Container: Container,
}
