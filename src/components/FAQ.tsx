import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const faqs = [
    {
      question: "Uygulama ücretsiz mi?",
      answer:
        "BiyoVes uygulaması ücretsiz olarak indirilebilir. Fotoğraf oluşturmak için hak satın almanız gerekmektedir. Farklı ihtiyaçlara uygun esnek paket seçeneklerimiz bulunmaktadır. Başlangıç paketinden Elit pakete kadar çeşitli seçenekler mevcuttur.",
    },
    {
      question: "Hangi fotoğraf formatlarını destekliyor?",
      answer:
        "BiyoVes, 4 farklı fotoğraf formatını destekler: Biyometrik (50x60mm - Pasaport ve T.C. Kimlik Kartı), Vesikalık (45x60mm - CV, Öğrenci Belgesi), ABD Vizesi (50x50mm - Green Card ve ABD Vizesi), ve Schengen Vizesi (35x45mm - Avrupa Ülkeleri Vizesi).",
    },
    {
      question: "Hangi işletim sistemlerini destekliyor?",
      answer:
        "BiyoVes, Windows 10 (64-bit) ve üzeri ile macOS 10.15 ve üzeri işletim sistemlerinde çalışır. Her iki platformda da aynı profesyonel sonuçları alırsınız.",
    },
    {
      question: "Fotoğraflarımı kaç kez indirebilirim?",
      answer:
        "Oluşturduğunuz fotoğrafları sınırsız sayıda indirebilir ve kaydedebilirsiniz. Hak kullanımı sadece yeni fotoğraf oluşturma işlemi için geçerlidir.",
    },
    {
      question: "Toplu işleme nasıl çalışır?",
      answer:
        "BiyoVes, birden fazla fotoğrafı aynı anda işlemenize olanak tanır. Tüm fotoğrafları seçin, ayarlarınızı yapın ve tek bir tıklamayla hepsini işleyin. Özellikle yoğun saatlerde zamandan tasarruf sağlar.",
    },
    {
      question: "Fotoğraflarım resmi kurumlar tarafından kabul edilir mi?",
      answer:
        "Evet! BiyoVes, Türkiye Cumhuriyeti, ABD ve Avrupa ülkeleri dahil olmak üzere tüm resmi kurumların standartlarına uygun fotoğraflar oluşturur. Boyutlar, arka plan rengi ve diğer gereksinimler otomatik olarak ayarlanır.",
    },
    {
      question: "Paketlerdeki haklar ne kadar süre geçerli?",
      answer:
        "Satın aldığınız haklar süresiz olarak geçerlidir. Haklarınızı istediğiniz zaman kullanabilirsiniz, süre sınırlaması yoktur.",
    },
    {
      question: "Kullanımı kolay mı?",
      answer:
        "Evet, BiyoVes basit ve sezgisel bir arayüze sahiptir. Fotoğraf yükleyin, format seçin ve işleyin. Herhangi bir teknik bilgi gerektirmez, hemen kullanmaya başlayabilirsiniz.",
    },
  ];
  
  const FAQ = () => {
    return (
      <section id="faq" className="py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Sık Sorulan{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">Sorular</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                BiyoVes hakkında merak ettikleriniz
              </p>
            </div>
  
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-lg border border-border/50 bg-card px-4 sm:px-6 transition-all hover:border-primary/50 hover:shadow-soft"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQ;
  