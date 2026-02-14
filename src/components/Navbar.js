'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Board of Trustees', href: '/trustees' },
    { name: 'Contact', href: '/contact' }
  ]

  const isHomePage = pathname === '/'

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled || !isHomePage ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            {/* Logo */}
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="MAS Wildlife Conservation Foundation Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Text */}
            <div>
              <h1 className={`text-xl font-bold ${
                scrolled || !isHomePage ? 'text-gray-900' : 'text-black'
              }`}>
                MAS Wildlife
              </h1>
              <p className={`text-xs ${
                scrolled || !isHomePage ? 'text-gray-600' : 'text-gray-900'
              }`}>
                Conservation Foundation
              </p>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-green-600'
                    : scrolled || !isHomePage
                    ? 'text-gray-700 hover:text-green-600'
                    : 'text-green-600 hover:text-green-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${scrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-4 py-3 ${
                pathname === item.href
                  ? 'bg-green-40 text-green-600'
                  : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}