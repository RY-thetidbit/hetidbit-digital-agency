export const siteConfig = {
  name: "TheTidbit Tech",
  tagline: "Complete Websites, Starting at ₹5,999",
  url: "https://tech.thetidbit.in",
  email: "support@thetidbit.in",
  phone: "+91 92267 40297",
  whatsapp: "919226740297",
  address: "Shop No 11, Shivsahkti, Ambernath, Thane, Mumbai 421505",
  logo: "/logo-footer-opt.png",
  logoHeader: "/logo-header-opt.png",
  socials: {
    instagram: "https://www.instagram.com/thetidbit.in/",
    facebook: "https://www.facebook.com/thetidbitin",
    youtube: "https://www.youtube.com/@Thetidbit",
  },
};

// --- WhatsApp-first conversion helpers -------------------------------------
// Every "talk to us" action on the site funnels into one WhatsApp chat with a
// context-aware pre-filled message, so leads land in your inbox ready to reply.
const WHATSAPP_BASE = `https://wa.me/${siteConfig.whatsapp}`;

export function waLink(message?: string) {
  if (!message) return WHATSAPP_BASE;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general:
    "Hi TheTidbit Tech! I'd like to get a website for my business. Can you share the details?",
  starter:
    "Hi! I want the ₹5,999 Starter website (free domain, hosting & SSL included). Please help me get started.",
  pricingHelp:
    "Hi! I'm not sure which plan fits my business. Can you help me choose?",
  plan: (name: string, price: string) =>
    `Hi! I'm interested in the ${name} plan (${price}). Please share the details.`,
};

export const navLinks = [
  { label: "Pricing", href: "#pricing" },
  { label: "Categories", href: "/website-categories" },
  { label: "What's Included", href: "#included" },
  { label: "Our Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { label: "Websites launched", value: "2,500+" },
  { label: "Avg. delivery time", value: "3–5 days" },
  { label: "Customer rating", value: "4.9★" },
  { label: "All-inclusive price", value: "₹5,999" },
];

// Outcome highlights — distinct from hero stats to avoid repetition.
export const outcomeHighlights = [
  { value: "80%+", label: "Visitors browse on mobile" },
  { value: "24×7", label: "Your business open online" },
  { value: "0", label: "Coding skills required" },
  { value: "1 yr", label: "Free support included" },
];

// The lucrative "everything included" value stack for the ₹5,999 package.
export const packageIncludes = [
  { label: "Professional 5-page website", note: "Home, About, Services, Gallery, Contact", free: false },
  { label: "FREE domain name for 1 year", note: ".com / .in / .co.in of your choice", free: true },
  { label: "FREE hosting for 1 year", note: "Fast SSD hosting, 99.9% uptime", free: true },
  { label: "FREE SSL certificate", note: "Secure https padlock — builds trust", free: true },
  { label: "Google Analytics setup", note: "Track every visitor in real time", free: false },
  { label: "Google Search Console + indexing", note: "Get found on Google search", free: false },
  { label: "100% mobile responsive design", note: "Looks perfect on every phone", free: false },
  { label: "WhatsApp chat button", note: "Turn visitors into chats instantly", free: false },
  { label: "Enquiry form + Google Maps", note: "Capture leads, show your location", free: false },
  { label: "Social media integration", note: "Instagram, Facebook, YouTube links", free: false },
  { label: "1 year free support & updates", note: "We've got your back after launch", free: true },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "₹5,999",
    originalPrice: "₹14,999",
    period: "for the first year",
    tagline: "Everything a small business needs to get online — fully done for you.",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Professional 5-page website",
      "FREE domain for 1 year",
      "FREE hosting + SSL for 1 year",
      "Google Analytics setup",
      "Mobile responsive design",
      "WhatsApp chat + enquiry form",
      "Delivered in 3–5 days",
    ],
    cta: "Get Started for ₹5,999",
    note: "*Introductory price. Domain & hosting renew at ₹1,499/year.",
  },
  {
    name: "Business",
    price: "₹11,999",
    originalPrice: "₹19,999",
    period: "for the first year",
    tagline: "For growing businesses that want more pages, SEO and online payments.",
    highlighted: false,
    badge: "",
    features: [
      "Everything in Starter, plus:",
      "Up to 10 custom pages",
      "5 business email IDs",
      "Basic SEO optimization",
      "Payment gateway ready",
      "Blog / news section",
      "Google My Business setup",
      "Priority support",
    ],
    cta: "Choose Business",
    note: "*Introductory price. Domain & hosting renew at ₹2,499/year.",
  },
  {
    name: "Premium Store",
    price: "₹24,999",
    originalPrice: "₹39,999",
    period: "for the first year",
    tagline: "A full online store to sell your products and accept orders 24×7.",
    highlighted: false,
    badge: "Best Value",
    features: [
      "Everything in Business, plus:",
      "Online store (up to 50 products)",
      "Cart, checkout & order management",
      "Advanced SEO setup",
      "Premium custom design",
      "Unlimited pages",
      "Dedicated account manager",
      "Delivered in 7–10 days",
    ],
    cta: "Choose Premium",
    note: "*Introductory price. Domain & hosting renew at ₹3,999/year.",
  },
];

