import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, MessageCircle, ArrowRight, CheckCheck } from 'lucide-react';
import BackgroundCircle from './decorations/BackgroundCircle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── MOCKUP DE CELULAR SUPER CLEAN COM CHAT DA ARIELLE ── */
function CleanPhoneChatMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px]">
      
      {/* Corpo externo do celular (Estilo iPhone Clean Minimalista) */}
      <div className="relative rounded-[36px] bg-slate-900 p-2.5 shadow-2xl shadow-blue-900/15 border-4 border-slate-200">
        
        {/* Dynamic Island / Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-full z-30" />

        {/* Tela do Celular */}
        <div className="relative rounded-[28px] overflow-hidden bg-[#F4F7FB] flex flex-col">
          
          {/* Header do WhatsApp Clean */}
          <div className="bg-white border-b border-blue-50 px-4 pt-6 pb-3 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <img
                  src="/images/arielle-com-aluna.jpg"
                  alt="Arielle Martins"
                  className="w-10 h-10 rounded-full object-cover object-top border-2 border-white shadow-xs"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#22C55E] border-2 border-white" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-[#1B2B5E] leading-tight">Arielle Martins</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                </div>
                <span className="text-[10px] text-[#2563EB] font-medium block">
                  Especialista em Longevidade
                </span>
              </div>
            </div>
          </div>

          {/* Área de Conversa */}
          <div className="p-3.5 space-y-3 text-left min-h-[220px] flex flex-col justify-end bg-gradient-to-b from-[#F4F7FB] to-[#EAEFF8]">
            
            {/* Mensagem Enviada (Usuário) */}
            <div className="flex justify-end">
              <div className="bg-[#2563EB] text-white rounded-2xl rounded-tr-xs px-3.5 py-2 max-w-[84%] shadow-xs">
                <p className="text-[11px] leading-relaxed">
                  Olá Arielle! Gostaria de saber como funciona a consulta inicial para mim.
                </p>
                <div className="flex items-center justify-end gap-1 mt-0.5 text-[9px] text-blue-100">
                  <span>10:24</span>
                  <CheckCheck size={12} className="text-blue-200" />
                </div>
              </div>
            </div>

            {/* Mensagem Recebida (Arielle) */}
            <div className="flex justify-start">
              <div className="bg-white text-[#1B2B5E] rounded-2xl rounded-tl-xs px-3.5 py-2.5 max-w-[88%] shadow-xs border border-blue-50">
                <p className="text-[11px] leading-relaxed">
                  Olá! Que ótimo falar com você. Na consulta inicial, conversamos sobre seu histórico e rotina para traçar um plano seguro e focado na sua autonomia. Vamos agendar seu horário? 😊
                </p>
                <div className="flex items-center justify-end gap-1 mt-0.5 text-[9px] text-slate-400">
                  <span>10:25</span>
                </div>
              </div>
            </div>

          </div>

          {/* Barra de Input Simulada */}
          <div className="bg-white px-3 py-2.5 border-t border-blue-50 flex items-center justify-between gap-2">
            <div className="bg-[#F4F7FB] rounded-full px-3 py-1.5 text-[10px] text-[#4B5E8A] flex-grow text-left">
              Mensagem...
            </div>
            <div className="w-7 h-7 rounded-full bg-[#2563EB] flex items-center justify-center text-white shrink-0 shadow-xs">
              <ArrowRight size={13} />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default function FAQSection({ onOpenModal, whatsappUrl }) {
  const sectionRef = useRef(null);
  const [openIdx, setOpenIdx] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-item-anim",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, stagger: 0.08, duration: 0.6,
          ease: "power2.out", clearProps: "all",
          scrollTrigger: { trigger: section, start: "top 80%" }
        }
      );
    }, section);
    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      q: 'Como funciona a Consulta Inicial?',
      a: 'A Consulta Inicial é o momento dedicado a compreender seu histórico de saúde, sua rotina, suas necessidades e seus objetivos. É a partir dessa conversa detalhada que definimos o melhor caminho para o seu acompanhamento.'
    },
    {
      q: 'Os treinos são seguros para quem tem dores, artrose ou limitações de movimento?',
      a: 'Sim, totalmente. Não trabalho com treinos prontos ou genéricos. Cada movimento é planejado respeitando suas capacidades e limites articulares, fortalecendo a musculatura sem sobrecarga ou risco.'
    },
    {
      q: 'Qual a diferença entre o acompanhamento Presencial e o On-line?',
      a: 'No presencial, o atendimento é próximo e direto durante as sessões. No on-line, você recebe um planejamento personalizado desenvolvido para sua rotina, com orientação e acompanhamento contínuo da sua evolução à distância.'
    },
    {
      q: 'Para quem é indicado o acompanhamento?',
      a: 'Para adultos que desejam se preparar para envelhecer bem com força e autonomia, e também para quem já percebe mudanças na força, equilíbrio, mobilidade ou segurança para realizar as atividades do cotidiano.'
    },
    {
      q: 'Como faço para agendar a minha Consulta Inicial?',
      a: 'Basta clicar no botão "Agendar consulta inicial" aqui no site ou entrar em contato direto pelo WhatsApp. Alinharemos o melhor dia e horário para nossa conversa.'
    }
  ];

  const toggleFaq = (idx) => setOpenIdx(openIdx === idx ? -1 : idx);

  return (
    <section ref={sectionRef} id="faq" className="py-20 lg:py-28 bg-[#F4F7FC] relative overflow-hidden">
      <BackgroundCircle size={380} color="#E0E7FF" opacity={0.35} className="top-1/4 -right-20 z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#2563EB] uppercase block mb-3">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B2B5E] font-medium leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5E8A] mt-3 max-w-lg mx-auto leading-relaxed">
            Tire suas principais dúvidas sobre como funciona o meu acompanhamento especializado para adultos e idosos.
          </p>
          <div className="h-0.5 w-10 bg-[#2563EB] mx-auto mt-4 rounded-full" />
        </div>

        {/* ── Accordion ── */}
        <div className="space-y-3.5 max-w-3xl mx-auto mb-16 sm:mb-20">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="faq-item-anim bg-white rounded-2xl border border-blue-100/90 shadow-xs overflow-hidden transition-all duration-200 hover:border-blue-200">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif font-semibold text-[#1B2B5E] text-base sm:text-lg hover:text-[#2563EB] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#2563EB] text-white' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4B5E8A] leading-relaxed border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ─────────────────────────────────────────────
            CLEAN WHATSAPP CHAT SHOWCASE CARD
            Design 100% Harmônico com a Landing Page
            ───────────────────────────────────────────── */}
        <div className="relative max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-blue-100 shadow-lg shadow-blue-500/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Coluna Esquerda: Texto & CTA */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-5">
              
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2563EB] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                Atendimento Direto
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1B2B5E] font-medium leading-tight">
                Ainda tem alguma dúvida? Fale comigo agora.
              </h3>

              <p className="text-[#4B5E8A] text-sm sm:text-base leading-relaxed">
                Estou à disposição para entender o seu caso, tirar dúvidas sobre o acompanhamento e te orientar sobre o melhor caminho para sua saúde.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={whatsappUrl || "https://wa.me/5511999999999"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white px-7 py-4 rounded-xl font-bold text-sm sm:text-base shadow-md shadow-emerald-500/20 transition-all hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <MessageCircle size={20} className="fill-white" />
                  <span>Conversar no WhatsApp</span>
                </a>
              </div>

              <p className="text-[11px] text-[#4B5E8A] pt-1">
                Resposta rápida • Atendimento humanizado e sem compromisso
              </p>

            </div>

            {/* Coluna Direita: Mockup de Celular Clean com Chat */}
            <div className="lg:col-span-5 flex justify-center">
              <CleanPhoneChatMockup />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
