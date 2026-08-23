import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MobileDrawer from './components/MobileDrawer';
import Hero from './components/Hero';
import WhyTrainSection from './components/WhyTrainSection';
import HowItWorks from './components/HowItWorks';
import OfferingsSection from './components/OfferingsSection';
import ProofGallery from './components/ProofGallery';
import AboutSection from './components/AboutSection';
import BottomCTA from './components/BottomCTA';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StickyMobileBar from './components/StickyMobileBar';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá Arielle! Gostaria de agendar minha consulta inicial e saber mais sobre seus acompanhamentos.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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

      {/* Main Page Sections — Estrutura 1 a 10 aprovada */}
      <main className="flex-grow">
        {/* 1. ABERTURA: Hero Section */}
        <Hero 
          onOpenModal={() => setIsBookingModalOpen(true)}
          whatsappUrl={whatsappUrl}
        />

        {/* 2. SUA PROPOSTA & 3. PARA QUEM É */}
        <WhyTrainSection />

        {/* 4. MEU MÉTODO: Conhecer -> Planejar -> Treinar -> Acompanhar */}
        <HowItWorks />

        {/* 5. CONSULTA INICIAL, 7. PRESENCIAL, 8. ON-LINE: Modalidades de Atendimento */}
        <OfferingsSection 
          onOpenModal={() => setIsBookingModalOpen(true)}
        />

        {/* 6. RESULTADOS: "O resultado mais importante acontece fora do treino" + Galeria Bento */}
        <ProofGallery />

        {/* 9. SOBRE MIM: Arielle Martins - Especialista em Gerontologia */}
        <AboutSection 
          onOpenModal={() => setIsBookingModalOpen(true)}
        />

        {/* 10. ENCERRAMENTO: "Como você deseja viver os seus próximos anos?" */}
        <BottomCTA 
          onOpenModal={() => setIsBookingModalOpen(true)}
          whatsappUrl={whatsappUrl}
        />

        {/* Perguntas Frequentes & Banner WhatsApp */}
        <FAQSection 
          onOpenModal={() => setIsBookingModalOpen(true)}
          whatsappUrl={whatsappUrl}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Form Modal — Consulta Inicial */}
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
