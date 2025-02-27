import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from "react"

const Testimonial = {
  Root: function Root({ children }: { children: React.ReactNode }) {
    return (
      <div
        className={
          "flex break-inside-avoid flex-col gap-8 rounded-xl border border-neutral-200 p-6 shadow-sm lg:gap-12 lg:p-8"
        }
      >
        {children}
      </div>
    )
  },

  Content: function Content({ children }: { children: React.ReactNode }) {
    return <div className={"flex flex-col gap-3"}>{children}</div>
  },

  Logo: function Logo({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
  },

  Quote: function Quote({ children }: { children: React.ReactNode }) {
    return <p className={"font-normal text-neutral-500"}>{children}</p>
  },

  Author: function Author({ children }: { children: React.ReactNode }) {
    return <div className={"flex items-center gap-3"}>{children}</div>
  },

  Avatar: function TestimonialAvatar({
    src,
    fallback,
  }: {
    src: string
    fallback: string
  }) {
    return (
      <Avatar className={"size-12"}>
        <AvatarImage src={src} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
    )
  },

  AuthorInfo: function AuthorInfo({
    name,
    role,
  }: {
    name: string
    role: string
  }) {
    return (
      <div className={"flex-1"}>
        <p className={"font-semibold"}>{name}</p>
        <p className={"text-neutral-500"}>{role}</p>
      </div>
    )
  },
}

export default Testimonial
