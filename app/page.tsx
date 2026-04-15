import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { GallerySection } from "@/components/sections/gallery"
import { DetailsSection } from "@/components/sections/details"
import { FeaturesSection } from "@/components/sections/features"
import { PricingSection } from "@/components/sections/pricing"
import { LocationSection } from "@/components/sections/location"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { StickyContactBar } from "@/components/sticky-contact-bar"
import { siteConfig } from "@/lib/site"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Residence",
  name: `${siteConfig.brandName} - ${siteConfig.neighborhood}`,
  description: siteConfig.shortDescription,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressLine,
    addressLocality: siteConfig.city,
    addressRegion: "Cauca",
    addressCountry: "CO",
  },
  numberOfRooms: 3,
  offers: {
    "@type": "Offer",
    price: siteConfig.monthlyPriceNumeric,
    priceCurrency: "COP",
    availability: "https://schema.org/InStock",
    category: "Arriendo mensual",
  },
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip pb-24 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[40rem] bg-[radial-gradient(circle_at_top,rgba(176,108,74,0.22),transparent_58%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
      <Navbar />
      <HeroSection />
      <GallerySection />
      <DetailsSection />
      <FeaturesSection />
      <PricingSection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <StickyContactBar />
    </main>
  )
}
