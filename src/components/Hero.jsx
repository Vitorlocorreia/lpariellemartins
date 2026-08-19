import React, { useEffect, useRef } from 'react';
import { Calendar, GraduationCap } from 'lucide-react';
import gsap from 'gsap';

/* ── Typing effect hook ── */
function useTypingEffect(lines, speed = 55, delayBetween = 600) {
  const [displayedLines, setDisplayedLines] = React.useState(['', '']);
  const [done, setDone] = React.useState(false);

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let timeout;

    const type = () => {
      if (lineIdx >= lines.length) { setDone(true); return; }
      const currentLine = lines[lineIdx];
      if (charIdx <= currentLine.length) {
        setDisplayedLines(prev => {
          const next = [...prev];
          next[lineIdx] = currentLine.slice(0, charIdx);
          return next;
        });
        charIdx++;
        timeout = setTimeout(type, speed);
      } else {
        lineIdx++;
        charIdx = 0;
        timeout = setTimeout(type, delayBetween);
      }
    };

    // Start after initial GSAP fade-in (~0.8s)
    timeout = setTimeout(type, 900);
    return () => clearTimeout(timeout);
  }, []);

  return { displayedLines, done };
}

export default function Hero({ onOpenModal, whatsappUrl }) {
  const heroRef = useRef(null);
  const bgImgRef = useRef(null);

  // Parallax on scroll (desktop only)
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) return;
      const img = bgImgRef.current;
      if (!img) return;
      const scrollY = window.scrollY;
      img.style.transform = `translateY(${scrollY * 0.15}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP entrance
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.fromTo(".hero-real-img", { opacity: 0, scale: 1.03 }, { opacity: 1, scale: 1, duration: 0.9 });
      tl.fromTo(".hero-animate-text",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, clearProps: "all" },
        "-=0.6"
      );
      tl.fromTo(".hero-animate-cta",
        { opacity: 0, scale: 0.94, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.4)", clearProps: "all" },
        "-=0.4"
      );
    }, hero);
    return () => ctx.revert();
  }, []);

  // Typing lines (desktop)
  const { displayedLines } = useTypingEffect(
    ['Saúde que transforma vidas.', 'Conhecimento que forma profissionais.'],
    48, 500
  );

  return (
    <section ref={heroRef} id="inicio" className="relative lg:min-h-[92vh] flex flex-col justify-start lg:justify-center pt-0 lg:pt-20 pb-10 lg:pb-12 overflow-hidden bg-white">

      {/* ── DESKTOP: FOTO REAL COM FUSÃO SUAVE APENAS NA BORDA ESQUERDA ── */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[54%] xl:w-[50%] overflow-hidden z-0 pointer-events-none select-none">
        <img
          ref={bgImgRef}
          src="/images/arielle-hero-original.png"
          alt="Arielle Martins Personal Trainer"
          className="hero-real-img w-full h-full object-cover object-[center_top] will-change-transform"
        />

        {/* Gradiente suave apenas no canto esquerdo da foto */}
        <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/30 via-8% to-transparent to-20%" />
        
        {/* Leve fade no rodapé */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* ── MOBILE: FOTO REAL COM CORTE CURVADO ORGÂNICO ── */}
      <div className="lg:hidden relative w-full overflow-hidden mt-14 sm:mt-16 z-0">
        <div className="relative w-full h-[400px] sm:h-[480px] overflow-hidden">
          <img
            src="/images/arielle-hero-original.png"
            alt="Arielle Martins Personal Trainer"
            className="hero-real-img w-full h-full object-cover object-[center_top]"
          />
          
          {/* Curva convexa elegante na base da foto */}
          <div className="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
            <svg
              viewBox="0 0 500 55"
              preserveAspectRatio="none"
              className="w-full h-10 sm:h-14 text-white fill-current"
            >
              <path d="M0,0 C150,45 350,45 500,0 L500,55 L0,55 Z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full z-10 relative h-full flex flex-col lg:justify-center">

        {/* ── DESKTOP CONTENT ── */}
        <div className="hidden lg:flex flex-col max-w-[620px] text-left pt-8">

          <div className="hero-animate-text mb-5">
            <span className="text-[11px] font-bold tracking-[0.15em] text-[#2563EB] uppercase">
              Treinamento, Educação e Propósito
            </span>
            <div className="h-[2px] w-12 bg-[#2563EB] mt-2.5" />
          </div>

          {/* H1 com Typing Effect */}
          <h1 className="hero-animate-text font-serif text-[46px] leading-[1.12] font-normal tracking-tight mb-5 min-h-[115px]">
            <span className="text-[#1B2B5E] block mb-2">
              {displayedLines[0]}
              {displayedLines[0].length < 'Saúde que transforma vidas.'.length && (
                <span className="inline-block w-0.5 h-[1em] bg-[#2563EB] ml-0.5 animate-pulse align-middle" />
              )}
            </span>
            <span className="text-[#2563EB] font-semibold block">
              {displayedLines[1]}
              {displayedLines[0] === 'Saúde que transforma vidas.' &&
                displayedLines[1].length < 'Conhecimento que forma profissionais.'.length && (
                <span className="inline-block w-0.5 h-[0.85em] bg-[#2563EB] ml-0.5 animate-pulse align-middle" />
              )}
            </span>
          </h1>

          <p className="hero-animate-text text-base text-[#1B2B5E]/90 leading-relaxed max-w-lg mb-8">
            Ajudo idosos a conquistarem mais autonomia, força e qualidade de vida. E capacito personal trainers para se destacarem no mercado da longevidade.
          </p>

          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={onOpenModal}
              className="hero-animate-cta flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-7 py-3.5 rounded-xl text-sm shadow-md shadow-blue-500/20 transition-all active:scale-95 cursor-pointer"
            >
              <Calendar size={18} />
              <span>Agendar avaliação para idosos</span>
            </button>

            <a
              href="#programas"
              className="hero-animate-cta flex items-center justify-center gap-2 border border-[#2563EB] text-[#1B2B5E] hover:bg-[#F0F4FF] px-7 py-3.5 rounded-xl text-sm font-semibold transition-all bg-white active:scale-95 cursor-pointer"
            >
              <GraduationCap size={18} className="text-[#2563EB]" />
              <span>Conhecer a mentoria</span>
            </a>
          </div>
        </div>

        {/* ── MOBILE CONTENT ── */}
        <div className="lg:hidden w-full flex flex-col pt-5 pb-8 px-3 z-10 relative">
          <div className="hero-animate-text mb-3.5 text-left">
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#2563EB] uppercase">
              Treinamento, Educação e Propósito
            </span>
            <div className="h-[2px] w-10 bg-[#2563EB] mt-1.5" />
          </div>

          <h1 className="hero-animate-text font-serif text-[27px] sm:text-[32px] leading-[1.2] font-normal tracking-tight mb-3 text-left">
            <span className="text-[#1B2B5E] block mb-0.5">Saúde que transforma vidas.</span>
            <span className="text-[#2563EB] font-semibold block">Conhecimento que forma profissionais.</span>
          </h1>

          <p className="hero-animate-text text-[14px] text-[#2C3B5E] leading-relaxed mb-6 text-left">
            Ajudo idosos a conquistarem mais autonomia, força e qualidade de vida. E capacito personal trainers para se destacarem no mercado da longevidade.
          </p>

          <div className="flex flex-col gap-3 mb-2 w-full">
            <button
              onClick={onOpenModal}
              className="hero-animate-cta w-full h-[52px] flex items-center justify-center gap-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-5 rounded-xl text-[15px] shadow-md shadow-blue-500/20 transition-all active:scale-[0.98] cursor-pointer"
            >
              <Calendar size={19} />
              <span>Agendar avaliação para idosos</span>
            </button>

            <a
              href="#programas"
              className="hero-animate-cta w-full h-[52px] flex items-center justify-center gap-2.5 border border-[#2563EB]/40 text-[#1B2B5E] hover:bg-[#F0F4FF] px-5 rounded-xl font-semibold text-[15px] transition-all bg-white active:scale-[0.98] cursor-pointer"
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
