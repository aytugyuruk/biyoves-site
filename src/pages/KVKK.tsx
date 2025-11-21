import Header from "@/components/Header";

const KVKK = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">KVKK Aydınlatma Metni</h1>
            
            <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
              <p className="text-sm text-muted-foreground/80">Son Güncelleme: {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Veri Sorumlusu</h2>
                <p>
                  6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz 
                  BiyoVes tarafından veri sorumlusu sıfatıyla işlenmektedir.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. İşlenen Kişisel Veriler</h2>
                <p>
                  BiyoVes uygulaması, tüm işlemleri yerel olarak gerçekleştirir. Fotoğraflarınız ve kişisel 
                  verileriniz hiçbir zaman sunucularımıza yüklenmez.
                </p>
                <p className="mt-4">İşlenebilecek kişisel veriler:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>İletişim bilgileri (e-posta adresi - sadece destek taleplerinde)</li>
                  <li>Uygulama kullanım istatistikleri (opsiyonel, anonim)</li>
                  <li>Hata raporları (opsiyonel, teknik bilgiler)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Kişisel Verilerin İşlenme Amaçları</h2>
                <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Uygulama hizmetlerinin sunulması</li>
                  <li>Kullanıcı desteği sağlanması</li>
                  <li>Uygulama geliştirme ve iyileştirme</li>
                  <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Kişisel Verilerin İşlenme Hukuki Sebepleri</h2>
                <p>
                  Kişisel verileriniz, KVKK'nın 5. ve 6. maddelerinde belirtilen hukuki sebeplere dayanılarak 
                  işlenmektedir:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Açık rıza</li>
                  <li>Sözleşmenin kurulması veya ifası</li>
                  <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Kişisel Verilerin Aktarılması</h2>
                <p>
                  Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi için gerekli olmadıkça 
                  üçüncü kişilere aktarılmamaktadır. Fotoğraflarınız hiçbir zaman sunucularımıza yüklenmez 
                  veya üçüncü taraflarla paylaşılmaz.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Kişisel Verilerin Saklanma Süresi</h2>
                <p>
                  Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve yasal saklama süreleri 
                  çerçevesinde saklanmaktadır.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. KVKK Kapsamındaki Haklarınız</h2>
                <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                  <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                  <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                  <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                  <li>KVKK'da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
                  <li>Aktarıldığı üçüncü kişilere yukarıdaki işlemlerin bildirilmesini isteme</li>
                  <li>Münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonucun 
                      ortaya çıkmasına itiraz etme</li>
                  <li>Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini 
                      talep etme</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Başvuru Hakkı</h2>
                <p>
                  KVKK kapsamındaki taleplerinizi, kimliğinizi tespit edici belgelerle birlikte 
                  <a href="mailto:biyoves.info@gmail.com" className="text-primary hover:underline"> biyoves.info@gmail.com</a> 
                  adresine iletebilirsiniz. Başvurularınız, talebin niteliğine göre en kısa sürede ve en geç 
                  30 gün içinde değerlendirilerek sonuçlandırılacaktır.
                </p>
                <p className="mt-4">
                  Kişisel Verileri Koruma Kurulu'na şikayette bulunma hakkınız saklıdır.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. İletişim</h2>
                <p>
                  KVKK kapsamındaki haklarınız ve kişisel verilerinizin işlenmesi hakkında sorularınız için:
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

export default KVKK;

