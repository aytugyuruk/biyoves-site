import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { NavigationItems } from "./NavigationItems";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo/Brand - Left side */}
        <div className="flex items-center">
          <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
            BiyoVes
          </span>
        </div>

        {/* Desktop Navigation - Center */}
        <div className="hidden items-center gap-8 md:flex">
          <NavigationItems variant="desktop" onItemClick={closeMobileMenu} />
        </div>

        {/* Theme Toggle & Mobile Menu - Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container space-y-1 py-4">
            <NavigationItems variant="mobile" onItemClick={closeMobileMenu} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
