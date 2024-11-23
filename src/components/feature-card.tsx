import { technologies } from "@/constants/landingPage.constants";
import { StyledCard } from "./cards";

export const TechStackSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {technologies.map((tech, index) => (
        <StyledCard key={tech.title} {...tech} index={index} />
      ))}
    </div>
  );
};
