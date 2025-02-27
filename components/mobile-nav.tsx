"use client"

import React, { useState } from "react"

import { Menu, X } from "lucide-react"
import { Icons } from "./icons"
import Link from "next/link"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

import { navItems } from "@/data/data"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative flex h-18 items-center justify-between px-4 lg:hidden">
      <Link href={"/"} className={"flex flex-0 items-center gap-2"}>
        <Icons.logo className={"size-7.5"} />
        <p className={"text-lg font-semibold"}>Scalekit</p>
      </Link>

      <nav>
        <Button
          variant={"ghost"}
          size={"icon"}
          className={"size-8"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className={"size-5"} /> : <Menu className={"size-5"} />}
        </Button>

        <div
          className={`absolute inset-x-0 top-18 z-10 w-full bg-white shadow transition-all duration-200 ease-in-out ${open ? "pointer-events-auto visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-6 opacity-0"}`}
        >
          <ul className="flex flex-col gap-0.5 border-b border-neutral-200 py-5">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLinkItem href={item.href}>{item.name}</NavLinkItem>
              </li>
            ))}
          </ul>
          <div className={"w-full space-y-3 px-4 py-6"}>
            <Button className={"h-auto w-full py-2.5 text-base"}>
              Sign up
            </Button>
            <Button
              variant={"outline"}
              className={"h-auto w-full py-2.5 text-base"}
            >
              Sign in
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

function NavLinkItem({
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn("flex px-4 py-3 font-semibold text-neutral-900", className)}
      {...props}
    />
  )
}
