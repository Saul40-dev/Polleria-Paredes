import { motion } from "framer-motion";
import { MapPin, Bus } from "lucide-react";

const Location = () => {
  return (
    <section id="ubicacion" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-3">
            Visítanos en <span className="text-fire-red">Carabayllo</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="text-fire-red mt-1 shrink-0" size={24} />
              <div>
                <p className="font-semibold text-foreground text-lg">Av. Túpac Amaru 2791</p>
                <p className="text-muted-foreground">El Progreso, Carabayllo</p>
                <p className="text-muted-foreground">Lima 15318, Perú</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Bus className="text-gold mt-1 shrink-0" size={24} />
              <div>
                <p className="font-semibold text-foreground mb-2">Líneas de transporte cercanas</p>
                <div className="flex flex-wrap gap-2">
                  {["1177", "1178", "1243", "AN11", "AN19"].map((line) => (
                    <span
                      key={line}
                      className="bg-fire-red/10 text-fire-red font-semibold px-3 py-1 rounded-md text-sm"
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-border h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.123!2d-77.036!3d-11.843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf3c59c1b3d1%3A0x0!2sAv.+T%C3%BApac+Amaru+2791%2C+Carabayllo!5e0!3m2!1ses!2spe!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Pollos y Parrillas Paredes"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
