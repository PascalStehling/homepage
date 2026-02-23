import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: {
    default: "Pascal Stehling | Data Architect",
    template: "%s | Pascal Stehling",
  },
  description:
    "Personal website of Pascal Stehling, Data Engineer and Data Architect based in Potsdam, Germany.",
  openGraph: {
    title: "Pascal Stehling | Data Architect",
    description:
      "Personal website of Pascal Stehling, Data Engineer and Data Architect based in Potsdam, Germany.",
    url: "https://stehl.ing",
    siteName: "Pascal Stehling",
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: "Pascal Stehling",
    card: "summary_large_image",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pascal Stehling",
  url: "https://stehl.ing",
  email: "web@stehl.ing",
  jobTitle: "Senior Data Architect",
  image: "https://stehl.ing/me-in-potsdam.jpeg",
  sameAs: ["https://github.com/PascalStehling"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Potsdam",
    addressCountry: "DE",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!["en", "de"].includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <NextIntlClientProvider messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Navbar />
          <main className="grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </ThemeProvider>
    </NextIntlClientProvider>
    </>
  );
}
