import { ServiceItem, ProductItem, TestimonialItem, FAQItem, PromoSlide } from '../types';
import { DEMO_IMAGE } from './demoMedia';

export const BUSINESS_INFO = {
  name: 'Brantford Wireless & Electronics',
  shortName: 'Brantford Wireless',
  contactPerson: 'our team',
  phone: '(416) 771-9078',
  phoneRaw: '4167719078',
  email: 'brantfordwireless@gmail.com',
  website: 'brantfordwireless.com',
  social: '@branntfordwirelss',
  socialUrl: 'https://instagram.com/branntfordwirelss',
  /** Street address. Shown wherever a visitor might be deciding to walk in. */
  addressLine: '28 King Street',
  addressCity: 'Brantford, Ontario',
  addressFull: '28 King Street, Brantford, Ontario',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=28+King+Street+Brantford+Ontario',
  tagline: 'One Local Store. More Technology Solutions.',
  heroDescription: 'Cell phone and computer repair, electronics sales, gaming console repair, custom device wraps and security cameras, all from one store on King Street.',
  locationNote: '28 King Street, Brantford, Ontario. Serving Brantford and surrounding communities.',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'cell-phone-repair',
    title: 'Cell Phone Repair',
    shortDesc: 'iPhone, Samsung Galaxy and Android repairs, from cracked screens to charging ports.',
    fullDesc: 'Professional smartphone diagnostics and repair for Apple iPhone, Samsung Galaxy and other Android phones. Before you replace a damaged phone, bring it in and we will tell you whether repairing it is the cheaper option.',
    category: 'repair',
    iconName: 'Smartphone',
    badge: 'Most Requested',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Cracked screen, LCD and OLED replacement',
      'Battery replacement and charging port repair',
      'Camera, speaker and microphone repair',
      'Back glass and button repair',
      'Software troubleshooting and full diagnostics'
    ]
  },
  {
    id: 'computer-repairs',
    title: 'Computer & Laptop Repair',
    shortDesc: 'Diagnostics, screen replacement, SSD and memory upgrades, Windows installs and virus removal.',
    fullDesc: 'Your computer matters for work, school and everyday life. We diagnose and resolve common desktop and laptop problems, and we will tell you honestly when repairing an older machine no longer makes financial sense.',
    category: 'computer',
    iconName: 'Laptop',
    badge: 'Expert Diagnostics',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Laptop screen, keyboard and battery replacement',
      'SSD and hard drive upgrades, RAM expansion',
      'Charging and power problem diagnosis',
      'Windows installation and software troubleshooting',
      'Virus and malware removal, slow computer diagnostics'
    ]
  },
  {
    id: 'device-wrapping',
    title: 'Custom Device Wrapping',
    shortDesc: 'Give your phone, laptop, console or controller a completely new look with a professional wrap.',
    fullDesc: 'One of our specialty services. Instead of carrying the same looking device as everyone else, customise it with a professional wrap. A wrap gives a unique appearance while helping protect the original exterior from everyday scratches and wear. Visit the store to see the current colours, patterns and textures.',
    category: 'wrapping',
    iconName: 'Palette',
    badge: 'Store Specialty',
    image: DEMO_IMAGE.texturedPhone,
    features: [
      'Smartphones, tablets and laptops',
      'Gaming consoles and controllers',
      'Colours, patterns and textured finishes',
      'Helps protect the original exterior',
      'Fitted in store, see the options in person'
    ]
  },
  {
    id: 'security-cameras',
    title: 'CCTV Security Cameras',
    shortDesc: 'IP and PoE camera systems for homes, retail stores, offices and commercial property.',
    fullDesc: 'We help customers choose and install a security camera system based on their property and their actual security requirements, then set up remote viewing so you can check the cameras from your phone.',
    category: 'security',
    iconName: 'Cctv',
    badge: 'Install Available',
    image: DEMO_IMAGE.cameraInstall,
    features: [
      'IP and PoE camera systems with NVR recording',
      'Indoor, outdoor and night vision cameras',
      'Remote viewing from your smartphone',
      'Home, retail and business surveillance',
      'Professional CCTV installation'
    ]
  },
  {
    id: 'gaming-console-repair',
    title: 'Gaming Console Repair',
    shortDesc: 'PlayStation 5, PlayStation 4 and other console repairs. HDMI ports, power and overheating.',
    fullDesc: 'Do not let a broken console keep you out of the game. We handle selected repairs for PlayStation 5, PlayStation 4 and other gaming systems. Bring the console in for an assessment and we will explain what it needs.',
    category: 'gaming',
    iconName: 'Gamepad2',
    image: DEMO_IMAGE.console,
    features: [
      'HDMI port repair and no display faults',
      'Power issues and overheating',
      'Damaged ports and disc drive problems',
      'Software problems and system restore',
      'Full console diagnostics'
    ]
  },
  {
    id: 'tablet-repair',
    title: 'iPad & Tablet Repair',
    shortDesc: 'Screen, battery, charging and hardware repairs for Apple iPad and Android tablets.',
    fullDesc: 'A cracked or damaged tablet does not always need to be replaced. We provide selected screen, battery, charging and hardware repairs for many Apple iPad and Android tablet models.',
    category: 'repair',
    iconName: 'Tablet',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Tablet screen and glass replacement',
      'Battery replacement',
      'Charging port repair',
      'Button and speaker repair',
      'Diagnostics before any work begins'
    ]
  },
  {
    id: 'device-sales',
    title: 'Phones, Computers & Electronics',
    shortDesc: 'Smartphones, laptops, desktops, gaming systems and accessories, available in the showroom.',
    fullDesc: 'We are more than a repair shop. We carry a changing selection of cell phones, computers, laptops, gaming systems, electronics and accessories. Inventory changes regularly, so visit the store or contact us to find out what is currently available.',
    category: 'sales',
    iconName: 'Store',
    badge: 'In Store Now',
    image: DEMO_IMAGE.phonesBright,
    features: [
      'Apple iPhone and Samsung Galaxy phones',
      'New, pre-owned and unlocked smartphones',
      'Laptops, desktop computers and gaming systems',
      'Cases, screen protectors, chargers and cables',
      'Computer and technology accessories'
    ]
  },
  {
    id: 'used-refurbished-phones',
    title: 'Used & Refurbished Phones',
    shortDesc: 'An affordable alternative to buying new, at several price points.',
    fullDesc: 'Looking for an affordable alternative to a brand new smartphone? Shop our changing selection of used and pre-owned phones. We carry selected Apple iPhone, Samsung Galaxy and other smartphones at different price points so you can match a device to your budget.',
    category: 'sales',
    iconName: 'BadgeDollarSign',
    badge: 'Budget Friendly',
    image: DEMO_IMAGE.phoneInHand,
    features: [
      'Selected iPhone, Galaxy and Android models',
      'Several price points to suit your budget',
      'Unlocked options available',
      'Setup and data transfer in store',
      'Stock changes weekly, call to check'
    ]
  },
  {
    id: 'we-buy-devices',
    title: 'We Buy Phones & Electronics',
    shortDesc: 'Turn unwanted, damaged or broken technology into money.',
    fullDesc: 'We buy selected new, used, damaged and broken electronics. Whether you are upgrading, clearing out old devices or holding a phone you can no longer use, bring it in for an evaluation. All purchases are subject to inspection, ownership verification and our purchasing requirements.',
    category: 'buyback',
    iconName: 'Recycle',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1000&auto=format&fit=crop',
    features: [
      'iPhone, Galaxy and Android phones',
      'iPads, tablets and laptops',
      'Desktop computers and gaming systems',
      'PlayStation consoles and selected electronics',
      'Working, damaged and broken devices considered'
    ]
  },
  {
    id: 'business-tech-solutions',
    title: 'Business Technology',
    shortDesc: 'Computers, networking, CCTV and POS equipment for local businesses, from one supplier.',
    fullDesc: 'We work with local businesses that need practical technology solutions. Instead of dealing with several suppliers, contact us for computers, networking, security cameras, electronics, POS related equipment and ongoing technology support.',
    category: 'business',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Business computers and hardware supply',
      'Network equipment setup and troubleshooting',
      'CCTV and surveillance for commercial property',
      'POS related equipment support',
      'One local point of contact for everyday IT'
    ]
  },
  {
    id: 'device-support',
    title: 'Device Support & Setup',
    shortDesc: 'Data transfer, account setup and hands-on help with the technology you already own.',
    fullDesc: 'Eliminate technology frustration with personalised support. Whether you need photos and contacts moved to a new phone, an email account configured or a stubborn software problem resolved, we provide patient, step by step assistance.',
    category: 'support',
    iconName: 'LifeBuoy',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Phone to phone data and photo migration',
      'Cloud backup and email configuration',
      'Slow system optimisation and startup cleanup',
      'Printer, Bluetooth and Wi-Fi connectivity help',
      'One to one technology walkthroughs'
    ]
  },
  {
    id: 'accessories-peripherals',
    title: 'Accessories & Peripherals',
    shortDesc: 'Cases, screen protection, chargers, cables, power banks, docks and audio.',
    fullDesc: 'Complete your setup with accessories chosen for durability. We stock protective cases, tempered glass, fast chargers, braided cables, USB-C hubs, power banks and audio gear, and we fit screen protection before you leave the store.',
    category: 'accessories',
    iconName: 'Headphones',
    image: DEMO_IMAGE.headphones,
    features: [
      'Impact resistant cases and 9H tempered glass',
      'Fast GaN wall chargers, 30W to 100W',
      'Braided USB-C and Lightning cables',
      'Multi-port USB-C hubs and display adapters',
      'Power banks, headphones and earbuds'
    ]
  }
];

