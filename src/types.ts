export type PageRoute = 
  | 'home'
  | 'services'
  | 'products'
  | 'pricing'
  | 'booking'
  | 'testimonials'
  | 'faq'
  | 'team'
  | 'contact'
  | 'privacy'
  | 'terms';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'mobile' | 'computer' | 'repair' | 'support' | 'solutions' | 'accessories';
  iconName: string;
  features: string[];
  image: string;
  badge?: string;
}

export type ServiceCategoryItem = ServiceItem;

export type ProductCategory = 
  | 'all'
  | 'smartphones'
  | 'laptops'
  | 'desktops'
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
  status: 'Inquire for Availability' | 'Available in Showroom' | 'Special Order';
}

export interface PricingCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  items: {
    name: string;
    description: string;
    pricingNote: string;
    turnaroundGuide: string;
    popular?: boolean;
  }[];
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
