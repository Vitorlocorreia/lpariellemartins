import React, { useState, useRef } from 'react';
import { X, Calendar, Send } from 'lucide-react';
import { fireConfetti } from '../utils/confetti';

export default function BookingModal({ isOpen, onClose, whatsappNumber = "5511999999999" }) {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    bairro: '',
    paraQuem: 'Para mim',
    mensagem: ''
  });
  const submitBtnRef = useRef(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitBtnRef.current) {
      const rect = submitBtnRef.current.getBoundingClientRect();
      fireConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
    const text = `Olá Arielle! Gostaria de agendar uma avaliação gratuita.%0A%0A*Nome:* ${encodeURIComponent(formData.nome)}%0A*WhatsApp:* ${encodeURIComponent(formData.whatsapp)}%0A*Bairro/Cidade:* ${encodeURIComponent(formData.bairro)}%0A*Perfil:* ${encodeURIComponent(formData.paraQuem)}%0A*Mensagem:* ${encodeURIComponent(formData.mensagem || 'Tenho interesse em iniciar treinos focados na saúde e mobilidade.')}`;
    setTimeout(() => {
      window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
      onClose();
    }, 700);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-[#FDE68A] bg-white focus:outline-none focus:ring-2 focus:ring-[#EAB308]/40 focus:border-[#EAB308] text-[#1C1400] placeholder:text-[#44330A]/40 text-sm transition-all";
  const labelClass = "block text-xs font-bold uppercase tracking-wider text-[#44330A] mb-1.5";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1C1400]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-[#FAF6E4] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl shadow-[#1C1400]/20 z-10 overflow-y-auto max-h-[90vh] border border-[#FDE68A]">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#44330A] hover:bg-[#FDE68A]/60 rounded-full transition-colors"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-7">
          <div className="p-3 bg-[#FDE68A] text-[#1C1400] rounded-2xl">
            <Calendar size={22} />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#1C1400]">
              Agendar Avaliação Gratuita
            </h3>
            <p className="text-[#44330A] text-sm mt-1">
              Preencha e vou entrar em contato pelo WhatsApp.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={labelClass}>Seu Nome *</label>
            <input required type="text" placeholder="Como prefere ser chamado(a)?" value={formData.nome}
              onChange={e => setFormData(p => ({ ...p, nome: e.target.value }))} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>WhatsApp *</label>
            <input required type="tel" placeholder="(11) 99999-9999" value={formData.whatsapp}
              onChange={e => setFormData(p => ({ ...p, whatsapp: e.target.value }))} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Bairro / Cidade *</label>
            <input required type="text" placeholder="Ex: Pinheiros, São Paulo" value={formData.bairro}
              onChange={e => setFormData(p => ({ ...p, bairro: e.target.value }))} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>O treino é para quem?</label>
            <select value={formData.paraQuem}
              onChange={e => setFormData(p => ({ ...p, paraQuem: e.target.value }))}
              className={inputClass}>
              <option>Para mim</option>
              <option>Para familiar idoso</option>
              <option>Sou personal e quero mentoria</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Mensagem (opcional)</label>
            <textarea rows={3} placeholder="Conte um pouco sobre seus objetivos ou necessidades..." value={formData.mensagem}
              onChange={e => setFormData(p => ({ ...p, mensagem: e.target.value }))}
              className={`${inputClass} resize-none`} />
          </div>

          <button
            ref={submitBtnRef}
            type="submit"
            className="w-full flex items-center justify-center gap-2.5 bg-[#EAB308] hover:bg-[#CA8A04] text-[#1C1400] font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-yellow-500/25 transition-all text-base mt-2 active:scale-95"
          >
            <Send size={18} />
            <span>Enviar Solicitação via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
