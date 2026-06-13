// Rang Mahal Products and Showroom Data Store

const CATEGORIES = {
  "lehengas": {
    id: "lehengas",
    name: "Bridal Lehengas",
    label: "Women's Couture",
    count: "48 Pieces",
    description: "Our signature bridal collection, featuring hand-embroidered wedding lehengas crafted over hundreds of hours by master karigars in Jaipur. Woven with pure silk threads, gold zari wires, and semi-precious embellishments.",
    banner: "assets/images/categories/lehengas-banner.jpg",
    image: "assets/images/categories/lehengas.jpg"
  },
  "sherwanis": {
    id: "sherwanis",
    name: "Groom Sherwanis",
    label: "Men's Couture",
    count: "32 Pieces",
    description: "Stately groom attire handcrafted with ancestral zardozi embroidery, chanderi silk linings, and hand-woven patterns designed to reflect regal jaipur heritage.",
    banner: "assets/images/categories/sherwanis-banner.jpg",
    image: "assets/images/categories/sherwanis.jpg"
  },
  "sarees": {
    id: "sarees",
    name: "Banarasi Sarees",
    label: "Heritage Weaves",
    count: "62 Pieces",
    description: "Pure Katan silk sarees woven on hand-looms in Varanasi, adorned with certified 22-karat gold and silver zari work in traditional paisley and floral border motifs.",
    banner: "assets/images/categories/sarees-banner.jpg",
    image: "assets/images/categories/sarees.jpg"
  },
  "anarkalis": {
    id: "anarkalis",
    name: "Anarkali Suits",
    label: "Royal Silhouettes",
    count: "44 Pieces",
    description: "Flowing floor-length suits showcasing the finest Lucknow Chikankari embroidery, delicate georgettes, and heavy flare structures perfect for high-society sangeet and reception ceremonies.",
    banner: "assets/images/categories/anarkalis-banner.jpg",
    image: "assets/images/categories/anarkalis.jpg"
  },
  "kurtas": {
    id: "kurtas",
    name: "Luxury Kurtas",
    label: "Festive Essentials",
    count: "56 Pieces",
    description: "Refined kurtas for men and women crafted from premium linen, raw silk, and hand-spun cotton, finished with subtle kamdani (gold-leaf) dots and resham collars.",
    banner: "assets/images/categories/kurtas-banner.jpg",
    image: "assets/images/categories/kurtas.jpg"
  }
};

