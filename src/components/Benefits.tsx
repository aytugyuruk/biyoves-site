import { Zap, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "10x Daha Hızlı Servis",
    description: "Geleneksel yöntemlerle saatler süren işlemler saniyeler içinde bitiyor. Müşterilerinize anında teslimat yapın ve iş akışınızı hızlandırın.",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    stat: "10x",
    statLabel: "Daha Hızlı",
  },
  {
    icon: DollarSign,
    title: "Maliyet Tasarrufu",
    description: "Ekstra personel, studio kurulumu veya pahalı ekipmanlara gerek yok. Operasyonel maliyetlerinizi düşürün ve kârlılığınızı artırın.",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    stat: "%60",
    statLabel: "Tasarruf",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="bg-muted/30 py-12 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            İşletmenize{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Değer Katın</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Fotoğraf stüdyonuz için rekabetçi avantajlar
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative rounded-xl border border-border/50 bg-card p-6 shadow-soft transition-all duration-700 ease-out hover:shadow-hover hover:-translate-y-2 hover:scale-[1.02] animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${benefit.gradient} shadow-lg transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon className="h-6 w-6 text-white transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Stat */}
                  <div className="mb-3">
                    <div className={`text-4xl font-bold bg-gradient-to-br ${benefit.gradient} bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110`}>
                      {benefit.stat}
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground mt-1">
                      {benefit.statLabel}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/90">
                    {benefit.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-700 -translate-y-1/2 translate-x-1/2`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
