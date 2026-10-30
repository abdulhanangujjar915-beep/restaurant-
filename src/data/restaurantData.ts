export interface MenuItem {
  id: string;
  name: string;
  urduName?: string;
  category: 'karahi' | 'bbq' | 'rice' | 'breads' | 'desserts' | 'specials';
  description: string;
  price: number; // in PKR
  image: string;
  badge?: string;
  spiceLevel: 1 | 2 | 3; // 1 = Mild, 2 = Medium, 3 = Desi Spicy
  preparationTime: string;
  servingSize: string;
  calories?: string;
  featured?: boolean;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  favoriteDish: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const RESTAURANT_INFO = {
  name: 'ZAQA',
  subName: 'Taste of Pakistan',
  tagline: 'Experience the True Taste of Pakistan',
  subtitle: 'Authentic Pakistani Flavours, Crafted with Love.',
  storyHeadline: 'Preserving Centuries of Royal Pakistani Culinary Heritage',
  phone: '+92 42 3578 9272',
  whatsapp: '+92 300 8472922',
  email: 'reservations@zaqa-restaurant.pk',
  address: 'Plot 42-B, MM Alam Road, Gulberg III, Lahore, Pakistan',
  landmark: 'Adjacent to Zauq Square, Valet Parking Available',
  openingHours: [
    { days: 'Monday – Thursday', hours: '12:30 PM – 12:30 AM' },
    { days: 'Friday', hours: '02:00 PM – 01:30 AM' },
    { days: 'Saturday – Sunday', hours: '12:00 PM – 01:30 AM' }
  ],
  stats: [
    { label: 'Years of Tradition', value: '25+' },
    { label: 'Secret Spices Ground Daily', value: '38' },
    { label: 'Slow Cooked Dishes', value: '8 hrs' },
    { label: 'Satisfied Guests', value: '150k+' }
  ]
};

// Generated authentic high-resolution images
export const IMAGES = {
  hero: '/src/assets/images/hero_pakistani_feast_1793367002950.jpg',
  muttonKarahi: '/src/assets/images/food_mutton_karahi_1793367003328.jpg',
  chickenBiryani: '/src/assets/images/food_chicken_biryani_1793367003965.jpg',
  bbqPlatter: '/src/assets/images/food_bbq_platter_1793367005083.jpg',
  beefNihari: '/src/assets/images/food_beef_nihari_1793367004776.jpg',
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'mutton-karahi',
    name: 'Royal Mutton Karahi',
    urduName: 'شاہی مٹن کڑاہی',
    category: 'karahi',
    description: 'Fresh tender goat meat seared on intense high flame in a cast iron wok with fresh red tomatoes, ginger matchsticks, and aromatic whole spices.',
    price: 3450,
    image: IMAGES.muttonKarahi,
    badge: "Chef's Signature",
    spiceLevel: 3,
    preparationTime: '30-35 mins',
    servingSize: 'Serves 2-3 (Full / 1kg)',
    featured: true
  },
  {
    id: 'chicken-karahi',
    name: 'Desi Chicken Karahi',
    urduName: 'دیسی چکن کڑاہی',
    category: 'karahi',
    description: 'Farm-fresh chicken cooked in pure desi ghee with crushed coriander, freshly crushed black pepper, green chilies, and ripe Punjabi tomatoes.',
    price: 2450,
    image: IMAGES.hero,
    badge: 'Guest Favorite',
    spiceLevel: 2,
    preparationTime: '25-30 mins',
    servingSize: 'Serves 2-3 (Full)',
    featured: true
  },
  {
    id: 'beef-nihari',
    name: 'Shahi Beef Nihari',
    urduName: 'شاہی بیف نہاری',
    category: 'specials',
    description: 'Slow-simmered for 8 continuous hours, tender beef shank in velvety spiced mahogany sauce, served with rich bone marrow and golden fried shallots.',
    price: 2650,
    image: IMAGES.beefNihari,
    badge: 'Royal Heritage',
    spiceLevel: 3,
    preparationTime: 'Available Daily',
    servingSize: 'Serves 2',
    featured: true
  },
  {
    id: 'chicken-biryani',
    name: 'Dum Pukht Chicken Biryani',
    urduName: 'دم پخت چکن بریانی',
    category: 'rice',
    description: 'Aromatic aged long-grain basmati rice layered with succulent chicken, saffron, dried plums (aloo bukhara), and mint, sealed and steamed to perfection.',
    price: 1850,
    image: IMAGES.chickenBiryani,
    badge: 'Bestseller',
    spiceLevel: 2,
    preparationTime: 'Instant Serve',
    servingSize: 'Generous Single / Double',
    featured: true
  },
  {
    id: 'bbq-platter',
    name: 'Grand ZAQA BBQ Platter',
    urduName: 'شاہی بار بی کیو پلیٹر',
    category: 'bbq',
    description: 'A regal charcoal assortment: Seekh Kebabs, Malai Tikka Boti, Bihari Boti, and Reshmi Kebab, served with grilled chilies, mint chutney & onions.',
    price: 4600,
    image: IMAGES.bbqPlatter,
    badge: 'Feast for 4',
    spiceLevel: 2,
    preparationTime: '25 mins',
    servingSize: 'Serves 3-4',
    featured: true
  },
  {
    id: 'seekh-kebab',
    name: 'Traditional Charred Seekh Kebab',
    urduName: 'سیخ کباب',
    category: 'bbq',
    description: 'Finely minced prime mutton and beef blended with raw papaya, toasted coriander seeds, fresh mint, and smoked over smoldering embers.',
    price: 1950,
    image: IMAGES.bbqPlatter,
    badge: 'Smoky Perfection',
    spiceLevel: 2,
    preparationTime: '20 mins',
    servingSize: '4 Large Skewers',
    featured: false
  },
  {
    id: 'chicken-handi',
    name: 'Creamy Boneless Chicken Handi',
    urduName: 'زعفرانی چکن ہانڈی',
    category: 'karahi',
    description: 'Melt-in-mouth boneless chicken cubes simmered in an authentic clay handi with rich cultured cream, fenugreek leaves (kasuri methi), and roasted cumin.',
    price: 2550,
    image: IMAGES.muttonKarahi,
    badge: 'Mild & Velvety',
    spiceLevel: 1,
    preparationTime: '25 mins',
    servingSize: 'Serves 2-3',
    featured: false
  },
  {
    id: 'tandoori-naan',
    name: 'Fresh Tandoori Roghani Naan',
    urduName: 'تازہ تندوری روغنی نان',
    category: 'breads',
    description: 'Clay-oven fired flatbread brushed with pure desi ghee, toasted white sesame seeds, and kalonji (nigella seeds). Crispy exterior, cloud-soft inside.',
    price: 180,
    image: IMAGES.hero,
    badge: 'Fresh from Tandoor',
    spiceLevel: 1,
    preparationTime: 'Hot & Fresh',
    servingSize: '1 Large Naan',
    featured: false
  },
  {
    id: 'garlic-naan',
    name: 'Artisan Garlic & Herb Naan',
    urduName: 'گارلک نان',
    category: 'breads',
    description: 'Hand-stretched dough infused with minced roasted garlic, fresh coriander, and melted golden butter baked against roaring clay tandoor walls.',
    price: 220,
    image: IMAGES.hero,
    badge: 'Aromatic',
    spiceLevel: 1,
    preparationTime: 'Hot & Fresh',
    servingSize: '1 Large Naan',
    featured: false
  },
  {
    id: 'shahi-kheer',
    name: 'Pistachio Shahi Tukda & Kheer',
    urduName: 'شاہی ٹکڑا اور کھیر',
    category: 'desserts',
    description: 'Slow-simmered whole milk pudding infused with green cardamom, kewra water, and topped with 24k edible silver leaf and crushed slivered pistachios.',
    price: 750,
    image: IMAGES.chickenBiryani,
    badge: 'Sweet Heritage',
    spiceLevel: 1,
    preparationTime: 'Chilled',
    servingSize: 'Serves 1-2',
    featured: false
  },
  {
    id: 'kashmiri-chai',
    name: 'Royal Kashmiri Pink Chai',
    urduName: 'کشمیری چائے',
    category: 'desserts',
    description: 'Traditional slow-brewed green tea leaves aerated to natural ruby-pink blush, simmered with whole buffalo milk, cardamom, and almond flakes.',
    price: 450,
    image: IMAGES.hero,
    badge: 'Winter Special',
    spiceLevel: 1,
    preparationTime: 'Steaming Cup',
    servingSize: 'Single Cup',
    featured: false
  }
];