// Reframed as "Why The Tidbit" reasons-to-buy.
export const services = [
  {
    title: "Everything Included — No Hidden Costs",
    description:
      "Domain, hosting, SSL, design, analytics and support — all bundled in one simple price. No surprise bills, no tech headaches.",
    features: ["Free domain & hosting", "Free SSL security", "One transparent price"],
  },
  {
    title: "Live in Just 3–5 Days",
    description:
      "Share your details and content — we design, build and launch your complete website in under a week. You stay focused on your business.",
    features: ["Fast turnaround", "Done-for-you setup", "Zero coding required"],
  },
  {
    title: "Built to Get You Customers",
    description:
      "WhatsApp chat, enquiry forms, Google Maps and Analytics come standard — so your site doesn't just look good, it brings in real leads.",
    features: ["WhatsApp & enquiry leads", "Google Analytics", "SEO-ready setup"],
  },
  {
    title: "Looks Great on Every Phone",
    description:
      "Over 80% of your visitors are on mobile. Every Tidbit website is fully responsive, lightning-fast and pixel-perfect on all devices.",
    features: ["100% mobile responsive", "Fast loading speed", "Modern clean design"],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Pick Your Plan",
    description:
      "Choose the ₹5,999 Starter or a higher plan, and share your business details, logo and content with us.",
  },
  {
    step: "02",
    title: "We Design It",
    description:
      "Our team builds your complete website — domain, hosting, design and setup — and shares a preview for your feedback.",
  },
  {
    step: "03",
    title: "You Review",
    description:
      "Request changes to text, colours and images. We refine until you're 100% happy with how it looks.",
  },
  {
    step: "04",
    title: "Go Live",
    description:
      "We connect your domain, enable SSL and Analytics, and launch. Your business is officially online in 3–5 days.",
  },
];

export const testimonials = [
  {
    quote:
      "I got my bakery website with a free domain and hosting for just ₹5,999. Customers now order on WhatsApp directly from the site. Unbelievable value.",
    author: "Priya Sharma",
    role: "Owner, Sweet Crumbs Bakery, Jaipur",
    metric: "Live in 4 days",
  },
  {
    quote:
      "Everything was handled for me — domain, hosting, SSL, Google Analytics. I didn't touch a single line of code. My clinic finally looks professional online.",
    author: "Dr. Arjun Mehta",
    role: "Mehta Dental Care, Pune",
    metric: "₹5,999 all-inclusive",
  },
  {
    quote:
      "The Premium store plan got my boutique selling online in a week. Orders come in even while I sleep. Best business decision this year.",
    author: "Neha Verma",
    role: "Founder, Aalia Boutique, Lucknow",
    metric: "Selling online 24×7",
  },
];

