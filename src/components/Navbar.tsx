import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";
import logo from "@/assets/logo-paredes.png";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Menú", href: "#menu" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Galería", href: "#galeria" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#inicio" className="flex items-center gap-3">
          <OptimizedImage 
            src={logo} 
            alt="Pollos y Parrillas Paredes" 
            className="h-12 w-12 object-contain rounded-full"
            priority={true}
            placeholder="blur"
            context="logo"
          />
          <span className="font-display text-2xl text-primary-foreground tracking-wide hidden sm:block">
            Paredes
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-primary-foreground/80 hover:text-gold transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5115490114?text=Hola%2C%20quiero%20hacer%20un%20pedido%20en%20Pollos%20y%20Parrillas%20Paredes."
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-fire text-primary-foreground font-semibold px-5 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            Ordenar ahora
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-charcoal overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-primary-foreground/80 hover:text-gold transition-colors text-lg font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5115490114?text=Hola%2C%20quiero%20hacer%20un%20pedido%20en%20Pollos%20y%20Parrillas%20Paredes."
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-fire text-primary-foreground font-semibold px-6 py-3 rounded-lg"
              >
                Ordenar ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
