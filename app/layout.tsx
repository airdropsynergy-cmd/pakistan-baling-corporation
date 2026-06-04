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
  title: 'BioMass Global | Premium Biomass & Agricultural Products Export',
  description: 'Leading supplier and exporter of high-density baled biomass products for animal feed, biomass fuel, bedding, and agricultural applications. Serving global markets with quality Rhode Grass, Alfalfa, Silage, Rice Straw, Wheat Straw, and Sugarcane Bagasse.',
  keywords: 'biomass, animal feed, alfalfa, rhode grass, silage, rice straw, wheat straw, sugarcane bagasse, export, agricultural products',
  openGraph: {
    title: 'BioMass Global | Premium Biomass & Agricultural Products Export',
    description: 'Leading supplier and exporter of high-density baled biomass products for animal feed, biomass fuel, and agricultural applications.',
    type: 'website',
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
