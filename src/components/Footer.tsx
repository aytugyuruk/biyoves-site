import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container py-8 sm:py-12">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Product */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-base font-semibold text-foreground">Ürün</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById("photo-types")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Fotoğraf Tipleri
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Fiyatlandırma
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("download")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  İndir
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  SSS
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-base font-semibold text-foreground">Yasal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/gizlilik-politikasi" className="text-muted-foreground transition-colors hover:text-primary">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link to="/kullanim-sartlari" className="text-muted-foreground transition-colors hover:text-primary">
                  Kullanım Şartları
                </Link>
              </li>
              <li>
                <Link to="/kvkk" className="text-muted-foreground transition-colors hover:text-primary">
                  KVKK
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-base font-semibold text-foreground">İletişim</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:biyoves.info@gmail.com"
                  className="transition-colors hover:text-primary"
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
