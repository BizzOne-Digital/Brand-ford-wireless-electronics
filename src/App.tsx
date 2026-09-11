import React, { useState } from 'react';
import { PageRoute, ProductItem } from './types';
import { SERVICES_DATA, SERVICE_BOOKING_OPTION } from './data/mockData';
import { STORE_MEDIA } from './data/media';
import { DEMO_IMAGE } from './data/demoMedia';

import { Header } from './components/Header';
import { PromoBanner } from './components/PromoBanner';
import { AdBanner } from './components/AdBanner';
import { Hero } from './components/Hero';
import { PageHero } from './components/PageHero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesOverview } from './components/ServicesOverview';
import { ServiceDetail } from './components/ServiceDetail';
import { FeaturedWork } from './components/FeaturedWork';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductInquiryModal } from './components/ProductInquiryModal';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { TeamSection } from './components/TeamSection';
import { BookingForm } from './components/BookingForm';
import { ContactSection } from './components/ContactSection';
import { MobileQuickBar } from './components/MobileQuickBar';
import { Footer } from './components/Footer';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { Toast } from './components/Toast';

/**
 * Interior page hero photography. One photograph per page, declared once.
 * Pages that lead with the store's own artwork use it in preference to stock.
 */
const PAGE_IMAGES = {
  /* Read from the media registry rather than pasted URLs, so swapping in the
     store's own photography is a one-line change there. Each page gets a
     different photograph: the same image twice in a row reads as a bug. */
  services: DEMO_IMAGE.texturedPhone,
  products: DEMO_IMAGE.accessoriesFlatlay,
  booking: DEMO_IMAGE.benchTools,
  contact: DEMO_IMAGE.deskPhone,
};

