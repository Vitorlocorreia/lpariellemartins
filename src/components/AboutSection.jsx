import React, { useEffect, useRef } from 'react';
import { User } from 'lucide-react';
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
    <section ref={sectionRef} id="sobre" className="py-16 lg:py-24 bg-[#FAF6EF] relative overflow-hidden">
      {/* Background Glow & Geometric Accent Patterns */}
      <BackgroundCircle size={450} color="#E0E7FF" opacity={0.5} className="-top-20 -left-20" />
      <DottedPattern rows={6} cols={6} color="#C8951C" opacity={0.15} className="absolute top-10 right-8 z-0 hidden sm:block" />
      <WaveLine variant={2} color="#C8951C" opacity={0.25} className="absolute bottom-6 right-12 z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Photo of Arielle */}
          <div className="lg:col-span-6 relative about-animate-img">
            <BackgroundCircle size={320} color="#DBEAFE" opacity={0.6} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white z-10">
              <img 
                src="/images/about-arielle.jpg" 
                alt="Arielle Martins auxiliando aluna idosa nos exercícios" 
                className="w-full h-[360px] sm:h-[440px] object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-[#E8D4A0]/50">
                <span className="text-[11px] font-bold text-[#C8951C] uppercase tracking-wider block">Especialista</span>
                <span className="text-xs font-semibold text-[#3B2000]">Longevidade & Terceira Idade</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Text & Signature */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative about-animate-content">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#3B2000] font-medium">
                Quem é Arielle Martins
              </h2>
              <WaveLine variant={3} color="#C8951C" opacity={0.5} className="mt-2" />
            </div>

            <p className="text-[#7C5C1E] text-sm sm:text-base leading-relaxed about-animate-content">
              Personal Trainer especialista em idosos e apaixonada pelo poder do movimento para transformar vidas. Minha missão é promover saúde, autonomia e bem-estar para meus alunos e, ao mesmo tempo, capacitar personal trainers a se tornarem referência no mercado da longevidade.
            </p>

            {/* Cursive SVG Signature Animated via GSAP */}
            <div className="pt-2 about-animate-content">
              <Signature width={240} height={75} color="#3B2000" />
            </div>

            <div className="pt-1 about-animate-content">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 border-2 border-[#C8951C] text-[#3B2000] hover:bg-[#C8951C] hover:text-white px-6 py-3 rounded-xl text-xs font-bold transition-all bg-white shadow-xs"
              >
                <User size={16} />
                <span>Conheça minha trajetória</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
