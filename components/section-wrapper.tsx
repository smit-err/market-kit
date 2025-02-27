import { cn } from "@/lib/utils"

export function SectionWrapper({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-16 lg:gap-16 lg:py-24",
        className,
      )}
      {...props}
    />
  )
}
