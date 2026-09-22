export type Lang = 'ar' | 'en'

export const WHATSAPP = '218912345678'
export const WHATSAPP_DISPLAY = '+218 91 234 5678'
export const PHONE_DISPLAY = '+218 91 234 5678'
export const EMAIL = 'contact@almanhaj.ly'

export type CategoryId = 'school' | 'books' | 'computers'

export interface Category {
  id: CategoryId
  nameEn: string
  nameAr: string
  descEn: string
  descAr: string
  image: string
}

export const CATEGORIES: Category[] = [
  {
    id: 'school',
    nameEn: 'School Supplies',
    nameAr: 'اللوازم المدرسية',
    descEn: 'Notebooks, pens, backpacks, art & office supplies — wholesale & retail.',
    descAr: 'كراسات، أقلام، حقائب، أدوات فنية ومكتبية — بالجملة والتجزئة.',
    image: '/products/notebooks.jpg',
  },
  {
    id: 'books',
    nameEn: 'Books & Library',
    nameAr: 'المكتبة والكتب',
    descEn: 'School textbooks, novels, children books, dictionaries and references.',
    descAr: 'الكتب المدرسية، الروايات، كتب الأطفال، القواميس والمراجع.',
    image: '/products/arabicbooks.jpg',
  },
  {
    id: 'computers',
    nameEn: 'Used Computers',
    nameAr: 'الحاسبات المستعملة',
    descEn: 'Tested second-hand laptops, desktops, monitors, printers & accessories.',
    descAr: 'لابتوبات ومكاتب وشاشات وطابعات وملحقات مستعملة ومفحوصة.',
    image: '/products/laptop.jpg',
  },
]

export interface Product {
  id: string
  category: CategoryId
  image: string
  nameEn: string
  nameAr: string
  descEn: string
  descAr: string
  price: number // Libyan Dinar
  tag: 'retail' | 'wholesale' | 'used'
}

export const PRODUCTS: Product[] = [
  // School
  {
    id: 'notebooks',
    category: 'school',
    image: '/products/notebooks.jpg',
    nameEn: 'Notebook Pack (10 pcs)',
    nameAr: 'حزمة كراسات (10 قطع)',
    descEn: 'A5 lined notebooks, durable covers, ideal for all grades.',
    descAr: 'كراسات مسطرة مقاس A5 بأغلفة متينة، مناسبة لجميع المراحل.',
    price: 25,
    tag: 'wholesale',
  },
  {
    id: 'pens',
    category: 'school',
    image: '/products/pens.jpg',
    nameEn: 'Ballpoint Pens Set',
    nameAr: 'طقم أقلام حبر',
    descEn: 'Smooth-writing pens in assorted colors, box of 12.',
    descAr: 'أقلام سلسة الكتابة بألوان متنوعة، علبة 12 قلم.',
    price: 15,
    tag: 'retail',
  },
  {
    id: 'backpack',
    category: 'school',
    image: '/products/backpack.jpg',
    nameEn: 'School Backpack',
    nameAr: 'حقيبة مدرسية',
    descEn: 'Ergonomic padded backpack with multiple compartments.',
    descAr: 'حقيبة ظهر مريحة مبطنة بعدة جيوب واسعة.',
    price: 90,
    tag: 'retail',
  },
  {
    id: 'calculator',
    category: 'school',
    image: '/products/calculator.jpg',
    nameEn: 'Scientific Calculator',
    nameAr: 'آلة حاسبة علمية',
    descEn: '240+ functions, solar & battery, exam approved.',
    descAr: 'أكثر من 240 وظيفة، تعمل بالطاقة الشمسية والبطارية.',
    price: 120,
    tag: 'retail',
  },
  // Books
  {
    id: 'arabicbooks',
    category: 'books',
    image: '/products/arabicbooks.jpg',
    nameEn: 'Arabic Literature Collection',
    nameAr: 'مجموعة الأدب العربي',
    descEn: 'Curated selection of classic and modern Arabic literature.',
    descAr: 'مختارات من الأدب العربي الكلاسيكي والحديث.',
    price: 60,
    tag: 'retail',
  },
  {
    id: 'childrenbooks',
    category: 'books',
    image: '/products/childrenbooks.jpg',
    nameEn: "Children's Illustrated Books",
    nameAr: 'قصص أطفال مصوّرة',
    descEn: 'Colorful stories that make early reading fun and easy.',
    descAr: 'قصص ملوّنة تجعل القراءة المبكرة ممتعة وسهلة.',
    price: 20,
    tag: 'retail',
  },
  {
    id: 'dictionary',
    category: 'books',
    image: '/products/dictionary.jpg',
    nameEn: 'English–Arabic Dictionary',
    nameAr: 'قاموس إنجليزي - عربي',
    descEn: 'Comprehensive two-way dictionary for students & pros.',
    descAr: 'قاموس شامل ثنائي الاتجاه للطلاب والمحترفين.',
    price: 45,
    tag: 'retail',
  },
  {
    id: 'textbooks',
    category: 'books',
    image: '/products/textbooks.jpg',
    nameEn: 'School Textbooks Set',
    nameAr: 'طقم الكتب المدرسية',
    descEn: 'Full-year curriculum sets available for all levels.',
    descAr: 'أطقم مناهج كاملة لكل المراحل الدراسية.',
    price: 80,
    tag: 'wholesale',
  },
  // Computers
  {
    id: 'laptop',
    category: 'computers',
    image: '/products/laptop.jpg',
    nameEn: 'HP EliteBook Laptop (Used)',
    nameAr: 'لابتوب HP EliteBook (مستعمل)',
    descEn: 'Core i5, 8GB RAM, 256GB SSD — tested, 3-month warranty.',
    descAr: 'كور i5، رام 8 جيجا، SSD سعة 256 — مفحوص وبضمان 3 أشهر.',
    price: 1450,
    tag: 'used',
  },
  {
    id: 'desktop',
    category: 'computers',
    image: '/products/desktop.jpg',
    nameEn: 'Dell OptiPlex Desktop (Used)',
    nameAr: 'حاسوب مكتبي Dell (مستعمل)',
    descEn: 'Reliable office desktop, Core i5, 8GB RAM, 500GB.',
    descAr: 'حاسوب مكتبي موثوق، كور i5، رام 8 جيجا، 500 جيجا.',
    price: 1100,
    tag: 'used',
  },
  {
    id: 'monitor',
    category: 'computers',
    image: '/products/monitor.jpg',
    nameEn: '24" LED Monitor (Used)',
    nameAr: 'شاشة LED مقاس 24 (مستعملة)',
    descEn: 'Full HD IPS panel, HDMI & VGA, excellent condition.',
    descAr: 'شاشة IPS بدقة فل إتش دي، HDMI و VGA، بحالة ممتازة.',
    price: 350,
    tag: 'used',
  },
  {
    id: 'printer',
    category: 'computers',
    image: '/products/printer.jpg',
    nameEn: 'Laser Printer (Used)',
    nameAr: 'طابعة ليزر (مستعملة)',
    descEn: 'Fast monochrome laser printer, USB & network ready.',
    descAr: 'طابعة ليزر أحادية سريعة، تدعم USB والشبكة.',
    price: 480,
    tag: 'used',
  },
]

