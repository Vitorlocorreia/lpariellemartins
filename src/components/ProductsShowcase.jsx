import React, { useEffect, useRef } from 'react';
import { ShoppingBag, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import DottedPattern from './decorations/DottedPattern';
import BackgroundCircle from './decorations/BackgroundCircle';
import { useTilt } from '../hooks/useTilt';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function TiltCard({ className, children }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(10, 1.04);
  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={className}>
      {children}
    </div>
  );
}

export default function ProductsShowcase({ onOpenModal }) {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.product-card');
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(cards,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: section,
            toggleActions: "play none none none"
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const products = [
    {
      title: 'Guia Prático do Idoso Ativo',
      desc: 'Exercícios, hábitos e cuidados essenciais para mais qualidade de vida e autonomia.',
      tag: 'Para Alunos'
    },
    {
      title: 'Manual do Personal Trainer',
      desc: 'Estratégias práticas para atrair, fechar e fidelizar clientes na terceira idade.',
      tag: 'Para Personal Trainers'
    },
    {
      title: '50 Treinos para Idosos',
      desc: 'Fichas de treinos prontas e adaptadas para diferentes níveis de mobilidade.',
      tag: 'Prático'
    },
    {
      title: 'Planilhas de Acompanhamento',
      desc: 'Ferramentas de gestão para acompanhar com precisão a evolução dos alunos.',
      tag: 'Ferramenta'
    }
  ];

  return (
    <section ref={sectionRef} id="produtos" className="py-16 lg:py-24 bg-[#FAF6EF] relative overflow-hidden">
      {/* Background Accents */}
      <BackgroundCircle size={350} color="#F5E6C0" opacity={0.4} className="-top-10 left-1/3 z-0" />
      <DottedPattern rows={6} cols={8} color="#C8951C" opacity={0.12} className="absolute top-6 right-10 z-0 hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-[0.15em] text-[#C8951C] uppercase mb-2 block">
              Conhecimento & Ferramentas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3B2000] font-medium">
              Conheça meus e-books e infoprodutos
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Carousel Navigation Arrows for Mobile/Tablet */}
            <div className="flex sm:hidden items-center gap-2">
              <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full bg-white border border-[#E8D4A0] text-[#3B2000] flex items-center justify-center shadow-xs active:scale-95 transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full bg-[#C8951C] text-white flex items-center justify-center shadow-md shadow-amber-500/20 active:scale-95 transition-all"
                aria-label="Próximo"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <button
              onClick={onOpenModal}
              className="flex items-center gap-2 border-2 border-[#C8951C]/40 text-[#3B2000] hover:bg-[#C8951C] hover:text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all bg-white"
            >
              <span>Ver todos</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory gap-6 pb-6 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 relative z-10"
        >
          {products.map((p, i) => (
            <TiltCard
              key={i}
              className="product-card w-[82vw] max-w-[300px] sm:w-auto sm:max-w-none snap-center shrink-0 bg-white rounded-3xl p-6 border border-[#E8D4A0]/80 shadow-md flex flex-col justify-between hover:border-[#C8951C]/40 transition-colors cursor-default"
            >
              <div>
                <div className="bg-amber-50/60 rounded-2xl h-44 mb-5 flex items-center justify-center p-4 group-hover:bg-blue-100/60 transition-colors relative overflow-hidden">
                  <div className="w-24 h-32 bg-white rounded-lg shadow-lg border-l-4 border-[#C8951C] p-3 flex flex-col justify-between">
                    <span className="text-[8.5px] font-bold text-[#C8951C] uppercase tracking-wider">{p.tag}</span>
                    <span className="font-serif text-xs font-bold text-[#3B2000] leading-tight line-clamp-3">{p.title}</span>
                    <div className="w-6 h-1 bg-[#C8951C] rounded-full" />
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8951C] bg-amber-50 px-2.5 py-1 rounded-full inline-block mb-3">
                  {p.tag}
                </span>

                <h3 className="font-serif text-base font-semibold text-[#3B2000] mb-2">
                  {p.title}
                </h3>
                <p className="text-[#7C5C1E] text-xs leading-relaxed mb-4">
                  {p.desc}
                </p>
              </div>

              <button
                onClick={onOpenModal}
                className="w-full py-3 px-4 rounded-xl bg-[#C8951C] hover:bg-[#A87A12] text-white text-xs font-bold transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-1.5"
              >
                <ShoppingBag size={15} />
                <span>Garantir material</span>
              </button>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
