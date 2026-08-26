import { ServiceItem, ProductItem, PricingCategory, TestimonialItem, FAQItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Brantford Wireless & Electronics',
  shortName: 'Brantford Wireless',
  contactPerson: 'Ernest',
  phone: '(416) 771-9078',
  phoneRaw: '4167719078',
  email: 'brantfordwirelss@gmail.com',
  website: 'brantfordwirelss.com',
  social: '@branntfordwirelss',
  socialUrl: 'https://instagram.com/branntfordwirelss',
  tagline: 'Premium Technology. Expert Service. All in One Place.',
  heroDescription: 'From mobile devices and accessories to computer sales and reliable repairs, Brantford Wireless & Electronics delivers trusted technology solutions for everyday life.',
  locationNote: 'Serving Brantford & Surrounding Communities with Premium Technology Solutions',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'mobile-devices-accessories',
    title: 'Mobile Devices & Accessories',
    shortDesc: 'Phones, protective cases, screen guards, chargers, audio adapters, and everyday mobile gear.',
    fullDesc: 'Discover high-grade mobile hardware and certified accessories tailored to keep you connected. We provide curated smartphones, premium shockproof cases, scratch-resistant tempered glass, high-speed charging accessories, and audio peripherals selected for durability and performance.',
    category: 'mobile',
    iconName: 'Smartphone',
    badge: 'Popular Service',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=1000&auto=format&fit=crop',
    features: [
      'New & certified pre-owned smartphone options',
      'Impact-resistant protective cases & custom fits',
      'Ultra-clarity 9H tempered glass screen protectors',
      'Fast wireless charging docks & magnetic adapters',
      'OEM & certified braided charging cables'
    ]
  },
  {
    id: 'computer-sales',
    title: 'Computer Sales',
    shortDesc: 'Reliable laptops, desktops, and computing systems for professional work, study, and daily use.',
    fullDesc: 'Find the right computing machine configured for your specific workload. From ultraportable laptops for students and mobile professionals to robust desktop systems, we help you select hardware with verified specifications and long-term reliability.',
    category: 'computer',
    iconName: 'Laptop',
    badge: 'Hardware Sales',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Performance laptops for work, university & home',
      'Custom desktop configurations & office towers',
      'Pre-configured setups with operating system installation',
      'Hardware specification consultations & budget matching',
      'Certified quality hardware check before purchase'
    ]
  },
  {
    id: 'computer-repairs',
    title: 'Computer Repairs',
    shortDesc: 'Hardware troubleshooting, diagnostics, screen fixes, motherboard care, and OS problem resolution.',
    fullDesc: 'When technology malfunctions, our dedicated diagnostic and repair services restore your device to optimal health. We perform comprehensive component checks, screen replacements, SSD upgrades, battery replacements, and operating system recovery.',
    category: 'repair',
    iconName: 'Wrench',
    badge: 'Expert Diagnostics',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Comprehensive hardware & component diagnostics',
      'Laptop screen, hinge, and keyboard replacements',
      'SSD storage upgrades & memory expansion',
      'Operating system re-installations & virus removal',
      'Thermal paste renewal & internal dust servicing'
    ]
  },
  {
    id: 'device-support',
    title: 'Device Support',
    shortDesc: 'Hands-on setup, data transfer, account configuration, and troubleshooting for all your personal tech.',
    fullDesc: 'Eliminate technology frustration with personalized device support. Whether you need assistance migrating photos and data to a new phone, configuring email accounts, or resolving stubborn software conflicts, we provide patient, step-by-step assistance.',
    category: 'support',
    iconName: 'LifeBuoy',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Seamless phone-to-phone data & photo migration',
      'Cloud backup setup & secure email configuration',
      'Slow system optimization & startup cleanup',
      'Printer, Bluetooth, and Wi-Fi connectivity support',
      'One-on-one technology walkthroughs'
    ]
  },
  {
    id: 'tech-solutions',
    title: 'Tech Solutions',
    shortDesc: 'Tailored technology assistance for home offices, remote setups, and small business productivity.',
    fullDesc: 'From establishing a stable home-office workstation to consulting on dependable device ecosystems, Brantford Wireless & Electronics crafts tailored technological setups that run smoothly and efficiently.',
    category: 'solutions',
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Home office workstation planning & setup',
      'Small business multi-device consultation',
      'Network equipment configuration & troubleshooting',
      'Backup drive configuration & data redundancy advice',
      'Hardware lifecycle planning'
    ]
  },
  {
    id: 'accessories-peripherals',
    title: 'Accessories & Peripherals',
    shortDesc: 'Essential peripherals, cables, docks, power banks, and high-performance device accessories.',
    fullDesc: 'Complete your tech setup with premium accessories designed to maximize productivity and protect your investment. We stock tested USB-C hubs, ergonomic mice, mechanical keyboards, high-capacity power banks, and heavy-duty charging blocks.',
    category: 'accessories',
    iconName: 'Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Multi-port USB-C hubs & display adapters',
      'High-speed GaN fast wall chargers (30W - 100W)',
      'High-capacity portable battery packs',
      'Ergonomic wireless mice & responsive keyboards',
      'Noise-isolating audio headphones & earbuds'
    ]
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'prod-smartphones-flagship',
    name: 'Premium Smartphone Showcase',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    description: 'Selected flagship and high-performance smartphones featuring vibrant OLED displays, multi-camera arrays, and long battery life.',
    specs: ['OLED High-Refresh Display', 'Advanced Camera System', '5G Connectivity', 'High Capacity Battery'],
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop',
    tag: 'Showroom Featured',
    isPopular: true,
    status: 'Inquire for Availability'
  },
  {
    id: 'prod-smartphones-value',
    name: 'Everyday Reliable Smartphone',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    description: 'Dependable smartphones engineered for daily communication, seamless multitasking, navigation, and crisp photography.',
    specs: ['All-Day Battery Life', 'Crisp HD+ Display', 'Dual/Triple Lens Camera', 'Fast Charging Support'],
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000&auto=format&fit=crop',
    tag: 'Great Value',
    status: 'Available in Showroom'
  },
  {
    id: 'prod-laptop-ultrabook',
    name: 'Precision Ultrabook Laptop',
    category: 'laptops',
    categoryLabel: 'Laptops',
    description: 'Sleek, lightweight computing powerhouse designed for mobile executives, students, and creative professionals on the move.',
    specs: ['High-Efficiency Multi-Core Processor', 'Ultra-Fast PCIe SSD', 'Vibrant Edge-to-Edge Screen', 'All-Day Battery'],
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop',
    tag: 'Top Performance',
    isPopular: true,
    status: 'Available in Showroom'
  },
  {
    id: 'prod-laptop-workstation',
    name: 'Pro Productivity Laptop',
    category: 'laptops',
    categoryLabel: 'Laptops',
    description: 'Heavy-duty performance laptop built for intensive multitasking, business spreadsheets, media editing, and data handling.',
    specs: ['Expanded RAM Memory', 'Dedicated Graphics Option', 'Reinforced Chassis', 'Comprehensive Port Array'],
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000&auto=format&fit=crop',
    tag: 'Business Choice',
    status: 'Inquire for Availability'
  },
  {
    id: 'prod-desktop-tower',
    name: 'Custom Desktop Workstation',
    category: 'desktops',
    categoryLabel: 'Desktop Computers',
    description: 'High-reliability desktop system custom-assembled or pre-configured for dependable desktop productivity and expandable storage.',
    specs: ['Modular & Upgradable Architecture', 'High Airflow Cooling', 'High-Speed NVMe Storage', 'Multi-Display Support'],
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop',
    tag: 'Expandable',
    status: 'Special Order'
  },
  {
    id: 'prod-cases-protection',
    name: 'Armor Shield Shockproof Case Series',
    category: 'phone-accessories',
    categoryLabel: 'Phone Accessories',
    description: 'Military-grade drop-tested smartphone cases with raised bezel edges to protect camera lenses and screens from impacts.',
    specs: ['Dual-Layer Polycarbonate + TPU', 'Raised Screen & Camera Bumpers', 'Wireless Charging Compatible', 'Precision Port Cutouts'],
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1000&auto=format&fit=crop',
    tag: 'Protection',
    isPopular: true,
    status: 'Available in Showroom'
  },
  {
    id: 'prod-chargers-gan',
    name: 'GaN High-Speed Multi-Port Fast Charger',
    category: 'chargers-cables',
    categoryLabel: 'Chargers & Cables',
    description: 'Compact Gallium Nitride fast charger capable of rapid-charging phones, tablets, and laptops simultaneously with intelligent power delivery.',
    specs: ['USB-C Power Delivery 3.0', 'Universal Device Compatibility', 'Over-Heat & Surge Protection', 'Compact Travel Form Factor'],
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=1000&auto=format&fit=crop',
    tag: 'Essential Tech',
    isPopular: true,
    status: 'Available in Showroom'
  },
  {
    id: 'prod-cables-braided',
    name: 'Reinforced Braided USB-C / Lightning Cable',
    category: 'chargers-cables',
    categoryLabel: 'Chargers & Cables',
    description: 'Durable nylon-braided cables engineered to withstand thousands of bends without fraying or degradation.',
    specs: ['Nylon Braided Outer Sheath', 'High-Speed Data Sync', 'Reinforced Connector Collars', 'Available in 1m, 2m, & 3m'],
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop',
    tag: 'Heavy Duty',
    status: 'Available in Showroom'
  },
  {
    id: 'prod-audio-headphones',
    name: 'Active Noise-Cancelling Over-Ear Headphones',
    category: 'headphones',
    categoryLabel: 'Headphones',
    description: 'Immersive sound quality with advanced active noise cancellation for undisturbed focus during work, study, or travel.',
    specs: ['Precision Dynamic Drivers', 'Multi-Stage Noise Cancellation', 'Plush Memory Foam Ear Cushions', '30+ Hour Playtime'],
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    tag: 'Premium Audio',
    isPopular: true,
    status: 'Available in Showroom'
  },
  {
    id: 'prod-computer-accessories',
    name: 'Multi-Port USB-C Hub & Desktop Dock',
    category: 'computer-accessories',
    categoryLabel: 'Computer Accessories',
    description: 'Expand your laptop connectivity with HDMI 4K video output, USB 3.0 ports, SD card readers, and USB-C pass-through power.',
    specs: ['4K 60Hz HDMI Output', 'Gigabit Ethernet Port', 'High-Speed USB 3.1 Data Ports', 'Anodized Aluminum Casing'],
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000&auto=format&fit=crop',
    tag: 'Productivity',
    status: 'Available in Showroom'
  },
  {
    id: 'prod-other-powerbank',
    name: 'Ultra-High Capacity Power Bank (20,000mAh)',
    category: 'other-electronics',
    categoryLabel: 'Other Electronics',
    description: 'Reliable portable power reservoir capable of recharging modern smartphones multiple times on single charge.',
    specs: ['20,000mAh Battery Capacity', 'Dual Fast USB Output', 'Digital Battery Indicator', 'Airline Approved'],
    image: 'https://images.unsplash.com/photo-1609592424368-80f498bc57d2?q=80&w=1000&auto=format&fit=crop',
    tag: 'Portable Power',
    status: 'Available in Showroom'
  }
];

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: 'device-services',
    title: 'Device & Mobile Services',
    subtitle: 'Expert screen, battery, and port services for smartphones & tablets.',
    iconName: 'Smartphone',
    items: [
      {
        name: 'Screen & Glass Replacement Evaluation',
        description: 'Comprehensive assessment of digitizer, OLED/LCD panel, and glass integrity with OEM-grade replacement options.',
        pricingNote: 'Custom quote based on exact device model',
        turnaroundGuide: 'Same-day or next-day turnaround upon part availability',
        popular: true
      },
      {
        name: 'Battery Health Diagnostic & Replacement',
        description: 'Testing internal cell degradation, charging cycles, and installing fresh, high-capacity battery units.',
        pricingNote: 'Contact for exact model quote',
        turnaroundGuide: 'Fast inspection & replacement'
      },
      {
        name: 'Charging Port & Speaker Cleaning / Repair',
        description: 'Micro-cleaning of oxidized/blocked ports, connector realignment, or port board replacement.',
        pricingNote: 'Free initial inspection / Quote upon diagnostic',
        turnaroundGuide: 'Typically quick service'
      }
    ]
  },
  {
    id: 'computer-services',
    title: 'Computer Diagnostics & Hardware',
    subtitle: 'Laptop & desktop maintenance, physical repairs, and system restorations.',
    iconName: 'Laptop',
    items: [
      {
        name: 'Complete Hardware Diagnostic Check',
        description: 'In-depth testing of motherboard, RAM modules, power supply, CPU thermals, and storage health.',
        pricingNote: 'Comprehensive diagnostic with itemized report',
        turnaroundGuide: 'Detailed findings communicated clearly',
        popular: true
      },
      {
        name: 'Laptop Screen & Hinge Repair',
        description: 'Precision panel replacement for cracked, flickering, or dim laptop displays, plus hinge structural reinforcement.',
        pricingNote: 'Quote based on panel size & connector type',
        turnaroundGuide: 'Ordered parts checked upon arrival'
      },
      {
        name: 'Solid State Drive (SSD) Speed Upgrade',
        description: 'Replacing slow spinning hard drives with ultra-fast NVMe/SATA SSD storage, including data cloning if requested.',
        pricingNote: 'Varies by storage capacity (500GB / 1TB / 2TB)',
        turnaroundGuide: 'Massive performance boost for aging PCs'
      }
    ]
  },
  {
    id: 'repair-services',
    title: 'Software & System Recovery',
    subtitle: 'Resolving boot loops, corrupted operating systems, and malicious software.',
    iconName: 'Wrench',
    items: [
      {
        name: 'Operating System Clean Installation',
        description: 'Fresh installation of Windows or macOS with latest driver updates, security patches, and optimal performance tuning.',
        pricingNote: 'Standard service rate',
        turnaroundGuide: 'System returned fully updated and clean',
        popular: true
      },
      {
        name: 'Malware, Spyware & Adware Removal',
        description: 'Deep scanning and elimination of rogue processes, browser hijackers, popups, and security vulnerabilities.',
        pricingNote: 'Affordable fixed-rate diagnostic & cleanup',
        turnaroundGuide: 'Thorough multi-engine scan'
      },
      {
        name: 'Data Backup & File Migration',
        description: 'Extracting essential documents, pictures, and records from malfunctioning systems to external storage.',
        pricingNote: 'Evaluated by drive condition & data volume',
        turnaroundGuide: 'Handled with utmost privacy & care'
      }
    ]
  },
  {
    id: 'technology-solutions',
    title: 'Consultation & Custom Builds',
    subtitle: 'Tailored technology setups for home, study, or small business needs.',
    iconName: 'Cpu',
    items: [
      {
        name: 'Custom Desktop PC Assembly & Setup',
        description: 'Curating optimal component lists, precision assembly, cable management, BIOS configuration, and stress testing.',
        pricingNote: 'Custom quote based on parts & assembly depth',
        turnaroundGuide: 'Tested for thermal stability and peak performance'
      },
      {
        name: 'Home Office & Network Setup Consultation',
        description: 'Practical technology advice to ensure reliable Wi-Fi, monitor setups, printer sharing, and backup routines.',
        pricingNote: 'Consultation quote provided in advance',
        turnaroundGuide: 'Scheduled at your convenience'
      }
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Ernest and the team at Brantford Wireless provided honest, straightforward advice when my laptop screen stopped turning on. They clearly explained what was wrong and had it fixed without any runaround. Highly recommended for local tech service.',
    customerName: 'Verified Brantford Customer',
    serviceCategory: 'Computer Repair & Diagnostics',
    verified: true,
    date: 'Recent Service',
    rating: 5
  },
  {
    id: 'test-2',
    quote: 'Found exactly the phone accessories and high-speed charger I needed. Great quality products and friendly, knowledgeable service right here in town.',
    customerName: 'Local Technology Client',
    serviceCategory: 'Mobile Devices & Accessories',
    verified: true,
    date: 'Recent Purchase',
    rating: 5
  },
  {
    id: 'test-3',
    quote: 'Helped me migrate all my files and photos to my new system seamlessly. Patient, professional, and very easy to talk to about technology.',
    customerName: 'Verified Device Owner',
    serviceCategory: 'Device Support & Data Transfer',
    verified: true,
    date: 'Recent Service',
    rating: 5
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What types of devices do you service and repair?',
    answer: 'We service a wide variety of electronics including smartphones, laptops, desktop computers, tablets, and related accessories. Whether you are dealing with a broken screen, failing battery, power issues, or software glitches, our team can diagnose the problem and provide practical solutions.',
    category: 'Repairs'
  },
  {
    id: 'faq-2',
    question: 'Do you repair computers and laptops?',
    answer: 'Yes. We handle hardware and software repairs for laptops and desktops, including screen replacements, keyboard and hinge repairs, SSD speed upgrades, operating system reinstalls, and malware removal.',
    category: 'Repairs'
  },
  {
    id: 'faq-3',
    question: 'Do you sell mobile accessories and chargers?',
    answer: 'Yes! We carry a carefully selected inventory of high-quality mobile phone accessories, including heavy-duty protective cases, tempered glass screen protectors, high-speed GaN wall chargers, braided USB-C and Lightning cables, and portable power banks.',
    category: 'Products'
  },
  {
    id: 'faq-4',
    question: 'Can I request a repair appointment online?',
    answer: 'Yes, you can use our online "Book a Service" tool right here on the website to choose your preferred date, time slot, device type, and service request. Once submitted, Ernest and our team will review your request and get in touch to confirm details.',
    category: 'Booking & Quotes'
  },
  {
    id: 'faq-5',
    question: 'How do I get a repair or product quote?',
    answer: 'Because repair complexity and parts vary depending on the exact make and model of your device, we provide transparent custom quotes. You can submit a quote request via our Pricing page or call us directly at (416) 771-9078.',
    category: 'Booking & Quotes'
  },
  {
    id: 'faq-6',
    question: 'Can I ask about specific product availability?',
    answer: 'Absolutely. If you are looking for a specific smartphone model, laptop configuration, or specialty accessory, click "Ask About This Product" or contact us via email at brantfordwirelss@gmail.com with your requirements.',
    category: 'Products'
  },
  {
    id: 'faq-7',
    question: 'Do you provide one-on-one technical support and setup?',
    answer: 'Yes. We assist clients with device setup, transferring contacts and photos to new phones, email configuration, software installations, and solving stubborn connectivity or performance issues.',
    category: 'General'
  },
  {
    id: 'faq-8',
    question: 'How can I contact Brantford Wireless & Electronics?',
    answer: 'You can call us directly at (416) 771-9078, email us at brantfordwirelss@gmail.com, or submit an inquiry using any contact form on this website. We look forward to assisting you!',
    category: 'General'
  }
];

export const TEAM_VALUES = [
  {
    title: 'Ernest',
    role: 'Technology Specialist & Founder',
    description: 'Dedicated to bringing trusted, transparent, and approachable technology solutions to the Brantford community with a commitment to customer satisfaction.',
    highlights: ['Device Diagnostics', 'Hardware Consultation', 'Customer Service']
  },
  {
    title: 'Technical Service Team',
    role: 'Hardware & Repair Support',
    description: 'Committed to rigorous hardware testing, precision screen & battery replacements, and reliable software recoveries.',
    highlights: ['Component Repair', 'Data Migration', 'System Optimization']
  }
];