// Website types we build — each with a popular real-world example visitors can explore.
export const websiteCategories = [
  {
    slug: "bakery-food",
    name: "Bakery & Food",
    description:
      "Show your menu, photos, and WhatsApp order button — perfect for bakeries, sweet shops, and home chefs.",
    exampleName: "Theobroma",
    exampleUrl: "https://www.theobroma.in",
    image: "/work/categories/cat-bakery.jpg",
    plan: "Starter · ₹5,999",
  },
  {
    slug: "restaurant-cafe",
    name: "Restaurant & Cafe",
    description:
      "Display your menu, ambience, location on Google Maps, and let diners book a table or order online.",
    exampleName: "Haldiram's",
    exampleUrl: "https://www.haldirams.com",
    image: "/work/categories/cat-restaurant.jpg",
    plan: "Starter · ₹5,999",
  },
  {
    slug: "clinic-healthcare",
    name: "Clinic & Healthcare",
    description:
      "Build trust with services, doctor profiles, appointment enquiry forms, and your clinic location.",
    exampleName: "Apollo Hospitals",
    exampleUrl: "https://www.apollohospitals.com",
    image: "/work/categories/cat-clinic.jpg",
    plan: "Business · ₹11,999",
  },
  {
    slug: "fashion-boutique",
    name: "Fashion & Boutique",
    description:
      "Showcase your collection with a beautiful gallery, size guides, and WhatsApp for custom orders.",
    exampleName: "FabIndia",
    exampleUrl: "https://www.fabindia.com",
    image: "/work/categories/cat-fashion.jpg",
    plan: "Starter · ₹5,999",
  },
  {
    slug: "online-store",
    name: "Online Store",
    description:
      "Sell products 24×7 with cart, checkout, and order management — your shop never closes.",
    exampleName: "Myntra",
    exampleUrl: "https://www.myntra.com",
    image: "/work/categories/cat-store.jpg",
    plan: "Premium Store · ₹24,999",
  },
  {
    slug: "coaching-education",
    name: "Coaching & Education",
    description:
      "List courses, share results, capture student enquiries, and look professional to parents.",
    exampleName: "PhysicsWallah",
    exampleUrl: "https://www.pw.live",
    image: "/work/categories/cat-education.jpg",
    plan: "Business · ₹11,999",
  },
  {
    slug: "salon-beauty",
    name: "Salon & Beauty",
    description:
      "Show services, pricing, before/after gallery, and let clients book via WhatsApp instantly.",
    exampleName: "Naturals Salon",
    exampleUrl: "https://www.naturalsalon.in",
    image: "/work/categories/cat-salon.jpg",
    plan: "Starter · ₹5,999",
  },
  {
    slug: "gym-fitness",
    name: "Gym & Fitness",
    description:
      "Promote memberships, class timings, trainer profiles, and convert visitors into sign-ups.",
    exampleName: "Cult.fit",
    exampleUrl: "https://www.cult.fit",
    image: "/work/categories/cat-gym.jpg",
    plan: "Business · ₹11,999",
  },
  {
    slug: "real-estate",
    name: "Real Estate & Property",
    description:
      "List properties with photos, filters, enquiry forms, and your contact details front and centre.",
    exampleName: "Magicbricks",
    exampleUrl: "https://www.magicbricks.com",
    image: "/work/categories/cat-realestate.jpg",
    plan: "Business · ₹11,999",
  },
] as const;

export function categoryWaMessage(name: string) {
  return `Hi TheTidbit Tech! I run a ${name.toLowerCase()} business and want a website like the examples on your site. Please share details.`;
}

export const portfolioItems = [
  {
    title: "Sweet Crumbs Bakery",
    category: "Food & Bakery",
    result: "Starter · ₹5,999",
    image: "/work/bakery.jpg",
    href: waLink(
      "Hi! I saw the Sweet Crumbs Bakery website on your portfolio. I'd like a similar website for my business.",
    ),
  },
  {
    title: "Mehta Dental Care",
    category: "Clinic & Healthcare",
    result: "Business plan",
    image: "/work/clinic.jpg",
    href: waLink(
      "Hi! I saw the Mehta Dental Care website on your portfolio. I'd like a professional site like that for my clinic.",
    ),
  },
  {
    title: "Aalia Boutique",
    category: "Online Store",
    result: "Premium store",
    image: "/work/boutique.jpg",
    href: waLink(
      "Hi! I saw the Aalia Boutique online store on your portfolio. I'm interested in selling online too.",
    ),
  },
];

export const faqs = [
  {
    question: "Is ₹5,999 really the full price?",
    answer:
      "Yes. ₹5,999 covers your complete 5-page website, a free domain for 1 year, free hosting, free SSL and Google Analytics setup. There are no hidden charges. After the first year only your domain and hosting renew, from ₹1,499/year.",
  },
  {
    question: "Do I get my own domain and hosting?",
    answer:
      "Absolutely. We register a domain of your choice (.com, .in or .co.in, subject to availability) in your name and set up fast SSD hosting — both free for the first year and included in the ₹5,999 price.",
  },
  {
    question: "How long does it take to go live?",
    answer:
      "Most websites are designed, reviewed and launched within 3–5 days of receiving your content. Online stores on the Premium plan take 7–10 days.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer:
      "None at all. We handle everything — domain, hosting, design, SSL, Analytics and Google indexing. You just share your business details and approve the design.",
  },
  {
    question: "Can I update my website later?",
    answer:
      "Yes. Every plan includes 1 year of free support and content updates. Just message us on WhatsApp and we'll make the changes for you.",
  },
  {
    question: "What happens after the first year?",
    answer:
      "Your domain and hosting renew at a low yearly price (from ₹1,499/year). You'll always be informed before any renewal — no automatic surprise charges.",
  },
];

export const trustBadges = [
  "Free Domain",
  "Free Hosting",
  "Free SSL",
  "Google Analytics",
  "WhatsApp Ready",
];
