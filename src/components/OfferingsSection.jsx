import React, { useEffect, useRef } from 'react';
import { GraduationCap, User, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import DottedPattern from './decorations/DottedPattern';
import BackgroundCircle from './decorations/BackgroundCircle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OfferingsSection({ onOpenModal }) {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.offering-card');
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(cards, 
        { opacity: 0, y: 35, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
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
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const cards = [
    {
      icon: <User size={22} className="text-[#2563EB]" />,
      iconBg: 'bg-blue-50',
      badge: 'Treinamento Individualizado',
      title: 'Consultoria Online para Idosos',
      desc: 'Treinos personalizados e acompanhamento próximo para mais saúde, força, equilíbrio, autonomia e qualidade de vida.',
      btnText: 'Agendar avaliação',
      btnBg: 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-md shadow-blue-500/20',
      img: '/images/consultancy-card.jpg'
    },
    {
      icon: <GraduationCap size={22} className="text-[#2563EB]" />,
      iconBg: 'bg-blue-50',
      badge: 'Formação & Carreira',
      title: 'Mentoria para Personal Trainers',
      desc: 'Acompanhamento estratégico para profissionais que desejam se posicionar, atrair clientes e se destacar na longevidade.',
      btnText: 'Conhecer a mentoria',
      btnBg: 'bg-[#1B2B5E] hover:bg-[#111C40] text-white shadow-md shadow-blue-900/20',
      img: '/images/mentorship-card.jpg'
    },
    {
      icon: <BookOpen size={22} className="text-[#2563EB]" />,
      iconBg: 'bg-blue-50',
      badge: 'Materiais Exclusivos',
      title: 'E-books e Infoprodutos',
      desc: 'Guias práticos, manuais de exercícios e materiais baseados em evidências científicas para sua evolução contínua.',
      btnText: 'Ver materiais',
      btnBg: 'bg-white border-2 border-[#2563EB]/40 text-[#1B2B5E] hover:bg-blue-50',
      img: '/images/ebooks-card.jpg'
    }
  ];

  return (
    <section ref={sectionRef} id="programas" className="py-16 lg:py-24 bg-[#F4F7FC] relative overflow-hidden">
      {/* Background Accents */}
      <BackgroundCircle size={400} color="#E0E7FF" opacity={0.4} className="top-10 -left-20 z-0" />
      <DottedPattern rows={6} cols={8} color="#2563EB" opacity={0.12} className="absolute top-12 right-8 z-0 hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header with Navigation Arrows on Mobile/Tablet */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 text-center sm:text-left gap-4">
          <div>
            <span className="text-xs font-bold tracking-[0.15em] text-[#2563EB] uppercase mb-2 block">
              Serviços & Soluções
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1B2B5E] font-medium">
              Escolha como posso te ajudar
            </h2>
            <div className="h-1 w-12 bg-[#2563EB] mt-3 rounded-full mx-auto sm:mx-0"></div>
          </div>

          {/* Carousel Navigation Arrows for Mobile/Tablet */}
          <div className="flex md:hidden items-center gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-white border border-blue-100 text-[#1B2B5E] hover:bg-blue-50 flex items-center justify-center shadow-xs active:scale-95 transition-all"
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
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 pb-6 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {cards.map((c, i) => (
            <div 
              key={i} 
              className="offering-card w-[86vw] max-w-[360px] md:w-auto md:max-w-none snap-center shrink-0 bg-white rounded-3xl p-6 sm:p-8 border border-blue-100/80 shadow-md flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all duration-300 relative z-10"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${c.iconBg} flex items-center justify-center`}>
                    {c.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-[#2563EB] uppercase bg-blue-50 px-3 py-1 rounded-full">
                    {c.badge}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#1B2B5E] mb-3">
                  {c.title}
                </h3>

                <p className="text-[#334155] text-xs sm:text-sm leading-relaxed mb-6">
                  {c.desc}
                </p>

                <button
                  onClick={onOpenModal}
                  className={`w-full py-3.5 px-5 rounded-xl font-bold text-xs transition-all mb-6 ${c.btnBg}`}
                >
                  {c.btnText}
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden h-40 border border-gray-100">
                <img 
                  src={c.img} 
                  alt={c.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
