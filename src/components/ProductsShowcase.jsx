import React, { useEffect, useRef } from 'react';
import { ShoppingBag, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import DottedPattern from './decorations/DottedPattern';
import BackgroundCircle from './decorations/BackgroundCircle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    <section ref={sectionRef} id="produtos" className="py-16 lg:py-24 bg-[#F4F7FC] relative overflow-hidden">
      {/* Background Accents */}
      <BackgroundCircle size={350} color="#E0E7FF" opacity={0.4} className="-top-10 left-1/3 z-0" />
      <DottedPattern rows={6} cols={8} color="#2563EB" opacity={0.12} className="absolute top-6 right-10 z-0 hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-[0.15em] text-[#2563EB] uppercase mb-2 block">
              Conhecimento & Ferramentas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1B2B5E] font-medium">
              Conheça meus e-books e infoprodutos
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Carousel Navigation Arrows for Mobile/Tablet */}
            <div className="flex sm:hidden items-center gap-2">
              <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full bg-white border border-blue-100 text-[#1B2B5E] flex items-center justify-center shadow-xs active:scale-95 transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-md shadow-blue-500/20 active:scale-95 transition-all"
                aria-label="Próximo"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <button
              onClick={onOpenModal}
              className="flex items-center gap-2 border-2 border-[#2563EB]/40 text-[#1B2B5E] hover:bg-[#2563EB] hover:text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all bg-white"
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
            <div 
              key={i} 
              className="product-card w-[82vw] max-w-[300px] sm:w-auto sm:max-w-none snap-center shrink-0 bg-white rounded-3xl p-6 border border-blue-100/80 shadow-md flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all group"
            >
              <div>
                <div className="bg-blue-50/60 rounded-2xl h-44 mb-5 flex items-center justify-center p-4 group-hover:bg-blue-100/60 transition-colors relative overflow-hidden">
                  <div className="w-24 h-32 bg-white rounded-lg shadow-lg border-l-4 border-[#2563EB] p-3 flex flex-col justify-between">
                    <span className="text-[8.5px] font-bold text-[#2563EB] uppercase tracking-wider">{p.tag}</span>
                    <span className="font-serif text-xs font-bold text-[#1B2B5E] leading-tight line-clamp-3">{p.title}</span>
                    <div className="w-6 h-1 bg-[#2563EB] rounded-full" />
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-full inline-block mb-3">
                  {p.tag}
                </span>

                <h3 className="font-serif text-base font-semibold text-[#1B2B5E] mb-2">
                  {p.title}
                </h3>
                <p className="text-[#334155] text-xs leading-relaxed mb-4">
                  {p.desc}
                </p>
              </div>

              <button
                onClick={onOpenModal}
                className="w-full py-3 px-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-1.5"
              >
                <ShoppingBag size={15} />
                <span>Garantir material</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
