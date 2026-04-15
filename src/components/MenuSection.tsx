import { motion } from "framer-motion";
import { useState } from "react";
import polloBrasa1 from "@/assets/pollo-brasa-1.png";
import polloBrasa2 from "@/assets/pollo-brasa-2.png";
import polloEntero from "@/assets/pollo-entero.png";
import comboFamiliar from "@/assets/combo-familiar.png";
import polloParrilla from "@/assets/pollo-parrilla.png";
import parrillaCarne from "@/assets/parrilla-carne.png";
import parrillada from "@/assets/parrillada.png";
import lomoSaltado from "@/assets/lomo-saltado.png";
import papasFritas from "@/assets/papas-fritas.png";
import ensalada from "@/assets/ensalada.png";
import cremas from "@/assets/cremas.png";
import gaseosas from "@/assets/gaseosas.png";
import jugos from "@/assets/jugos.png";
import cervezas from "@/assets/cervezas.png";
import tragos from "@/assets/tragos.png";
import OptimizedImage from "@/components/OptimizedImage";

type Category = "brasa" | "parrillas" | "especiales" | "acompañamientos" | "bebidas";

const categories: { key: Category; label: string }[] = [
  { key: "brasa", label: "Pollo a la Brasa" },
  { key: "parrillas", label: "Parrillas" },
  { key: "especiales", label: "Platos Especiales" },
  { key: "acompañamientos", label: "Acompañamientos" },
  { key: "bebidas", label: "Bebidas" },
];

const menuItems: Record<Category, { name: string; desc: string; price: string; img?: string }[]> = {
  brasa: [
    { name: "1/4 de Pollo", desc: "Con papas fritas, ensalada y cremas", price: "S/20", img: polloBrasa2 },
    { name: "1/2 Pollo", desc: "Con papas fritas, ensalada y cremas", price: "S/30", img: polloBrasa1 },
    { name: "Pollo Entero", desc: "Con papas, ensalada, gaseosa y cremas", price: "S/55", img: polloEntero },
    { name: "Combo Familiar", desc: "Pollo + 1/4 pollo + papas + ensalada + chaufa + gaseosa 1.5L + cremas", price: "S/75", img: comboFamiliar },
  ],
  parrillas: [
    { name: "Pollo a la Parrilla", desc: "Pechuga o pierna a la parrilla con guarniciones", price: "S/25", img: polloParrilla },
    { name: "Carnes a la Parrilla", desc: "Cortes selectos a la parrilla", price: "S/35", img: parrillaCarne },
    { name: "Parrillada", desc: "Mixto de carnes y pollo a la parrilla para compartir", price: "S/65", img: parrillada },
  ],
  especiales: [
    { name: "Lomo Saltado", desc: "Lomo fino saltado con cebolla, tomate, papas fritas y arroz", price: "S/30", img: lomoSaltado },
  ],
  "acompañamientos": [
    { name: "Papas Fritas", desc: "Porción extra de papas crujientes", price: "S/8", img: papasFritas },
    { name: "Ensalada Fresca", desc: "Lechuga, tomate, pepino y zanahoria", price: "S/6", img: ensalada },
    { name: "Cremas Caseras", desc: "Ají, mayonesa, ketchup, mostaza, chimichurri", price: "S/2", img: cremas },
  ],
  bebidas: [
    { name: "Gaseosas", desc: "Inca Kola, Coca-Cola, Fanta", price: "S/5", img: gaseosas },
    { name: "Jugos Naturales", desc: "Maracuyá, chicha morada, limonada", price: "S/7", img: jugos },
    { name: "Cervezas", desc: "Pilsen, Cusqueña, Cristal", price: "S/10", img: cervezas },
    { name: "Tragos", desc: "Variedad de cócteles y tragos preparados", price: "S/15", img: tragos },
  ],
};

const MenuSection = () => {
  const [active, setActive] = useState<Category>("brasa");

  return (
    <section id="menu" className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary-foreground mb-3">
            Nuestra <span className="text-gold">Carta</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg">Elige tu plato favorito</p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                active === cat.key
                  ? "gradient-fire text-primary-foreground"
                  : "bg-primary-foreground/10 text-primary-foreground/70 hover:bg-primary-foreground/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {menuItems[active].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl overflow-hidden group hover:border-gold/40 transition-colors"
            >
              {item.img && (
                <div className="overflow-hidden h-48">
                  <OptimizedImage
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    placeholder="skeleton"
                    context="menu"
                  />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-xl text-primary-foreground">{item.name}</h3>
                  <span className="text-gold font-bold text-lg whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-primary-foreground/50 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <p className="text-primary-foreground/40 text-sm">
            Precios referenciales. Consulta disponibilidad al momento de tu pedido.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
