import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems } from "./NavigationItems";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-muted/50" role="contentinfo">
      <div className="container py-8 sm:py-12">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Product Navigation */}
          <nav className="text-center md:text-left" aria-label="Ürün navigasyonu">
            <h3 className="mb-4 text-base font-semibold text-foreground">Ürün</h3>
            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal Links */}
          <nav className="text-center md:text-left" aria-label="Yasal bağlantılar">
            <h3 className="mb-4 text-base font-semibold text-foreground">Yasal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/gizlilik-politikasi"
                  className="text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                >
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link
                  to="/kullanim-sartlari"
                  className="text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                >
                  Kullanım Şartları
                </Link>
              </li>
              <li>
                <Link
                  to="/kvkk"
                  className="text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                >
                  KVKK
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-base font-semibold text-foreground">İletişim</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:biyoves.info@gmail.com"
                  className="transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  aria-label="E-posta gönder: biyoves.info@gmail.com"
                >
                  biyoves.info@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 border-t border-border pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BiyoVes. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
