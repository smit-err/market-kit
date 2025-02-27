import Link from "next/link"
import { Icons } from "./icons"

import { navItems } from "@/data/data"

export default function Navbar() {
  return (
    <header className="relative mx-auto hidden max-w-7xl items-center justify-between py-5 before:absolute before:bottom-0 before:h-px before:w-full before:bg-gradient-to-r before:from-transparent before:from-0% before:via-[#d6d6d6] before:via-50% before:to-transparent before:to-100% lg:flex">
      <Link href={"/"} className={"flex items-center gap-2"}>
        <Icons.logo className={"size-7.5"} />
        <p className={"text-lg font-semibold"}>Scalekit</p>
      </Link>
      <nav>
        <ul className="flex items-center gap-5 font-semibold text-neutral-600">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={
                  "transition-colors duration-250 hover:text-neutral-500"
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
