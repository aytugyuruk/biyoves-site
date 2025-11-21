import { Sparkles, Layers, Image, Zap, Layout, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "AI Destekli Arkaplan Kaldırma",
    description: "MODNet teknolojisi ile müşterilerinizin fotoğraflarını anında profesyonel hale getirin",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Layers,
    title: "Toplu İşleme Desteği",
    description: "Birden fazla fotoğrafı aynı anda işleyerek iş akışınızı hızlandırın ve daha fazla müşteriye hizmet verin",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Image,
    title: "4 Uluslararası Standart",
    description: "Biyometrik, Vesikalık, ABD Vizesi ve Schengen Vizesi - tüm resmi standartlar tek uygulamada",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Saniyeler İçinde Sonuç",
    description: "ONNX Runtime optimizasyonu ile müşterilerinize saniyeler içinde profesyonel fotoğraf teslim edin",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Layout,
    title: "Profesyonel Düzen Seçenekleri",
    description: "2'li veya 4'lü düzen ile baskı maliyetlerinizi optimize edin",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Shield,
    title: "Müşteri Gizliliği Garantisi",
    description: "Tüm işlemler yerel olarak gerçekleşir, müşteri verileri cihazda kalır",
    gradient: "from-rose-500 to-pink-500",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Stüdyonuzu{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Güçlendirin</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Profesyonel fotoğraf stüdyonuz için tasarlanmış AI destekli çözüm
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group border-border/50 transition-all duration-700 ease-out hover:shadow-hover hover:-translate-y-3 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <CardContent className="p-6">
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.gradient} transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg`}>
                    <Icon className="h-6 w-6 text-white transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">{feature.title}</h3>
                  <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-20">
          <h3 className="mb-8 text-center text-2xl font-bold text-foreground">
            Desteklenen Fotoğraf Tipleri
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Biyometrik", size: "50x60 mm", use: "Pasaport ve T.C. Kimlik Kartı" },
              { title: "Vesikalık", size: "45x60 mm", use: "CV, Öğrenci Belgesi, Okul" },
              { title: "ABD Vizesi", size: "50x50 mm", use: "Green Card ve ABD Vizesi" },
              { title: "Schengen Vizesi", size: "35x45 mm", use: "Avrupa Ülkeleri Vizesi" },
            ].map((type, index) => (
              <div
                key={index}
                className="rounded-xl border border-border/50 bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-soft"
              >
                <h4 className="mb-2 text-lg font-semibold text-foreground">{type.title}</h4>
                <p className="mb-1 text-2xl font-bold text-primary">{type.size}</p>
                <p className="text-sm text-muted-foreground">{type.use}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
