'use client'

import React from 'react'
import { Wrench, Paintbrush, Ruler, Hammer, Thermometer, Power } from 'lucide-react'
import Header from '@/components/ui/Header'
import { Button } from '@/components/ui/Button'

const services = [
  {
    title: 'Черновой ремонт',
    description: 'Подготовительные работы для дальнейшей отделки.',
    icon: Hammer,
    price: 'от 4 500 ₽/м²',
    features: [
      'Демонтаж',
      'Выравнивание поверхностей',
      'Прокладка коммуникаций'
    ]
  },
  {
    title: 'Косметический ремонт',
    description: 'Обновление внешнего вида помещения без капитальных изменений.',
    icon: Paintbrush,
    price: 'от 9 000 ₽/м²',
    features: [
      'Поклейка обоев',
      'Покраска стен',
      'Замена напольных покрытий'
    ]
  },
  {
    title: 'Капитальный ремонт',
    description: 'Полное обновление помещения с заменой коммуникаций.',
    icon: Wrench,
    price: 'от 15 000 ₽/м²',
    features: [
      'Замена коммуникаций',
      'Выравнивание поверхностей',
      'Полная отделка'
    ]
  },
  {
    title: 'Дизайнерский ремонт',
    description: 'Эксклюзивный ремонт по индивидуальному дизайн-проекту.',
    icon: Ruler,
    price: 'от 18 000 ₽/м²',
    features: [
      'Авторский надзор',
      '3D-визуализация',
      'Премиальные материалы'
    ]
  },
  {
    title: 'Инженерные системы',
    description: 'Монтаж и замена инженерных коммуникаций.',
    icon: Thermometer,
    price: 'По проекту',
    features: [
      'Отопление',
      'Водоснабжение',
      'Вентиляция'
    ]
  },
  {
    title: 'Электромонтаж',
    description: 'Профессиональная установка электрики.',
    icon: Power,
    price: 'от 1 200 ₽/точка',
    features: [
      'Замена проводки',
      'Установка розеток',
      'Монтаж освещения'
    ]
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
                className="bg-[var(--background)] p-6 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300 flex flex-col"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--primary-light)]">
                  <service.icon className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
                  {service.title}
                </h3>
                <p className="text-[var(--muted-foreground)] min-h-[48px]">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-[var(--primary)] my-4">
                  {service.price}
                </div>
                <ul className="space-y-2 mb-6 text-[var(--foreground)]">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button variant="outline" className="w-full">
                    Оставить заявку
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-6">
              Готовы начать ремонт?
            </h2>
            <Button size="lg" className="px-8">
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}