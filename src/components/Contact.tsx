import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, soy ${form.nombre}. ${form.mensaje} (Tel: ${form.telefono})`;
    window.open(`https://wa.me/51982059159?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-3">
            <span className="text-gold">Contáctanos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Nombre"
              required
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-fire-red/50 outline-none"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              required
              value={form.telefono}
              onChange={(e) => setForm({ ...form, telefono: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-fire-red/50 outline-none"
            />
            <textarea
              placeholder="Mensaje"
              rows={4}
              required
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-fire-red/50 outline-none resize-none"
            />
            <button
              type="submit"
              className="gradient-fire text-primary-foreground font-semibold px-8 py-3.5 rounded-lg text-lg hover:opacity-90 transition-opacity flex items-center gap-2 w-full justify-center"
            >
              <Send size={20} />
              Enviar mensaje
            </button>
          </form>

          <div className="space-y-6 flex flex-col justify-center">
            <a href="tel:+51982059159" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-fire-red/10 flex items-center justify-center group-hover:bg-fire-red/20 transition">
                <Phone className="text-fire-red" size={22} />
              </div>
              <div>
                <p className="font-semibold text-foreground">Teléfono</p>
                <p className="text-muted-foreground">+51 982 059 159</p>
              </div>
            </a>

            <a href="mailto:pollosyparrilasparedes@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition">
                <Mail className="text-gold" size={22} />
              </div>
              <div>
                <p className="font-semibold text-foreground">Correo</p>
                <p className="text-muted-foreground">pollosyparrilasparedes@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/51982059159?text=Hola%2C%20quiero%20hacer%20un%20pedido%20en%20Pollos%20y%20Parrillas%20Paredes."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition">
                <MessageCircle className="text-green-500" size={22} />
              </div>
              <div>
                <p className="font-semibold text-foreground">WhatsApp</p>
                <p className="text-muted-foreground">Escríbenos por WhatsApp</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
