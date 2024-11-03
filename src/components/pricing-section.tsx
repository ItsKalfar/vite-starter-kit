import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, SquareArrowOutUpRight } from "lucide-react";
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
    <Tabs defaultValue="yearly">
      <TabsList className="grid w-full grid-cols-2 max-w-[25rem] mx-auto my-8">
        <TabsTrigger value="monthly">Monthly</TabsTrigger>
        <TabsTrigger value="yearly">Yearly</TabsTrigger>
      </TabsList>
      <TabsContent value="yearly">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col justify-between transition-all cursor-pointer ${
                plan.recommended
                  ? "border-primary shadow-lg scale-105"
                  : "bg-primary-foreground"
              }`}
            >
              {plan.bestSeller && <BestSellerBadge />}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4 text-primary">
                  {plan.yearlyPricing}
                  <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
                    /year
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
                  Choose Plan
                  <SquareArrowOutUpRight />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="monthly">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col justify-between hover:scale-105 transition-all cursor-pointer ${
                plan.recommended
                  ? "border-primary shadow-lg scale-105"
                  : "bg-primary-foreground"
              }`}
            >
              {plan.bestSeller && <BestSellerBadge />}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4 text-primary">
                  {plan.monthlyPrice}
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
                  Choose Plan
                  <SquareArrowOutUpRight />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};
