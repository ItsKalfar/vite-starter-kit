import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
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

export const plans = [
  {
    name: "Student",
    price: "$0",
    description: "Perfect for students",
    features: ["1 user", "1 projects", "1GB storage"],
  },
  {
    name: "Starter",
    price: "$9",
    description: "Perfect for small projects",
    features: ["1 user", "10 projects", "5GB storage", "Basic support"],
  },
  {
    name: "Pro",
    price: "$29",
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
    price: "$99",
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
