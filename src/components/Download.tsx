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

          <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
            <Card className="group border-border/50 transition-all duration-700 ease-out hover:border-primary/50 hover:shadow-hover hover:-translate-y-2 hover:scale-[1.02] animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                    <svg className="h-8 w-8 text-primary-foreground transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.35"/>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">Windows</h3>
                <p className="mb-4 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">Windows 10 ve üzeri</p>
                <Button 
                  className="w-full bg-gradient-primary shadow-soft transition-all duration-500 ease-out hover:shadow-hover hover:scale-105 hover:-translate-y-0.5" 
                  size="sm"
                  disabled
                >
                  <DownloadIcon className="mr-2 h-4 w-4 transition-transform duration-500 group-hover:translate-y-0.5" />
                  İndir
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-border/50 transition-all duration-700 ease-out hover:border-primary/50 hover:shadow-hover hover:-translate-y-2 hover:scale-[1.02] animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                    <svg className="h-8 w-8 text-primary-foreground transition-transform duration-500 group-hover:scale-110 flex-shrink-0" viewBox="0 0 14 17" fill="currentColor" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3997 5.7953C13.3011 5.8718 11.5603 6.8527 11.5603 9.0338C11.5603 11.5566 13.7754 12.4491 13.8417 12.4712C13.8315 12.5256 13.4898 13.6935 12.6738 14.8835C11.9462 15.9307 11.1863 16.9762 10.0303 16.9762C8.87425 16.9762 8.57675 16.3047 7.24225 16.3047C5.94175 16.3047 5.47935 16.9983 4.42195 16.9983C3.36455 16.9983 2.62675 16.0293 1.77845 14.8393C0.795853 13.4419 0.00195312 11.271 0.00195312 9.2106C0.00195312 5.9058 2.15075 4.1531 4.26555 4.1531C5.38925 4.1531 6.32595 4.8909 7.03145 4.8909C7.70295 4.8909 8.75015 4.1089 10.0286 4.1089C10.5131 4.1089 12.2539 4.1531 13.3997 5.7953ZM9.42165 2.7098C9.95035 2.0825 10.3244 1.2121 10.3244 0.3417C10.3244 0.221 10.3142 0.0986 10.2921 0C9.43185 0.0323 8.40845 0.5729 7.79135 1.2886C7.30685 1.8394 6.85465 2.7098 6.85465 3.5921C6.85465 3.7247 6.87675 3.8573 6.88695 3.8998C6.94135 3.91 7.02975 3.9219 7.11815 3.9219C7.88995 3.9219 8.86065 3.4051 9.42165 2.7098Z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">macOS</h3>
                <p className="mb-4 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">macOS 10.15 ve üzeri</p>
                <Button 
                  className="w-full bg-gradient-primary shadow-soft transition-all duration-500 ease-out hover:shadow-hover hover:scale-105 hover:-translate-y-0.5" 
                  size="sm"
                  disabled
                >
                  <DownloadIcon className="mr-2 h-4 w-4 transition-transform duration-500 group-hover:translate-y-0.5" />
                  İndir
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 rounded-xl border border-border/50 bg-muted/50 p-6">
            <h4 className="mb-6 text-center font-semibold text-foreground">Sistem Gereksinimleri</h4>
            <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-2">
                <p className="text-base font-semibold text-foreground">Windows</p>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Windows 10 (64-bit) veya üzeri</p>
                  <p className="text-sm text-muted-foreground">4GB RAM (8GB önerilir)</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <p className="text-base font-semibold text-foreground">macOS</p>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">macOS 10.15 veya üzeri</p>
                  <p className="text-sm text-muted-foreground">4GB RAM (8GB önerilir)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
