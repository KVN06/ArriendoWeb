import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/lib/site'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalUrl),
  title: siteConfig.listingTitle,
  description: siteConfig.description,
  keywords: ['apartamento arriendo popayán', 'arriendo josé maría obando', 'apartamento 3 habitaciones popayán', 'vivienda popayán', 'alquiler popayán cauca'],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteConfig.listingShortTitle,
    description: siteConfig.shortDescription,
    type: 'website',
    url: '/',
    siteName: siteConfig.brandName,
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.listingShortTitle,
    description: siteConfig.shortDescription,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f3f0' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1816' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background">
        <a
          href="#home"
          className="sr-only focus:not-sr-only fixed top-3 left-3 z-[100] rounded-md bg-foreground px-3 py-2 text-sm text-background"
        >
          Saltar al contenido
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
