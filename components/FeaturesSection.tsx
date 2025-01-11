import React from 'react'
import { Calculator, Image as ImageIcon, Clock, CheckCircle2 } from 'lucide-react'
import { FeatureCard } from './ui/FeatureCard'
import Image from 'next/image'

const portfolioImages = [
  'https://res.cloudinary.com/ddpeoofxn/image/upload/v1730643859/comfortstroy/prj100/rcx078znizfhlfzvsz5g.jpg',
  'https://res.cloudinary.com/ddpeoofxn/image/upload/v1730643859/comfortstroy/prj100/wcjjwyrtuh5ualvigik7.jpg',
  'https://res.cloudinary.com/ddpeoofxn/image/upload/v1730643856/comfortstroy/prj100/d9wa1nfkhoi0uer0pbt4.jpg',
  'https://res.cloudinary.com/ddpeoofxn/image/upload/v1682238028/comfortstroy/95ae975a-f685-430a-8c72-8ca6510d4b54_aiaivx.jpg'
]

const FeaturesSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={Calculator}
          title="Рассчитать стоимость"
          description="Узнайте предварительную стоимость ремонта вашей квартиры"
          href="#calculate"
        >
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[var(--foreground)]">Площадь:</span>
              <span className="text-[var(--primary)]">50 м²</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[var(--muted)]">
              <div className="w-1/2 h-full rounded-full bg-[var(--primary)]"></div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--foreground)]">Отделка стен</span>
                <span className="text-[var(--primary)]">85 000 ₽</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--foreground)]">Потолки</span>
                <span className="text-[var(--primary)]">45 000 ₽</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--foreground)]">Полы</span>
                <span className="text-[var(--primary)]">65 000 ₽</span>
              </div>
            </div>
          </div>
        </FeatureCard>

        <FeatureCard
          icon={ImageIcon}
          title="Наши работы"
          description="Более 150 выполненных проектов за 5 лет работы"
          href="#portfolio"
        >
          <div className="grid grid-cols-2 gap-2">
            {portfolioImages.map((src, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`Проект ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={85}
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </FeatureCard>

        <FeatureCard
          icon={CheckCircle2}
          title="Почему мы?"
          description="Гарантируем качество и соблюдение сроков"
        >
          <div className="space-y-4">
            {[
              {
                icon: Clock,
                title: 'Точные сроки',
                description: 'Работаем по графику'
              },
              {
                icon: CheckCircle2,
                title: 'Гарантия 2 года',
                description: 'На все виды работ'
              },
              {
                icon: Calculator,
                title: 'Фиксированная цена',
                description: 'Без скрытых доплат'
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <feature.icon className="h-5 w-5 text-[var(--primary)]" />
                <div>
                  <p className="font-medium text-[var(--foreground)]">
                    {feature.title}
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FeatureCard>
      </div>
    </div>
  )
}

export default FeaturesSection