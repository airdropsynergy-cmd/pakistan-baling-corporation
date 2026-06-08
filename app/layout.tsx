import Script from 'next/script'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pakbaling.com'),

  title: {
    default: 'Pakistan Baling Corporation | Agricultural Commodity & Biomass Exporter',
    template: '%s | Pakistan Baling Corporation',
  },

  description:
    'Pakistan Baling Corporation exports premium baled agricultural commodities and biomass products including Rhode Grass, Alfalfa, Silage, Wheat Straw, Rice Straw, Rice Husk and Sugarcane Bagasse to global markets.',

  keywords: [
    'Rhode Grass exporter',
    'Alfalfa exporter',
    'Silage supplier',
    'Wheat Straw exporter',
    'Rice Straw exporter',
    'Rice Husk supplier',
    'Sugarcane Bagasse exporter',
    'Agricultural commodities Pakistan',
    'Biomass exporter Pakistan',
    'Animal feed exporter',
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title:
      'Pakistan Baling Corporation | Agricultural Commodity & Biomass Exporter',

    description:
      'Exporter of Rhode Grass, Alfalfa, Silage, Wheat Straw, Rice Straw, Rice Husk and Sugarcane Bagasse from Pakistan.',

    url: 'https://pakbaling.com',
    siteName: 'Pakistan Baling Corporation',
    type: 'website',
    locale: 'en_PK',
  },
}
export const viewport: Viewport = {
  themeColor: '#1a5f2a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-LRY4H08QBT"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-LRY4H08QBT');
  `}
</Script>

        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
