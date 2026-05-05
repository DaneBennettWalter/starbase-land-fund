import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '700', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Starbase Land Fund | Building the Future of South Texas',
  description: 'Private equity fund focused on land acquisition and development in the SpaceX Starbase growth corridor. Building the infrastructure for humanity\'s multi-planetary future.',
  keywords: ['starbase', 'south texas', 'real estate', 'private equity', 'spacex', 'development', 'land fund'],
  openGraph: {
    title: 'Starbase Land Fund',
    description: 'Building the future of South Texas',
    url: 'https://sbl.fund',
    siteName: 'Starbase Land Fund',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
