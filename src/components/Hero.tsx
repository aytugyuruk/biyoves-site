import { Button } from "@/components/ui/button";
import { Download, Play, CheckCircle2 } from "lucide-react";
import Marquee from "./Marquee";

const Hero = () => {
  const scrollToDownload = () => {
    const element = document.getElementById("download");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero pb-12 md:pb-16">
      {/* Trust Bar - Top */}
      <div className="border-b border-border/30 bg-muted/30">
        <div className="container py-3">
          <Marquee
            items={[
              "✨ 50+ Profesyonel Stüdyo Kullanıyor",
              "🚀 Saniyeler İçinde Sonuç",
              "🔒 %100 Yerel İşleme - Verileriniz Güvende",
              "⭐ 4.9/5 Müşteri Memnuniyeti",
              "📸 1.000+ İşlenen Fotoğraf",
              "🏆 Türkiye'nin En Çok Tercih Edilen Fotoğraf Yazılımı",
            ]}
            speed={50}
            className="py-2"
          />
        </div>
      </div>

      <div className="container pt-6 md:pt-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-in">
                Fotoğraf Stüdyonuz için{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Yapay Zeka Destekli Çözüm
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed animate-fade-in">
                Müşterilerinize <strong className="text-foreground">saniyeler içinde</strong> profesyonel biyometrik fotoğraf hizmeti sunun. 
                Toplu işleme ile zamandan ve maliyetten tasarruf edin.
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap gap-2 sm:gap-4 animate-fade-in">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-accent/10 border border-accent/20">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Saniyeler İçinde Sonuç</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-accent/10 border border-accent/20">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Toplu İşleme</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-accent/10 border border-accent/20">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-foreground">%100 Yerel İşleme</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row animate-fade-in">
              <Button
                size="lg"
                onClick={scrollToDownload}
                className="bg-gradient-primary shadow-soft transition-all duration-500 ease-out hover:shadow-hover hover:scale-105 hover:-translate-y-0.5 text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-11"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-500 group-hover:translate-y-0.5" />
                Ücretsiz İndir
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-transparent hover:text-foreground text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-11"
                disabled
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-500 group-hover:translate-x-0.5" />
                Demo İzle
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in lg:animate-slide-in">
            <div className="relative rounded-xl bg-background border-2 border-gray-900/20 dark:border-gray-100/20 shadow-2xl overflow-hidden group hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] transition-shadow duration-500">
              {/* Window Header / Title Bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-900/20 dark:border-gray-100/20 bg-muted/50 backdrop-blur-sm">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex-1 text-center text-xs text-muted-foreground/80 font-medium font-sans">BiyoVes</div>
                <div className="w-12" /> {/* Spacer for center alignment */}
              </div>
              
              {/* Window Content */}
              <div className="relative bg-background">
                <img
                  src="/app-screenshot.png"
                  alt="BiyoVes Uygulama Arayüzü - AI Destekli Biyometrik Fotoğraf İşleme"
                  className="w-full h-auto block"
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="800"
                />
                {/* Inner Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/5 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
