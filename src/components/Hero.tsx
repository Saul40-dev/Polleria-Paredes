import { motion } from "framer-motion";
import { MapPin, ChefHat } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";
import heroImg from "@/assets/pollo-entero.png";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <OptimizedImage 
          src={heroImg} 
          alt="Pollo a la brasa con papas y ensalada" 
          className="w-full h-full object-cover"
          priority={true}
          placeholder="blur"
          context="hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <ChefHat className="text-gold" size={24} />
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">
              Desde Carabayllo con sabor
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-primary-foreground leading-none mb-6 text-shadow-hero">
            El mejor pollo<br />
            <span className="text-gold">a la brasa</span><br />
            de Carabayllo
          </h1>

          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            Pollo jugoso, parrillas deliciosas y porciones generosas para disfrutar en familia.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#menu"
              className="gradient-fire text-primary-foreground font-semibold px-8 py-3.5 rounded-lg text-lg hover:opacity-90 transition-opacity"
            >
              Ver menú
            </a>
            <a
              href="https://wa.me/5115490114?text=Hola%2C%20quiero%20hacer%20un%20pedido%20en%20Pollos%20y%20Parrillas%20Paredes."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-charcoal font-semibold px-8 py-3.5 rounded-lg text-lg hover:brightness-110 transition"
            >
              Ordenar delivery
            </a>
            <a
              href="#ubicacion"
              className="border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-3.5 rounded-lg text-lg hover:border-gold hover:text-gold transition-colors flex items-center gap-2"
            >
              <MapPin size={20} />
              Cómo llegar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
