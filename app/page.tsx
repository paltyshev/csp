'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/ui/Header'
import FeaturesSection from '@/components/FeaturesSection'
import RepairTypesSection from '@/components/RepairTypesSection'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import PortfolioSection from '@/components/PortfolioSection'
import ContactSection from '@/components/ContactSection'
import { Button } from '@/components/ui/Button'

export default function Home() {
  const [currentCity, setCurrentCity] = useState('Краснодаре')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCity(prev => prev === 'Краснодаре' ? 'Геленджике' : 'Краснодаре')
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />

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
              <Button size="lg" asChild>
                <a href="#calculate">
                  Рассчитать стоимость
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#portfolio">
                  Смотреть работы
                </a>
              </Button>
            </div>
          </div>
        </div>

        <FeaturesSection />
        <RepairTypesSection />
        <HowWeWorkSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  )
}