const PRODUCTS = [
  {
    id: "rani",
    name: "Rani Crimson Lehenga",
    category: "lehengas",
    categoryLabel: "Bridal Lehenga",
    price: 128000,
    oldPrice: null,
    craft: "Jaipur · Zardozi · 840 hrs",
    hours: 840,
    origin: "Jaipur, Rajasthan",
    fabric: "Pure Katan Silk & Velvet",
    embroidery: "Heavy Zardozi & Dabka",
    thread: "22K Gold Zari Wire",
    includes: "Choli, Lehenga Skirt & 2 Silk Dupattas",
    rating: 5,
    tag: "New Arrival",
    image: "assets/images/products/rani-crimson.jpg",
    gallery: [
      "assets/images/products/rani-crimson.jpg",
      "assets/images/products/rani-crimson-detail1.jpg",
      "assets/images/products/rani-crimson-detail2.jpg"
    ],
    description: "Born from 840 hours of Zardozi embroidery in our Jaipur atelier. Pure crimson Katan silk is woven in Varanasi and then brought to our karigar artisans who trace every gold thread motif by hand using ancestral kartoon blueprints unchanged since 1921. The three-piece set includes a heavily embroidered choli, a full flared skirt with gold hem border, and a 5-metre embroidered dupatta. Every piece ships with three complimentary fittings.",
    features: [
      "Authentic hand-laid 22K gold zari wire details",
      "100% natural organic crimson pigments",
      "Double lining with premium silk can-can framework",
      "Custom tailored waist and customized blouse necklines"
    ],
    specs: {
      "Silhouette": "Traditional Flared Lehenga",
      "Blouse Fabric": "Pure Raw Silk with Zardozi sleeves",
      "Skirt Fabric": "Pure Katan Silk with heavy border detailing",
      "Dupatta 1": "Banarasi Kora Organza with floral borders (2.5m)",
      "Dupatta 2": "Pure Chiffon head-veil Dupatta (2.8m)",
      "Embroidery Type": "Hand-stitched Zardozi, Sitara & Dabka work",
      "Hemline": "Reinforced horsehair braid for dramatic flare",
      "Care Instructions": "Dry clean only. Store wrapped in soft muslin cloth."
    },
    reviews: [
      { author: "Priya Mehta Singhania", rating: 5, date: "Dec 2023", city: "New Delhi", comment: "My Rani Crimson lehenga from Rang Mahal was not a dress — it was an inheritance. The Zardozi work on the pallu moved my mother-in-law to tears. There is no other house in Jaipur that still works like this." },
      { author: "Anjali Gupta", rating: 5, date: "Jan 2024", city: "Jaipur", comment: "Exquisite details. The fit was absolutely perfect after the showroom adjustments. Worth every rupee." }
    ]
  },
  {
    id: "nawab",
    name: "Nawab Ivory Sherwani",
    category: "sherwanis",
    categoryLabel: "Groom Sherwani",
    price: 86500,
    oldPrice: 95000,
    craft: "Lucknow · Chikankari · 620 hrs",
    hours: 620,
    origin: "Lucknow, Uttar Pradesh",
    fabric: "Premium Raw Silk",
    embroidery: "White Shadow Chikankari",
    thread: "Fine Egyptian Cotton Thread",
    includes: "Sherwani Jacket, Kurta & Silk Churidar Pajama",
    rating: 5,
    tag: "Bestseller",
    image: "assets/images/products/nawab-ivory.jpg",
    gallery: [
      "assets/images/products/nawab-ivory.jpg",
      "assets/images/products/nawab-ivory-detail.jpg"
    ],
    description: "An epitome of sophistication, the Nawab Ivory Sherwani is hand-embroidered with classic shadow-work Lucknow Chikankari. The patterns follow traditional imperial vine grids, accented with tiny pearls and micro-beads. Perfect for daytime wedding rituals or formal receptions.",
    features: [
      "Completely hand-embroidered over 6 months",
      "Interior lining of soft, breathable cotton-sateen",
      "Signature brass buttons wrapped in gold wire",
      "Tailored fit with padded shoulders and structured chest"
    ],
    specs: {
      "Silhouette": "Imperial Structured Sherwani",
      "Fabric - Jacket": "100% Pure Raw Silk",
      "Fabric - Inner Kurta": "Fine Crepe-Silk",
      "Pants": "Silk Churidar with elastic waist",
      "Embroidery Type": "Fine Lucknow Chikankari (Bakhiya, Phanda & Murri stitches)",
      "Length": "Knee-length structured hem",
      "Care Instructions": "Dry clean only. Keep on a wide padded hanger."
    },
    reviews: [
      { author: "Arjun Sharma", rating: 5, date: "Nov 2023", city: "Mumbai", comment: "The Nawab Ivory Sherwani fit like it was made for me — because it was. Every seam, every button placed with intention. I have never felt more like myself on my wedding day." }
    ]
  },
  {
    id: "emerald",
    name: "Emerald Durbar Kurta",
    category: "kurtas",
    categoryLabel: "Luxury Kurta",
    price: 42000,
    oldPrice: null,
    craft: "Varanasi · Kamdani · 480 hrs",
    hours: 480,
    origin: "Varanasi, Uttar Pradesh",
    fabric: "Muga Silk & Linen",
    embroidery: "Kamdani Gold Badla Work",
    thread: "Pure Silver & Gilt Wire",
    includes: "Kurta & Premium Linen Salwar",
    rating: 4.8,
    tag: "Trending",
    image: "assets/images/products/emerald-durbar.jpg",
    gallery: [
      "assets/images/products/emerald-durbar.jpg",
      "assets/images/products/emerald-durbar-detail.jpg"
    ],
    description: "Draped in the deep jewel tone of royal durbars, this emerald green kurta set features intricate Kamdani (also known as Badla) work. Thin metallic gold ribbons are threaded through the Muga-silk base, creating small, glittering studs that catch the candlelight.",
    features: [
      "Traditional Badla embroidery, hand-flattened with wooden mallets",
      "Rich deep green color dyed using pomegranate rind extract",
      "Comfortable relaxed-fit salwar trousers",
      "Mandarin collar with gold thread stitch detailing"
    ],
    specs: {
      "Silhouette": "Straight Cut Festive Kurta",
      "Fabric - Kurta": "70% Muga Silk, 30% Fine Linen",
      "Fabric - Pajama": "Soft Pure Cotton-Linen",
      "Embroidery Type": "Kamdani / Badla wire work",
      "Buttons": "Fabric-covered concealment buttons",
      "Care Instructions": "Dry clean only. Do not iron directly on the gold wire studs."
    },
    reviews: [
      { author: "Kavita Iyer Nair", rating: 5, date: "Oct 2023", city: "Bangalore", comment: "Rang Mahal is the only house that still understands what Banarasi silk is supposed to feel like. The Emerald Durbar kurta is a piece I will hand down to my daughter." }
    ]
  },
  {
    id: "midnight",
    name: "Midnight Zari Lehenga",
    category: "lehengas",
    categoryLabel: "Reception Lehenga",
    price: 154000,
    oldPrice: null,
    craft: "Banaras · Kinkhab · 920 hrs",
    hours: 920,
    origin: "Varanasi, Uttar Pradesh",
    fabric: "Katan Silk & Organza",
    embroidery: "Brocade Weaving & Resham",
    thread: "Gold and Silver Kalabattu Zari",
    includes: "Choli, Lehenga Skirt & Brocade Dupatta",
    rating: 5,
    tag: "Exclusive",
    image: "assets/images/products/midnight-zari.jpg",
    gallery: [
      "assets/images/products/midnight-zari.jpg"
    ],
    description: "Woven in the historic weavers' quarters of Varanasi, the Midnight Zari Lehenga represents the pinnacle of Kinkhab brocade. A deep midnight navy fabric is heavily woven with gold and silver zari grids, overlaid with hand-placed resham threads. Exquisite choice for formal reception dinners.",
    features: [
      "Woven on ancestral drawlooms over 4 months",
      "Double dupatta combination: brocade and thin mesh",
      "Unique jewel-toned navy shade with copper shimmer",
      "Handcrafted latkan drapes on waist band"
    ],
    specs: {
      "Silhouette": "A-Line Flared Skirt",
      "Skirt Fabric": "Heavy Banarasi Kinkhab Silk",
      "Blouse Fabric": "Pure Silk Velvet with Zari sleeves",
      "Dupatta": "Pure Silk Net with woven borders",
      "Weaving Technique": "Kadhwa double-shuttle handloom technique",
      "Care Instructions": "Dry clean only. Keep flat, avoid damp storage spaces."
    },
    reviews: [
      { author: "Ritu Agarwal", rating: 5, date: "Jan 2024", city: "Jaipur", comment: "Three generations of my family have worn Rang Mahal for weddings. My grandmother's, my mother's, and now mine. The craftmanship is exactly the same. That is the real luxury." }
    ]
  },
  {
    id: "safed",
    name: "Safed Chikankari Anarkali",
    category: "anarkalis",
    categoryLabel: "Anarkali Suit",
    price: 54000,
    oldPrice: null,
    craft: "Lucknow · Chikankari · 380 hrs",
    hours: 380,
    origin: "Lucknow, Uttar Pradesh",
    fabric: "Mulmul & Fine Georgette",
    embroidery: "Handmade Shadow-stitch",
    thread: "Soft White Cotton",
    includes: "Anarkali Gown, Churidar & Net Dupatta",
    rating: 4.7,
    tag: "Classic",
    image: "assets/images/products/safed-chikankari.jpg",
    gallery: [
      "assets/images/products/safed-chikankari.jpg"
    ],
    description: "A pristine, breathtaking white silhouette crafted on fine, soft georgette. This Anarkali gown showcases 24 panels (kalis), each fully hand-embroidered with classic shadow stitches (Bakhiya) and knot stitches (Murri) in Lucknow. It flows elegantly and shifts beautifully during movement.",
    features: [
      "24-kali flare for ultimate volume and dramatic sway",
      "Feather-light fabric choice, ideal for summer weddings and sangeets",
      "Lined with soft mulmul cotton to ensure skin comfort",
      "Comes with customized chiffon dupatta with gota borders"
    ],
    specs: {
      "Silhouette": "24-Panel Flared Anarkali Gown",
      "Fabric - Gown": "Fine Viscose Georgette (semi-sheer)",
      "Fabric - Lining": "100% Breathable Mulmul Cotton",
      "Dupatta": "Silk Georgette with hand-sewn Gota Patti lace",
      "Embroidery": "Lucknowi hand-embroidery (Shadow, Bakhiya, Phanda)",
      "Care Instructions": "Dry clean only. Gentle storage."
    },
    reviews: [
      { author: "Meera Sen", rating: 4.5, date: "Feb 2024", city: "Kolkata", comment: "The flare is incredible. It looks so graceful on screen and in person. Got dozens of compliments at my brother's sangeet." }
    ]
  },
  {
    id: "saffron",
    name: "Kesar Banarasi Saree",
    category: "sarees",
    categoryLabel: "Banarasi Saree",
    price: 68000,
    oldPrice: null,
    craft: "Varanasi · Pure Katan · 560 hrs",
    hours: 560,
    origin: "Varanasi, Uttar Pradesh",
    fabric: "100% Pure Katan Silk",
    embroidery: "Hand-loom Weave",
    thread: "Certified 22K Gold Zari",
    includes: "Unstitched Saree & Blouse Piece",
    rating: 4.9,
    tag: "Heritage",
    image: "assets/images/products/kesar-banarasi.jpg",
    gallery: [
      "assets/images/products/kesar-banarasi.jpg"
    ],
    description: "A masterpiece of the Banarasi handloom heritage, dyed in a bright kesar (saffron) orange. Handwoven with pure Katan silk warp and weft, this saree features dense gold zari borders and diagonal floral vines (Jal work) across the body. Ships with a silk mark certification.",
    features: [
      "100% natural mulberry silk base (Katan)",
      "Heavy zari pallu featuring classic vase (Kalash) patterns",
      "Certified 22K gold wire used in the weaving",
      "Includes 80cm matching unstitched blouse piece"
    ],
    specs: {
      "Silhouette": "5.5 Metre Indian Saree",
      "Saree Fabric": "Double-thread Katan Mulberry Silk",
      "Zari Composition": "Silver thread core plated with 22K Gold",
      "Weave Type": "Kadhwa interlocking borders (takes 2 weavers)",
      "Certification": "Silk Mark India Certified",
      "Care Instructions": "Store rolled in dry tissue paper. Dry clean only."
    },
    reviews: [
      { author: "Deepika Ramachandran", rating: 5, date: "Mar 2024", city: "Chennai", comment: "The saree is heavy, substantial, and sits beautifully. The gold has that muted, rich antique look instead of the cheap shiny gold you see online." }
    ]
  },
  {
    id: "royal",
    name: "Maharaja Maroon Sherwani",
    category: "sherwanis",
    categoryLabel: "Groom Sherwani",
    price: 112000,
    oldPrice: null,
    craft: "Jaipur · Zardozi · 740 hrs",
    hours: 740,
    origin: "Jaipur, Rajasthan",
    fabric: "Premium Silk Velvet",
    embroidery: "Zardozi & Antique Beads",
    thread: "Gold Metallic Wire",
    includes: "Sherwani Jacket, Silk Pajama & Brocade Stole",
    rating: 5,
    tag: "Royal Collection",
    image: "assets/images/products/maharaja-maroon.jpg",
    gallery: [
      "assets/images/products/maharaja-maroon.jpg"
    ],
    description: "Crafted for grand palace weddings, this deep royal maroon sherwani is cut from premium silk-velvet that absorbs light, making the intricate antique gold zardozi stand out in relief. The borders, collar, and cuffs are densely embroidered by hand.",
    features: [
      "Luxury velvet fabric providing rich depth and drape",
      "Ornate hand-cast gold metal buttons",
      "Densely embroidered mandarin collar and sleeve cuffs",
      "Comes with coordinating Banarasi brocade dupatta stole"
    ],
    specs: {
      "Silhouette": "Maharaja Style Long Coat",
      "Fabric - Outer": "Silk Velvet",
      "Fabric - Pants": "Pure Banarasi Raw Silk Pajamas",
      "Embroidery": "Copper-gold metallic Zardozi wire, sequins, and micro-beads",
      "Stole": "2.2 Metre Banarasi Silk Jacquard Stole",
      "Care Instructions": "Professional dry clean only. Brush velvet gently after wear."
    },
    reviews: [
      { author: "Vikram Singh Rathore", rating: 5, date: "Feb 2024", city: "Udaipur", comment: "Wore this for my wedding at City Palace. The velvet is extremely rich. The fit was done in 2 sessions and was perfect." }
    ]
  },
  {
    id: "golden",
    name: "Sona Zari Lehenga",
    category: "lehengas",
    categoryLabel: "Couture Lehenga",
    price: 195000,
    oldPrice: null,
    craft: "Jaipur · Full Zardozi · 1100 hrs",
    hours: 1100,
    origin: "Jaipur, Rajasthan",
    fabric: "Raw Silk & Net",
    embroidery: "3D Zardozi & Gota Patti",
    thread: "22K Gold and Antique Silver Zari",
    includes: "Choli, Skirt, Net Dupatta & Velvet Shawl",
    rating: 5,
    tag: "Masterpiece",
    image: "assets/images/products/sona-zari.jpg",
    gallery: [
      "assets/images/products/sona-zari.jpg",
      "assets/images/products/sona-zari-detail.jpg"
    ],
    description: "A monumental work of bridal couture. The Sona Zari Lehenga represents over 1100 hours of continuous hand-embroidery by three master artisans. Antique silver and gold wires are raised in three-dimensional zardozi patterns, accented with hand-cut Jaipur Gota Patti work. A true heirloom piece.",
    features: [
      "Intricate three-dimensional high-relief zardozi work",
      "Includes a heavy secondary velvet shawl wrapper for cold evenings",
      "Embellished with thousands of semi-precious pearls and crystals",
      "Requires 90 days minimum build time"
    ],
    specs: {
      "Silhouette": "Full Circular Ghera Lehenga (12 Metre Flare)",
      "Skirt Fabric": "Premium Heavy Raw Silk (110 gsm)",
      "Blouse Fabric": "Raw Silk with matching zardozi lining",
      "Dupatta 1": "Silk Net with scattered gold bootis (2.6m)",
      "Dupatta 2": "Pure Silk Velvet Shawl with embroidered corners",
      "Embroidery": "Raised Zardozi, Kasab thread, Gota Patti, bead overlays",
      "Care Instructions": "Dry clean only. Professional heritage preservation recommended."
    },
    reviews: [
      { author: "Devika Singhal", rating: 5, date: "May 2024", city: "London", comment: "Absolute masterpiece. People were taking photos of the embroidery details at the reception. Rang Mahal team shipped it to London and did a virtual fitting adjustment that worked perfectly." }
    ]
  },
  {
    id: "rose",
    name: "Rose Gota Patti Lehenga",
    category: "lehengas",
    categoryLabel: "Engagement Lehenga",
    price: 88000,
    oldPrice: null,
    craft: "Jaipur · Gota Patti · 510 hrs",
    hours: 510,
    origin: "Jaipur, Rajasthan",
    fabric: "Pure Georgette & Silk",
    embroidery: "Hand-cut Gota Patti & Sequins",
    thread: "Silver & Gold Ribbons",
    includes: "Choli, Skirt & Silk Organza Dupatta",
    rating: 4.8,
    tag: "Romantic",
    image: "assets/images/products/rose-gota.jpg",
    gallery: [
      "assets/images/products/rose-gota.jpg"
    ],
    description: "Designed in a soft blush rose shade, this georgette lehenga displays the authentic Rajasthani craft of Gota Patti. Metallic ribbons are cut into small leaf shapes, hand-appliqued onto the fabric, and bordered with fine zardozi stitching. The fabric is light and fluid, making it perfect for engagement and mehendi functions.",
    features: [
      "Authentic hand-pressed Jaipur gota ribbon work",
      "Romantic pastel blush pink shade",
      "Soft georgette skirt with lightweight comfortable movement",
      "Organza dupatta with matching borders"
    ],
    specs: {
      "Silhouette": "A-line Flowing Skirt",
      "Skirt Fabric": "Pure Viscose Georgette",
      "Blouse Fabric": "Pure Silk Crepe",
      "Dupatta": "Pure Silk Organza with Gota applique",
      "Embroidery Type": "Gota Patti, Nakshi, and Sequin highlight stitching",
      "Care Instructions": "Dry clean only. Store in paper wrap, avoid moisture."
    },
    reviews: [
      { author: "Shruti Shah", rating: 4.8, date: "Jan 2024", city: "Ahmedabad", comment: "So lightweight compared to heavy bridal lehengas! I danced all night at my sangeet. The rose color is exactly as pictured, very elegant." }
    ]
  },
  {
    id: "ivory",
    name: "Ivory Resham Lehenga",
    category: "lehengas",
    categoryLabel: "Reception Wear",
    price: 74000,
    oldPrice: 82000,
    craft: "Kolkata · Resham · 450 hrs",
    hours: 450,
    origin: "Kolkata, West Bengal",
    fabric: "Silk Tussar & Organza",
    embroidery: "Fine Silk Thread (Resham) Embroidery",
    thread: "Pastel Dyed Silk Threads",
    includes: "Choli, Skirt & Organza Dupatta",
    rating: 4.9,
    tag: "Sale",
    image: "assets/images/products/ivory-resham.jpg",
    gallery: [
      "assets/images/products/ivory-resham.jpg"
    ],
    description: "An ivory lehenga featuring soft, watercolor-like floral murals. Master artisans in Kolkata spend over 450 hours embroidering this piece using fine silk threads (Resham). A light dust of gold micro-sequins gives it a subtle twilight sparkle.",
    features: [
      "Fine resham satin-stitch embroidery",
      "Pristine ivory base with pastel pink and green floral embroidery",
      "Comes with sheer silk-organza dupatta",
      "Includes custom fit satin inner lining"
    ],
    specs: {
      "Silhouette": "Structured Flared Skirt",
      "Skirt Fabric": "Premium Tussar Silk",
      "Blouse Fabric": "Tussar Silk with embroidery panels",
      "Dupatta": "Silk Organza (2.5m)",
      "Embroidery Type": "Fine Resham thread work & micro-sequins",
      "Care Instructions": "Dry clean only. Keep stored away from direct sunlight."
    },
    reviews: [
      { author: "Neha Kapoor", rating: 5, date: "Feb 2024", city: "Chandigarh", comment: "The resham flowers look like a painting. It is so modern and elegant, not overly heavy but looks extremely premium." }
    ]
  },
  {
    id: "haldi",
    name: "Haldi Yellow Sharara",
    category: "anarkalis",
    categoryLabel: "Mehndi Ceremony Sharara",
    price: 52000,
    oldPrice: null,
    craft: "Jaipur · Gota Patti · 320 hrs",
    hours: 320,
    origin: "Jaipur, Rajasthan",
    fabric: "Pure Chanderi Silk",
    embroidery: "Gota Patti & Mirror Work",
    thread: "Gold Ribbon & Resham",
    includes: "Short Kurti Gown, Wide Sharara Pants & Net Dupatta",
    rating: 4.6,
    tag: "Festive Favorite",
    image: "assets/images/products/haldi-sharara.jpg",
    gallery: [
      "assets/images/products/haldi-sharara.jpg"
    ],
    description: "Rendered in a vibrant haldi yellow, this Chanderi silk sharara set features a short flared kurti jacket, voluminous multi-tiered sharara pants, and a net dupatta. The borders are decorated with mirrors and Gota Patti ribbon work that shines under natural sunlight.",
    features: [
      "Vibrant turmeric yellow, ideal for haldi/mehndi ceremonies",
      "Multi-tiered layered sharara pants with heavy borders",
      "Genuine hand-set reflective glass mirrors",
      "Chanderi silk provides a comfortable, crisp drape"
    ],
    specs: {
      "Silhouette": "Tiered Sharara Suit Set",
      "Kurta Fabric": "Pure Chanderi Silk",
      "Sharara Fabric": "Pure Chanderi Silk",
      "Dupatta": "Fine Silk Net with gold trim",
      "Embroidery Type": "Mirror work, Gota Patti, and Zari borders",
      "Care Instructions": "Dry clean only. Protect mirrors from direct impacts."
    },
    reviews: [
      { author: "Pooja Trivedi", rating: 4.5, date: "Apr 2024", city: "Pune", comment: "The yellow color is so bright and festive. The sharara pants have a massive flare, almost like a skirt. Perfect for my haldi ceremony!" }
    ]
  }
];

