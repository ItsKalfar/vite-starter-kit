import { cn } from "@/lib/utils";

export default function MaxWidthWrapper({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={cn("mx-auto w-full max-w-screen-xl p-2.5 md:p-20", className)}
    >
      {children}
    </div>
  );
}
