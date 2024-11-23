import { IconBrandX, IconBrandLinkedin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { navigationMenu } from "@/configs/navigation.config/navigation.config";

export const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Stellar Starter Kit</span>
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
            {navigationMenu.map(({ title, to }, index) => (
              <Link
                className="text-sm hover:underline underline-offset-4"
                to={to}
                key={index}
              >
                {title}
              </Link>
            ))}
          </nav>
          <div className="flex space-x-4">
            <Link
              to="https://x.com/HeyitsSagar20"
              target="_blank"
              className="text-muted-foreground hover:text-primary"
            >
              <IconBrandX className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              to="https://www.linkedin.com/in/sagar-gund-037b72255/"
              target="_blank"
              className="text-muted-foreground hover:text-primary"
            >
              <IconBrandLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Stellar Starter Kit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
