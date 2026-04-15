import { MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo-paredes.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="flex items-start gap-3">
            <img src={logo} alt="Logo" className="w-12 h-12 rounded-full object-contain" />
            <div>
              <h3 className="font-display text-xl text-primary-foreground">Pollos y Parrillas Paredes</h3>
              <p className="text-primary-foreground/50 text-sm">Sede Carabayllo</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="text-fire-red mt-1 shrink-0" size={20} />
            <div className="text-primary-foreground/70 text-sm">
              <p>Av. Túpac Amaru 2791</p>
              <p>El Progreso, Carabayllo</p>
              <p>Lima 15318, Perú</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="text-gold mt-1 shrink-0" size={20} />
            <div className="text-primary-foreground/70 text-sm">
              <p>+51 1 549 0114</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="text-gold mt-1 shrink-0" size={20} />
            <div className="text-primary-foreground/70 text-sm">
              <p>Lunes a Domingo</p>
              <p>12:00 – 00:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Pollos y Parrillas Paredes – Carabayllo
          </p>
          <a
            href="https://www.facebook.com/PollosyParrillasParedes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/40 hover:text-gold transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
