import Header from "@/components/Header";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">Gizlilik Politikası</h1>
            
            <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
              <p className="text-sm text-muted-foreground/80">Son Güncelleme: {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Genel Bilgiler</h2>
                <p>
                  BiyoVes olarak, kullanıcılarımızın gizliliğini korumak bizim için önemlidir. Bu Gizlilik Politikası, 
                  BiyoVes uygulamasını kullanırken toplanan bilgilerin nasıl işlendiğini açıklamaktadır.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Toplanan Bilgiler</h2>
                <p>
                  BiyoVes uygulaması, tüm işlemleri yerel olarak gerçekleştirir. Fotoğraflarınız ve kişisel verileriniz 
                  hiçbir zaman sunucularımıza yüklenmez veya üçüncü taraflarla paylaşılmaz.
                </p>
                <p className="mt-4">
                  Uygulama kullanımı sırasında toplanabilecek bilgiler:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Uygulama kullanım istatistikleri (opsiyonel)</li>
                  <li>Hata raporları (opsiyonel)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Veri Güvenliği</h2>
                <p>
                  Tüm fotoğraf işleme işlemleri cihazınızda gerçekleşir. Verileriniz yalnızca sizin cihazınızda kalır 
                  ve tam kontrolünüz altındadır. İnternet bağlantısı gerektirmez.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Çerezler</h2>
                <p>
                  Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanabilir. Çerez tercihlerinizi 
                  tarayıcı ayarlarınızdan yönetebilirsiniz.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Değişiklikler</h2>
                <p>
                  Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikler durumunda kullanıcılarımız 
                  bilgilendirilecektir.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. İletişim</h2>
                <p>
                  Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
                </p>
                <p className="mt-2">
                  E-posta: <a href="mailto:biyoves.info@gmail.com" className="text-primary hover:underline">biyoves.info@gmail.com</a>
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;

