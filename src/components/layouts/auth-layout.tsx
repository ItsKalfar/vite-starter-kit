import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <div className="w-full md:w-1/2">
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white px-4 pointer-events-none p-6">
            <p className="mb-12 font-bold bg-clip-text text-3xl md:text-4xl lg:text-6xl text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              Welcome to Stellar!
            </p>
            <p className="max-w-[80%] mb-4 text-center bg-clip-text text-2xl text-transparent drop-shadow-2xl text-gray-300">
              Already a member? Let's pick up where you left off. New here? Sign
              up in seconds and unlock all the features waiting for you!
            </p>
          </div>
        </BackgroundGradientAnimation>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
