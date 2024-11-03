import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { logos } from "@/constants/landingPage.constants";

export const LogoCloud = () => {
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const [inViewRef, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const logoContainer = logoContainerRef.current;
    if (!logoContainer || !inView) return;

    const resetAnimation = () => {
      logoContainer.style.transition = "none";
      logoContainer.style.transform = "translateX(0)";
      void logoContainer.offsetWidth; // Trigger reflow
      logoContainer.style.transition = "transform 30s linear";
      logoContainer.style.transform = "translateX(-50%)";
    };

    resetAnimation();
    const intervalId = setInterval(resetAnimation, 30000);

    return () => clearInterval(intervalId);
  }, [inView]);

  return (
    <div
      className="w-full overflow-hidden bg-transparent py-12"
      ref={inViewRef}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Our partners</h2>
        <div className="relative">
          <div
            ref={logoContainerRef}
            className="flex space-x-8"
            style={{ width: "200%" }}
            aria-hidden="true"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  className="h-10 w-full object-contain"
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
