import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  const goToHome = () => {
    navigate("/");
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <nav className="container flex h-16 items-center justify-center">
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {isHomePage ? (
            <>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => scrollToSection("photo-types")}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Fotoğraf Tipleri
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Fiyatlandırma
              </button>
              <button
                onClick={() => scrollToSection("download")}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                İndir
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                SSS
              </button>
            </>
          ) : (
            <button
              onClick={goToHome}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Ana Sayfa
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="absolute right-4 flex items-center gap-4 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container space-y-1 py-4">
            {isHomePage ? (
              <>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full py-2 text-left text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Ana Sayfa
                </button>
                <button
                  onClick={() => scrollToSection("photo-types")}
                  className="block w-full py-2 text-left text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Fotoğraf Tipleri
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="block w-full py-2 text-left text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Fiyatlandırma
                </button>
                <button
                  onClick={() => scrollToSection("download")}
                  className="block w-full py-2 text-left text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  İndir
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="block w-full py-2 text-left text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  SSS
                </button>
              </>
            ) : (
              <button
                onClick={goToHome}
                className="block w-full py-2 text-left text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Ana Sayfa
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
