import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Carlos M.",
    text: "El pollo es excelente y las porciones son grandes. Precio justo.",
    rating: 5,
  },
  {
    name: "María L.",
    text: "Las cremas son riquísimas y el ambiente es ideal para ir con la familia.",
    rating: 5,
  },
  {
    name: "Jorge R.",
    text: "Muy buena pollería en Carabayllo. Siempre regresamos.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="opiniones" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-3">
            Lo que dicen nuestros <span className="text-fire-red">clientes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background border border-border rounded-xl p-6 relative"
            >
              <Quote className="text-gold/30 absolute top-4 right-4" size={32} />
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} size={18} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-foreground/80 mb-4 italic">"{r.text}"</p>
              <p className="font-semibold text-foreground">{r.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className={i < 4 ? "text-gold fill-gold" : "text-gold fill-gold/50"} />
            ))}
            <span className="font-display text-3xl text-foreground ml-2">4.3 de 5</span>
          </div>
          <br />
          <a
            href="https://www.google.com/maps/place/Pollos+y+Parrillas+Paredes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fire-red font-semibold hover:underline"
          >
            Ver más reseñas →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
