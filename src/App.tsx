import React, { useState, useEffect } from 'react';
import { PageRoute, ServiceCategoryItem, ProductItem } from './types';
import { BUSINESS_INFO } from './data/mockData';

// Component imports
import { IntroLoader } from './components/IntroLoader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesOverview } from './components/ServicesOverview';
import { FeaturedServices } from './components/FeaturedServices';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductInquiryModal } from './components/ProductInquiryModal';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { TeamSection } from './components/TeamSection';
import { LeadBanner } from './components/LeadBanner';
import { LeadCaptureModal } from './components/LeadCaptureModal';
import { BookingForm } from './components/BookingForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { Toast } from './components/Toast';

export function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  
  // Modals & Interactivity
  const [selectedService, setSelectedService] = useState<ServiceCategoryItem | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [privacyTermsType, setPrivacyTermsType] = useState<'privacy' | 'terms' | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = () => {
    setCurrentRoute('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceInquire = (serviceName: string) => {
    setSelectedService(null);
    setCurrentRoute('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#030610] text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* 1. Intro Animation */}
      {showIntro && (
        <IntroLoader onComplete={() => setShowIntro(false)} />
      )}

      {/* 2. Toast Notifications */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

      {/* 3. Sticky Luxury Header Navigation */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onOpenLeadModal={() => setIsLeadModalOpen(true)}
      />

      {/* 4. Main Page Routing & Content */}
      <main id="main-content" className="relative z-10 pb-16 lg:pb-0">
        {currentRoute === 'home' && (
          <>
            {/* Cinematic Hero */}
            <Hero
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
              onOpenLeadModal={() => setIsLeadModalOpen(true)}
            />

            {/* Trust & Value Proposition Strip */}
            <TrustStrip onNavigate={handleNavigate} />

            {/* Services Overview Grid */}
            <ServicesOverview
              onSelectService={(service) => setSelectedService(service)}
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
            />

            {/* Alternating Featured Technology Solutions */}
            <FeaturedServices
              onSelectService={(service) => setSelectedService(service)}
              onOpenBooking={handleOpenBooking}
            />

            {/* Products & Tech Showcase */}
            <ProductCatalog
              onSelectProduct={(product) => setSelectedProduct(product)}
              onOpenLeadModal={() => setIsLeadModalOpen(true)}
            />

            {/* About the Business */}
            <AboutSection
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
            />

            {/* Why Choose Us: 4 Core Pillars */}
            <WhyChooseUs
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
            />

            {/* Transparent Pricing Framework & Interactive Quote Estimator */}
            <PricingSection
              onNavigate={handleNavigate}
              onNotify={showToast}
            />

            {/* Customer Testimonials & Reviews */}
            <TestimonialsSection
              onNavigate={handleNavigate}
              onNotify={showToast}
            />

            {/* FAQ Accordion with Search */}
            <FAQSection
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
            />

            {/* Personalized Lead Gen Banner */}
            <LeadBanner onNotify={showToast} />

            {/* Contact Hub with Direct Details */}
            <ContactSection
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
              onNotify={showToast}
            />
          </>
        )}

        {currentRoute === 'services' && (
          <div className="pt-8">
            <ServicesOverview
              isFullPage
              onSelectService={(service) => setSelectedService(service)}
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
            />
            <FeaturedServices
              onSelectService={(service) => setSelectedService(service)}
              onOpenBooking={handleOpenBooking}
            />
            <PricingSection onNotify={showToast} />
            <LeadBanner onNotify={showToast} />
          </div>
        )}

        {currentRoute === 'products' && (
          <div className="pt-8">
            <ProductCatalog
              isFullPage
              onSelectProduct={(product) => setSelectedProduct(product)}
              onOpenLeadModal={() => setIsLeadModalOpen(true)}
            />
            <LeadBanner onNotify={showToast} />
          </div>
        )}

        {currentRoute === 'pricing' && (
          <div className="pt-8">
            <PricingSection
              isFullPage
              onNavigate={handleNavigate}
              onNotify={showToast}
            />
            <FAQSection onOpenBooking={handleOpenBooking} />
          </div>
        )}

        {currentRoute === 'testimonials' && (
          <div className="pt-8">
            <TestimonialsSection
              isFullPage
              onNavigate={handleNavigate}
              onNotify={showToast}
            />
            <WhyChooseUs
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
            />
            <LeadBanner onNotify={showToast} />
          </div>
        )}

        {currentRoute === 'faq' && (
          <div className="pt-8">
            <FAQSection
              isFullPage
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
            />
            <ContactSection
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
              onNotify={showToast}
            />
          </div>
        )}

        {currentRoute === 'team' && (
          <div className="pt-8">
            <TeamSection
              isFullPage
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
            />
            <WhyChooseUs
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
            />
            <ContactSection
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
              onNotify={showToast}
            />
          </div>
        )}

        {currentRoute === 'booking' && (
          <div className="pt-8">
            <BookingForm
              isFullPage
              onNavigate={handleNavigate}
              onNotify={showToast}
            />
            <FAQSection onOpenBooking={handleOpenBooking} />
          </div>
        )}

        {currentRoute === 'contact' && (
          <div className="pt-8">
            <ContactSection
              isFullPage
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
              onNotify={showToast}
            />
            <FAQSection onOpenBooking={handleOpenBooking} />
          </div>
        )}
      </main>

      {/* 5. Modals */}
      
      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={handleServiceInquire}
      />

      {/* Product Inquiry Modal */}
      <ProductInquiryModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSubmitSuccess={showToast}
      />

      {/* Quick Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        onSubmitSuccess={showToast}
      />

      {/* Privacy Policy & Terms Modal */}
      <PrivacyTermsModal
        type={privacyTermsType}
        onClose={() => setPrivacyTermsType(null)}
      />

      {/* 6. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onOpenPrivacyTerms={(type) => setPrivacyTermsType(type)}
      />

      {/* 7. Mobile Bottom Quick Action Bar (Call Now, Book, Shop, Inquire) */}
      <MobileQuickBar
        onOpenBooking={handleOpenBooking}
        onOpenLeadModal={() => setIsLeadModalOpen(true)}
        onNavigate={handleNavigate}
      />

    </div>
  );
}

export default App;
