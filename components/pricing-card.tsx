import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PricingPlan } from "@/data/data"
import Link from "next/link"

type PricingCardProps = PricingPlan

// Reusable CheckItemText component
function CheckItemText({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-6 items-center justify-center rounded-full bg-neutral-100">
        <Check className="size-4" />
      </div>
      <p className="text-neutral-500">{text}</p>
    </div>
  )
}

// Main PricingCard component
export default function PricingCard({
  plan_title,
  plan_price,
  plan_description,
  plan_icon: Icon, // Destructure as Icon for clarity
  plan_check_items,
  plan_button_text,
  plan_button_variant, // Default variant
  plan_custom_class = "", // Default empty string
  plan_button_href,
}: PricingCardProps) {
  return (
    <Card
      className={`w-full overflow-hidden rounded-2xl py-0 md:max-w-[22rem] ${plan_custom_class}`}
    >
      <CardHeader className="gap-2 px-6 pt-6 text-center">
        <div className="flex flex-col items-center justify-center gap-4">
          {Icon && (
            <div className="flex size-12 items-center justify-center rounded-full bg-neutral-100">
              <Icon className="size-6" />
            </div>
          )}
          <p className="text-xl/7.5 font-semibold text-cyan-600">
            {plan_title || "Unnamed Plan"}
          </p>
        </div>
        <CardTitle className="text-4xl/11 font-semibold tracking-tight">
          {plan_price || "N/A"}
        </CardTitle>
        {plan_description && (
          <CardDescription className="text-base">
            {plan_description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="mt-3 flex flex-col gap-4">
          {plan_check_items.length > 0 ? (
            plan_check_items.map((item, i) => (
              <CheckItemText key={i} text={item} />
            ))
          ) : (
            <p className="text-neutral-500">No features listed</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="border-t border-neutral-200 bg-neutral-50 px-6 pt-6 pb-8">
        <Button
          variant={plan_button_variant}
          className="h-auto w-full py-3"
          asChild
        >
          <Link href={plan_button_href}>
            {plan_button_text || "Get Started"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
