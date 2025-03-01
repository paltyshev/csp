import { Button } from './ui/Button'
import Link from 'next/link'
import ProjectCard from './ProjectCard'

const portfolioItems = [
  {
    id: 1,
    title: 'Современный интерьер',
    type: 'Дизайнерский ремонт',
    area: '85 м²',
    duration: '4 месяца',
    description: 'Полный ремонт квартиры в современном стиле с использованием качественных материалов и современных решений.',
    image: 'https://res.cloudinary.com/ddpeoofxn/image/upload/v1730643859/comfortstroy/prj100/d9wa1nfkhoi0uer0pbt4'
  },
  {
    id: 2,
    title: 'Светлая квартира',
    type: 'Капитальный ремонт',
    area: '75 м²',
    duration: '3 месяца',
    description: 'Капитальный ремонт квартиры с заменой всех коммуникаций и созданием светлого, просторного пространства.',
    image: 'https://res.cloudinary.com/ddpeoofxn/image/upload/v1730643859/comfortstroy/photo5359440851614413212_ldubww'
  },
  {
    id: 3,
    title: 'Классический стиль',
    type: 'Дизайнерский ремонт',
    area: '95 м²',
    duration: '5 месяцев',
    description: 'Ремонт квартиры в классическом стиле с использованием премиальных материалов и сохранением элегантности в каждой детали.',
    image: 'https://res.cloudinary.com/ddpeoofxn/image/upload/v1730643859/comfortstroy/95ae975a-f685-430a-8c72-8ca6510d4b54_aiaivx'
  }
]

export default function PortfolioSection() {
  return (
    <section className="py-24 bg-[var(--muted)]" id="portfolio">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[var(--foreground)]">
            Наши работы
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            Последние реализованные проекты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <ProjectCard
              key={item.id}
              id={item.id}
              title={item.title}
              type={item.type}
              area={item.area}
              duration={item.duration}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/portfolio">Смотреть все работы</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}