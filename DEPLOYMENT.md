# Production Deployment Guide

## ✅ Tamamlanan Production Hazırlıkları

### 1. SEO Optimizasyonları
- ✅ Meta tags (description, keywords, author, robots)
- ✅ Open Graph tags (og:title, og:description, og:image, og:url)
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ robots.txt dosyası
- ✅ sitemap.xml dosyası

### 2. Performance Optimizasyonları
- ✅ Code splitting (vendor, ui chunks)
- ✅ Lazy loading (PhotoTypes, Testimonials, Pricing, Download, FAQ)
- ✅ Image preloading
- ✅ Build optimizations (minify, chunking)

### 3. Legal & Compliance
- ✅ Cookie Consent Banner (KVKK uyumlu)
- ✅ Gizlilik Politikası sayfası
- ✅ Kullanım Şartları sayfası
- ✅ KVKK Aydınlatma Metni sayfası

### 4. Technical
- ✅ Route consistency (tüm route'lar düzeltildi)
- ✅ 404 Error page
- ✅ Responsive design
- ✅ TypeScript type safety

## 📋 Deployment Öncesi Kontrol Listesi

### Domain Ayarları
- [ ] `index.html` içindeki `biyoves.com.tr` domain'ini kontrol edin
- [ ] `sitemap.xml` içindeki domain'i güncelleyin
- [ ] `robots.txt` içindeki domain'i güncelleyin

### Server Konfigürasyonu

#### Nginx Örneği (SPA Routing için)
```nginx
server {
    listen 80;
    server_name biyoves.com.tr;
    root /path/to/dist;
    index index.html;

    # SPA routing - tüm istekleri index.html'e yönlendir
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Static assets caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

#### Apache (.htaccess)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Build & Deploy
```bash
# Production build
npm run build

# Build çıktısı dist/ klasöründe
# Bu klasörü server'a yükleyin
```

## 🔍 Post-Deployment Kontrolleri

1. **SEO Kontrolleri**
   - [ ] Google Search Console'a site ekleyin
   - [ ] sitemap.xml'i Google Search Console'a gönderin
   - [ ] robots.txt'in erişilebilir olduğunu kontrol edin
   - [ ] Meta tags'lerin doğru göründüğünü kontrol edin

2. **Performance Kontrolleri**
   - [ ] Google PageSpeed Insights test edin
   - [ ] Lighthouse audit yapın
   - [ ] Mobile responsiveness test edin

3. **Functionality Kontrolleri**
   - [ ] Tüm sayfaların çalıştığını kontrol edin
   - [ ] Route'ların doğru çalıştığını test edin
   - [ ] Cookie consent banner'ın çalıştığını kontrol edin
   - [ ] Form validations çalışıyor mu?

4. **Security Kontrolleri**
   - [ ] HTTPS aktif mi?
   - [ ] Security headers ekleyin (CSP, HSTS, etc.)
   - [ ] Environment variables güvenli mi?

## 📊 Opsiyonel Eklemeler

### Analytics (Önerilir)
Google Analytics veya başka bir analytics tool ekleyebilirsiniz:
```html
<!-- index.html head kısmına ekleyin -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Error Tracking (Önerilir)
Sentry veya benzeri bir error tracking servisi ekleyebilirsiniz.

### PWA (Opsiyonel)
Manifest.json ve service worker ekleyerek PWA yapabilirsiniz.

## 🚀 Hızlı Başlangıç

1. Domain'i kontrol edin ve gerekirse güncelleyin
2. `npm run build` ile production build oluşturun
3. `dist/` klasörünü server'a yükleyin
4. Server konfigürasyonunu yapın (Nginx/Apache)
5. HTTPS sertifikası kurun (Let's Encrypt önerilir)
6. Post-deployment kontrollerini yapın

## 📞 Destek

Sorularınız için: destek@biyoves.com.tr

