'use client'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'
import Header from '@/components/ui/Header'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              О компании <br /><span className="text-[var(--primary)]">Комфорт Строй Про</span>
            </h1>
            <p className="text-xl text-[var(--muted-foreground)] mb-12 max-w-3xl mx-auto">
              Мы специализируемся на качественном ремонте и отделке помещений в Краснодаре и Геленджике,
              предоставляя полный комплекс услуг от проектирования до реализации.
            </p>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center">
                  <Check className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-[var(--foreground)]">Гибкая оплата</h3>
              </div>
              <p className="text-[var(--muted-foreground)]">
                Оплата разбита на 3 этапа. После заключения договора и оплаты первой части мы приступаем к работам.
                При необходимости возможно разбить платежи на большее количество частей.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center">
                  <Check className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-[var(--foreground)]">Дистанционный контроль</h3>
              </div>
              <p className="text-[var(--muted-foreground)]">
                Предоставляем услугу дистанционного ремонта с ежедневными фото и видео отчетами. 
                30% наших клиентов успешно пользуются этой услугой.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center">
                  <Check className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <h3 className="text-xl font-semibold ml-4 text-[var(--foreground)]">Материалы и логистика</h3>
              </div>
              <p className="text-[var(--muted-foreground)]">
                Выполняем закупку и доставку материалов оптовыми партиями напрямую от производителей. 
                Организуем оперативный вывоз строительного мусора.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Гарантии и сервис */}
      <section className="py-16 bg-[var(--secondary)]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12 text-[var(--foreground)]">
              Гарантии и сервис
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-[var(--primary)] mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">12 месяцев гарантии</h3>
                    <p className="text-[var(--muted-foreground)]">
                      Предоставляем официальную гарантию на все выполненные работы. 
                      Оперативно устраняем любые гарантийные случаи за наш счет.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-[var(--primary)] mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">Чистота и порядок</h3>
                    <p className="text-[var(--muted-foreground)]">
                      Обеспечиваем чистоту в подъезде, аккуратный подъем материалов 
                      и своевременный вывоз строительного мусора.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-[var(--primary)] mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">Техническое оснащение</h3>
                    <p className="text-[var(--muted-foreground)]">
                      Работаем с профессиональным инструментом и оборудованием. 
                      Устанавливаем системы водоснабжения с учетом особенностей региона.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-[var(--primary)] mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">Прозрачность работы</h3>
                    <p className="text-[var(--muted-foreground)]">
                      Предоставляем детальные сметы, работаем по официальному договору,
                      обеспечиваем фото- и видеоотчетность.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[var(--foreground)]">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] mb-8">
              Свяжитесь с нами для консультации и расчета стоимости вашего ремонта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}