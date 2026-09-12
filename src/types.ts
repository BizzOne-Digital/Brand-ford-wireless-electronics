/**
 * Every destination on the site. Each value must be reachable from the header
 * or the footer, and every link in the UI must point at one of them.
 *
 * `service` is the single service detail page; which service it shows is held
 * alongside the route in `App.tsx`.
 *
 * The pricing, quote, testimonials, team and FAQ pages were removed: the first
 * two duplicated the booking flow, and the last three now live as sections on
 * the pages that already had the context for them.
 */
export type PageRoute =
  | 'home'
  | 'services'
  | 'service'
  | 'products'
  | 'about'
  | 'contact'
  | 'booking';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category:
    | 'mobile'
    | 'computer'
    | 'repair'
    | 'gaming'
    | 'sales'
    | 'buyback'
    | 'wrapping'
    | 'security'
    | 'business'
    | 'support'
    | 'solutions'
    | 'accessories';
  iconName: string;
  features: string[];
  image: string;
  badge?: string;
}

export type ServiceCategoryItem = ServiceItem;

export type ProductCategory =
  | 'all'
  | 'smartphones'
  | 'used-phones'
  | 'laptops'
  | 'desktops'
  | 'gaming'
  | 'security-cameras'
  | 'wraps'
  | 'phone-accessories'
  | 'computer-accessories'
  | 'chargers-cables'
  | 'headphones'
  | 'other-electronics';

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  description: string;
  specs: string[];
  image: string;
  tag?: string;
  isPopular?: boolean;
  /** Temporary demo listing. Renders a DEMO chip and is not real inventory. */
  isDemo?: boolean;
  status: 'Inquire for Availability' | 'Available in Showroom' | 'Special Order';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  customerName: string;
  serviceCategory: string;
  verified: boolean;
  date: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Repairs' | 'Products' | 'Booking & Quotes';
}

export interface BookingSubmission {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  deviceType: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export interface LeadSubmission {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

export interface ContactSubmission {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export interface PromoSlide {
  id: string;
  /** Small pill above the headline. Keep it 1-3 words. */
  badge: string;
  headline: string;
  /** One short supporting line. Aim for under 14 words. */
  body: string;
  ctaLabel: string;
  /** Where the CTA sends the visitor. 'booking' opens the booking page. */
  ctaRoute: PageRoute;
  /** Set with ctaRoute 'service' to open that service's detail page. */
  ctaServiceId?: string;
  image: string;
  /** Alt text for the product image. Required. */
  imageAlt: string;
  /** Optional before-and-after pair. When both are set the slide shows the two
      photographs side by side instead of the single `image`. Deliberately
      static: no drag-to-reveal slider, which belongs further down the page. */
  beforeImage?: string;
  beforeImageAlt?: string;
  afterImage?: string;
  afterImageAlt?: string;
  /** Temporary demo banner. Renders a DEMO chip. */
  isDemo?: boolean;
}