/**
 * Service id to the value of the matching option in the booking form's service
 * select. The two lists are worded differently, so a service page that sent its
 * own title through would leave the select showing nothing.
 * Keep this in step with the options in `BookingForm`.
 */

/* --------------------------------------------------------------------------
   TEMPORARY DEMO PRODUCTS.

   Stand-in listings so the store layout, category filtering, featured shelf
   and product cards can be reviewed before the real inventory is photographed
   and written up. Each carries `isDemo` so they stay identifiable in code and
   can be pulled in one edit; nothing labels them in the UI.

   Deliberately generic: no brand names, no model numbers, no invented
   specifications and no prices. The copy says what the category is and tells
   the visitor to ask, which is what the real listings already do because stock
   changes weekly. Delete this array and the spread below to remove them.
   -------------------------------------------------------------------------- */
export const DEMO_PRODUCTS: ProductItem[] = [
  {
    id: 'demo-wireless-camera',
    name: 'Wireless Security Camera',
    category: 'security-cameras',
    categoryLabel: 'Security Cameras',
    description: 'Indoor and outdoor wireless cameras for homes and small businesses.',
    specs: ['Indoor and outdoor options', 'Remote viewing from your phone', 'Ask in store for current models'],
    image: DEMO_IMAGE.securityCamera,
    tag: 'Install Available',
    isDemo: true,
    status: 'Inquire for Availability',
  },
  {
    id: 'demo-dash-camera',
    name: 'Dash Camera',
    category: 'other-electronics',
    categoryLabel: 'Other Electronics',
    description: 'In-car cameras for everyday driving and for fleet vehicles.',
    specs: ['Front and rear options', 'Fitted in store', 'Ask in store for current models'],
    image: DEMO_IMAGE.dashCam,
    tag: 'In Store Now',
    isDemo: true,
    status: 'Inquire for Availability',
  },
  {
    id: 'demo-smart-gadget',
    name: 'Smart Home Device',
    category: 'other-electronics',
    categoryLabel: 'Other Electronics',
    description: 'Connected devices for the home, set up in store if you want the help.',
    specs: ['Setup help available', 'Works with common home systems', 'Ask in store for current models'],
    image: DEMO_IMAGE.smartHome,
    tag: 'Setup Available',
    isDemo: true,
    status: 'Inquire for Availability',
  },
  {
    id: 'demo-phone-accessory',
    name: 'Phone Accessory',
    category: 'phone-accessories',
    categoryLabel: 'Phone Accessories',
    description: 'Cases, mounts, stands and screen protection for current phones.',
    specs: ['Fitted in store', 'Most current models covered', 'Ask in store for current models'],
    image: DEMO_IMAGE.phoneWithKeyboard,
    tag: 'Protection',
    isDemo: true,
    status: 'Inquire for Availability',
  },
  {
    id: 'demo-computer-accessory',
    name: 'Computer Accessory',
    category: 'computer-accessories',
    categoryLabel: 'Computer Accessories',
    description: 'Keyboards, mice, hubs, docks and display adapters.',
    specs: ['Desktop and laptop options', 'Wired and wireless', 'Ask in store for current models'],
    image: DEMO_IMAGE.keyboardWhite,
    tag: 'Productivity',
    isDemo: true,
    status: 'Inquire for Availability',
  },
  {
    id: 'demo-audio-accessory',
    name: 'Audio Accessory',
    category: 'headphones',
    categoryLabel: 'Headphones',
    description: 'Wired and wireless headphones, earbuds and speakers.',
    specs: ['Wired and wireless', 'Over-ear and in-ear', 'Ask in store for current models'],
    image: DEMO_IMAGE.earbuds,
    tag: 'Premium Audio',
    isDemo: true,
    status: 'Inquire for Availability',
  },
  {
    id: 'demo-console-bundle',
    name: 'Console Accessory',
    category: 'gaming',
    categoryLabel: 'Gaming Systems',
    description: 'Controllers, headsets, cables and storage for current consoles.',
    specs: ['Console accessories', 'New and pre-owned', 'Ask in store for current models'],
    image: DEMO_IMAGE.gamepad,
    tag: 'In Store Now',
    isDemo: true,
    status: 'Inquire for Availability',
  },
];

