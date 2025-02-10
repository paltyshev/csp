import { Paintbrush, Hammer, Wrench, Home } from 'lucide-react'
import { Button } from './ui/Button'
import Link from 'next/link'

const repairTypes = [
  {
    icon: Hammer,
    title: 'Черновой',
    description: 'Базовая отделка в новостройке',
    price: 'от 4 500',
    features: ['Штукатурка стен', 'Стяжка пола', 'Разводка коммуникаций']
  },
  {
    icon: Paintbrush,
    title: 'Косметический',
    description: 'Обновление отделки без изменения планировки',
    price: 'от 9 000',
    features: ['Поклейка обоев', 'Покраска стен', 'Замена напольного покрытия']
  },
  {
    icon: Wrench,
    title: 'Капитальный',
    description: 'Полная замена отделки и коммуникаций',
    price: 'от 15 000',
    features: ['Замена проводки', 'Замена труб', 'Выравнивание стен']
  },
  {
    icon: Home,
    title: 'Дизайнерский',
    description: 'Ремонт по индивидуальному проекту',
    price: 'от 18 000',
    features: ['Авторский надзор', '3D-визуализация', 'Подбор материалов']
  }
]

export default function RepairTypesSection() {
  return (
    <section className="py-24 bg-[var(--muted)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[var(--foreground)]">
            Виды ремонта
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            Выберите подходящий вариант или получите консультацию специалиста
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {repairTypes.map((type) => {
            const Icon = type.icon
            return (
              <div key={type.title} className="bg-[var(--background)] p-6 rounded-xl flex flex-col">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--primary-light)]">
                  <Icon className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
                  {type.title}
                </h3>
                <p className="text-[var(--muted-foreground)] min-h-[48px]">
                  {type.description}
                </p>
                <div className="text-2xl font-bold text-[var(--primary)] my-4">
                  {type.price} ₽/м²
                </div>
                <ul className="space-y-2 mb-6 text-[var(--foreground)]">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/services">Подробнее</Link>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}