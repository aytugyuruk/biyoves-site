# GitHub Pages Deployment Guide

## 🚀 Otomatik Deploy (Önerilen)

Bu repo GitHub Actions ile otomatik deploy yapılandırılmıştır. Her `main` veya `master` branch'ine push yaptığınızda otomatik olarak GitHub Pages'e deploy edilir.

### Adımlar:

1. **GitHub Repo Ayarları:**
   - Repo'nuzun Settings > Pages bölümüne gidin
   - Source: "GitHub Actions" seçin
   - Save'e tıklayın

2. **Kodu Push Edin:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Deploy Kontrolü:**
   - Actions sekmesinden deploy durumunu kontrol edin
   - Birkaç dakika içinde site yayında olacak

## 📦 Manuel Deploy

Eğer otomatik deploy kullanmak istemiyorsanız:

1. **Build Yapın:**
   ```bash
   npm run build
   ```

2. **dist/ Klasörünü Push Edin:**
   ```bash
   # gh-pages branch'ine push etmek için
   npm install -g gh-pages
   gh-pages -d dist
   ```

   VEYA

   ```bash
   # Manuel olarak
   git checkout --orphan gh-pages
   git rm -rf .
   cp -r dist/* .
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

3. **GitHub Repo Ayarları:**
   - Settings > Pages
   - Source: "gh-pages" branch seçin
   - Save'e tıklayın

## ⚙️ Custom Domain (Opsiyonel)

Eğer custom domain kullanıyorsanız (biyoves.com.tr):

1. `public/` klasörüne `CNAME` dosyası ekleyin:
   ```
   biyoves.com.tr
   ```

2. GitHub Repo Settings > Pages'de custom domain ekleyin

## 🔧 Sorun Giderme

- **404 Hatası:** Vite config'de `base` path'i kontrol edin
- **Route'lar Çalışmıyor:** GitHub Pages için 404.html fallback ekleyin (React Router için gerekli)
- **Build Hatası:** `npm run build` komutunu local'de test edin

## 📝 Notlar

- İlk deploy 5-10 dakika sürebilir
- Sonraki deploy'lar genellikle 2-3 dakika sürer
- GitHub Pages HTTPS zorunludur (otomatik)

