'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import FeaturesSection from '@/components/FeaturesSection'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentCity, setCurrentCity] = useState('Краснодаре')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCity(prev => prev === 'Краснодаре' ? 'Геленджике' : 'Краснодаре')
      const span = document.querySelector('.city-highlight')
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Navigation */}
      <nav className="fixed w-full bg-[var(--background)]/80 backdrop-blur-sm z-50 border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-[var(--primary)]">Комфорт Строй Про</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[var(--foreground)] hover:text-[var(--primary)]">Главная</Link>
              <Link href="/services" className="text-[var(--foreground)] hover:text-[var(--primary)]">Услуги</Link>
              <Link href="/portfolio" className="text-[var(--foreground)] hover:text-[var(--primary)]">Портфолио</Link>
              <Link href="/contacts" className="text-[var(--foreground)] hover:text-[var(--primary)]">Контакты</Link>
              <a href="tel:+79001234567" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[var(--primary-foreground)] bg-[var(--primary)] hover:opacity-90">
                <Phone className="h-4 w-4 mr-2" />
                +7 900 123-45-67
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[var(--foreground)] hover:text-[var(--primary)]"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[var(--background)]">
              <Link href="/" className="block px-3 py-2 text-[var(--foreground)] hover:text-[var(--primary)]">Главная</Link>
              <Link href="/services" className="block px-3 py-2 text-[var(--foreground)] hover:text-[var(--primary)]">Услуги</Link>
              <Link href="/portfolio" className="block px-3 py-2 text-[var(--foreground)] hover:text-[var(--primary)]">Портфолио</Link>
              <Link href="/contacts" className="block px-3 py-2 text-[var(--foreground)] hover:text-[var(--primary)]">Контакты</Link>
              <a href="tel:+79001234567" className="block px-3 py-2 text-[var(--primary)] hover:opacity-90">
                <Phone className="h-4 w-4 inline mr-2" />
                +7 900 123-45-67
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20 sm:pt-24 lg:pt-32 max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold text-[var(--foreground)] mb-6 flex flex-col">
              <span>Ремонт квартир</span>
              <span className="text-[var(--primary)]">на юге России</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[var(--muted-foreground)] mb-12 max-w-3xl mx-auto">
              Работаем в{' '}
              <span className="city-highlight px-1 bg-[var(--primary-light)] font-medium text-[var(--primary)]">
                {currentCity}
              </span>
              , реализуя проекты любой сложности точно в срок.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#calculate"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[var(--primary-foreground)] bg-[var(--primary)] hover:opacity-90 transition-colors"
              >
                Рассчитать стоимость
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-6 py-3 border border-[var(--border)] text-base font-medium rounded-md text-[var(--foreground)] bg-[var(--background)] hover:bg-[var(--muted)] transition-colors"
              >
                Смотреть работы
              </a>
            </div>
          </div>
        </div>
        <FeaturesSection />
      </main>
    </div>
  )
}