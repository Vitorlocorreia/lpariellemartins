import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Sparkles, Shield, Footprints, ArrowUpFromLine, ShoppingBag } from "lucide-react";

/* ── Modal ao clicar ── */
function ImageModal({ item, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-2xl p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.url}
          alt={item.title}
          className="h-auto max-h-[90vh] w-full rounded-2xl object-contain shadow-2xl"
        />
        <div className="absolute bottom-8 left-8 right-8 p-4 rounded-xl bg-black/60 backdrop-blur-sm text-white">
          <h3 className="text-base font-bold">{item.title}</h3>
          <p className="text-sm text-white/80 mt-0.5">{item.desc}</p>
        </div>
      </motion.div>
      <button
        onClick={onClose}
        className="absolute right-4 top-4 p-2 text-white/80 hover:text-white bg-white/10 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
        aria-label="Fechar"
      >
        <X size={24} />
      </button>
    </motion.div>
  );
}

/* ── Dados — spans bento variados ── */
const photos = [
  {
    id: 1,
    url: "/images/proof/supermercado-cesta-sorrindo.jpg",
    title: "Fazer compras sozinha",
    desc: "Com leveza, sem dor e com um sorriso no rosto.",
    span: "row-span-2",
  },
  {
    id: 2,
    url: "/images/proof/carrinho-supermercado-sorrindo.jpg",
    title: "Empurrar o carrinho",
    desc: "Membros superiores fortes garantem independência.",
    span: "row-span-1",
  },
  {
    id: 3,
    url: "/images/proof/supermercado-caminhando.jpg",
    title: "Caminhar com confiança",
    desc: "Passos firmes, postura ereta, vitalidade visível.",
    span: "row-span-1",
  },
  {
    id: 4,
    url: "/images/proof/supermercado-escolhendo.jpg",
    title: "Se abaixar sem medo",
    desc: "Mobilidade que devolve a autonomia.",
    span: "row-span-2",
  },
  {
    id: 5,
    url: "/images/proof/carrinho-supermercado.jpg",
    title: "Suas compras, do seu jeito",
    desc: "Força funcional que mantém a rotina.",
    span: "col-span-2 row-span-1",
  },
  {
    id: 6,
    url: "/images/proof/carro-abrindo-porta.jpg",
    title: "Entrar no carro sozinha",
    desc: "Equilíbrio e força que devolvem a liberdade.",
    span: "row-span-1",
  },
  {
    id: 7,
    url: "/images/proof/carrinho-supermercado-2.jpg",
    title: "Viver com leveza",
    desc: "Cada gesto feito com segurança e autonomia.",
    span: "row-span-1",
  },
  {
    id: 8,
    url: "/images/proof/carro-saindo.jpg",
    title: "Sair do carro sozinha",
    desc: "Sem ajuda, no seu ritmo, com sua autonomia.",
    span: "col-span-2 row-span-2",
  },
  {
    id: 9,
    url: "/images/proof/carro-entrando.jpg",
    title: "Entrar no carro com segurança",
    desc: "Flexibilidade para cada movimento do dia.",
    span: "row-span-1",
  },
  {
    id: 10,
    url: "/images/proof/supermercado-caminhando-2.jpg",
    title: "De volta à sua rotina",
    desc: "Independência que o treino funcional devolve.",
    span: "row-span-1",
  },
];

/* ── Card bento ── */
function BentoCard({ item, onOpen }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl cursor-pointer border border-blue-100/60 shadow-sm hover:shadow-xl transition-shadow duration-300 min-w-[220px] ${item.span}`}
      onClick={() => onOpen(item)}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(item)}
      aria-label={`Ver: ${item.title}`}
    >
      <img
        src={item.url}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1B2B5E]/85 via-[#1B2B5E]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {/* Texto */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 z-10">
        <h3 className="text-base font-bold text-white leading-tight">{item.title}</h3>
        <p className="mt-1 text-sm text-white/80">{item.desc}</p>
      </div>
      {/* Dot azul */}
      <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-[#2563EB] shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

/* ── Seção Principal ── */
export default function ProofGallery() {
  const [selected, setSelected] = useState(null);

  const track = [...photos, ...photos];

  const outcomes = [
    { icon: Shield, title: "Sentir-se mais forte." },
    { icon: Footprints, title: "Caminhar com segurança." },
    { icon: ArrowUpFromLine, title: "Levantar-se com facilidade." },
    { icon: ShoppingBag, title: "Ter confiança para realizar as próprias atividades." },
  ];

  return (
    <section
      id="resultados"
      className="relative bg-[#F4F7FC] py-20 lg:py-28 overflow-hidden"
    >
      {/* CSS keyframe */}
      <style>{`
        @keyframes bento-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .bento-track {
          animation: bento-scroll 38s linear infinite;
          will-change: transform;
        }
        .bento-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ── Header: 6. RESULTADOS ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 text-[#2563EB] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          <Sparkles size={14} className="text-[#2563EB]" />
          Resultados na Vida Real
        </div>

        {/* Big Highlighted Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B2B5E] font-medium leading-tight mb-6">
          O resultado mais importante{" "}
          <span className="relative inline-block text-[#2563EB]">
            acontece fora do treino.
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#2563EB] rounded-full" />
          </span>
        </h2>

        <p className="text-[#4B5E8A] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          O exercício ganha significado quando aquilo que é desenvolvido no treino melhora a maneira como você vive.
        </p>

        {/* 4 Outcome Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-10 text-left">
          {outcomes.map(({ icon: Icon, title }, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-blue-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                <Icon size={18} />
              </div>
              <span className="text-sm font-semibold text-[#1B2B5E] leading-snug">
                {title}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Bento Carrossel Infinito ── */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-r from-[#F4F7FC] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-l from-[#F4F7FC] to-transparent" />

        <div className="overflow-hidden">
          <div
            className="bento-track"
            style={{ width: "max-content" }}
          >
            <div
              className="grid gap-3 px-4"
              style={{
                gridTemplateRows: "repeat(2, 240px)",
                gridAutoFlow: "column",
                gridAutoColumns: "220px",
              }}
            >
              {track.map((item, idx) => (
                <BentoCard
                  key={`${item.id}-${idx}`}
                  item={item}
                  onOpen={setSelected}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footnote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-12 px-4"
      >
        <p className="text-[#4B5E8A] text-sm sm:text-base max-w-xl mx-auto">
          Essa é a aluna da Arielle. Ela faz isso toda semana — com força,
          equilíbrio e segurança.{" "}
          <strong className="text-[#1B2B5E]">Você também pode.</strong>
        </p>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ImageModal item={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