export const CHEFS_SPECIALS = [
  {
    id: 'shinwari-mutton',
    name: 'Shinwari Royal Mutton Karahi',
    tagline: 'Khyber Pashtun Heritage Style',
    description: 'Cooked strictly in rendered natural lamb fat with plump organic tomatoes, sea salt, whole slit green chilies, and no artificial spices. Pure unadulterated meat flavor that melts upon touch.',
    secretIngredient: 'Rendered fat simmered in cast iron with cracked black peppercorns from Malabar',
    cookingTime: '45 mins slow sear',
    price: 3950,
    image: IMAGES.muttonKarahi
  },
  {
    id: 'shahi-nihari-nalli',
    name: 'ZAQA Special Shahi Nalli Nihari',
    tagline: 'Mughlai Delhi-Lahore Legacy',
    description: 'Prime beef shank slow-stewed overnight over low smoldering coal embers. Served with bubbling bone marrow (Nalli), fried julienned ginger, crisp brown shallots, and fresh lime squeeze.',
    secretIngredient: 'Potent blend of 18 heirloom spices including star anise, stone flower & green cardamom',
    cookingTime: '8 hours slow simmer',
    price: 2950,
    image: IMAGES.beefNihari
  },
  {
    id: 'saffron-dum-biryani',
    name: 'Royal Awadhi Dum Pukht Biryani',
    tagline: 'Dough-Sealed Slow Steam',
    description: 'Tender baby goat pieces marinated in raw papaya, hung yogurt, and saffron water, sealed in a heavy degh with wheat dough and cooked over slow dum for an extraordinary fragrance.',
    secretIngredient: 'Pure Kashmiri saffron strands steeped in Kewra and fresh mountain mint',
    cookingTime: 'Clay pot sealed steam',
    price: 2850,
    image: IMAGES.chickenBiryani
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'The Royal Banquet Table',
    category: 'Ambiance & Feasts',
    image: IMAGES.hero,
    description: 'An evening setup at ZAQA featuring brass cutlery, copper karahis and candlelight.'
  },
  {
    id: 'g2',
    title: 'Sizzling Mutton Karahi',
    category: 'Karahis',
    image: IMAGES.muttonKarahi,
    description: 'Prepared live on high-octane burners with freshly chopped ginger and green chillies.'
  },
  {
    id: 'g3',
    title: 'Aromatic Dum Biryani',
    category: 'Biryani & Rice',
    image: IMAGES.chickenBiryani,
    description: 'Triple-layer basmati rice steeped with saffron, fried onions, and whole spices.'
  },
  {
    id: 'g4',
    title: 'Charcoal Smoked Kebabs',
    category: 'BBQ & Grills',
    image: IMAGES.bbqPlatter,
    description: 'Succulent seekh and reshmi kebabs charred over red-hot charcoal pits.'
  },
  {
    id: 'g5',
    title: 'Traditional Shahi Nihari',
    category: 'Slow Cooked',
    image: IMAGES.beefNihari,
    description: 'Rich mahogany stew cooked overnight to tender, gelatinous perfection.'
  },
  {
    id: 'g6',
    title: 'Crispy Artisan Tandoori Naan',
    category: 'Tandoor',
    image: IMAGES.hero,
    description: 'Hand-stretched dough slapped onto intensely hot clay tandoor walls.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Taimoor & Ayesha Farooqi',
    location: 'Gulberg, Lahore',
    avatar: 'TF',
    rating: 5,
    date: 'October 2026',
    comment: 'Without doubt the best Mutton Karahi in Lahore. The meat falls apart effortlessly and you can taste the pure desi ghee and fresh tomatoes. The ambience truly reflects royal Pakistani hospitality.',
    favoriteDish: 'Royal Mutton Karahi & Roghani Naan'
  },
  {
    id: 'r2',
    name: 'Dr. Shahzad Qureshi',
    location: 'Islamabad / London',
    avatar: 'SQ',
    rating: 5,
    date: 'September 2026',
    comment: 'Whenever I visit Pakistan, ZAQA is our mandatory first stop. Their Beef Nihari with extra bone marrow is cooked with true ancestral technique. Unmatched depth of flavor.',
    favoriteDish: 'Shahi Beef Nihari'
  },
  {
    id: 'r3',
    name: 'Zainab Malik',
    location: 'DHA Phase 5, Lahore',
    avatar: 'ZM',
    rating: 5,
    date: 'October 2026',
    comment: 'Hosted a 25-person family dinner in their Courtyard Hall. The BBQ platter was juicy, sizzling, and the Dum Biryani aroma filled the entire space. Outstanding service and presentation!',
    favoriteDish: 'Grand ZAQA BBQ Platter'
  },
  {
    id: 'r4',
    name: 'Hamza Tariq',
    location: 'Karachi, visiting Lahore',
    avatar: 'HT',
    rating: 5,
    date: 'October 2026',
    comment: 'Being from Karachi, I have extremely high standards for Biryani. ZAQA’s Dum Pukht Chicken Biryani blew me away. Long fragrant grains, balanced heat, and perfect potato-to-meat ratio.',
    favoriteDish: 'Dum Pukht Chicken Biryani'
  }
];
