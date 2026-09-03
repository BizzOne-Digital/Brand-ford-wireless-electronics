import React, { useState } from 'react';
import { PageRoute, ServiceCategoryItem, ProductItem } from './types';

// Component imports
import { Header } from './components/Header';
import { PromoBanner } from './components/PromoBanner';
import { Hero } from './components/Hero';
import { PageHero } from './components/PageHero';
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
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { Toast } from './components/Toast';

/** Interior page hero photography. One distinct photograph per page. */
const PAGE_IMAGES = {
  services: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1800&auto=format&fit=crop',
  products: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1800&auto=format&fit=crop',
  pricing: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1800&auto=format&fit=crop',
  team: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1800&auto=format&fit=crop',
  booking: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1800&auto=format&fit=crop',
  testimonials: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1800&auto=format&fit=crop',
  faq: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1800&auto=format&fit=crop',
  contact: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=1800&auto=format&fit=crop',
};

export function App() {
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

  const handleServiceInquire = (_serviceName: string) => {
    setSelectedService(null);
    setCurrentRoute('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-copy selection:bg-brand-600 selection:text-white antialiased overflow-x-hidden">
      {/* Toast Notifications */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Sticky Header Navigation */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onOpenLeadModal={() => setIsLeadModalOpen(true)}
      />

      {/* Page content. Top padding clears the fixed header for every route. */}
      <main id="main-content">
        {currentRoute === 'home' && (
          <>
            {/* What the business is, and how to reach it */}
            <Hero
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
              onOpenLeadModal={() => setIsLeadModalOpen(true)}
            />

            {/* Promotions: packages, new arrivals and repair offers */}
            <PromoBanner onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />

            <TrustStrip />

            {/* Everything tech, under one roof */}
            <ServicesOverview
              onSelectService={(service) => setSelectedService(service)}
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
            />

            {/* A short curated look at the showroom */}
            <ProductCatalog
              onNavigate={handleNavigate}
              onSelectProduct={(product) => setSelectedProduct(product)}
            />

            <TestimonialsSection onNavigate={handleNavigate} onNotify={showToast} />

            <ContactSection
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
              onNotify={showToast}
            />
          </>
        )}

        {currentRoute === 'services' && (
          <>
            <PageHero
              title="Everything tech, under one roof"
              subtitle="From everyday device needs to complex computer problems, we provide practical technology solutions you can rely on."
              image={PAGE_IMAGES.services}
            />
            <ServicesOverview
              hideHeader
              isFullPage
              onSelectService={(service) => setSelectedService(service)}
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
            />
            <FeaturedServices
              onSelectService={(service) => setSelectedService(service)}
              onOpenBooking={handleOpenBooking}
            />
            <PricingSection onNavigate={handleNavigate} onNotify={showToast} />
            <LeadBanner onNotify={showToast} />
          </>
        )}

        {currentRoute === 'products' && (
          <>
            <PageHero
              title="Products / Shop"
              subtitle="Smartphones, computing hardware, protective accessories and power essentials, all available to view in the showroom."
              image={PAGE_IMAGES.products}
            />
            <ProductCatalog
              hideHeader
              isFullPage
              onNavigate={handleNavigate}
              onSelectProduct={(product) => setSelectedProduct(product)}
            />
            <LeadBanner onNotify={showToast} />
          </>
        )}

        {currentRoute === 'pricing' && (
          <>
            <PageHero
              title="Pricing"
              subtitle="Every device and repair is different. We give upfront, transparent estimates based on your exact model and the work involved."
              image={PAGE_IMAGES.pricing}
            />
            <PricingSection hideHeader isFullPage onNavigate={handleNavigate} onNotify={showToast} />
            <FAQSection onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
          </>
        )}

        {currentRoute === 'testimonials' && (
          <>
            <PageHero
              title="What our customers say"
              subtitle="Real feedback from individuals, families and businesses across Brantford."
              image={PAGE_IMAGES.testimonials}
            />
            <TestimonialsSection hideHeader isFullPage onNavigate={handleNavigate} onNotify={showToast} />
            <WhyChooseUs onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
            <LeadBanner onNotify={showToast} />
          </>
        )}

        {currentRoute === 'faq' && (
          <>
            <PageHero
              title="Common questions and answers"
              subtitle="Clear answers about our devices, repair process, quotes and customer support."
              image={PAGE_IMAGES.faq}
            />
            <FAQSection hideHeader isFullPage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
            <ContactSection
              isFullPage
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
              onNotify={showToast}
            />
          </>
        )}

        {currentRoute === 'team' && (
          <>
            <PageHero
              title="Experience. Reliability. Customer care."
              subtitle="Meet the technology specialists behind Brantford Wireless and Electronics, committed to honest advice and careful work."
              image={PAGE_IMAGES.team}
            />
            <TeamSection hideHeader isFullPage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
            <AboutSection onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
            <WhyChooseUs onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
          </>
        )}

        {currentRoute === 'booking' && (
          <>
            <PageHero
              title="Book your service"
              subtitle="Schedule a diagnostic check, a device repair or a technology consultation. We confirm every request directly."
              image={PAGE_IMAGES.booking}
            />
            <BookingForm hideHeader isFullPage onNavigate={handleNavigate} onNotify={showToast} />
            <FAQSection onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
          </>
        )}

        {currentRoute === 'contact' && (
          <>
            <PageHero
              title="Contact Brantford Wireless"
              subtitle="Call for the fastest answer, or send a message and we will get back to you."
              image={PAGE_IMAGES.contact}
            />
            <ContactSection
              hideHeader
              isFullPage
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
              onNotify={showToast}
            />
            <FAQSection onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
          </>
        )}
      </main>

      {/* Modals */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={handleServiceInquire}
      />

      <ProductInquiryModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSubmitSuccess={showToast}
      />

      <LeadCaptureModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        onSubmitSuccess={showToast}
      />

      <PrivacyTermsModal
        type={privacyTermsType}
        onClose={() => setPrivacyTermsType(null)}
      />

      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onOpenPrivacyTerms={(type) => setPrivacyTermsType(type)}
      />

    </div>
  );
}

export default App;
