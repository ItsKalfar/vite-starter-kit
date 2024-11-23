import { faqs } from "@/constants/landingPage.constants";
import { InfoCard } from "./cards";

export const FaqSection = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 my-8">
      {faqs.map((faq, index) => (
        <InfoCard
          icon={faq.icon}
          title={faq.title}
          description={faq.description}
          key={index}
        />
      ))}
    </div>
  );
};
