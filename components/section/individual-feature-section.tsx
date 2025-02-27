import React from "react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

interface IndividualFeatureProps {
  className?: string
}

function IndividualFeatureSection({ className }: IndividualFeatureProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-8 px-4 lg:flex-row lg:justify-between",
        className,
      )}
    >
      <div className="flex max-w-2xl flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold tracking-tight lg:text-5xl">
            Seamless App Integrations
          </h2>
          <p className="lg:text-xl">
            Effortlessly connect with your favorite tools and platforms to
            streamline workflows and enhance productivity.
          </p>
        </div>
        <Button className="w-fit">Get started</Button>
      </div>
      <div className="aspect-[9/12] w-full rounded-xl bg-neutral-200 lg:w-lg" />
    </div>
  )
}

export default IndividualFeatureSection
