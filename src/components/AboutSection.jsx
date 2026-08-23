import React, { useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';
import DottedPattern from './decorations/DottedPattern';
import BackgroundCircle from './decorations/BackgroundCircle';
import WaveLine from './decorations/WaveLine';
import Signature from './Signature';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection({ onOpenModal }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".about-animate-img", 
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: section
          }
        }
      );

      gsap.fromTo(".about-animate-content", 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: section
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="sobre" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Glow & Geometric Accent Patterns */}
      <BackgroundCircle size={450} color="#E0E7FF" opacity={0.5} className="-top-20 -left-20" />
      <DottedPattern rows={6} cols={6} color="#2563EB" opacity={0.15} className="absolute top-10 right-8 z-0 hidden sm:block" />
      <WaveLine variant={2} color="#2563EB" opacity={0.25} className="absolute bottom-6 right-12 z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Photo of Arielle */}
          <div className="lg:col-span-6 relative about-animate-img">
            <BackgroundCircle size={320} color="#DBEAFE" opacity={0.6} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white z-10">
              <img 
                src="/images/arielle-com-aluna.jpg" 
                alt="Arielle Martins auxiliando aluna idosa nos exercícios" 
                className="w-full h-[420px] sm:h-[520px] object-cover"
                style={{ objectPosition: 'center 8%' }}
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-md border border-blue-100/50">
                <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-wider block">Especialista</span>
                <span className="text-xs font-semibold text-[#1B2B5E]">Gerontologia & Exercício para Idosos</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Text & Signature */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative about-animate-content">
              <span className="text-xs font-bold tracking-[0.15em] text-[#2563EB] uppercase mb-2 block">
                Sobre Mim
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1B2B5E] font-medium">
                Arielle Martins
              </h2>
            </div>

            <p className="text-base font-semibold text-[#2563EB] leading-relaxed about-animate-content">
              Profissional de Educação Física e pós-graduanda em Gerontologia, com atuação voltada ao exercício físico para adultos e idosos.
            </p>

            <p className="text-[#4B5E8A] text-sm sm:text-base leading-relaxed about-animate-content">
              Meu trabalho parte de uma ideia simples: <strong className="text-[#1B2B5E]">não basta acrescentar anos à vida. É preciso preservar a capacidade de vivê-los bem.</strong>
            </p>

            <p className="text-[#4B5E8A] text-sm sm:text-base leading-relaxed about-animate-content">
              Por isso, estudo o envelhecimento para transformar conhecimento em um treinamento que tenha sentido na vida real.
            </p>

            {/* Cursive SVG Signature */}
            <div className="pt-2 about-animate-content">
              <Signature width={240} height={75} color="#1B2B5E" />
            </div>

            <div className="pt-2 about-animate-content">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 py-3.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-blue-500/20 active:scale-95 cursor-pointer"
              >
                <Calendar size={16} />
                <span>Agendar consulta inicial</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