export const SERVICE_BOOKING_OPTION: Record<string, string> = {
  'cell-phone-repair': 'Cell Phone Repair',
  'computer-repairs': 'Computer Repair',
  'device-wrapping': 'Custom Device Wrapping',
  'security-cameras': 'Security Cameras',
  'gaming-console-repair': 'Gaming Console Repair',
  'tablet-repair': 'Tablet Repair',
  'device-sales': 'Device Sales Consultation',
  'used-refurbished-phones': 'Device Sales Consultation',
  'we-buy-devices': 'Sell or Trade In a Device',
  'business-tech-solutions': 'Business Technology',
  'device-support': 'Technical Support',
  'accessories-peripherals': 'Device Sales Consultation',
};

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'prod-smartphones-flagship',
    name: 'Apple iPhone & Samsung Galaxy',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    description: 'Selected flagship and high performance smartphones with vibrant OLED displays, multi camera systems and long battery life.',
    specs: ['Apple iPhone & Samsung Galaxy', 'OLED High-Refresh Display', '5G Connectivity', 'Setup & Transfer In Store'],
    image: DEMO_IMAGE.phonesBright,
    tag: 'Showroom Featured',
    isPopular: true,
    status: 'Inquire for Availability'
  },
  {
    id: 'prod-used-phones',
    name: 'Used & Pre-Owned Smartphones',
    category: 'used-phones',
    categoryLabel: 'Used & Refurbished Phones',
    description: 'An affordable alternative to buying new. Selected iPhone, Galaxy and Android handsets at several price points, with stock changing regularly.',
    specs: ['Several Price Points', 'iPhone, Galaxy & Android', 'Unlocked Options Available', 'Tested Before Sale'],
    image: DEMO_IMAGE.phoneInHand,
    tag: 'Budget Friendly',
    isPopular: true,
    status: 'Inquire for Availability'
  },
  {
    id: 'prod-laptop-ultrabook',
    name: 'Laptops for Work & Study',
    category: 'laptops',
    categoryLabel: 'Laptops',
    description: 'Lightweight, dependable laptops for students, mobile professionals and everyday home use. Tell us how you will use it and we will match the specification.',
    specs: ['Multi-Core Processor', 'Fast PCIe SSD Storage', 'Full-Day Battery', 'OS Installed & Updated'],
    image: DEMO_IMAGE.laptopDesk,
    tag: 'Top Performance',
    isPopular: true,
    status: 'Available in Showroom'
  },
  {
    id: 'prod-laptop-workstation',
    name: 'Business Productivity Laptop',
    category: 'laptops',
    categoryLabel: 'Laptops',
    description: 'Heavy duty performance laptop for intensive multitasking, business spreadsheets, media editing and data handling.',
    specs: ['Expanded RAM Memory', 'Dedicated Graphics Option', 'Reinforced Chassis', 'Full Port Selection'],
    image: DEMO_IMAGE.laptopAngled,
    tag: 'Business Choice',
    status: 'Inquire for Availability'
  },
  {
    id: 'prod-desktop-tower',
    name: 'Desktop Computers & Towers',
    category: 'desktops',
    categoryLabel: 'Desktop Computers',
    description: 'Reliable desktop systems, pre-configured or custom assembled, for dependable everyday productivity and expandable storage.',
    specs: ['Modular & Upgradable', 'High Airflow Cooling', 'NVMe Storage', 'Multi-Display Support'],
    image: DEMO_IMAGE.desktopSetup,
    tag: 'Expandable',
    status: 'Special Order'
  },
  {
    id: 'prod-gaming-consoles',
    name: 'PlayStation & Gaming Systems',
    category: 'gaming',
    categoryLabel: 'Gaming Systems',
    description: 'A changing selection of gaming consoles and systems, alongside our PlayStation 5 and PlayStation 4 repair service.',
    specs: ['PlayStation & Other Systems', 'New & Pre-Owned Stock', 'Controllers & Accessories', 'Repair Service Available'],
    image: DEMO_IMAGE.console,
    tag: 'Sales & Repair',
    isPopular: true,
    status: 'Inquire for Availability'
  },
  {
    id: 'prod-security-cameras',
    name: 'IP & PoE Security Camera Systems',
    category: 'security-cameras',
    categoryLabel: 'Security Cameras',
    description: 'Camera systems for homes, retail stores, offices and commercial property, with NVR recording and remote viewing from your phone.',
    specs: ['IP & PoE Cameras', 'Network Video Recorder', 'Night Vision, Indoor & Outdoor', 'Professional Installation'],
    image: DEMO_IMAGE.cameraInstall,
    tag: 'Install Available',
    status: 'Special Order'
  },
  {
    id: 'prod-device-wraps',
    name: 'Custom Device Wraps',
    category: 'wraps',
    categoryLabel: 'Custom Wraps',
    description: 'Change the look of a phone, tablet, laptop, console or controller with a professional wrap, while helping protect the original exterior.',
    specs: ['Colours, Patterns & Textures', 'Phones, Laptops & Consoles', 'Controllers & Selected Electronics', 'Fitted In Store'],
    image: DEMO_IMAGE.texturedPhone,
    tag: 'Store Specialty',
    status: 'Available in Showroom'
  },
  {
    id: 'prod-cases-protection',
    name: 'Shockproof Protective Cases',
    category: 'phone-accessories',
    categoryLabel: 'Phone Accessories',
    description: 'Drop tested smartphone cases with raised bezel edges that protect the camera lenses and screen from impacts.',
    specs: ['Dual-Layer Polycarbonate & TPU', 'Raised Screen & Camera Bumpers', 'Wireless Charging Compatible', 'Precision Port Cutouts'],
    image: DEMO_IMAGE.phoneOnDesk,
    tag: 'Protection',
    isPopular: true,
    status: 'Available in Showroom'
  },
  {
    id: 'prod-chargers-gan',
    name: 'GaN Multi-Port Fast Charger',
    category: 'chargers-cables',
    categoryLabel: 'Chargers & Cables',
    description: 'Compact gallium nitride charger that rapid charges phones, tablets and laptops at the same time with intelligent power delivery.',
    specs: ['USB-C Power Delivery 3.0', 'Universal Compatibility', 'Over-Heat & Surge Protection', 'Compact Travel Size'],
    image: DEMO_IMAGE.charger,
    tag: 'Essential Tech',
    isPopular: true,
    status: 'Available in Showroom'
  },
  {
    id: 'prod-cables-braided',
    name: 'Braided USB-C & Lightning Cables',
    category: 'chargers-cables',
    categoryLabel: 'Chargers & Cables',
    description: 'Nylon braided cables built to survive thousands of bends without fraying or losing charging speed.',
    specs: ['Nylon Braided Sheath', 'High-Speed Data Sync', 'Reinforced Connector Collars', 'Available in 1m, 2m & 3m'],
    image: DEMO_IMAGE.accessoriesFlatlay,
    tag: 'Heavy Duty',
    status: 'Available in Showroom'
  },
  {
    id: 'prod-audio-headphones',
    name: 'Noise-Cancelling Headphones',
    category: 'headphones',
    categoryLabel: 'Headphones',
    description: 'Immersive sound with active noise cancellation for focused work, study or travel.',
    specs: ['Precision Dynamic Drivers', 'Active Noise Cancellation', 'Memory Foam Ear Cushions', '30+ Hour Playtime'],
    image: DEMO_IMAGE.headphones,
    tag: 'Premium Audio',
    isPopular: true,
    status: 'Available in Showroom'
  },
  {
    id: 'prod-computer-accessories',
    name: 'USB-C Hub & Desktop Dock',
    category: 'computer-accessories',
    categoryLabel: 'Computer Accessories',
    description: 'Expand your laptop with 4K HDMI output, USB 3.0 ports, an SD card reader and USB-C pass-through power.',
    specs: ['4K 60Hz HDMI Output', 'Gigabit Ethernet Port', 'USB 3.1 Data Ports', 'Anodised Aluminium Casing'],
    image: DEMO_IMAGE.mouse,
    tag: 'Productivity',
    status: 'Available in Showroom'
  },
  {
    id: 'prod-other-powerbank',
    name: 'Power Bank, 20,000mAh',
    category: 'other-electronics',
    categoryLabel: 'Other Electronics',
    description: 'Portable power that recharges a modern smartphone several times on a single charge.',
    specs: ['20,000mAh Capacity', 'Dual Fast USB Output', 'Digital Battery Indicator', 'Airline Approved'],
    image: 'https://ugreenpk.com/wp-content/uploads/2024/10/UGREEN-25683-Power-Bank-20000mAh-22.5W-PD-3.0-Fast-Charging.webp',
    tag: 'Portable Power',
    status: 'Available in Showroom'
  },
  /* Temporary stand-in listings. Remove this line and DEMO_PRODUCTS above
     once the real inventory is in. */
  ...DEMO_PRODUCTS,
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'The team gave me honest, straightforward advice when my laptop screen stopped turning on. They explained clearly what was wrong and had it fixed without any runaround. Highly recommended for local tech service.',
    customerName: 'Verified Brantford Customer',
    serviceCategory: 'Computer & Laptop Repair',
    verified: true,
    date: 'Recent Service',
    rating: 5
  },
  {
    id: 'test-2',
    quote: 'Cracked my iPhone screen and had it replaced without a long wait, at a fair price. Friendly, knowledgeable service right here on King Street.',
    customerName: 'Local Technology Client',
    serviceCategory: 'Cell Phone Repair',
    verified: true,
    date: 'Recent Service',
    rating: 5
  },
  {
    id: 'test-3',
    quote: 'Brought my console in after it stopped showing a picture, and they talked me through exactly what the problem was before doing anything. Easy to deal with.',
    customerName: 'Verified Device Owner',
    serviceCategory: 'Gaming Console Repair',
    verified: true,
    date: 'Recent Service',
    rating: 5
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Where is Brantford Wireless & Electronics located?',
    answer: 'We are at 28 King Street, Brantford, Ontario. You are welcome to walk in with a device, or call us first at (416) 771-9078 if you would rather check that we can help before you travel.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'What types of devices do you repair?',
    answer: 'We repair cell phones including Apple iPhone and Samsung Galaxy, other Android phones, iPads and Android tablets, laptops, desktop computers, and gaming consoles including PlayStation 5 and PlayStation 4. Common work includes cracked screens, failing batteries, charging ports, cameras, speakers, power faults and software problems.',
    category: 'Repairs'
  },
  {
    id: 'faq-3',
    question: 'Do you repair iPhone and Samsung screens?',
    answer: 'Yes. Screen and glass replacement is our most requested repair, for iPhone, Samsung Galaxy and other Android phones. Panels and parts vary by model, so tell us your exact model and we will quote it. Where the part is in stock, many screens are completed the same day or the next day.',
    category: 'Repairs'
  },
  {
    id: 'faq-4',
    question: 'Do you repair PlayStation and other gaming consoles?',
    answer: 'Yes. We handle selected repairs for PlayStation 5, PlayStation 4 and other gaming systems, including HDMI port repair, no display, power issues, overheating, damaged ports, disc drive faults and system software problems. Bring the console in for an assessment.',
    category: 'Repairs'
  },
  {
    id: 'faq-5',
    question: 'What is custom device wrapping?',
    answer: 'A wrap is a professional finish applied to your device that changes how it looks while helping protect the original exterior from scratches and everyday wear. We wrap smartphones, tablets, laptops, gaming consoles, controllers and selected electronics, in a range of colours, patterns and textures. Visit the store to see the current options in person.',
    category: 'Products'
  },
  {
    id: 'faq-6',
    question: 'Do you supply and install security cameras?',
    answer: 'Yes. We supply and install IP and PoE security camera systems with network video recorders, for homes, retail stores, offices and commercial property, including indoor, outdoor and night vision cameras with remote viewing from your phone. Contact us to discuss the right system for your property.',
    category: 'Products'
  },
  {
    id: 'faq-7',
    question: 'Do you buy phones and electronics?',
    answer: 'Yes. We buy selected new, used, damaged and broken devices, including iPhone and Android phones, iPads and tablets, laptops, desktop computers, PlayStation consoles and other gaming systems. Bring the device in for an evaluation. All purchases are subject to inspection, ownership verification and our purchasing requirements.',
    category: 'Products'
  },
  {
    id: 'faq-8',
    question: 'Do you sell used and refurbished phones?',
    answer: 'Yes. We carry a changing selection of used and pre-owned smartphones, including selected Apple iPhone, Samsung Galaxy and other Android models, at several price points. Stock changes regularly, so call or visit to see what is available today.',
    category: 'Products'
  },
  {
    id: 'faq-9',
    question: 'Can I book a repair appointment online?',
    answer: 'Yes. Use the Book a Service tool on this website to choose your device type, the service you need, and a preferred date and time. We review every request and get in touch to confirm the details.',
    category: 'Booking & Quotes'
  },
  {
    id: 'faq-10',
    question: 'How do I get a repair or product quote?',
    answer: 'Repair cost depends on your exact make, model and the parts involved, so we quote each job rather than publishing flat prices. Call us at (416) 771-9078 or send a booking request, and we will give you a straight answer, including when a repair is not worth doing.',
    category: 'Booking & Quotes'
  },
  {
    id: 'faq-11',
    question: 'Do you work with local businesses?',
    answer: 'Yes. We supply and support computers, networking, security cameras, electronics and POS related equipment for local businesses, so you can deal with one local supplier instead of several. Contact us with what your business needs.',
    category: 'General'
  },
  {
    id: 'faq-12',
    question: 'How can I contact you?',
    answer: 'Call (416) 771-9078, email brantfordwireless@gmail.com, visit us at 28 King Street, Brantford, Ontario, or submit an enquiry using any form on this website.',
    category: 'General'
  }
];

