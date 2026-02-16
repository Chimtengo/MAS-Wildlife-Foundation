import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://maswildlifefoundation.org'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'MAS Wildlife Conservation Foundation | Malawi',
  description: 'MAS Wildlife Conservation Foundation is a non-profit organization dedicated to the protection of Malawian culture, nature and wildlife through education and outreach programs.',
  keywords: 'wildlife conservation, Malawi, education, marine conservation, Lake Malawi, endangered species, conservation foundation, Jorge Promise Thawe, environmental protection',
  authors: [{ name: 'MAS Wildlife Conservation Foundation' }],
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/icons/favicon-32x32.png',
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'MAS Wildlife Conservation Foundation',
    description: 'Conservation Through Education - Protecting Malawian wildlife and culture',
    type: 'website',
    locale: 'en_US',
    siteName: 'MAS Wildlife Conservation Foundation',
    images: [
      {
        url: '/logo-transparent.png',
        width: 1200,
        height: 630,
        alt: 'MAS Wildlife Conservation Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAS Wildlife Conservation Foundation',
    description: 'Conservation Through Education - Protecting Malawian wildlife and culture',
    images: ['/logo-transparent.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#059669',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
