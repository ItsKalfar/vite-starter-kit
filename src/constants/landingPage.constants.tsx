import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export const landingPage = {
  heroSection: {
    heading:
      "Build Scalable, Stunning SaaS Apps Quickly with the Ultimate Starter Kit",
    subheading: `Empower your development with a ready-to-go SaaS foundation that combines performance, customization, and design excellence. 
          Get everything you need to launch professional SaaS apps faster and easier than ever.`,
  },
  featuresSection: {
    heading: "Key Features Designed for Success",
    subheading: `Discover the powerful features that make our starter kit the perfect choice for developers looking to create top-notch SaaS applications.`,
  },
  topFeatures: {
    heading: "Top Features That Stand Out",
    subheading: `Explore the standout features that set our SaaS starter kit apart from the competition, ensuring you have all the tools you need to excel in your projects.`,
  },
  pricing: {
    heading: "Flexible Pricing Plans",
    subheading: `Choose the perfect pricing plan that fits your needs. Whether you're just starting or scaling your enterprise solutions, we offer flexible options for every budget.`,
  },
  testimonials: {
    heading: "What Our Users Say",
    subheading: `Don't just take our word for it! Hear from our satisfied users who have successfully built their SaaS applications using our starter kit.`,
  },
};

export const logos = [
  { src: "/placeholder.svg?height=40&width=100", alt: "Company 1" },
  { src: "/placeholder.svg?height=40&width=100", alt: "Company 2" },
  { src: "/placeholder.svg?height=40&width=100", alt: "Company 3" },
  { src: "/placeholder.svg?height=40&width=100", alt: "Company 4" },
];

export const features = [
  {
    title: "Developer-Friendly",
    description:
      "Designed with developers in mind, making it easy to build and scale applications.",
    icon: <IconTerminal2 />,
  },
  {
    title: "Quick Setup",
    description:
      "Get started in minutes with our streamlined installation process.",
    icon: <IconEaseInOut />,
  },
  {
    title: "Transparent Pricing",
    description:
      "Enjoy competitive pricing with no hidden fees or unexpected charges.",
    icon: <IconCurrencyDollar />,
  },
  {
    title: "Reliable Performance",
    description:
      "Experience seamless performance with our 100% uptime guarantee.",
    icon: <IconCloud />,
  },
  {
    title: "Scalable Architecture",
    description:
      "Easily scale your applications with our multi-tenant architecture.",
    icon: <IconRouteAltLeft />,
  },
  {
    title: "Around-the-Clock Support",
    description:
      "Our dedicated support team is available 24/7 to assist you whenever you need help.",
    icon: <IconHelp />,
  },
  {
    title: "Risk-Free Trial",
    description:
      "Try it out with our money-back guarantee if it doesn’t meet your needs.",
    icon: <IconAdjustmentsBolt />,
  },
  {
    title: "Comprehensive Documentation",
    description:
      "Access thorough documentation and tutorials to guide you through development.",
    icon: <IconHeart />,
  },
];

export const topFeatures = [
  {
    title: "Built-in Authentication",
    description:
      "Secure and easy-to-integrate authentication system for your users.",
    header: <img />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Customizable UI Components",
    description:
      "Beautiful, responsive components that fit seamlessly into any design.",
    header: <img />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Robust API Integration",
    description:
      "Seamlessly integrate with third-party APIs to extend functionality.",
    header: <img />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Scalable Architecture",
    description:
      "Built to grow with your business and handle high demand effortlessly.",
    header: <img />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Comprehensive Analytics",
    description:
      "Gain insights into user behavior and application performance with ease.",
    header: <img />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

export const plans = [
  {
    name: "Starter",
    monthlyPrice: "$9",
    yearlyPricing: "$90",
    discountMessage: "Save $18",
    description: "Perfect for small projects",
    features: ["1 user", "10 projects", "5GB storage", "Basic support"],
  },
  {
    name: "Pro",
    monthlyPrice: "$20",
    yearlyPricing: "$200",
    discountMessage: "Save $40",
    description: "Ideal for growing teams and businesses",
    features: [
      "5 users",
      "Unlimited projects",
      "50GB storage",
      "Priority support",
      "Advanced analytics",
    ],
    recommended: true,
    bestSeller: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    yearlyPricing: "Custom",
    discountMessage: "Save $500",
    description: "For large-scale operations and maximum control",
    features: [
      "Unlimited users",
      "Unlimited projects",
      "1TB storage",
      "24/7 dedicated support",
      "Custom integrations",
      "On-premise deployment",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "CEO, TechCorp",
    content:
      "This product has revolutionized our workflow. Highly recommended!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Sam Lee",
    role: "Designer, CreativeCo",
    content: "Intuitive and powerful. It's been a game-changer for our team.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Jordan Taylor",
    role: "Marketer, GrowthInc",
    content: "The support team is fantastic. They've been incredibly helpful.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Casey Brown",
    role: "Developer, CodeCraft",
    content:
      "I've tried many similar products, but this one stands out in terms of performance.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Riley Green",
    role: "Entrepreneur",
    content:
      "This tool has significantly improved our productivity. Worth every penny!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    name: "Avery Davis",
    role: "Project Manager, BuildRight",
    content:
      "User-friendly interface with powerful features. It's the perfect combination.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];
