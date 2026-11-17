import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BackgroundGrid } from "@/components/BackgroundGrid";
import { CoreWebVitalsBadge } from "@/components/CoreWebVitalsBadge";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const viewport: Viewport = {
  themeColor: "#8a5082",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://priyankameena.dev"),
  title: {
    default: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
    template: `%s | ${PERSONAL_INFO.name}`,
  },
  description: PERSONAL_INFO.tagline,
  keywords: [
    "Priyanka Meena",
    "Full-Stack Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Engineer",
    "TypeScript",
    "MongoDB",
    "Jaipur",
    "India",
    "B2B SaaS",
    "Core Web Vitals",
    "Lighthouse 90+",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: "https://priyankameena.dev" }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://priyankameena.dev",
    title: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.tagline,
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} - Full-Stack Software Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.tagline,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.title,
    telephone: PERSONAL_INFO.phone,
    email: PERSONAL_INFO.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "India",
    },
    url: "https://priyankameena.dev",
    sameAs: [
      PERSONAL_INFO.github,
      PERSONAL_INFO.linkedin,
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Core Web Vitals",
      "System Design",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="font-sans bg-[var(--background)] text-[var(--foreground)] min-h-screen selection:bg-[var(--accent)]/20 selection:text-[var(--primary)] relative transition-colors duration-200"
      >
        <ThemeProvider>
          <BackgroundGrid />
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
          <CoreWebVitalsBadge />
        </ThemeProvider>
      </body>
    </html>
  );
}
