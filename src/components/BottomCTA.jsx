import React, { useEffect, useRef } from 'react';
import { Calendar, MessageCircle, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BottomCTA({ onOpenModal, whatsappUrl }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".cta-button-anim",
        { opacity: 0, scale: 0.92, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "back.out(1.5)",
          clearProps: "all",
          scrollTrigger: {
            trigger: section,
            start: "top 80%"
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-[#F4F7FC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Luxury CTA Card Container */}
        <div className="bg-gradient-to-br from-[#1B2B5E] via-[#111C40] to-[#1B2B5E] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl border border-blue-900/40 relative overflow-hidden text-white">
          
          {/* Ambient Lighting Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Text & Buttons */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-xs font-bold tracking-[0.18em] text-[#60A5FA] uppercase bg-blue-950/70 px-4 py-1.5 rounded-full border border-blue-500/30 inline-block">
                Atendimento Individualizado & Mentoria
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-white">
                Pronto para transformar sua saúde e qualidade de vida?
              </h2>

              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                Agende uma avaliação inicial gratuita com a Arielle. Vamos alinhar seus objetivos e criar um programa personalizado para mais força, autonomia e disposição.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={onOpenModal}
                  className="cta-button-anim w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 py-4 rounded-xl font-bold text-sm shadow-xl shadow-blue-500/30 transition-all active:scale-95 cursor-pointer"
                >
                  <Calendar size={19} />
                  <span>Agendar avaliação gratuita</span>
                </button>

                <a
                  href={whatsappUrl || "https://wa.me/5511999999999"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button-anim w-full sm:w-auto flex items-center justify-center gap-2.5 border border-white/20 text-white hover:bg-white/10 px-7 py-4 rounded-xl font-bold text-sm transition-all bg-white/5 backdrop-blur-md text-center cursor-pointer"
                >
                  <MessageCircle size={19} className="text-[#60A5FA]" />
                  <span>Falar pelo WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Arielle's Real Photo Banner */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-2 border-white/15 bg-blue-950 group">
                <img 
                  src="/images/about-arielle.jpg" 
                  alt="Arielle Martins Personal Trainer" 
                  className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B5E] via-transparent to-transparent opacity-85" />
                
                {/* Floating Personal Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/30">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-white">Arielle Martins</h3>
                    <span className="text-[11px] text-[#60A5FA] font-semibold">Especialista em Terceira Idade & Longevidade</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}


