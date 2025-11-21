import Header from "@/components/Header";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">Kullanım Şartları</h1>
            
            <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
              <p className="text-sm text-muted-foreground/80">Son Güncelleme: {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Kabul ve Onay</h2>
                <p>
                  BiyoVes uygulamasını indirerek ve kullanarak, bu Kullanım Şartlarını kabul etmiş sayılırsınız. 
                  Şartları kabul etmiyorsanız, lütfen uygulamayı kullanmayın.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Lisans</h2>
                <p>
                  BiyoVes uygulaması, kişisel ve ticari kullanım için lisanslanmıştır. Uygulamayı kopyalama, 
                  değiştirme veya dağıtma hakkına sahip değilsiniz.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Kullanım Koşulları</h2>
                <p>BiyoVes uygulamasını kullanırken:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Yasalara ve düzenlemelere uygun şekilde kullanmalısınız</li>
                  <li>Başkalarının haklarını ihlal etmemelisiniz</li>
                  <li>Uygulamayı zararlı amaçlarla kullanmamalısınız</li>
                  <li>Telif hakkı korumalı içerikleri izinsiz kullanmamalısınız</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Ödeme ve İade</h2>
                <p>
                  Uygulama içi satın alımlar (hak paketleri) geri alınamaz. Satın alma işlemi öncesinde 
                  paket içeriğini dikkatlice inceleyiniz.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Sorumluluk Reddi</h2>
                <p>
                  BiyoVes, uygulama kullanımından kaynaklanan doğrudan veya dolaylı zararlardan sorumlu 
                  tutulamaz. Fotoğraflarınızın resmi kurumlar tarafından kabul edilmesi garanti edilmez.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Değişiklikler</h2>
                <p>
                  Bu Kullanım Şartları zaman zaman güncellenebilir. Önemli değişiklikler durumunda 
                  kullanıcılarımız bilgilendirilecektir.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. İletişim</h2>
                <p>
                  Kullanım şartları hakkında sorularınız için bizimle iletişime geçebilirsiniz:
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

export default TermsOfService;