const FAQS = [
  {
    q: "Do I need to make an appointment to visit the Jaipur showroom?",
    a: "No appointment is necessary to view our regular collections at the Johari Bazaar showroom. However, for bridal consultations and bespoke commissions, we highly recommend booking a dedicated session in advance to secure a private styling suite and curator.",
    cat: "visit"
  },
  {
    q: "How long does a bespoke bridal lehenga or sherwani commission take?",
    a: "Bespoke commissions usually take between 60 to 90 days. This timeline includes the design phase, weaving the base silk, executing the hand embroidery (which can take 400-1100 hours), and conducting 2 to 3 physical fittings.",
    cat: "order"
  },
  {
    q: "Can I order online if I am outside India?",
    a: "Yes, we work with international clients frequently. We offer digital styling consultations over video call, ship fabric and embroidery swatches to your address, and conduct remote measurement reviews. We ship internationally with insured premium logistics partners like DHL and FedEx.",
    cat: "shipping"
  },
  {
    q: "What is your return and alterations policy?",
    a: "As a couture house, all our pieces are tailored specifically to individual measurements or ordered as custom commissions. Therefore, we do not accept returns or exchanges. However, we offer complimentary lifetime alterations on all Rang Mahal garments at any of our physical showrooms.",
    cat: "order"
  },
  {
    q: "What does the 'lifetime thread warranty' cover?",
    a: "We stand by our craft. Our lifetime warranty covers structural thread repairs, loose zari wire re-securing, and sequin/bead replacement on any garment purchased from Rang Mahal. Simply bring the garment to our showroom or contact support, and our in-house karigars will mend it free of charge.",
    cat: "warranty"
  }
];

