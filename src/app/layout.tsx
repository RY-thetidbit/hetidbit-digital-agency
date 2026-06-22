import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";

// Body font — clean, friendly modern sans.
const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Display font — warm, characterful modern serif for headings.
const displayFont = Fraunces({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Bharat.style | Complete Website at ₹5,999 — Domain, Hosting & SSL Included",
  description:
    "Get a complete professional website for your business at just ₹5,999. Free domain, free hosting, free SSL, Google Analytics, WhatsApp chat and mobile-responsive design — all done for you and live in 3–5 days.",
  keywords: [
    "website at 5999",
    "cheap website design India",
    "small business website with free domain and hosting",
    "affordable website development",
    "website with domain hosting SSL",
    "ready website for business India",
  ],
  openGraph: {
    title: "Bharat.style | Complete Website at ₹5,999 — Everything Included",
    description:
      "Domain + hosting + SSL + website + Google Analytics, all in one price. Your business online in 3–5 days, starting at ₹5,999.",
    type: "website",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
