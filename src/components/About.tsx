import { motion } from "framer-motion";
import { Star, Users, Utensils, Heart } from "lucide-react";

const features = [
  { icon: Utensils, text: "Sabor inigualable" },
  { icon: Users, text: "Porciones generosas" },
  { icon: Heart, text: "Ambiente familiar" },
  { icon: Star, text: "Precios justos" },
];

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
            Una pollería hecha para{" "}
            <span className="text-fire-red">disfrutar en familia</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Pollos y Parrillas Paredes es uno de los lugares favoritos de Carabayllo para disfrutar
            un delicioso pollo a la brasa. Nos especializamos en pollo jugoso, parrillas bien
            preparadas y guarniciones abundantes. Nuestro restaurante es perfecto para compartir en
            familia, con amigos o celebrar cualquier ocasión.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 p-4"
              >
                <div className="w-14 h-14 rounded-full bg-fire-red/10 flex items-center justify-center">
                  <f.icon className="text-fire-red" size={28} />
                </div>
                <span className="font-semibold text-foreground">{f.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/30 rounded-xl px-8 py-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={22}
                  className={i < 4 ? "text-gold fill-gold" : "text-gold fill-gold/50"}
                />
              ))}
            </div>
            <div className="text-left">
              <span className="font-display text-2xl text-foreground">4.3 / 5</span>
              <p className="text-sm text-muted-foreground">+1600 reseñas en Google</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
