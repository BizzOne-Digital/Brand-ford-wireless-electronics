import { ServiceItem, ProductItem, PricingCategory, TestimonialItem, FAQItem, PromoSlide } from '../types';

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
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1000&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Impact resistant cases and 9H tempered glass',
      'Fast GaN wall chargers, 30W to 100W',
      'Braided USB-C and Lightning cables',
      'Multi-port USB-C hubs and display adapters',
      'Power banks, headphones and earbuds'
    ]
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'prod-smartphones-flagship',
    name: 'Apple iPhone & Samsung Galaxy',
    category: 'smartphones',
    categoryLabel: 'Smartphones',
    description: 'Selected flagship and high performance smartphones with vibrant OLED displays, multi camera systems and long battery life.',
    specs: ['Apple iPhone & Samsung Galaxy', 'OLED High-Refresh Display', '5G Connectivity', 'Setup & Transfer In Store'],
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1000&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1000&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=1000&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000&auto=format&fit=crop',
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
  }
];

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: 'device-services',
    title: 'Phone & Tablet Repair',
    subtitle: 'iPhone, Samsung Galaxy, Android and iPad screen, battery and port services.',
    iconName: 'Smartphone',
    items: [
      {
        name: 'Screen & Glass Replacement',
        description: 'Assessment of the digitizer, OLED or LCD panel and glass, then replacement with the correct part for your exact model.',
        pricingNote: 'Custom quote based on your exact device model',
        turnaroundGuide: 'Same-day or next-day where the part is in stock',
        popular: true
      },
      {
        name: 'Battery Replacement & Health Check',
        description: 'Testing cell degradation and charge cycles, then fitting a fresh battery so the phone lasts a full day again.',
        pricingNote: 'Contact us with your model for an exact quote',
        turnaroundGuide: 'Fast inspection and replacement'
      },
      {
        name: 'Charging Port, Camera & Speaker Repair',
        description: 'Cleaning blocked or oxidised ports, connector realignment or port board replacement, plus camera, speaker, microphone and button repair.',
        pricingNote: 'Free initial inspection, quote after diagnostic',
        turnaroundGuide: 'Typically a quick service'
      }
    ]
  },
  {
    id: 'computer-services',
    title: 'Computer Diagnostics & Hardware',
    subtitle: 'Laptop and desktop diagnostics, physical repairs and performance upgrades.',
    iconName: 'Laptop',
    items: [
      {
        name: 'Full Hardware Diagnostic Check',
        description: 'Testing the motherboard, RAM, power supply, CPU thermals and storage health, with a plain itemised report.',
        pricingNote: 'Diagnostic with itemised findings',
        turnaroundGuide: 'Findings explained clearly before any work',
        popular: true
      },
      {
        name: 'Laptop Screen, Keyboard & Hinge Repair',
        description: 'Panel replacement for cracked, flickering or dim displays, plus keyboard replacement and hinge reinforcement.',
        pricingNote: 'Quote based on panel size and connector type',
        turnaroundGuide: 'Ordered parts checked on arrival'
      },
      {
        name: 'SSD & Memory Upgrade',
        description: 'Replacing a slow spinning hard drive with fast NVMe or SATA SSD storage, and expanding RAM, with data cloning if you want it.',
        pricingNote: 'Varies by capacity, 500GB to 2TB',
        turnaroundGuide: 'The biggest speed gain for an ageing PC'
      }
    ]
  },
  {
    id: 'repair-services',
    title: 'Software & System Recovery',
    subtitle: 'Boot loops, corrupted operating systems, malware and data rescue.',
    iconName: 'Wrench',
    items: [
      {
        name: 'Windows Installation & Clean Setup',
        description: 'Fresh Windows installation with current drivers, security updates and sensible performance settings.',
        pricingNote: 'Standard service rate',
        turnaroundGuide: 'Returned fully updated and clean',
        popular: true
      },
      {
        name: 'Virus, Malware & Adware Removal',
        description: 'Deep scanning and removal of rogue processes, browser hijackers, popups and the vulnerabilities that let them in.',
        pricingNote: 'Fixed-rate diagnostic and cleanup',
        turnaroundGuide: 'Thorough multi-engine scan'
      },
      {
        name: 'Data Backup & File Transfer',
        description: 'Recovering documents, photos and records from a failing system and moving them to your new device or external storage.',
        pricingNote: 'Assessed by drive condition and data volume',
        turnaroundGuide: 'Handled privately and carefully'
      }
    ]
  },
  {
    id: 'gaming-services',
    title: 'Gaming Console Repair',
    subtitle: 'PlayStation 5, PlayStation 4 and other gaming systems.',
    iconName: 'Gamepad2',
    items: [
      {
        name: 'HDMI Port & No Display Repair',
        description: 'Diagnosing and repairing a damaged HDMI port, the most common cause of a console that powers on but shows no picture.',
        pricingNote: 'Quote after inspection',
        turnaroundGuide: 'Assessed while you wait where possible',
        popular: true
      },
      {
        name: 'Power, Overheating & Fan Service',
        description: 'Console will not power on, shuts down under load, or runs loud and hot. Internal cleaning, thermal service and power fault diagnosis.',
        pricingNote: 'Quote based on the fault found',
        turnaroundGuide: 'Tested under load before collection'
      },
      {
        name: 'Disc Drive, Ports & System Software',
        description: 'Disc drive faults, damaged USB and controller ports, and system software problems including safe mode and restore issues.',
        pricingNote: 'Free initial assessment',
        turnaroundGuide: 'Explained before any work is approved'
      }
    ]
  },
  {
    id: 'wrapping-services',
    title: 'Custom Wrapping',
    subtitle: 'A new look for phones, laptops, consoles and controllers.',
    iconName: 'Palette',
    items: [
      {
        name: 'Phone & Tablet Wrap',
        description: 'A professional wrap in your choice of colour, pattern or texture, fitted in store, that also helps protect the original exterior.',
        pricingNote: 'Quote by device size and finish chosen',
        turnaroundGuide: 'Usually fitted on the same visit',
        popular: true
      },
      {
        name: 'Laptop, Console & Controller Wrap',
        description: 'Larger surfaces including laptop lids, console shells and controllers. Come in to see the finishes in person before choosing.',
        pricingNote: 'Quote by surface area and finish',
        turnaroundGuide: 'Booked in for a fitting slot'
      }
    ]
  },
  {
    id: 'security-services',
    title: 'Security Cameras & Installation',
    subtitle: 'CCTV systems for homes, retail stores, offices and commercial property.',
    iconName: 'Cctv',
    items: [
      {
        name: 'Camera System Consultation',
        description: 'We go through your property, coverage priorities and recording needs, then recommend a camera count and system that fits.',
        pricingNote: 'Consultation quote provided in advance',
        turnaroundGuide: 'Scheduled at your convenience',
        popular: true
      },
      {
        name: 'IP & PoE System Supply and Installation',
        description: 'Supply and professional installation of IP or PoE cameras with an NVR, night vision, recording storage and remote smartphone viewing.',
        pricingNote: 'Quote by camera count, cabling and property type',
        turnaroundGuide: 'Tested and remote viewing set up on handover'
      }
    ]
  },
  {
    id: 'buy-sell-services',
    title: 'We Buy Devices',
    subtitle: 'Selling or trading in a phone, tablet, laptop or console.',
    iconName: 'Recycle',
    items: [
      {
        name: 'Device Evaluation & Purchase Offer',
        description: 'Bring in a working, damaged or broken device and we will inspect it and make an offer. Subject to inspection, ownership verification and our purchasing requirements.',
        pricingNote: 'Offer based on model, condition and demand',
        turnaroundGuide: 'Evaluated in store, usually while you wait'
      }
    ]
  },
  {
    id: 'technology-solutions',
    title: 'Business Technology & Custom Builds',
    subtitle: 'Practical setups for small business, home office and study.',
    iconName: 'Cpu',
    items: [
      {
        name: 'Custom Desktop PC Build',
        description: 'Choosing the right components for your budget, precision assembly, cable management, BIOS setup and stress testing.',
        pricingNote: 'Custom quote based on parts and build depth',
        turnaroundGuide: 'Tested for thermal stability before handover'
      },
      {
        name: 'Business & Home Office Setup',
        description: 'Reliable Wi-Fi, multi-monitor setups, printer sharing, network equipment, POS related hardware and backup routines.',
        pricingNote: 'Consultation quote provided in advance',
        turnaroundGuide: 'Scheduled around your opening hours'
      }
    ]
  }
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
    answer: 'Repair cost depends on your exact make, model and the parts involved, so we quote each job rather than publishing flat prices. Submit a request on our Pricing page or call us directly at (416) 771-9078, and we will give you a straight answer, including when a repair is not worth doing.',
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
    ctaRoute: 'services',
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Smartphone finished in a custom textured wrap'
  },
  {
    id: 'promo-buyback',
    badge: 'We buy devices',
    headline: 'Turn old electronics into money',
    body: 'Phones, tablets, laptops and consoles. Working, damaged or broken. Bring them in for an offer.',
    ctaLabel: 'Get an offer',
    ctaRoute: 'contact',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Used smartphone resting on a dark surface, ready for evaluation'
  },
  {
    id: 'promo-security',
    badge: 'Security cameras',
    headline: 'CCTV for your home or business',
    body: 'IP and PoE systems with NVR recording and remote viewing from your phone. Installation available.',
    ctaLabel: 'Discuss a system',
    ctaRoute: 'contact',
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
  }
];
