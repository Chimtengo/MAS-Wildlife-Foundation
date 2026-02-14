import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MAS Wildlife Conservation Foundation | Malawi',
  description: 'MAS Wildlife Conservation Foundation is a non-profit organization dedicated to the protection of Malawian culture, nature and wildlife through education and outreach programs.',
  keywords: 'wildlife conservation, Malawi, education, marine conservation, Lake Malawi, endangered species, conservation foundation, Jorge Promise Thawe, environmental protection',
  authors: [{ name: 'MAS Wildlife Conservation Foundation' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'MAS Wildlife Conservation Foundation',
    description: 'Conservation Through Education - Protecting Malawian wildlife and culture',
    type: 'website',
    locale: 'en_US',
    siteName: 'MAS Wildlife Conservation Foundation',
    images: [
      {
        url: '/logo.png',
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
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#059669',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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