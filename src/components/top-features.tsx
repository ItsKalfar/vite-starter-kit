import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { topFeatures } from "@/constants/landingPage.constants";

export const TopFeatures = () => {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {topFeatures.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
};
