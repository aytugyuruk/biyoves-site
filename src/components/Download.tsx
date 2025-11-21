import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download as DownloadIcon } from "lucide-react";

const Download = () => {
  return (
    <section id="download" className="py-12 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Hemen{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">İndirin</span>
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            BiyoVes'i ücretsiz indirin ve profesyonel fotoğraflar oluşturmaya başlayın
          </p>

          <div className="max-w-md mx-auto">
            <Card className="group border-border/50 transition-all duration-700 ease-out hover:border-primary/50 hover:shadow-hover hover:-translate-y-2 hover:scale-[1.02] animate-fade-in">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-primary transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                    <svg className="h-10 w-10 text-primary-foreground transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.35"/>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary text-center">Windows</h3>
                <p className="mb-6 text-base text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80 text-center">Windows 10 (64-bit) ve üzeri</p>
                <Button 
                  className="w-full bg-gradient-primary shadow-soft transition-all duration-500 ease-out hover:shadow-hover hover:scale-105 hover:-translate-y-0.5" 
                  size="lg"
                  disabled
                >
                  <DownloadIcon className="mr-2 h-5 w-5 transition-transform duration-500 group-hover:translate-y-0.5" />
                  İndir
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 sm:mt-12 rounded-xl border border-border/50 bg-muted/50 p-4 sm:p-6 max-w-md mx-auto">
            <h4 className="mb-4 sm:mb-6 text-center text-base sm:text-lg font-semibold text-foreground">Sistem Gereksinimleri</h4>
            <div className="flex flex-col items-center text-center space-y-2">
              <p className="text-base font-semibold text-foreground">Windows</p>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Windows 10 (64-bit) veya üzeri</p>
                <p className="text-sm text-muted-foreground">4GB RAM (8GB önerilir)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
