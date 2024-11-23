import {
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandRedux,
  IconBrandTypescript,
  IconBrandTabler,
  IconBrandDocker,
  IconRouteSquare,
  IconBrandVite,
} from "@tabler/icons-react";
import {
  Layers,
  Code,
  Layout,
  Settings,
  Rocket,
  Box,
  Lock,
  RefreshCcw,
  Zap,
  Smile,
} from "lucide-react";

export const landingPage = {
  heroSection: {
    heading:
      "Build Scalable, Stunning SaaS Apps Quickly with the Ultimate Starter Kit",
    subheading: `Empower your development with a ready-to-go SaaS foundation that combines performance, customization, and design excellence. 
          Get everything you need to launch professional SaaS apps faster and easier than ever.`,
  },
  technologies: {
    heading: "Frontend Technologies Built for Scalability",
    subheading: `Explore the cutting-edge tools and frameworks that power our template, designed to help developers build efficient, scalable, and maintainable SaaS applications.`,
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
  faqSection: {
    heading: "Frequently Asked Questions",
    subheading:
      "Got questions? We&apos;ve got answers! Explore our FAQ to find everything you need to know about us and how it can help you.",
  },
};

export const faqs = [
  {
    icon: Layers,
    title: "What is this SaaS template?",
    description:
      "This is a pre-built, customizable template to help you kickstart your SaaS product development quickly and efficiently.",
  },
  {
    icon: Code,
    title: "Is coding required to use this template?",
    description:
      "Minimal coding knowledge is needed. It’s designed for developers but also supports no-code or low-code configurations.",
  },
  {
    icon: Layout,
    title: "What features does it include?",
    description:
      "It comes with essential features like authentication, billing, dashboards, and more to build modern SaaS applications.",
  },
  {
    icon: Settings,
    title: "Can I customize it to fit my product?",
    description:
      "Yes, the template is fully customizable, so you can tailor it to match your product’s branding and features.",
  },
  {
    icon: Rocket,
    title: "How quickly can I launch my product?",
    description:
      "The template is built for speed, allowing you to launch a minimum viable product (MVP) in days, not weeks.",
  },
  {
    icon: Box,
    title: "Does it include responsive design?",
    description:
      "Absolutely! The template is mobile-first and optimized for seamless experiences across all devices.",
  },
  {
    icon: Lock,
    title: "Is it secure?",
    description:
      "Yes, security best practices are built in, including secure authentication and data protection measures.",
  },
  {
    icon: RefreshCcw,
    title: "Will I get updates?",
    description:
      "Yes, regular updates are provided to ensure compatibility with the latest technologies and best practices.",
  },
  {
    icon: Zap,
    title: "Does it support integrations?",
    description:
      "It supports popular APIs and third-party tools to extend functionality as your product grows.",
  },
  {
    icon: Smile,
    title: "Is there support available?",
    description:
      "Yes, detailed documentation and a support team are available to assist you every step of the way.",
  },
];

export const logos = [
  { src: "/placeholder.svg?height=40&width=100", alt: "Company 1" },
  { src: "/placeholder.svg?height=40&width=100", alt: "Company 2" },
  { src: "/placeholder.svg?height=40&width=100", alt: "Company 3" },
  { src: "/placeholder.svg?height=40&width=100", alt: "Company 4" },
];

export const technologies = [
  {
    title: "Built with React",
    description:
      "Utilizes React to build dynamic and interactive user interfaces.",
    icon: <IconBrandReact />,
  },
  {
    title: "Styled with Tailwind CSS",
    description:
      "Styled using Tailwind CSS for a flexible and utility-first approach.",
    icon: <IconBrandTailwind />,
  },
  {
    title: "Shadcn UI Components",
    description:
      "Leverages Shadcn UI for beautiful and customizable design components.",
    icon: <IconBrandTabler />,
  },
  {
    title: "State Management with Redux",
    description: "Uses Redux for efficient and predictable state management.",
    icon: <IconBrandRedux />,
  },
  {
    title: "Fast Development with Vite",
    description:
      "Vite ensures fast and efficient development with its modern build tool.",
    icon: <IconBrandVite />,
  },
  {
    title: "Developed with TypeScript",
    description: "Built with TypeScript for type-safe and robust development.",
    icon: <IconBrandTypescript />,
  },
  {
    title: "Routing with React Router",
    description:
      "React Router is used for handling dynamic routing in the app.",
    icon: <IconRouteSquare />,
  },
  {
    title: "Containerized with Docker",
    description: "Docker ensures consistency across different environments.",
    icon: <IconBrandDocker />,
  },
];

export const topFeatures = [
  {
    title: "Built-in Authentication",
    description:
      "Secure and easy-to-integrate authentication system for your users.",
    header: <img src="/images/saas6.jpg" className="w-full h-full" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Customizable UI Components",
    description:
      "Beautiful, responsive components that fit seamlessly into any design.",
    header: <img src="/images/saas.jpg" className="w-full h-full" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Robust API Integration",
    description:
      "Seamlessly integrate with third-party APIs to extend functionality.",
    header: <img src="/images/saas2.jpg" className="w-full h-full" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Scalable Architecture",
    description:
      "Built to grow with your business and handle high demand effortlessly.",
    header: <img src="/images/saas1.jpg" className="w-full h-full" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Comprehensive Analytics",
    description:
      "Gain insights into user behavior and application performance with ease.",
    header: <img src="/images/saas4.jpg" className="w-full h-full" />,
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
