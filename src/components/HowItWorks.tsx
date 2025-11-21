import { Upload, Wand2, Download, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Fotoğrafınızı Yükleyin",
    description: "Herhangi bir fotoğrafı seçin ve uygulamaya yükleyin",
  },
  {
    icon: Wand2,
    title: "AI İşlesin",
    description: "Yapay zeka arka planı kaldırır ve fotoğrafı iyileştirir",
  },
  {
    icon: CheckCircle,
    title: "Formatı Seçin",
    description: "İhtiyacınıza göre fotoğraf tipini ve düzeni seçin",
  },
  {
    icon: Download,
    title: "İndirin veya Yazdırın",
    description: "Profesyonel fotoğrafınız kullanıma hazır",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Nasıl{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Çalışır</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            4 basit adımda profesyonel fotoğraflara sahip olun
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center">
                  <div className="relative mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center">
                    {/* Circle background */}
                    <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10" />
                    <div className="absolute inset-2 rounded-full bg-gradient-primary opacity-20" />
                    
                    {/* Icon */}
                    <Icon className="relative h-10 w-10 text-primary" />
                    
                    {/* Step number */}
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="mb-2 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {/* Connecting line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-10 hidden h-1 w-full lg:block">
                    <div className="h-full w-full border-t-2 border-dashed border-border/50" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