export function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  /** Which service the `service` route is showing. */
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  /** Prefills the booking form when a service page sends someone to it. */
  const [bookingService, setBookingService] = useState('');

  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [privacyTermsType, setPrivacyTermsType] = useState<'privacy' | 'terms' | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => setToastMessage(msg);

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    toTop();
  };

  const handleOpenService = (serviceId: string) => {
    setActiveServiceId(serviceId);
    setCurrentRoute('service');
    toTop();
  };

  const handleOpenBooking = () => {
    setBookingService('');
    setCurrentRoute('booking');
    toTop();
  };

  /** Sends a visitor to the booking page with the service already chosen. */
  const handleBookService = (serviceId: string) => {
    setBookingService(SERVICE_BOOKING_OPTION[serviceId] ?? 'Other');
    setCurrentRoute('booking');
    toTop();
  };

  const activeService =
    SERVICES_DATA.find((s) => s.id === activeServiceId) ?? SERVICES_DATA[0];

  return (
    /* overflow-x-clip rather than -hidden: see the note in index.css. */
    <div className="min-h-screen overflow-x-clip bg-white text-copy antialiased selection:bg-brand-600 selection:text-white">
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* The mobile quick bar is fixed to the bottom, so main clears it. */}
      <main id="main-content" className="pb-20 lg:pb-0">
        {currentRoute === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />

            <TrustStrip />

            {/* Services as photography. Each tile opens that service's page. */}
            <ServicesOverview
              onOpenService={handleOpenService}
              onSeeAll={() => handleNavigate('services')}
            />

            {/* The store's own wrapping banner, at full width. */}
            <div className="shell pb-4">
              <AdBanner
                media={{
                  kind: 'image',
                  src: STORE_MEDIA.wrappingBanner,
                  alt: 'Custom device wrapping: phones, laptops, consoles and controllers in marble, carbon and abstract finishes',
                }}
                action="Custom device wrapping"
                onActivate={() => handleOpenService('device-wrapping')}
              />
            </div>

            <FeaturedWork onOpenService={handleOpenService} onNavigate={handleNavigate} />

            <BeforeAfterShowcase onOpenService={handleOpenService} />

            <ProductCatalog
              onSeeAll={() => handleNavigate('products')}
              onSelectProduct={setSelectedProduct}
            />

            {/* The store's own custom PC banner, leading into the store. */}
            <div className="shell pb-4">
              <AdBanner
                media={{
                  kind: 'image',
                  src: STORE_MEDIA.pcBuildsBanner,
                  alt: 'Custom PC builds by Brantford Wireless, for gaming, work, school and home',
                }}
                action="Custom PC builds"
                onActivate={() => handleOpenService('computer-repairs')}
              />
            </div>

            <PromoBanner
              onNavigate={handleNavigate}
              onOpenService={handleOpenService}
              onOpenBooking={handleOpenBooking}
            />

            <TestimonialsSection onNotify={showToast} />

            <TeamSection />

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
              subtitle="Pick a service to see the work."
              image={PAGE_IMAGES.services}
            />

            <ServicesOverview hideHeader isFullPage onOpenService={handleOpenService} />

            <div className="shell pb-4">
              <AdBanner
                media={{
                  kind: 'image',
                  src: STORE_MEDIA.wrappingBanner,
                  alt: 'Custom device wrapping: phones, laptops, consoles and controllers in marble, carbon and abstract finishes',
                }}
                action="Custom device wrapping"
                onActivate={() => handleOpenService('device-wrapping')}
              />
            </div>

            <BeforeAfterShowcase onOpenService={handleOpenService} />
          </>
        )}

        {currentRoute === 'service' && (
          <ServiceDetail
            service={activeService}
            onOpenService={handleOpenService}
            onNavigate={handleNavigate}
            onBookService={handleBookService}
          />
        )}

        {currentRoute === 'products' && (
          <>
            <PageHero
              title="The store"
              subtitle="Phones, computers, consoles, wraps, cameras and accessories. Stock changes weekly."
              image={PAGE_IMAGES.products}
            />

            {/* Promotions lead the store, the way the front of a shop does.
                They used to sit at the bottom, below the whole catalogue,
                where a visitor had already finished browsing. */}
            <PromoBanner
              onNavigate={handleNavigate}
              onOpenService={handleOpenService}
              onOpenBooking={handleOpenBooking}
            />

            <ProductCatalog hideHeader isFullPage onSelectProduct={setSelectedProduct} />

            <div className="shell pb-4">
              <AdBanner
                media={{
                  kind: 'image',
                  src: STORE_MEDIA.pcBuildsBanner,
                  alt: 'Custom PC builds by Brantford Wireless, for gaming, work, school and home',
                }}
                action="Custom PC builds"
                onActivate={() => handleOpenService('computer-repairs')}
              />
            </div>
          </>
        )}

        {currentRoute === 'about' && (
          <>
            <PageHero
              title="One local store on King Street"
              subtitle="Sales, repairs, wraps, cameras and buy back, from a team you can talk to in person."
              image={STORE_MEDIA.workbenchPhoto}
            />

            <AboutSection onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
            <TeamSection />
            <WhyChooseUs onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />
          </>
        )}

        {currentRoute === 'booking' && (
          <>
            <PageHero
              title="Book your service"
              subtitle="Tell us the device and a time that suits you. We confirm every request."
              image={PAGE_IMAGES.booking}
            />
            <BookingForm
              hideHeader
              isFullPage
              initialService={bookingService}
              onNavigate={handleNavigate}
              onNotify={showToast}
            />
          </>
        )}

        {currentRoute === 'contact' && (
          <>
            <PageHero
              title="Contact Brantford Wireless"
              subtitle="28 King Street, Brantford. Call for the fastest answer."
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

      <ProductInquiryModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSubmitSuccess={showToast}
      />

      <PrivacyTermsModal type={privacyTermsType} onClose={() => setPrivacyTermsType(null)} />

      <Footer
        onNavigate={handleNavigate}
        onOpenService={handleOpenService}
        onOpenBooking={handleOpenBooking}
        onOpenPrivacyTerms={setPrivacyTermsType}
      />

      <MobileQuickBar onOpenBooking={handleOpenBooking} />
    </div>
  );
}

export default App;
