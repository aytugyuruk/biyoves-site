import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState, useRef } from "react";
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
  // Autoplay plugin configuration
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 5000, // 5 seconds between slides
      stopOnInteraction: false, // Continue autoplay after user interaction
      stopOnMouseEnter: true, // Pause when hovering
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [autoplayPlugin.current] // Add autoplay plugin
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Müşteri{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Yorumları</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fotoğraf stüdyoları BiyoVes ile işlerini dönüştürdü
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex bg-background/80 backdrop-blur-sm"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Önceki yorum"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex bg-background/80 backdrop-blur-sm"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Sonraki yorum"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                >
                  <Card className="group relative overflow-hidden h-full hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-border/50">
                    <CardContent className="p-6">
                      <div className="absolute top-4 right-4 opacity-10 transition-all duration-500 group-hover:opacity-20">
                        <Quote className="w-12 h-12 text-primary" aria-hidden="true" />
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

                      <div
                        className="flex gap-1 mb-4"
                        role="img"
                        aria-label={`${testimonial.rating} yıldız üzerinden 5`}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                        ))}
                      </div>

                      <p className="text-muted-foreground leading-relaxed line-clamp-4">
                        "{testimonial.text}"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Yorum ${index + 1}'e git`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-card p-4 sm:p-6 rounded-lg border border-border/50 shadow-soft">
            <div className="text-center group cursor-default">
              <AnimatedCounter
                value={50}
                suffix="+"
                className="text-2xl sm:text-3xl font-bold text-primary mb-1 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="text-xs sm:text-sm text-muted-foreground">Profesyonel Stüdyo</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-border" />
            <div className="w-full sm:w-auto h-px sm:h-12 sm:w-px bg-border" />
            <div className="text-center group cursor-default">
              <AnimatedCounter
                value={1000}
                suffix="+"
                className="text-2xl sm:text-3xl font-bold text-primary mb-1 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="text-xs sm:text-sm text-muted-foreground">İşlenen Fotoğraf</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-border" />
            <div className="w-full sm:w-auto h-px sm:h-12 sm:w-px bg-border" />
            <div className="text-center group cursor-default">
              <div className="flex items-center gap-1 justify-center mb-1">
                <AnimatedCounter
                  value={4.9}
                  className="text-2xl sm:text-3xl font-bold text-primary transition-transform duration-300 group-hover:scale-110"
                />
                <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400 text-amber-400" aria-hidden="true" />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Memnuniyet Puanı</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;