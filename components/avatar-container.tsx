import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TestimonialsAvatar() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
      <div className="flex items-center -space-x-2">
        <Avatar className="border border-white lg:size-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="border border-white lg:size-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="border border-white lg:size-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="border border-white lg:size-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="border border-white lg:size-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col items-center gap-1.5 text-center lg:items-start lg:gap-0.5">
        <div className="flex items-center gap-0.5">
          <Star className="size-4.5 fill-amber-500 stroke-amber-500" />
          <Star className="size-4.5 fill-amber-500 stroke-amber-500" />
          <Star className="size-4.5 fill-amber-500 stroke-amber-500" />
          <Star className="size-4.5 fill-amber-500 stroke-amber-500" />
          <Star className="size-4.5 fill-amber-500 stroke-amber-500" />
        </div>
        <p className="text-muted-foreground text-sm">20k+ happy customers</p>
      </div>
    </div>
  )
}