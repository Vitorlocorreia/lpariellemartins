import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, CheckCircle2, ArrowRight, Eye, Sparkles, MessageCircle, X, ChevronRight } from 'lucide-react';
import DottedPattern from './decorations/DottedPattern';
import BackgroundCircle from './decorations/BackgroundCircle';
import { useTilt } from '../hooks/useTilt';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function TiltCard({ className, children }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(8, 1.02);
  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={className}>
      {children}
    </div>
  );
}

export default function ProductsShowcase({ onOpenModal, whatsappUrl }) {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('cover'); // 'cover' | 'inside'
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.ebook-anim-card',
        { opacity: 0, y: 35, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const ebookBuyMessage = encodeURIComponent("Olá Arielle! Gostaria de adquirir o seu e-book 'Manual Prático de Treinamento para Idosos'.");
  const ebookWhatsappUrl = whatsappUrl 
    ? whatsappUrl.replace(/text=.*$/, `text=${ebookBuyMessage}`)
    : `https://wa.me/5581986833360?text=${ebookBuyMessage}`;

  const currentImage = activeTab === 'cover' 
    ? '/images/ebook-cover.webp' 
    : '/images/ebook-inside.webp';

  const highlights = [
    {
      title: "Raciocínio Clínico na Prescrição",
      desc: "Compreensão aprofundada do envelhecimento, sarcopenia e declínio funcional para prescrever com embasamento."
    },
    {
      title: "Avaliação Prática & Observação",
      desc: "Como analisar marcha, sentar e levantar, apoio e mobilidade antes mesmo de iniciar os testes formais."
    },
    {
      title: "Prevenção de Quedas & Força",
      desc: "Progressões seguras de exercícios focados no fortalecimento e na preservação da autonomia do idoso."
    },
    {
      title: "Pensando como Especialista",
      desc: "Estudos de caso reais com tomadas de decisão clínica para situações do cotidiano."
    }
  ];

  return (
    <section ref={sectionRef} id="produtos" className="py-16 lg:py-24 bg-[#F4F7FC] relative overflow-hidden">
      {/* Ambient background accents */}
      <BackgroundCircle size={380} color="#E0E7FF" opacity={0.4} className="-top-12 left-1/4 z-0" />
      <DottedPattern rows={6} cols={8} color="#2563EB" opacity={0.12} className="absolute top-8 right-8 z-0 hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2563EB] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={14} />
            <span>Publicação Oficial</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B2B5E] font-medium leading-tight">
            Manual Prático de Treinamento para Idosos
          </h2>
          <div className="h-0.5 w-12 bg-[#2563EB] mt-3 rounded-full" />
        </div>

        {/* E-book Spotlight Showcase Card */}
        <div className="ebook-anim-card bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-blue-100/90 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Interactive 3D Book Preview */}
            <div className="lg:col-span-5 flex flex-col items-center">
              
              {/* Tab Selector (Capa vs Páginas Internas) */}
              <div className="inline-flex p-1 bg-slate-100 rounded-xl mb-4 text-xs font-semibold text-[#1B2B5E] z-10">
                <button
                  type="button"
                  onClick={() => setActiveTab('cover')}
                  className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                    activeTab === 'cover' 
                      ? 'bg-[#2563EB] text-white shadow-sm font-bold' 
                      : 'text-[#4B5E8A] hover:text-[#1B2B5E]'
                  }`}
                >
                  Capa do Livro
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('inside')}
                  className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                    activeTab === 'inside' 
                      ? 'bg-[#2563EB] text-white shadow-sm font-bold' 
                      : 'text-[#4B5E8A] hover:text-[#1B2B5E]'
                  }`}
                >
                  Páginas Internas
                </button>
              </div>

              {/* Image Preview with Tilt and Zoom Click */}
              <TiltCard className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 group cursor-pointer bg-slate-50">
                <div onClick={() => setIsZoomOpen(true)} className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={currentImage}
                    alt={activeTab === 'cover' ? 'Capa do E-book Manual Prático de Treinamento para Idosos' : 'Páginas internas do E-book'}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-[2px]">
                    <Eye size={18} />
                    <span>Ampliar visualização</span>
                  </div>
                </div>
              </TiltCard>

              <span className="text-[11px] text-[#4B5E8A] mt-3 flex items-center gap-1.5">
                <BookOpen size={14} className="text-[#2563EB]" />
                Autora: Arielle Alexandre Martins
              </span>
            </div>

            {/* Right Column: E-book Information & Value Proposition */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold tracking-wider text-[#2563EB] uppercase bg-blue-50 px-3 py-1 rounded-full">
                    E-book Digital • PDF
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                    Acesso Imediato
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#1B2B5E] font-bold leading-snug mb-3">
                  Manual prático para desenvolver o raciocínio clínico na prescrição de exercícios para pessoas idosas
                </h3>

                <p className="text-[#4B5E8A] text-sm sm:text-base leading-relaxed mb-6">
                  Desenvolvido por quem atua diariamente na prática clínica e funcional do envelhecimento, este manual reúne a fundamentação e a visão estratégica que todo profissional precisa para avaliar, adaptar e prescrever treinos com segurança e resultados reais.
                </p>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="p-1 bg-blue-50 text-[#2563EB] rounded-full shrink-0 mt-0.5">
                        <CheckCircle2 size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#1B2B5E] leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#4B5E8A] mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Actions */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={ebookWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 h-[52px] flex items-center justify-center gap-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-7 rounded-xl text-sm shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <MessageCircle size={18} />
                  <span>Adquirir E-book via WhatsApp</span>
                  <ChevronRight size={16} />
                </a>

                <button
                  type="button"
                  onClick={onOpenModal}
                  className="w-full sm:w-auto h-[52px] flex items-center justify-center gap-2 border border-[#2563EB]/40 text-[#1B2B5E] hover:bg-[#F0F4FF] px-6 rounded-xl text-sm font-semibold transition-all bg-white active:scale-[0.98] cursor-pointer"
                >
                  <span>Tirar Dúvidas</span>
                  <ArrowRight size={16} className="text-[#2563EB]" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Modal de Zoom da Imagem */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomOpen(false)}
              className="absolute -top-12 right-0 p-2 text-white/90 hover:text-white bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X size={22} />
            </button>
            <img
              src={currentImage}
              alt="Visualização do E-book"
              className="max-h-[82vh] w-auto rounded-2xl object-contain shadow-2xl border border-white/20"
            />
          </div>
        </div>
      )}
    </section>
  );
}
