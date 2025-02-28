import { ComponentType } from "react"
import { FeatureTextProps } from "@/data/data"


export default function FeatureText({ icon, title, description }: FeatureTextProps) {
  const Icon = icon
  return (
    <div
      className={
        "flex max-w-96 min-w-80 flex-col items-center justify-center gap-4"
      }
    >
      <div
        className={
          "border-border flex size-10 items-center justify-center rounded-lg border shadow-sm"
        }
      >
        <Icon className={"size-5"} />
      </div>

      <div className={"space-y-1 text-center"}>
        <h3 className={"text-lg/7 font-semibold"}>{title}</h3>
        <p className={"text-muted-foreground"}>{description}</p>
      </div>
    </div>
  )
}
