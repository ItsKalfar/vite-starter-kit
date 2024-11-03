import { GridSmallBackground } from "./ui/grid-background";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export const Loading = () => {
  return (
    <GridSmallBackground fadedLook={false} className="h-screen">
      <div className="h-[15rem] flex items-center justify-center">
        <TextHoverEffect text="Loading" />
      </div>
    </GridSmallBackground>
  );
};
