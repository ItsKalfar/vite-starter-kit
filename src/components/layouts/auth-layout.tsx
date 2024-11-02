export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <div className="w-full md:w-1/2 bg-gray-100">
        <div className="relative h-48 md:h-full">
          <img
            src="images/auth.jpg"
            alt="Auth-Image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
