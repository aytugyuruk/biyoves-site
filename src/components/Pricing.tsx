import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, ExternalLink } from "lucide-react";

const packages = [
  {
    name: "Başlangıç",
    price: 70,
    credits: 10,
    description: "Küçük stüdyolar için ideal",
    popular: false,
    gradient: "from-gray-500 to-gray-600",
    shopierUrl: "https://www.shopier.com/biyoves/40793509",
  },
  {
    name: "Temel",
    price: 150,
    credits: 25,
    description: "Orta ölçekli işletmeler için",
    popular: false,
    gradient: "from-blue-500 to-cyan-500",
    shopierUrl: "https://www.shopier.com/biyoves/40793620",
  },
  {
    name: "Standart",
    price: 250,
    credits: 50,
    description: "Büyüyen stüdyolar için",
    popular: true,
    gradient: "from-purple-500 to-pink-500",
    shopierUrl: "https://www.shopier.com/biyoves/40793650",
  },
  {
    name: "Pro",
    price: 800,
    credits: 200,
    description: "Profesyonel stüdyolar için",
    popular: false,
    gradient: "from-orange-500 to-red-500",
    shopierUrl: "https://www.shopier.com/biyoves/40793679",
  },
  {
    name: "Elit",
    price: 3000,
    credits: 1000,
    description: "Büyük işletmeler için",
    popular: false,
    gradient: "from-amber-500 to-yellow-500",
    shopierUrl: "https://www.shopier.com/biyoves/40793686",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-muted/50 py-12 md:py-16 overflow-visible">
      <div className="container overflow-visible">
        <div className="mx-auto max-w-2xl text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Esnek{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Paketler</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            İşletme büyüklüğünüze uygun paketi seçin, hemen başlayın
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto overflow-visible">
          {packages.map((pkg, index) => (
              <div
                key={index}
                className="pricing-card"
                style={{ 
                  animationDelay: `${index * 0.1}s`
                }}
              >
              <Card
                className={`group relative border-border/50 hover:shadow-hover animate-fade-in ${
                  pkg.popular ? "border-primary/50 shadow-soft md:-mt-4 md:mb-4" : ""
                }`}
              >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    En Popüler
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6 pt-4 sm:pt-6">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">{pkg.name} Paket</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{pkg.description}</p>
              </CardHeader>

              <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl sm:text-4xl font-bold text-foreground">{pkg.price}</span>
                    <span className="text-base sm:text-lg text-muted-foreground">₺</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                    {pkg.credits} adet hak
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    "4 uluslararası standart fotoğraf tipi",
                    "Yapay zeka destekli otomatik arkaplan kaldırma",
                    "Toplu işleme desteği",
                    "2'li ve 4'lü yazdırma düzenleri",
                  ].map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-4 sm:pt-6 px-4 sm:px-6 pb-4 sm:pb-6">
                <Button
                  size="lg"
                  className={`w-full h-11 sm:h-10 text-sm sm:text-base transition-all duration-500 ease-out hover:shadow-hover hover:scale-105 ${
                    pkg.popular
                      ? "bg-gradient-primary shadow-soft"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                  asChild
                >
                  <a href={pkg.shopierUrl} target="_blank" rel="noopener noreferrer">
                    Satın Al
                    <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
