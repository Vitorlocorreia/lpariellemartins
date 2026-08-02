import React, { useEffect, useRef } from 'react';
import { Calendar, GraduationCap, User, BookOpen } from 'lucide-react';
import gsap from 'gsap';

export default function Hero({ onOpenModal, whatsappUrl }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(".hero-bg-img", 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.9 }
      );

      tl.fromTo(".hero-animate-text", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, clearProps: "all" },
        "-=0.6"
      );

      tl.fromTo(".hero-animate-cta", 
        { opacity: 0, scale: 0.94, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.4)", clearProps: "all" },
        "-=0.4"
      );
      
      tl.fromTo(".hero-animate-stats", 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, clearProps: "all" },
        "-=0.4"
      );

    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="inicio" className="relative lg:min-h-[95vh] flex flex-col justify-start lg:justify-center pt-0 lg:pt-24 pb-10 lg:pb-16 overflow-hidden bg-white lg:bg-transparent">
      {/* Desktop Background Image */}
      <img 
        src="/images/new-hero-desktop.jpg" 
        alt="Arielle Martins Personal Trainer - Hero Desktop" 
        className="hero-bg-img hidden lg:block absolute inset-0 w-full h-full object-cover object-[80%_top] z-0 contrast-[1.02] brightness-[1.01]"
      />

      {/* Mobile Background Image */}
      <img 
        src="/images/new-hero-mobile.jpg" 
        alt="Arielle Martins Personal Trainer - Hero Mobile" 
        className="hero-bg-img lg:hidden absolute top-0 left-0 w-full h-auto object-cover object-top z-0 contrast-[1.02] brightness-[1.01]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full z-10 relative h-full flex flex-col lg:justify-center">
        
        {/* DESKTOP CONTENT */}
        <div className="hidden lg:flex flex-col max-w-[650px] text-left pt-12">
          
          <div className="hero-animate-text mb-6">
            <span className="text-[11px] font-bold tracking-[0.15em] text-[#2563EB] uppercase">
              Treinamento, Educação e Propósito
            </span>
            <div className="h-[2px] w-12 bg-[#2563EB] mt-3"></div>
          </div>

          <h1 className="hero-animate-text font-serif text-[48px] leading-[1.1] font-normal tracking-tight mb-6">
            <span className="text-[#1B2B5E] block mb-2">Saúde que transforma vidas.</span>
            <span className="text-[#2563EB] font-semibold block">Conhecimento que forma profissionais.</span>
          </h1>

          <p className="hero-animate-text text-base text-[#1B2B5E] leading-relaxed max-w-lg mb-10 opacity-90">
            Ajudo idosos a conquistarem mais autonomia, força e qualidade de vida. E capacito personal trainers para se destacarem no mercado da longevidade.
          </p>

          <div className="flex items-center gap-4 mb-14">
            <button
              onClick={onOpenModal}
              className="hero-animate-cta flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 py-3.5 rounded-lg font-medium text-sm shadow-md shadow-blue-500/20 transition-all"
            >
              <Calendar size={18} />
              <span>Agendar avaliação para idosos</span>
            </button>

            <a
              href="#programas"
              className="hero-animate-cta flex items-center justify-center gap-2 border border-[#2563EB] text-[#1B2B5E] hover:bg-[#F0F4FF] px-7 py-3.5 rounded-lg font-medium text-sm transition-all bg-white"
            >
              <GraduationCap size={18} className="text-[#2563EB]" />
              <span>Conhecer a mentoria</span>
            </a>
          </div>
        </div>

        {/* MOBILE CONTENT */}
        <div className="lg:hidden w-full flex flex-col pt-[106vw] sm:pt-[450px] pb-8 px-3.5 z-10 relative mt-0">
          
          {/* Category Badge */}
          <div className="hero-animate-text mb-3 text-left">
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#2563EB] uppercase">
              Treinamento, Educação e Propósito
            </span>
            <div className="h-[2px] w-10 bg-[#2563EB] mt-1.5"></div>
          </div>

          {/* Heading H1 */}
          <h1 className="hero-animate-text font-serif text-[26px] sm:text-[30px] leading-[1.2] font-normal tracking-tight mb-3 text-left">
            <span className="text-[#1B2B5E] block mb-0.5">Saúde que transforma vidas.</span>
            <span className="text-[#2563EB] font-semibold block">Conhecimento que forma profissionais.</span>
          </h1>

          {/* Body Paragraph */}
          <p className="hero-animate-text text-[13.5px] text-[#2C3B5E] leading-relaxed mb-6 opacity-90 text-left">
            Ajudo idosos a conquistarem mais autonomia, força e qualidade de vida. E capacito personal trainers para se destacarem no mercado da longevidade.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 mb-2 w-full">
            <button
              onClick={onOpenModal}
              className="hero-animate-cta w-full h-[52px] flex items-center justify-center gap-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 rounded-xl font-semibold text-[15px] shadow-md shadow-blue-500/20 transition-all active:scale-[0.98]"
            >
              <Calendar size={19} />
              <span>Agendar avaliação para idosos</span>
            </button>

            <a
              href="#programas"
              className="hero-animate-cta w-full h-[52px] flex items-center justify-center gap-2.5 border border-[#2563EB]/40 text-[#1B2B5E] hover:bg-[#F0F4FF] px-5 rounded-xl font-semibold text-[15px] transition-all bg-white active:scale-[0.98]"
            >
              <GraduationCap size={19} className="text-[#2563EB]" />
              <span>Conhecer a mentoria</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
