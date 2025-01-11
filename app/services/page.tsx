'use client'

import React from 'react'
import { Wrench, Paintbrush, Ruler, Hammer, Thermometer, Power } from 'lucide-react'
import Header from '@/components/ui/Header'

const services = [
  {
    title: 'Косметический ремонт',
    description: 'Обновление внешнего вида помещения без капитальных изменений. Включает покраску, поклейку обоев, замену напольных покрытий.',
    icon: Paintbrush,
    price: 'от 3 500 ₽/м²'
  },
  {
    title: 'Капитальный ремонт',
    description: 'Полное обновление помещения с заменой коммуникаций, выравниванием стен, потолков и полов.',
    icon: Wrench,
    price: 'от 5 500 ₽/м²'
  },
  {
    title: 'Дизайнерский ремонт',
    description: 'Эксклюзивный ремонт по индивидуальному дизайн-проекту с использованием премиальных материалов.',
    icon: Ruler,
    price: 'от 8 000 ₽/м²'
  },
  {
    title: 'Черновые работы',
    description: 'Подготовительные работы включая демонтаж, выравнивание поверхностей, прокладку коммуникаций.',
    icon: Hammer,
    price: 'от 2 000 ₽/м²'
  },
  {
    title: 'Инженерные системы',
    description: 'Монтаж и замена отопления, водоснабжения, канализации и вентиляции.',
    icon: Thermometer,
    price: 'Индивидуально'
  },
  {
    title: 'Электромонтаж',
    description: 'Полная замена электропроводки, установка розеток, выключателей и осветительных приборов.',
    icon: Power,
    price: 'от 800 ₽/точка'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              Наши услуги
            </h1>
            <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
              Предоставляем полный спектр услуг по ремонту и отделке помещений.
              От косметического до премиального ремонта под ключ.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-[var(--border)] bg-[var(--background)] hover:border-[var(--primary)] transition-colors"
              >
                <service.icon className="w-12 h-12 text-[var(--primary)] mb-4" />
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                  {service.title}
                </h3>
                <p className="text-[var(--muted-foreground)] mb-4">
                  {service.description}
                </p>
                <p className="text-lg font-semibold text-[var(--primary)]">
                  {service.price}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-6">
              Готовы начать ремонт?
            </h2>
            <a
              href="tel:+79001234567"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[var(--primary-foreground)] bg-[var(--primary)] hover:opacity-90 transition-colors"
            >
              Получить консультацию
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
