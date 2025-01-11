'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from './Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActiveLink = (path: string) => pathname === path

  return (
    <nav className="fixed w-full bg-[var(--background)]/80 backdrop-blur-sm z-50 border-b border-[var(--border)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-[var(--primary)]">
              Комфорт Строй Про
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`${isActiveLink('/') ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'} hover:text-[var(--primary)]`}
            >
              Главная
            </Link>
            <Link 
              href="/about" 
              className={`${isActiveLink('/about') ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'} hover:text-[var(--primary)]`}
            >
              О нас
            </Link>
            <Link 
              href="/services" 
              className={`${isActiveLink('/services') ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'} hover:text-[var(--primary)]`}
            >
              Услуги
            </Link>
            <Link 
              href="/portfolio" 
              className={`${isActiveLink('/portfolio') ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'} hover:text-[var(--primary)]`}
            >
              Портфолио
            </Link>
            <Link 
              href="/contacts" 
              className={`${isActiveLink('/contacts') ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'} hover:text-[var(--primary)]`}
            >
              Контакты
            </Link>
            <a href="tel:+79001234567">
              <Button size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                +7 900 123-45-67
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[var(--border)]">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[var(--background)]">
            <Link 
              href="/" 
              className={`block px-3 py-2 ${isActiveLink('/') ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'} hover:text-[var(--primary)]`}
            >
              Главная
            </Link>
            <Link 
              href="/about" 
              className={`block px-3 py-2 ${isActiveLink('/about') ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'} hover:text-[var(--primary)]`}
            >
              О нас
            </Link>
            <Link 
              href="/services" 
              className={`block px-3 py-2 ${isActiveLink('/services') ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'} hover:text-[var(--primary)]`}
            >
              Услуги
            </Link>
            <Link 
              href="/portfolio" 
              className={`block px-3 py-2 ${isActiveLink('/portfolio') ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'} hover:text-[var(--primary)]`}
            >
              Портфолио
            </Link>
            <Link 
              href="/contacts" 
              className={`block px-3 py-2 ${isActiveLink('/contacts') ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'} hover:text-[var(--primary)]`}
            >
              Контакты
            </Link>
            <div className="px-3 py-2">
              <Button size="sm" className="w-full gap-2">
                <Phone className="h-4 w-4" />
                +7 900 123-45-67
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}