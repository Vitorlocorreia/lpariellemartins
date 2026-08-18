import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Heart, ShoppingCart, Car } from "lucide-react";

/* ── Modal ── */
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
        className="absolute right-4 top-4 p-2 text-white/80 hover:text-white bg-white/10 rounded-full backdrop-blur-sm transition-colors"
        aria-label="Fechar"
      >
        <X size={24} />
      </button>
    </motion.div>
  );
}

/* ── Dados — spans bento variados ──
   Layout no grid de 2 linhas com grid-flow-col:
   [1 r2][2 r1][4 r1][5 c2r1 ][7 r2][9  r1]
   [1 r2][3 r1][4 r1][6 r1][6][7 r2][10 r1]
*/
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
      className={`group relative overflow-hidden rounded-2xl cursor-pointer border border-[#FDE68A]/30 shadow-sm hover:shadow-xl transition-shadow duration-300 min-w-[220px] ${item.span}`}
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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {/* Texto */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 z-10">
        <h3 className="text-base font-bold text-white leading-tight">{item.title}</h3>
        <p className="mt-1 text-sm text-white/80">{item.desc}</p>
      </div>
      {/* Dot amarelo */}
      <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-[#EAB308] shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

/* ── Seção ── */
export default function ProofGallery() {
  const [selected, setSelected] = useState(null);

  // Duplica para loop perfeito
  const track = [...photos, ...photos];

  return (
    <section
      id="depoimentos"
      className="relative bg-[#FAF6E4] py-16 sm:py-24 overflow-hidden"
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

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 bg-[#EAB308]/15 border border-[#EAB308]/40 text-[#44330A] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          <Heart size={13} className="text-[#EAB308]" />
          Prova Real de Resultado
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1400] font-medium leading-tight mb-6">
          Você tem o direito de{" "}
          <span className="relative inline-block">
            viver a sua vida.
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#EAB308] rounded-full" />
          </span>
        </h2>

        <p className="text-[#44330A] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Fazer compras, entrar no carro sozinha, carregar as sacolas —{" "}
          <strong className="text-[#1C1400]">
            esses não são privilégios de jovem. São direitos seus.
          </strong>
        </p>
        <p className="text-[#44330A] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mt-4">
          O treino funcional existe para garantir que você nunca perca esses momentos.
          Que você acorde todo dia capaz de viver a vida que quer.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          {[
            { icon: ShoppingCart, text: "Compras sem cansaço" },
            { icon: Car, text: "Entrar e sair do carro" },
            { icon: Heart, text: "Independência de verdade" },
          ].map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-[#44330A] font-semibold bg-white px-4 py-2 rounded-full border border-[#FDE68A] shadow-sm"
            >
              <Icon size={15} className="text-[#EAB308]" />
              {text}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Bento Carrossel Infinito ── */}
      <div className="relative">
        {/* Fade lateral esquerda */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-r from-[#FAF6E4] to-transparent" />
        {/* Fade lateral direita */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-l from-[#FAF6E4] to-transparent" />

        <div className="overflow-hidden">
          {/* Trilho animado */}
          <div
            className="bento-track"
            style={{ width: "max-content" }}
          >
            {/* Grid bento de 2 linhas, fluxo em colunas */}
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

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-12 px-4"
      >
        <p className="text-[#44330A] text-sm sm:text-base max-w-xl mx-auto">
          Essa é a aluna da Arielle. Ela faz isso toda semana — com força,
          equilíbrio e um sorriso no rosto.{" "}
          <strong className="text-[#1C1400]">Você também pode.</strong>
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
