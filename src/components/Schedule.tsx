import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const days = [
  "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
];

const Schedule = () => {
  const now = new Date();
  const hour = now.getHours();
  const isOpen = hour >= 12 && hour < 24;

  return (
    <section className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl text-primary-foreground mb-6">
            Horario de <span className="text-gold">Atención</span>
          </h2>

          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 ${isOpen ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
            <span className={`w-3 h-3 rounded-full ${isOpen ? "bg-green-400 animate-pulse" : "bg-red-400"}`} />
            <span className="font-semibold text-sm">{isOpen ? "Abierto ahora" : "Cerrado ahora"}</span>
          </div>

          <div className="space-y-3">
            {days.map((day) => (
              <div key={day} className="flex items-center justify-between px-4 py-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
                <span className="text-primary-foreground font-medium">{day}</span>
                <div className="flex items-center gap-2 text-primary-foreground/60">
                  <Clock size={16} />
                  <span>12:00 – 00:00</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
