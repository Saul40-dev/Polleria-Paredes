import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";
import parrillaCarne from "@/assets/parrilla-carne.png";
import promoEleccion from "@/assets/promo-eleccion.png";
import familiaComiendo from "@/assets/familia-comiendo.png";
import ambienteInterior from "@/assets/ambiente-interior.png";
import ambienteSalon from "@/assets/ambiente-salon.png";
import equipoParedes from "@/assets/equipo-paredes.png";
import fachadaLocal from "@/assets/fachada-local.png";

const images = [
  { src: parrillaCarne, alt: "Carne a la parrilla", span: "md:col-span-2 md:row-span-2" },
  { src: promoEleccion, alt: "Promoción Paredes – Tu mejor elección", span: "" },
  { src: familiaComiendo, alt: "Familias disfrutando en el restaurante", span: "" },
  { src: ambienteInterior, alt: "Interior del restaurante Paredes", span: "md:col-span-2" },
  { src: ambienteSalon, alt: "Salón del restaurante", span: "" },
  { src: equipoParedes, alt: "Equipo de Pollos y Parrillas Paredes", span: "md:col-span-2" },
  { src: fachadaLocal, alt: "Fachada del local Paredes en Carabayllo", span: "" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <>
      <section id="galeria" className="py-20 bg-charcoal relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-fire-red rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">
              Momentos & Sabores
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary-foreground mb-4">
              Nuestra <span className="text-gold">Galería</span>
            </h2>
            <div className="w-20 h-1 gradient-fire mx-auto rounded-full" />
          </motion.div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto auto-rows-[200px] md:auto-rows-[220px]">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                onClick={() => openLightbox(i)}
                className={`overflow-hidden rounded-2xl group cursor-pointer relative ${img.span}`}
              >
                {/* Image */}
                <OptimizedImage
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  placeholder="skeleton"
                  context="gallery"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-5">
                  <p className="text-primary-foreground text-sm md:text-base font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {img.alt}
                  </p>
                </div>
                {/* Corner accent */}
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/60 transition-all duration-500 rounded-tr-lg" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/60 transition-all duration-500 rounded-bl-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-primary-foreground/70 hover:text-primary-foreground transition-colors z-10"
          >
            <X size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-primary-foreground/70 hover:text-primary-foreground transition-colors z-10"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-primary-foreground/70 hover:text-primary-foreground transition-colors z-10"
          >
            <ChevronRight size={40} />
          </button>
          <motion.img
            key={lightbox}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-primary-foreground/60 text-sm">
            {images[lightbox].alt} — {lightbox + 1} / {images.length}
          </p>
        </motion.div>
      )}
    </>
  );
};

export default Gallery;
