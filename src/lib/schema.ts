import { faqs, siteConfig } from "@/lib/constants";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: `${siteConfig.url}/og.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No 11, Shivsahkti",
      addressLocality: "Ambernath",
      addressRegion: "Maharashtra",
      postalCode: "421505",
      addressCountry: "IN",
    },
    priceRange: "₹₹",
    sameAs: Object.values(siteConfig.socials),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function offerJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Starter Website Package",
    description:
      "Complete 5-page business website with free domain, hosting, SSL and Google Analytics for one year.",
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: {
      "@type": "Offer",
      price: "5999",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/#pricing`,
    },
  };
}
