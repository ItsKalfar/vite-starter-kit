import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { plans } from "@/constants/landingPage.constants";

const BestSellerBadge = () => (
  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
    <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
      Best Seller
    </div>
  </div>
);

export const PricingSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 my-16">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className={`flex flex-col justify-between ${
            plan.recommended ? "border-primary shadow-lg scale-105" : ""
          }`}
        >
          {plan.bestSeller && <BestSellerBadge />}
          <CardHeader>
            <CardTitle className="text-2xl">{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-4 text-primary">
              {plan.price}
              <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul className="space-y-2">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              variant={plan.recommended ? "default" : "outline"}
            >
              {plan.recommended ? "Start Free Trial" : "Choose Plan"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