const TESTIMONIALS = [
  {
    quote: "My Rani Crimson lehenga from Rang Mahal was not a dress — it was an inheritance. The Zardozi work on the pallu moved my mother-in-law to tears. There is no other house in Jaipur that still works like this.",
    author: "Priya Mehta Singhania",
    tag: "Bride · New Delhi",
    avatar: "P"
  },
  {
    quote: "The Nawab Ivory Sherwani fit like it was made for me — because it was. Every seam, every button placed with intention. I have never felt more like myself on my wedding day. Rang Mahal is irreplaceable.",
    author: "Arjun Sharma",
    tag: "Groom · Mumbai",
    avatar: "A"
  },
  {
    quote: "Rang Mahal is the only house that still understands what Banarasi silk is supposed to feel like against your skin. The Emerald Durbar kurta I commissioned is a piece I will hand down to my daughter.",
    author: "Kavita Iyer Nair",
    tag: "Patron · Bangalore",
    avatar: "K"
  },
  {
    quote: "Three generations of my family have worn Rang Mahal for weddings. My grandmother's lehenga, my mother's, and now mine. The craftmanship is exactly the same. That is the real luxury.",
    author: "Ritu Agarwal",
    tag: "Bride · Jaipur",
    avatar: "R"
  },
  {
    quote: "The attention to detail during our design consults was unmatched. They even dyed custom shades of silk organza to match the exact coral color of our wedding theme. Outstanding customer experience.",
    author: "Sneha Reddy",
    tag: "Bride · Hyderabad",
    avatar: "S"
  }
];

// Helper functions for dynamic page loaders
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getProductsByCategory(catId) {
  return PRODUCTS.filter(p => p.category === catId);
}

function getCategoryById(id) {
  return CATEGORIES[id];
}
