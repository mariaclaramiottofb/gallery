import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant"
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: 'Lazy Barista | Cozy Toronto Coffee Shop',
  description: 'A cozy Toronto coffee spot for coffee, calm, and good taste. Visit Lazy Barista at 157 Queens Quay E for beautiful coffee, warm atmosphere, and affordable prices.',
  keywords: ['coffee shop', 'Toronto', 'cafe', 'latte', 'espresso', 'Queens Quay', 'cozy cafe'],
  openGraph: {
    title: 'Lazy Barista | Cozy Toronto Coffee Shop',
    description: 'A cozy Toronto coffee spot for coffee, calm, and good taste.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#f5ebe0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
