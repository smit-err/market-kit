import React, { ComponentType } from "react"
import { Icons } from "@/components/icons"
import {
  Command,
  FileCheck2,
  Layers2,
  MessageCircleHeart,
  MessagesSquare,
  Smile,
  Zap,
} from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { type VariantProps } from "class-variance-authority"

export interface testimonialProps {
  logo?: React.ReactNode
  quote?: string
  author_name: string
  author_role: string
  author_image_url: string
  author_image_fallback: string
}

export interface FaqProps {
  question: string
  answer: string
}

export interface NavLinkProps {
  name: string
  href: string
}

export const navItems: NavLinkProps[] = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export interface PricingPlan {
  plan_title: string
  plan_price: string
  plan_description?: string
  plan_icon?: ComponentType<{ className?: string }>
  plan_check_items: string[]
  plan_button_text: string
  plan_custom_class?: string
  plan_button_variant?: VariantProps<typeof buttonVariants>["variant"]
  plan_button_href: string
}

export interface FeatureTextProps {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}

export const FeatureTextData: FeatureTextProps[] = [
  {
    icon: MessagesSquare,
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    icon: Zap,
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    icon: FileCheck2,
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
  {
    icon: Smile,
    title: "Connect with customers",
    description:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
  },
  {
    icon: Command,
    title: "Connect the tools you already use",
    description:
      "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
  },
  {
    icon: MessageCircleHeart,
    title: "Our people make the difference",
    description:
      "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
]

export const FaqData: FaqProps[] = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely! You can switch your plan anytime through your account dashboard. Just head to the settings, pick the new plan that suits you, and it’ll take effect at the start of your next billing cycle.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We keep it simple. You can cancel anytime before your next billing date, and you won’t be charged again. Just let us know through the support page, and we’ll handle it within 24 hours.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yep, you can add extra details like project codes or tax info to your invoices. Go to the billing section, click ‘customize invoice,’ and fill in whatever you need.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing’s a breeze! We charge monthly on the date you signed up, and you’ll get an email receipt each time. You can pay with a card or bank transfer—your choice.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Easy peasy. Log in, go to your profile settings, and update the email field. We’ll send a quick verification link to your new address to confirm the switch.",
  },
]

export const testimonialsData: testimonialProps[] = [
  {
    logo: <Icons.LogoIpsumFive className={"aspect-auto h-8 w-fit"} />,
    quote:
      "Untitled has been a lifesaver for our team—everything we need is right at our fingertips, and it helps us jump right into new design projects.",
    author_image_url: "https://github.com/shadcn.png",
    author_image_fallback: "CN",
    author_name: "Nikolas Gibbons",
    author_role: "Product Designer, Powersurge",
  },
  {
    logo: <Icons.LogoIpsumFive className={"aspect-auto h-8 w-fit"} />,
    quote:
      "Untitled is our secret weapon for staying ahead of deadlines. It gives us everything we need to get started quickly.",
    author_image_url: "https://github.com/shadcn.png",
    author_name: "Amar Foley",
    author_image_fallback: "AF",
    author_role: "UX Designer, Goodwell",
  },
  {
    logo: <Icons.LogoIpsumFive className={"aspect-auto h-8 w-fit"} />,
    quote:
      "Our workflow has improved dramatically since we started using Untitled and it’s become an integral part of our workflow. It's easy to use, and the resources are top-notch. I recommend it to everyone!",
    author_image_url: "https://github.com/shadcn.png",
    author_name: "Mathilde Lewis",
    author_image_fallback: "ML",
    author_role: "Project Lead, Stack3d Lab",
  },
]

export const PricingData: PricingPlan[] = [
  {
    plan_title: "Basic plan",
    plan_price: "$10/mth",
    plan_description: "Billed annually",
    plan_icon: Zap, // Now correctly typed as a component
    plan_check_items: [
      "Access to all basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20 GB individual data each user",
      "Basic chat and email support",
    ],
    plan_button_text: "Get started",
    plan_button_variant: "outline",
    plan_button_href: "#",
  },
  {
    plan_title: "Business plan",
    plan_price: "$20/mth",
    plan_description: "Billed annually",
    plan_icon: Layers2, // Now correctly typed as a component
    plan_check_items: [
      "200+ integrations",
      "Advanced reporting",
      "Up to 20 individual users",
      "40 GB individual data each user",
      "Priority chat and email support",
    ],
    plan_button_text: "Get started",
    plan_button_href: "#",
  },
]
