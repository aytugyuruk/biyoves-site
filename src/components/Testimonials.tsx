import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const testimonials = [
  {
    id: 1,
    name: "Zeynep Şahin",
    role: "Fotoğraf Stüdyosu Sahibi - İstanbul",
    avatar: "ZŞ",
    rating: 5,
    text: "Pasaport sezonunda çok işimize yarıyor. Toplu işleme özelliği sayesinde aynı anda birçok müşteriyle ilgilenebiliyoruz. Müşteriler de beklemeden çıkıyor, bu onları memnun ediyor.",
  },
  {
    id: 2,
    name: "Mehmet Demir",
    role: "Dijital Fotoğrafçılık - Ankara",
    avatar: "MD",
    rating: 4,
    text: "Arkaplan kaldırma işi artık çok daha hızlı. Eskiden Photoshop'ta uğraşıyorduk, şimdi birkaç tıkla hallediyoruz. Müşteriler beklemeden çıkıyor, bu işimize yarıyor. Bazen kenarlarda küçük düzeltmeler gerekiyor ama genel olarak iyi.",
  },
  {
    id: 3,
    name: "Aylin Kaya",
    role: "Özlem Fotoğraf - İzmir",
    avatar: "AK",
    rating: 5,
    text: "Vize fotoğrafları için kullanıyoruz. Standartlar doğru, red almıyoruz. Müşteriler hızlı teslimattan memnun. Tek elemanla daha fazla iş yapabiliyoruz, bu da maliyet avantajı sağlıyor.",
  },
  {
    id: 4,
    name: "Burak Yıldız",
    role: "Yıldız Stüdyo - Bursa",
    avatar: "BY",
    rating: 5,
    text: "Arayüz basit, hemen kullanmaya başladık. İş akışımız hızlandı, müşteriler beklemeden çıkıyor. Özellikle yoğun saatlerde çok faydalı. Tavsiye ederim.",
  },
  {
    id: 5,
    name: "Elif Arslan",
    role: "Modern Fotoğrafçılık - Antalya",
    avatar: "EA",
    rating: 4,
    text: "Farklı vize tiplerini tek programda yapabiliyoruz, bu pratik. ABD vizesi için özellikle iyi. Müşteriler hızlı teslimattan memnun. Bazen yavaş açılıyor ama genelde sorunsuz çalışıyor.",
  },
  {
    id: 6,
    name: "Can Özdemir",
    role: "Panorama Fotoğraf - Adana",
    avatar: "CÖ",
    rating: 5,
    text: "3 aydır kullanıyoruz. İşlerimiz çok hızlandı, müşteriler beklemeden çıkıyor. Bu da onları memnun ediyor. Hem hızlı hem kaliteli sonuç alıyoruz. Devam edeceğiz.",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Müşteri{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Yorumları</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fotoğraf stüdyoları BiyoVes ile işlerini dönüştürdü
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="group relative overflow-hidden hover:shadow-hover transition-all duration-700 ease-out hover:-translate-y-3 hover:scale-[1.02] animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 opacity-10 transition-all duration-500 ease-out group-hover:opacity-20 group-hover:scale-110 group-hover:rotate-6">
                  <Quote className="w-12 h-12 text-primary" />
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-card p-4 sm:p-6 rounded-lg border border-border/50 shadow-soft transition-all duration-500 hover:shadow-hover">
            <div className="text-center group cursor-default">
              <AnimatedCounter
                value={50}
                suffix="+"
                className="text-2xl sm:text-3xl font-bold text-primary mb-1 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="text-xs sm:text-sm text-muted-foreground">Profesyonel Stüdyo</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-border"></div>
            <div className="w-full sm:w-auto h-px sm:h-12 sm:w-px bg-border"></div>
            <div className="text-center group cursor-default">
              <AnimatedCounter
                value={1000}
                suffix="+"
                className="text-2xl sm:text-3xl font-bold text-primary mb-1 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="text-xs sm:text-sm text-muted-foreground">İşlenen Fotoğraf</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-border"></div>
            <div className="w-full sm:w-auto h-px sm:h-12 sm:w-px bg-border"></div>
            <div className="text-center group cursor-default">
              <div className="flex items-center gap-1 justify-center mb-1">
                <AnimatedCounter
                  value={4.9}
                  className="text-2xl sm:text-3xl font-bold text-primary transition-transform duration-300 group-hover:scale-110"
                />
                <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400 text-amber-400 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Memnuniyet Puanı</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;