import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download as DownloadIcon, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

// Environment variable for GitHub repo (hidden from client bundle in production)
const GITHUB_REPO = import.meta.env.VITE_GITHUB_REPO || "aytugyuruk/biyoves-site";
const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/releases`;

// Fallback version if API fails
const FALLBACK_VERSION = "1.0.0";

// Semver versiyon karşılaştırması (1.0.0, 1.0.1 formatında)
const compareVersions = (a: string, b: string): number => {
  const partsA = a.split('.').map(Number);
  const partsB = b.split('.').map(Number);

  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const partA = partsA[i] || 0;
    const partB = partsB[i] || 0;
    if (partA > partB) return 1;
    if (partA < partB) return -1;
  }
  return 0;
};

interface Release {
  tag_name: string;
  assets: Array<{
    name: string;
    browser_download_url: string;
  }>;
}

interface ReleaseData {
  version: string;
  downloadUrl: string;
}

// Fetch function extracted for React Query
const fetchLatestRelease = async (): Promise<ReleaseData> => {
  const response = await fetch(GITHUB_API_URL);

  if (!response.ok) {
    throw new Error('GitHub API\'den release bilgileri alınamadı');
  }

  const releases: Release[] = await response.json();

  if (releases.length === 0) {
    throw new Error('Henüz release bulunmuyor');
  }

  // Tüm release'lerden en büyük versiyonu bul
  const sortedReleases = releases
    .filter(release => /^\d+\.\d+\.\d+$/.test(release.tag_name))
    .sort((a, b) => compareVersions(b.tag_name, a.tag_name));

  if (sortedReleases.length === 0) {
    throw new Error('Geçerli versiyon formatında release bulunamadı');
  }

  const latestRelease = sortedReleases[0];
  const version = latestRelease.tag_name;

  // .exe dosyasını bul
  const exeAsset = latestRelease.assets.find(asset =>
    asset.name.endsWith('.exe') && asset.name.includes(version)
  );

  if (exeAsset) {
    return { version, downloadUrl: exeAsset.browser_download_url };
  }

  // Eğer asset'te versiyon yoksa, ilk .exe dosyasını kullan
  const anyExe = latestRelease.assets.find(asset => asset.name.endsWith('.exe'));
  if (anyExe) {
    return { version, downloadUrl: anyExe.browser_download_url };
  }

  // Asset yoksa, GitHub releases download URL'i oluştur
  const exeFilename = `BiyoVes_Setup_${version}.exe`;
  return {
    version,
    downloadUrl: `https://github.com/${GITHUB_REPO}/releases/download/${version}/${exeFilename}`
  };
};

const Download = () => {
  // React Query with caching to prevent GitHub API rate limiting
  // Cache for 30 minutes, keep in cache for 1 hour
  const { data, isLoading, error } = useQuery({
    queryKey: ['github-release', GITHUB_REPO],
    queryFn: fetchLatestRelease,
    staleTime: 1000 * 60 * 30, // 30 minutes
    gcTime: 1000 * 60 * 60,    // 1 hour (formerly cacheTime)
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });

  // Fallback values
  const latestVersion = data?.version || (error ? FALLBACK_VERSION : null);
  const downloadUrl = data?.downloadUrl || (error
    ? `https://github.com/${GITHUB_REPO}/releases/download/${FALLBACK_VERSION}/BiyoVes_Setup_${FALLBACK_VERSION}.exe`
    : null
  );

  const exeFilename = latestVersion ? `BiyoVes_Setup_${latestVersion}.exe` : 'BiyoVes_Setup.exe';

  return (
    <section id="download" className="py-12 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Hemen{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">İndirin</span>
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            BiyoVes'i ücretsiz indirin ve profesyonel fotoğraflar oluşturmaya başlayın
          </p>

          <div className="max-w-md mx-auto">
            <Card className="group border-border/50 transition-all duration-700 ease-out hover:border-primary/50 hover:shadow-hover hover:-translate-y-2 hover:scale-[1.02] animate-fade-in">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-primary transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                    <svg
                      className="h-10 w-10 text-primary-foreground transition-transform duration-500 group-hover:scale-110"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      role="img"
                    >
                      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.35" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary text-center">Windows</h3>
                <p className="mb-6 text-base text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80 text-center">
                  Windows 10 (64-bit) ve üzeri
                  {latestVersion && (
                    <span className="block mt-2 text-sm text-primary">v{latestVersion}</span>
                  )}
                </p>
                {isLoading ? (
                  <Button
                    className="w-full bg-gradient-primary shadow-soft"
                    size="lg"
                    disabled
                  >
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Yükleniyor...
                  </Button>
                ) : downloadUrl ? (
                  <a
                    href={downloadUrl}
                    download={exeFilename}
                    className="block w-full"
                  >
                    <Button
                      className="w-full bg-gradient-primary shadow-soft transition-all duration-500 ease-out hover:shadow-hover hover:scale-105 hover:-translate-y-0.5"
                      size="lg"
                    >
                      <DownloadIcon className="mr-2 h-5 w-5 transition-transform duration-500 group-hover:translate-y-0.5" />
                      İndir {latestVersion && `(v${latestVersion})`}
                    </Button>
                  </a>
                ) : null}
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 sm:mt-12 rounded-xl border border-border/50 bg-muted/50 p-4 sm:p-6 max-w-md mx-auto">
            <h4 className="mb-4 sm:mb-6 text-center text-base sm:text-lg font-semibold text-foreground">Sistem Gereksinimleri</h4>
            <div className="flex flex-col items-center text-center space-y-2">
              <p className="text-base font-semibold text-foreground">Windows</p>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Windows 10 (64-bit) veya üzeri</p>
                <p className="text-sm text-muted-foreground">4GB RAM (8GB önerilir)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
