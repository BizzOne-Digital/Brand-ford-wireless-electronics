import React, { useState } from 'react';
import { PageRoute, ProductItem } from './types';
import { SERVICES_DATA, SERVICE_BOOKING_OPTION } from './data/mockData';
import { STORE_MEDIA, STORE_MEDIA_MOBILE } from './data/media';
import { DEMO_IMAGE } from './data/demoMedia';

import { Header } from './components/Header';
import { PromoBanner } from './components/PromoBanner';
import { AdBanner } from './components/AdBanner';
import { PageHero } from './components/PageHero';
import { CategoryRail } from './components/CategoryRail';
import { ServicesOverview } from './components/ServicesOverview';
import { ServiceDetail } from './components/ServiceDetail';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductInquiryModal } from './components/ProductInquiryModal';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TeamSection } from './components/TeamSection';
import { BookingForm } from './components/BookingForm';
import { SellDeviceForm } from './components/SellDeviceForm';
import { ContactSection } from './components/ContactSection';
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
  sell: DEMO_IMAGE.phoneInHand,
};

/**
 * Three services are not really pages: they are a shortcut to somewhere else.
 * Selling a device is a form, and the two shelf services are the store filtered
 * to their own category. Routing them here means every entry point behaves the
 * same, whether it is a tile, the footer or a promo slide.
 */
const SERVICE_SHORTCUTS: Record<string, { route: PageRoute; storeGroup?: string }> = {
  'we-buy-devices': { route: 'sell' },
  'used-refurbished-phones': { route: 'products', storeGroup: 'used' },
  'accessories-peripherals': { route: 'products', storeGroup: 'accessories' },
};

export function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  /** Which service the `service` route is showing. */
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  /** Prefills the booking form when a service page sends someone to it. */
  const [bookingService, setBookingService] = useState('');

  /** Category the store opens on, set by the shelf shortcuts above. */
  const [storeGroup, setStoreGroup] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [privacyTermsType, setPrivacyTermsType] = useState<'privacy' | 'terms' | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => setToastMessage(msg);

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavigate = (route: PageRoute) => {
    if (route === 'products') setStoreGroup('all');
    setCurrentRoute(route);
    toTop();
  };

  const handleOpenService = (serviceId: string) => {
    const shortcut = SERVICE_SHORTCUTS[serviceId];
    if (shortcut) {
      setStoreGroup(shortcut.storeGroup ?? 'all');
      setCurrentRoute(shortcut.route);
      toTop();
      return;
    }
    setActiveServiceId(serviceId);
    setCurrentRoute('service');
    toTop();
  };

  const handleOpenBooking = () => {
    setBookingService('');
    setCurrentRoute('booking');
    toTop();
  };

  /** Mail-in repairs use the booking form with the service preselected.
      Every CTA on the site now reads "Mailed in Service", so they all route
      here; only the promo carousel's "Book a repair" slide stays generic. */
  const handleOpenMailIn = () => {
    setBookingService('Mailed in Service');
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
        onOpenMailIn={handleOpenMailIn}
      />

      {/* Site chrome, on every route: the header scrolls away, so this bar
          is the only navigation that survives scrolling. It is `hidden
          lg:block`, so on a phone the homepage's tile grid below the hero
          stays the only category navigation. */}
      <CategoryRail
        variant="bar"
        onOpenService={handleOpenService}
        onSeeAll={() => handleNavigate('services')}
      />

      <main id="main-content">
        {currentRoute === 'home' && (
          <>
            <PromoBanner
              asHero
              onNavigate={handleNavigate}
              onOpenService={handleOpenService}
              onOpenBooking={handleOpenBooking}
            />

            {/* Phone and tablet only: the desktop bar above the page covers
                those widths. */}
            <CategoryRail
              variant="tiles"
              onOpenService={handleOpenService}
              onSeeAll={() => handleNavigate('services')}
            />

            {/* The store's own artwork. Two across on desktop, in the wider
                1440px container so each gains width without losing the gap
                or the gutters. Below `lg` it becomes a swipe rail: each
                banner takes 86% of the width and snaps, so the edge of the
                next one is always visible and says the row scrolls. Two
                across on a phone made each 166px, which was too small to
                read the artwork at all. */}
            <section aria-label="Featured from the store" className="bg-mist py-10 lg:py-14">
              <div className="shell-wide flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-2 lg:gap-6 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
                <AdBanner
                  className="w-[88%] shrink-0 snap-start lg:w-auto"
                  media={{
                    kind: 'image',
                    src: STORE_MEDIA.wrappingBanner,
                    alt: 'Custom device wrapping: phones, laptops, consoles and controllers in marble, carbon and abstract finishes',
                  }}
                  mobileSrc={STORE_MEDIA_MOBILE.wrappingBanner}
                  action="Custom device wrapping"
                  note={SERVICES_DATA.find((s) => s.id === 'device-wrapping')?.shortDesc}
                  onActivate={() => handleOpenService('device-wrapping')}
                />
                <AdBanner
                  className="w-[88%] shrink-0 snap-start lg:w-auto"
                  media={{
                    kind: 'image',
                    src: STORE_MEDIA.pcBuildsBanner,
                    alt: 'Custom PC builds by Brantford Wireless, for gaming, work, school and home',
                  }}
                  mobileSrc={STORE_MEDIA_MOBILE.pcBuildsBanner}
                  action="Custom PC builds"
                  note={SERVICES_DATA.find((s) => s.id === 'computer-repairs')?.shortDesc}
                  onActivate={() => handleOpenService('computer-repairs')}
                />
              </div>
            </section>

            <ServicesOverview
              onOpenService={handleOpenService}
              onSeeAll={() => handleNavigate('services')}
            />

            <BeforeAfterShowcase onOpenService={handleOpenService} />
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

            <ProductCatalog
              hideHeader
              isFullPage
              initialGroup={storeGroup}
              onSelectProduct={setSelectedProduct}
            />

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

            <AboutSection onNavigate={handleNavigate} onOpenBooking={handleOpenMailIn} />
            <TeamSection />
            <WhyChooseUs onNavigate={handleNavigate} onOpenBooking={handleOpenMailIn} />
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

        {currentRoute === 'sell' && (
          <>
            <PageHero
              title="We buy phones and electronics"
              subtitle="Working, damaged or broken. Tell us what you have and we will come back to you."
              image={PAGE_IMAGES.sell}
            />
            <SellDeviceForm onNotify={showToast} />
          </>
        )}

        {currentRoute === 'contact' && (
          <>
            {/* A tinted band, not a photograph: the contact page is a form
                and an address, and a full-bleed hero above them only pushes
                both further down the screen. */}
            <PageHero
              title="Contact Us"
              subtitle="28 King Street, Brantford. Call for the fastest answer."
            />
            <ContactSection hideHeader onNavigate={handleNavigate} onNotify={showToast} />
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
        onOpenBooking={handleOpenMailIn}
        onOpenPrivacyTerms={setPrivacyTermsType}
      />
    </div>
  );
}

export default App;
