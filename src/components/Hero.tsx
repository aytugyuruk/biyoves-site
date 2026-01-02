import { Button } from "@/components/ui/button";
import { Download, Play, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Marquee from "./Marquee";

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Hero = () => {
  const scrollToDownload = () => {
    const element = document.getElementById("download");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero pb-12 md:pb-16">
      {/* Trust Bar - Top */}
      <div className="border-b border-border/30 bg-muted/30">
        <div className="container py-3">
          <Marquee
            items={[
              "✨ 50+ Profesyonel Stüdyo Kullanıyor",
              "🚀 Saniyeler İçinde Sonuç",
              "🔒 %100 Yerel İşleme - Verileriniz Güvende",
              "⭐ 4.9/5 Müşteri Memnuniyeti",
              "📸 1.000+ İşlenen Fotoğraf",
              "🏆 Türkiye'nin En Çok Tercih Edilen Fotoğraf Yazılımı",
            ]}
            speed={50}
            className="py-2"
          />
        </div>
      </div>

      <div className="container pt-6 md:pt-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="flex flex-col justify-center space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Fotoğraf Stüdyonuz için{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Yapay Zeka Destekli Çözüm
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed">
                Müşterilerinize <strong className="text-foreground">saniyeler içinde</strong> profesyonel biyometrik fotoğraf hizmeti sunun.
                Toplu işleme ile zamandan ve maliyetten tasarruf edin.
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              className="flex flex-wrap gap-2 sm:gap-4"
              variants={itemVariants}
            >
              {[
                "Saniyeler İçinde Sonuç",
                "Toplu İşleme",
                "%100 Yerel İşleme",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-accent/10 border border-accent/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-foreground">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col gap-3 sm:gap-4 sm:flex-row"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  onClick={scrollToDownload}
                  className="bg-gradient-primary shadow-soft transition-all duration-500 ease-out hover:shadow-hover text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-11"
                >
                  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Ücretsiz İndir
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="transition-all duration-500 ease-out hover:border-primary/50 hover:bg-transparent hover:text-foreground text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-11"
                  disabled
                >
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Demo İzle
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative rounded-xl bg-background border-2 border-gray-900/20 dark:border-gray-100/20 shadow-2xl overflow-hidden group"
              whileHover={{
                boxShadow: "0 20px 50px -12px rgba(0,0,0,0.25)",
                y: -5,
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Window Header / Title Bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-900/20 dark:border-gray-100/20 bg-muted/50 backdrop-blur-sm">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex-1 text-center text-xs text-muted-foreground/80 font-medium font-sans">BiyoVes</div>
                <div className="w-12" /> {/* Spacer for center alignment */}
              </div>

              {/* Window Content */}
              <div className="relative bg-background">
                <img
                  src="/app-screenshot.png"
                  alt="BiyoVes Uygulama Arayüzü - Yapay Zeka Destekli Biyometrik Fotoğraf İşleme"
                  className="w-full h-auto block"
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="800"
                />
                {/* Inner Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/5 pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