export const TEAM_VALUES = [
  {
    title: 'Technology Specialist',
    role: 'Technology Specialist & Founder',
    description: 'Dedicated to bringing trusted, transparent and approachable technology solutions to the Brantford community, with a commitment to long-term customer relationships.',
    highlights: ['Device Diagnostics', 'Hardware Consultation', 'Customer Service']
  },
  {
    title: 'Technical Service Team',
    role: 'Repair, Wrapping & Installation',
    description: 'Committed to careful hardware testing, precise screen and battery replacements, console repairs, custom wrapping and clean security camera installations.',
    highlights: ['Phone & Console Repair', 'Custom Wrapping', 'CCTV Installation']
  }
];

/* --------------------------------------------------------------------------
   Promotional banner slides.
   Edit, reorder, add or remove entries here. The banner adapts to any count,
   and hides its controls when only one slide is present. Keep copy factual.
   -------------------------------------------------------------------------- */
export const PROMO_SLIDES: PromoSlide[] = [
  {
    id: 'promo-repairs',
    badge: 'Repairs',
    headline: 'Cracked screen? Bring it in',
    body: 'iPhone, Samsung and Android screens, batteries and charging ports. Book a slot or walk in.',
    ctaLabel: 'Book a repair',
    ctaRoute: 'booking',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Technician replacing a cracked smartphone screen at a workbench'
  },
  {
    id: 'promo-wrapping',
    badge: 'Store specialty',
    headline: 'Wrap your phone, laptop or console',
    body: 'Colours, patterns and textures fitted in store, protecting the original finish underneath.',
    ctaLabel: 'See wrapping',
    ctaRoute: 'service',
    ctaServiceId: 'device-wrapping',
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Smartphone finished in a custom textured wrap'
  },
  {
    id: 'promo-buyback',
    badge: 'We buy devices',
    headline: 'Turn old electronics into money',
    body: 'Phones, tablets, laptops and consoles. Working, damaged or broken. Bring them in for an offer.',
    ctaLabel: 'Get an offer',
    ctaRoute: 'service',
    ctaServiceId: 'we-buy-devices',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Used smartphone resting on a dark surface, ready for evaluation'
  },
  {
    id: 'promo-security',
    badge: 'Security cameras',
    headline: 'CCTV for your home or business',
    body: 'IP and PoE systems with NVR recording and remote viewing from your phone. Installation available.',
    ctaLabel: 'See camera systems',
    ctaRoute: 'service',
    ctaServiceId: 'security-cameras',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Security camera beside a phone showing its live view'
  },
  {
    id: 'promo-used-devices',
    badge: 'In store now',
    headline: 'Upgrade your phone for less',
    body: 'New and pre-owned smartphones, set up and transferred before you leave the store.',
    ctaLabel: 'See devices',
    ctaRoute: 'products',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Modern smartphone displayed on a light surface'
  },
  {
    id: 'promo-computers',
    badge: 'Computers',
    headline: 'Laptops and desktops for work and study',
    body: 'Tell us how you will use it and we will match the specification.',
    ctaLabel: 'View computers',
    ctaRoute: 'products',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Open laptop on a bright desk'
  },

  /* --------------------------------------------------------------------
     TEMPORARY DEMO BANNERS.

     Stand-in promotional slides so the banner sizing and rotation can be
     reviewed. Wording is deliberately non-numeric: no percentages, no
     struck-through prices and no limited-time claims, because the store has
     not set any. Each carries `isDemo` so they stay identifiable in code;
     nothing labels them in the UI. Delete these five
     entries to remove them.
     -------------------------------------------------------------------- */
  {
    id: 'demo-promo-featured-deals',
    badge: 'Featured deals',
    headline: 'This week on the shelf',
    body: 'A rotating pick of phones, computers and accessories. Ask us what is in.',
    ctaLabel: 'See the store',
    ctaRoute: 'products',
    image: DEMO_IMAGE.accessoriesFlatlay,
    imageAlt: 'Demo image: electronics and accessories arranged flat',
    isDemo: true,
  },
  {
    id: 'demo-promo-new-arrivals',
    badge: 'New arrivals',
    headline: 'Just in at King Street',
    body: 'Stock changes weekly. Call ahead and we will check a specific model for you.',
    ctaLabel: 'Browse arrivals',
    ctaRoute: 'products',
    image: DEMO_IMAGE.phonesBright,
    imageAlt: 'Demo image: several smartphones displayed on a bright surface',
    isDemo: true,
  },
  {
    id: 'demo-promo-special',
    badge: 'Special promotion',
    headline: 'Ask about a custom wrap',
    body: 'Phones, laptops, consoles and controllers, finished in store.',
    ctaLabel: 'See wrapping',
    ctaRoute: 'service',
    ctaServiceId: 'device-wrapping',
    image: DEMO_IMAGE.texturedPhone,
    imageAlt: 'Demo image: a smartphone in a coloured, textured finish',
    isDemo: true,
  },
  {
    id: 'demo-promo-security',
    badge: 'Featured service',
    headline: 'Cameras for home and business',
    body: 'Supply and installation, with remote viewing set up before we leave.',
    ctaLabel: 'See camera systems',
    ctaRoute: 'service',
    ctaServiceId: 'security-cameras',
    image: DEMO_IMAGE.securityCamera,
    imageAlt: 'Demo image: a security camera mounted outdoors',
    isDemo: true,
  },
  {
    id: 'demo-promo-accessories',
    badge: 'Featured products',
    headline: 'Audio, charging and protection',
    body: 'Headphones, chargers, cables and cases. Screen protection fitted in store.',
    ctaLabel: 'See accessories',
    ctaRoute: 'products',
    image: DEMO_IMAGE.headphones,
    imageAlt: 'Demo image: headphones and charging accessories',
    isDemo: true,
  },
];
