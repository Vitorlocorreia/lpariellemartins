import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import BackgroundCircle from './decorations/BackgroundCircle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────────────────
   IPHONE PRO VECTORIZADO — 100% JSX/SVG, zero imagem externa
   ───────────────────────────────────────────────────────────── */
function IPhoneProMockup() {
  return (
    <div className="relative" style={{ width: 220, height: 440 }}>

      {/* ── Botões físicos laterais ── */}
      {/* Volume Up */}
      <div style={{
        position: 'absolute', left: -5, top: 98,
        width: 4, height: 26, background: 'linear-gradient(to right,#555,#888)',
        borderRadius: '2px 0 0 2px', boxShadow: '-1px 0 2px rgba(0,0,0,.5)'
      }} />
      {/* Volume Down */}
      <div style={{
        position: 'absolute', left: -5, top: 132,
        width: 4, height: 26, background: 'linear-gradient(to right,#555,#888)',
        borderRadius: '2px 0 0 2px', boxShadow: '-1px 0 2px rgba(0,0,0,.5)'
      }} />
      {/* Action Button */}
      <div style={{
        position: 'absolute', left: -5, top: 70,
        width: 4, height: 18, background: 'linear-gradient(to right,#555,#888)',
        borderRadius: '2px 0 0 2px', boxShadow: '-1px 0 2px rgba(0,0,0,.5)'
      }} />
      {/* Power Button */}
      <div style={{
        position: 'absolute', right: -5, top: 110,
        width: 4, height: 38, background: 'linear-gradient(to left,#555,#888)',
        borderRadius: '0 2px 2px 0', boxShadow: '1px 0 2px rgba(0,0,0,.5)'
      }} />

      {/* ── Corpo principal do iPhone (frame titânio) ── */}
      <div style={{
        position: 'absolute', inset: 0,
        borderRadius: 44,
        background: 'linear-gradient(145deg,#6b7280 0%,#374151 30%,#1f2937 55%,#374151 80%,#6b7280 100%)',
        boxShadow: `
          0 0 0 1px rgba(255,255,255,.18),
          0 20px 60px rgba(0,0,0,.55),
          0 8px 20px rgba(0,0,0,.45),
          inset 0 1px 0 rgba(255,255,255,.15)
        `,
        padding: 6,
      }}>

        {/* ── Tela (bezel interno escuro) ── */}
        <div style={{
          borderRadius: 38,
          background: '#000',
          height: '100%',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: 'inset 0 0 20px rgba(0,0,0,.8)',
        }}>

          {/* ── Dynamic Island ── */}
          <div style={{
            position: 'absolute', top: 10, left: '50%',
            transform: 'translateX(-50%)',
            width: 88, height: 26,
            background: '#000',
            borderRadius: 20,
            zIndex: 30,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 8px',
            boxShadow: '0 0 0 1px rgba(255,255,255,.06)',
          }}>
            {/* Câmera frontal */}
            <div style={{
              width: 10, height: 10, borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%,#1e3a5f,#0a0f1a)',
              border: '1px solid #1a2a3a',
            }} />
            {/* Sensor */}
            <div style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#0f1923', border: '1px solid #1a2a3a'
            }} />
          </div>

          {/* ── Fundo da tela — WhatsApp ── */}
          <div style={{
            height: '100%',
            background: '#E5DDD5',
            paddingTop: 44,
            display: 'flex',
            flexDirection: 'column',
            fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: 11,
          }}>

            {/* Status bar iOS */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: 44, display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', padding: '4px 14px 0',
              zIndex: 20, color: '#fff',
            }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: -.2 }}>9:41</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                {/* Signal bars */}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="white">
                  <rect x="0" y="6" width="2.5" height="4" rx="0.5"/>
                  <rect x="3.5" y="4" width="2.5" height="6" rx="0.5"/>
                  <rect x="7" y="2" width="2.5" height="8" rx="0.5"/>
                  <rect x="10.5" y="0" width="2.5" height="10" rx="0.5"/>
                </svg>
                {/* Wifi */}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="white">
                  <path d="M7 8.5a1 1 0 100 2 1 1 0 000-2z"/>
                  <path d="M3.5 6.2C4.5 5.1 5.7 4.5 7 4.5s2.5.6 3.5 1.7" strokeWidth="1.2" stroke="white" fill="none" strokeLinecap="round"/>
                  <path d="M1 3.8C2.7 1.9 4.7 1 7 1s4.3.9 6 2.8" strokeWidth="1.2" stroke="white" fill="none" strokeLinecap="round"/>
                </svg>
                {/* Battery */}
                <svg width="22" height="11" viewBox="0 0 22 11" fill="white">
                  <rect x="0.5" y="0.5" width="18" height="10" rx="2.5" stroke="white" strokeWidth="1" fill="none" opacity=".7"/>
                  <rect x="2" y="2" width="13" height="7" rx="1.5" fill="white"/>
                  <path d="M20 3.5v4a2 2 0 000-4z" fill="white" opacity=".5"/>
                </svg>
              </div>
            </div>

            {/* WhatsApp Header Bar */}
            <div style={{
              background: 'linear-gradient(to bottom, #075E54, #064e46)',
              color: '#fff',
              padding: '8px 12px',
              display: 'flex', alignItems: 'center', gap: 8,
              boxShadow: '0 2px 8px rgba(0,0,0,.2)',
              flexShrink: 0,
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'linear-gradient(135deg,#25D366,#075E54)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: 13, color: '#fff', flexShrink: 0,
                boxShadow: '0 2px 6px rgba(0,0,0,.3)',
              }}>A</div>
              <div style={{ flexGrow: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 12, lineHeight: 1.2, letterSpacing: -.1 }}>
                  Arielle Martins
                </div>
                <div style={{ fontSize: 9.5, opacity: .8 }}>online</div>
              </div>
            </div>

            {/* Chat Bubbles */}
            <div style={{
              flex: 1, padding: '10px 8px', display: 'flex',
              flexDirection: 'column', gap: 8, overflow: 'hidden',
            }}>

              {/* Mensagem recebida */}
              <div style={{
                background: '#fff', borderRadius: '14px 14px 14px 2px',
                padding: '7px 9px', maxWidth: '85%',
                boxShadow: '0 1px 3px rgba(0,0,0,.12)',
                color: '#222',
              }}>
                <div style={{ fontSize: 10.5, lineHeight: 1.4 }}>
                  Olá Arielle! Quero saber mais sobre o treino para idosos 🙋‍♀️
                </div>
                <div style={{ fontSize: 8.5, color: '#999', textAlign: 'right', marginTop: 3 }}>14:28</div>
              </div>

              {/* Mensagem enviada */}
              <div style={{
                background: '#DCF8C6', borderRadius: '14px 14px 2px 14px',
                padding: '7px 9px', maxWidth: '85%', alignSelf: 'flex-end',
                boxShadow: '0 1px 3px rgba(0,0,0,.12)',
                color: '#111',
              }}>
                <div style={{ fontSize: 10.5, lineHeight: 1.4 }}>
                  Olá! 😊 Posso te ajudar. Qual é a sua principal necessidade?
                </div>
                <div style={{ fontSize: 8.5, color: '#4caf50', textAlign: 'right', marginTop: 3 }}>14:30 ✓✓</div>
              </div>

              {/* Mensagem recebida 2 */}
              <div style={{
                background: '#fff', borderRadius: '14px 14px 14px 2px',
                padding: '7px 9px', maxWidth: '80%',
                boxShadow: '0 1px 3px rgba(0,0,0,.12)',
                color: '#222',
              }}>
                <div style={{ fontSize: 10.5, lineHeight: 1.4 }}>
                  Minha mãe tem 72 anos e quero fortalecer ela 💪
                </div>
                <div style={{ fontSize: 8.5, color: '#999', textAlign: 'right', marginTop: 3 }}>14:31</div>
              </div>
            </div>

            {/* Input Bar */}
            <div style={{
              background: '#F0F0F0',
              padding: '6px 8px',
              display: 'flex', alignItems: 'center', gap: 6,
              flexShrink: 0,
            }}>
              <div style={{
                flex: 1, background: '#fff', borderRadius: 18,
                padding: '5px 10px', fontSize: 10, color: '#999',
                boxShadow: '0 1px 2px rgba(0,0,0,.1)',
              }}>Mensagem</div>
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: 'linear-gradient(135deg,#25D366,#075E54)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, boxShadow: '0 2px 6px rgba(0,0,0,.25)',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </div>
            </div>

            {/* Home Indicator */}
            <div style={{
              height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: '#E5DDD5', flexShrink: 0,
            }}>
              <div style={{
                width: 60, height: 3.5, borderRadius: 2,
                background: 'rgba(0,0,0,.2)',
              }} />
            </div>
          </div>

          {/* Reflexo da tela */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,.07) 0%, transparent 60%)',
            borderRadius: 38, pointerEvents: 'none', zIndex: 50,
          }} />
        </div>
      </div>

      {/* ── Reflexo do frame ── */}
      <div style={{
        position: 'absolute', inset: 0,
        borderRadius: 44,
        background: 'linear-gradient(135deg, rgba(255,255,255,.12) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   FAQ SECTION
   ───────────────────────────────────────────────────────────── */
export default function FAQSection({ onOpenModal, whatsappUrl }) {
  const [openIdx, setOpenIdx] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-item-anim",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, stagger: 0.1, duration: 0.7,
          ease: "power2.out", clearProps: "all",
          scrollTrigger: { trigger: section }
        }
      );
    }, section);
    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      q: 'Os treinos são seguros para idosos com dores, artrose ou próteses?',
      a: 'Com certeza! Cada treino é 100% individualizado. Antes de iniciar, realizamos uma anamnese detalhada do histórico de saúde, exames e limitações para montar exercícios funcionais seguros que fortalecem sem causar dor ou sobrecarga.'
    },
    {
      q: 'Como funciona a Consultoria Online vs Atendimento Presencial?',
      a: 'No atendimento presencial, Arielle acompanha a aula ao vivo. Na consultoria online, o aluno recebe o planejamento personalizado no aplicativo com vídeos explicativos gravados e acompanhamento próximo via WhatsApp para correção de postura e dúvidas.'
    },
    {
      q: 'Como funciona a Mentoria para Personal Trainers?',
      a: 'A mentoria é voltada para profissionais de Educação Física que querem se posicionar no mercado da longevidade, aprender metodologias práticas de atendimento na terceira idade, precificação e captação de alunos.'
    },
    {
      q: 'Preciso de equipamentos de academia para começar?',
      a: 'Não é necessário ter academia! Os treinos podem ser adaptados para o ambiente da sua casa utilizando o peso do próprio corpo, elásticos, cadeiras e halteres leves, ou desenvolvidos na academia do seu prédio ou condomínio.'
    },
    {
      q: 'Como faço para agendar a primeira avaliação?',
      a: 'Basta clicar nos botões "Agendar Avaliação" ou chamar diretamente no WhatsApp. Alinharemos o melhor dia e horário para conversar e entender os seus objetivos ou de seu familiar.'
    }
  ];

  const toggleFaq = (idx) => setOpenIdx(openIdx === idx ? -1 : idx);

  return (
    <section ref={sectionRef} id="faq" className="py-16 lg:py-24 bg-[#FAF6E4] relative overflow-hidden">
      <BackgroundCircle size={380} color="#E0E7FF" opacity={0.35} className="top-1/4 -right-20 z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.15em] text-[#EAB308] uppercase mb-2 bg-yellow-50 px-3 py-1 rounded-full border border-[#FDE68A]">
            <HelpCircle size={14} />
            <span>Dúvidas Frequentes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1400] font-medium mt-2">
            Perguntas Frequentes
          </h2>
          <p className="text-xs sm:text-sm text-[#44330A] mt-2 max-w-lg mx-auto">
            Tire suas principais dúvidas sobre o treinamento para idosos e a mentoria para profissionais.
          </p>
          <div className="h-1 w-12 bg-[#EAB308] mx-auto mt-4 rounded-full" />
        </div>

        {/* ── Accordion ── */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="faq-item-anim bg-white rounded-2xl border border-[#FDE68A]/80 shadow-xs overflow-hidden transition-all duration-200">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-[#1C1400] text-sm sm:text-base hover:text-[#EAB308] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-yellow-50 text-[#EAB308] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#EAB308] text-[#1C1400]' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#44330A] leading-relaxed border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ─────────────────────────────────────────────
            WHATSAPP CTA BANNER — iPhone vetorizado
            "vazando" do card verde para cima/baixo
            ───────────────────────────────────────────── */}
        <div className="mt-20 relative">

          {/* Card Verde */}
          <div className="bg-gradient-to-br from-[#22C55E] via-[#16A34A] to-[#15803D] rounded-3xl text-white shadow-2xl border border-green-400/20 relative overflow-visible">

            {/* Glows decorativos */}
            <div className="absolute -top-10 -left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-52 h-52 bg-black/10 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-0 relative z-10 px-6 sm:px-10 py-10 lg:py-14">

              {/* ── Coluna do iPhone — vaza acima e abaixo ── */}
              <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
                <div
                  style={{
                    marginTop: -80,
                    marginBottom: -80,
                    filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.5))',
                    transform: 'rotate(-4deg)',
                    transition: 'transform .4s ease',
                  }}
                  className="hover:rotate-0"
                >
                  <IPhoneProMockup />
                </div>
              </div>

              {/* ── iPhone mobile (centralizado, menor) ── */}
              <div className="lg:hidden flex justify-center mb-8">
                <div style={{
                  filter: 'drop-shadow(0 18px 32px rgba(0,0,0,0.45))',
                  transform: 'scale(0.85)',
                }}>
                  <IPhoneProMockup />
                </div>
              </div>

              {/* ── Coluna de texto e CTA ── */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:pl-6">

                {/* Ícone WhatsApp grande */}
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                  <svg viewBox="0 0 32 32" width="30" height="30" fill="white">
                    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.43.655 4.71 1.8 6.67L2 30l7.53-1.77A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.89-1.6l-.42-.25-4.47 1.05 1.07-4.36-.28-.44A11.6 11.6 0 1116 27.6zm6.33-8.67c-.35-.17-2.05-1.01-2.37-1.13-.32-.12-.55-.17-.78.17-.23.35-.9 1.13-1.1 1.36-.2.23-.4.26-.75.09-.35-.17-1.48-.55-2.82-1.74-1.04-.93-1.74-2.08-1.95-2.43-.2-.35-.02-.54.15-.71.16-.16.35-.41.52-.62.17-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.58-.28-.68-.56-.59-.78-.6h-.66c-.23 0-.6.09-.91.43-.32.35-1.2 1.17-1.2 2.86 0 1.69 1.23 3.32 1.4 3.55.17.23 2.42 3.69 5.86 5.17.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.05-.84 2.34-1.65.29-.81.29-1.5.2-1.65-.09-.15-.32-.24-.67-.41z"/>
                  </svg>
                </div>

                <h3 className="font-sans font-black text-2xl sm:text-3xl lg:text-[2.1rem] text-white tracking-wide uppercase leading-tight">
                  MAIS ALGUMA<br />DÚVIDA?
                </h3>

                <p className="text-white/90 text-sm sm:text-base font-medium leading-relaxed max-w-sm">
                  Fale diretamente com a Arielle pelo WhatsApp. Ela responde com rapidez e clareza!
                </p>

                <a
                  href={whatsappUrl || "https://wa.me/5511999999999"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-[#15803D] px-8 py-4 rounded-xl font-black text-sm tracking-wider uppercase shadow-xl transition-all active:scale-95 cursor-pointer border border-white/50 mt-2"
                >
                  <svg viewBox="0 0 32 32" width="18" height="18" fill="#15803D">
                    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.43.655 4.71 1.8 6.67L2 30l7.53-1.77A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 01-5.89-1.6l-.42-.25-4.47 1.05 1.07-4.36-.28-.44A11.6 11.6 0 1116 27.6zm6.33-8.67c-.35-.17-2.05-1.01-2.37-1.13-.32-.12-.55-.17-.78.17-.23.35-.9 1.13-1.1 1.36-.2.23-.4.26-.75.09-.35-.17-1.48-.55-2.82-1.74-1.04-.93-1.74-2.08-1.95-2.43-.2-.35-.02-.54.15-.71.16-.16.35-.41.52-.62.17-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.58-.28-.68-.56-.59-.78-.6h-.66c-.23 0-.6.09-.91.43-.32.35-1.2 1.17-1.2 2.86 0 1.69 1.23 3.32 1.4 3.55.17.23 2.42 3.69 5.86 5.17.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.05-.84 2.34-1.65.29-.81.29-1.5.2-1.65-.09-.15-.32-.24-.67-.41z"/>
                  </svg>
                  <span>ENTRAR EM CONTATO</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


