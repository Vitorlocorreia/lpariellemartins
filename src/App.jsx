import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileDrawer from './components/MobileDrawer';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import OfferingsSection from './components/OfferingsSection';
import WhyTrainSection from './components/WhyTrainSection';
import HowItWorks from './components/HowItWorks';
import ProductsShowcase from './components/ProductsShowcase';
import ProofGallery from './components/ProofGallery';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StickyMobileBar from './components/StickyMobileBar';
import { captureAndGetUtms, trackLeadConversion } from './utils/tracking';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const whatsappNumber = "5581986833360";
  const defaultMessage = "Olá Arielle! Gostaria de agendar minha consulta inicial e saber mais sobre seus acompanhamentos.";
  const [whatsappUrl, setWhatsappUrl] = useState(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`);

  useEffect(() => {
    // 1. Captura parâmetros UTM da URL e armazena na sessão
    const utms = captureAndGetUtms();
    let suffix = '';
    if (utms.utm_source) {
      suffix = `\n\n(Origem: ${utms.utm_source}${utms.utm_campaign ? ` / ${utms.utm_campaign}` : ''})`;
    }
    setWhatsappUrl(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage + suffix)}`);

    // 2. Ouvinte global para qualquer clique em links do WhatsApp -> dispara conversão no GA4
    const handleGlobalClick = (e) => {
      const link = e.target.closest('a[href*="wa.me"], a[href*="whatsapp.com"]');
      if (link) {
        const source = link.getAttribute('data-tracking-source') || 
                       link.getAttribute('aria-label') || 
                       link.innerText?.trim() || 
                       'whatsapp_link';
        trackLeadConversion(source);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FC] text-[#1B2B5E] selection:bg-[#2563EB] selection:text-white pb-16 md:pb-0 overflow-x-hidden w-full">
      {/* Navbar */}
      <Navbar 
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        whatsappUrl={whatsappUrl}
      />

      {/* Mobile Sidebar Navigation */}
      <MobileDrawer 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenModal={() => setIsBookingModalOpen(true)}
        whatsappUrl={whatsappUrl}
      />

      {/* Main Page Sections — Estrutura original com a nova copy encaixada */}
      <main className="flex-grow">
        {/* Section 1: Hero Section */}
        <Hero 
          onOpenModal={() => setIsBookingModalOpen(true)}
          whatsappUrl={whatsappUrl}
        />

        {/* Floating Stats Credibility Bar */}
        <StatsBar />

        {/* Section 2: Quem é Arielle Martins */}
        <AboutSection 
          onOpenModal={() => setIsBookingModalOpen(true)}
        />

        {/* Section 3: Conheça o e-book oficial */}
        <ProductsShowcase 
          onOpenModal={() => setIsBookingModalOpen(true)}
          whatsappUrl={whatsappUrl}
        />

        {/* Section 4: Escolha como posso te ajudar */}
        <OfferingsSection 
          onOpenModal={() => setIsBookingModalOpen(true)}
        />

        {/* Section 5: Por que treinar comigo? */}
        <WhyTrainSection />

        {/* Section 6: Como funciona */}
        <HowItWorks />

        {/* Section 7: Prova Real — galeria de fotos de autonomia funcional */}
        <ProofGallery />

        {/* Section 8: Perguntas Frequentes & Banner WhatsApp */}
        <FAQSection 
          onOpenModal={() => setIsBookingModalOpen(true)}
          whatsappUrl={whatsappUrl}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Form Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        whatsappNumber={whatsappNumber}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp whatsappUrl={whatsappUrl} />

      {/* Sticky Mobile CTA Bottom Bar */}
      <StickyMobileBar 
        onOpenModal={() => setIsBookingModalOpen(true)}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}