export const buildWhatsAppLink = (productName: string, lang: Lang) => {
  const msg =
    lang === 'ar'
      ? `مرحباً، أرغب في الاستفسار عن: ${productName}`
      : `Hello, I'd like to ask about: ${productName}`
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`
}

type Dict = Record<string, { ar: string; en: string }>

export const T: Dict = {
  brand: { ar: 'المنهج', en: 'Al Manhaj' },
  brandFull: { ar: 'شركة المنهج للقرطاسية', en: 'Al Manhaj for Stationery' },
  tagline: {
    ar: 'قرطاسية • مكتبة • حاسبات مستعملة',
    en: 'Stationery • Books • Used Computers',
  },
  location: { ar: 'طرابلس، ليبيا', en: 'Tripoli, Libya' },
  wholesaleRetail: { ar: 'بيع بالجملة والتجزئة', en: 'Wholesale & Retail' },

  navHome: { ar: 'الرئيسية', en: 'Home' },
  navCategories: { ar: 'الأقسام', en: 'Categories' },
  navProducts: { ar: 'المنتجات', en: 'Products' },
  navAbout: { ar: 'من نحن', en: 'About' },
  navContact: { ar: 'تواصل', en: 'Contact' },

  heroKicker: { ar: 'في قلب طرابلس', en: 'In the heart of Tripoli' },
  heroTitle: {
    ar: 'كل ما يحتاجه الطالب والمكتب في مكان واحد',
    en: 'Everything for students & offices, in one place',
  },
  heroSub: {
    ar: 'لوازم مدرسية، كتب ومراجع، وحاسبات مستعملة مفحوصة — بأسعار الجملة والتجزئة مع توصيل داخل طرابلس.',
    en: 'School supplies, books & references, and tested used computers — at wholesale and retail prices with delivery across Tripoli.',
  },
  heroCta1: { ar: 'تصفّح المنتجات', en: 'Browse products' },
  heroCta2: { ar: 'تواصل واتساب', en: 'WhatsApp us' },

  featWholesaleT: { ar: 'أسعار الجملة', en: 'Wholesale pricing' },
  featWholesaleD: { ar: 'خصومات للمدارس والموزعين والكميات.', en: 'Discounts for schools, resellers and bulk orders.' },
  featDeliveryT: { ar: 'توصيل داخل طرابلس', en: 'Delivery in Tripoli' },
  featDeliveryD: { ar: 'شحن سريع لجميع مناطق العاصمة.', en: 'Fast shipping across the capital.' },
  featWarrantyT: { ar: 'ضمان على المستعمل', en: 'Warranty on used' },
  featWarrantyD: { ar: 'كل جهاز مستعمل مفحوص وبضمان.', en: 'Every used device is tested and warrantied.' },
  featSupportT: { ar: 'دعم واتساب', en: 'WhatsApp support' },
  featSupportD: { ar: 'اطلب واستفسر مباشرة عبر واتساب.', en: 'Order and ask directly via WhatsApp.' },

  catTitle: { ar: 'تصفّح حسب القسم', en: 'Shop by category' },
  catSub: { ar: 'ثلاثة أقسام رئيسية تغطي احتياجاتك.', en: 'Three main departments covering your needs.' },
  catView: { ar: 'عرض المنتجات', en: 'View products' },

  prodTitle: { ar: 'منتجات مختارة', en: 'Featured products' },
  prodSub: { ar: 'اطلب أي منتج مباشرة عبر واتساب.', en: 'Order any product directly via WhatsApp.' },
  filterAll: { ar: 'الكل', en: 'All' },
  order: { ar: 'اطلب عبر واتساب', en: 'Order via WhatsApp' },
  currency: { ar: 'د.ل', en: 'LYD' },
  tagRetail: { ar: 'تجزئة', en: 'Retail' },
  tagWholesale: { ar: 'جملة', en: 'Wholesale' },
  tagUsed: { ar: 'مستعمل', en: 'Used' },

  aboutKicker: { ar: 'من نحن', en: 'About us' },
  aboutTitle: { ar: 'شريكك الموثوق للقرطاسية والتقنية', en: 'Your trusted partner for stationery & tech' },
  aboutBody: {
    ar: 'شركة المنهج مؤسسة متخصصة في بيع اللوازم المدرسية والكتب والحاسبات المستعملة بالجملة والتجزئة في مدينة طرابلس. نخدم المدارس والطلاب والمكاتب والموزعين، ونحرص على تقديم منتجات موثوقة بأسعار منافسة وخدمة سريعة.',
    en: 'Al Manhaj is a specialized business selling school supplies, books and used computers — wholesale and retail — in Tripoli. We serve schools, students, offices and resellers with reliable products, competitive prices and fast service.',
  },
  stat1: { ar: '+5000', en: '5,000+' },
  stat1L: { ar: 'عميل سعيد', en: 'Happy customers' },
  stat2: { ar: '+1200', en: '1,200+' },
  stat2L: { ar: 'منتج متوفر', en: 'Products in stock' },
  stat3: { ar: '+10', en: '10+' },
  stat3L: { ar: 'سنوات خبرة', en: 'Years of experience' },

  contactKicker: { ar: 'تواصل معنا', en: 'Get in touch' },
  contactTitle: { ar: 'نحن هنا لخدمتك', en: 'We are here to help' },
  contactAddress: { ar: 'العنوان', en: 'Address' },
  contactAddressV: { ar: 'شارع الجمهورية، طرابلس، ليبيا', en: 'Al-Jumhuriya St., Tripoli, Libya' },
  contactPhone: { ar: 'الهاتف / واتساب', en: 'Phone / WhatsApp' },
  contactHours: { ar: 'أوقات العمل', en: 'Working hours' },
  contactHoursV: { ar: 'السبت - الخميس: 9ص - 8م', en: 'Sat - Thu: 9AM - 8PM' },
  contactEmail: { ar: 'البريد', en: 'Email' },
  contactWaBtn: { ar: 'راسلنا على واتساب', en: 'Message us on WhatsApp' },

  marquee1: { ar: 'توصيل مجاني داخل طرابلس للطلبات فوق 200 د.ل', en: 'Free delivery in Tripoli for orders over 200 LYD' },
  marquee2: { ar: 'خصومات خاصة للمدارس والموزعين', en: 'Special discounts for schools & resellers' },
  marquee3: { ar: 'حاسبات مستعملة مفحوصة بضمان', en: 'Tested used computers with warranty' },
  marquee4: { ar: 'كتب ومناهج لجميع المراحل الدراسية', en: 'Books & curricula for all school levels' },
  marquee5: { ar: 'اطلب مباشرة عبر واتساب', en: 'Order directly via WhatsApp' },

  themeLabel: { ar: 'السمة', en: 'Theme' },
  footerRights: { ar: 'جميع الحقوق محفوظة', en: 'All rights reserved' },
  footerMade: { ar: 'صُنع بعناية في طرابلس', en: 'Crafted with care in Tripoli' },
}
