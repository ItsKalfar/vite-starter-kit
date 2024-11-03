import { cn } from "@/lib/utils";

export const GridBackground = ({
  children,
  fadedLook = true,
  className,
}: BackgroundGridProps) => {
  return (
    <div
      className={cn(
        "w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center",
        className
      )}
    >
      {fadedLook && (
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      )}
      {children}
    </div>
  );
};

export const GridSmallBackground = ({
  children,
  fadedLook = true,
  className,
}: BackgroundGridProps) => {
  return (
    <div
      className={cn(
        "w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center",
        className
      )}
    >
      {fadedLook && (
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      )}
      {children}
    </div>
  );
};

export const DotBackground = ({
  children,
  fadedLook = true,
  className,
}: BackgroundGridProps) => {
  return (
    <div
      className={cn(
        "w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center",
        className
      )}
    >
      {fadedLook && (
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      )}
      {children}
    </div>
  );
};

export const NoBackground = ({
  children,
  fadedLook = true,
  className,
}: BackgroundGridProps) => {
  return (
    <div
      className={cn(
        "w-full dark:bg-background bg-white relative flex items-center justify-center",
        className
      )}
    >
      {fadedLook && (
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      )}
      {children}
    </div>
  );
};
