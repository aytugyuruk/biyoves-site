import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="container mx-auto px-4 pb-4">
        <div className="relative mx-auto max-w-4xl rounded-xl border border-border bg-card p-6 shadow-2xl backdrop-blur-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Cookie className="h-6 w-6 text-primary" />
              </div>
            </div>
            
            <div className="flex-1 space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                Çerez Kullanımı
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bu web sitesi, size en iyi deneyimi sunmak için çerezler kullanmaktadır. 
                Siteyi kullanmaya devam ederek, çerez kullanımını kabul etmiş olursunuz. 
                Detaylı bilgi için{" "}
                <a
                  href="/gizlilik-politikasi"
                  className="text-primary underline hover:text-primary/80"
                >
                  Gizlilik Politikamızı
                </a>{" "}
                ve{" "}
                <a
                  href="/kvkk"
                  className="text-primary underline hover:text-primary/80"
                >
                  KVKK Aydınlatma Metnimizi
                </a>{" "}
                inceleyebilirsiniz.
              </p>
              
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  onClick={handleAccept}
                  size="sm"
                  className="bg-gradient-primary shadow-soft transition-all duration-300 hover:shadow-hover hover:scale-105"
                >
                  Kabul Et
                </Button>
                <Button
                  onClick={handleDecline}
                  size="sm"
                  variant="outline"
                  className="transition-all duration-300 hover:scale-105"
                >
                  Reddet
                </Button>
              </div>
            </div>
            
            <button
              onClick={handleDecline}
              className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Kapat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

