const PhotoTypes = () => {
  return (
    <section id="photo-types" className="py-12 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Desteklenen{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Fotoğraf Tipleri</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Biyometrik", size: "50x60 mm", use: "Pasaport ve T.C. Kimlik Kartı" },
              { title: "Vesikalık", size: "45x60 mm", use: "CV, Öğrenci Belgesi, Okul" },
              { title: "ABD Vizesi", size: "50x50 mm", use: "Green Card ve ABD Vizesi" },
              { title: "Schengen Vizesi", size: "35x45 mm", use: "Avrupa Ülkeleri Vizesi" },
            ].map((type, index) => (
              <div
                key={index}
                className="group rounded-xl border border-border/50 bg-card p-6 text-center transition-all duration-500 hover:border-primary/50 hover:shadow-hover hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">{type.title}</h4>
                <p className="mb-1 text-2xl font-bold text-primary transition-transform duration-300 group-hover:scale-110">{type.size}</p>
                <p className="text-sm text-muted-foreground transition-colors group-hover:text-foreground/80">{type.use}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoTypes;

