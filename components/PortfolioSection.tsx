import { Button } from './ui/Button'

const portfolioItems = [
  {
    title: 'Современная квартира',
    type: 'Дизайнерский ремонт',
    area: '85 м²',
    duration: '4 месяца',
    imageUrl: '/portfolio/modern-apartment.jpg'
  },
  {
    title: 'Классический интерьер',
    type: 'Капитальный ремонт',
    area: '120 м²',
    duration: '3 месяца',
    imageUrl: '/portfolio/classic-interior.jpg'
  },
  {
    title: 'Студия в новостройке',
    type: 'Черновой ремонт',
    area: '45 м²',
    duration: '2 месяца',
    imageUrl: '/portfolio/studio.jpg'
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
            <div 
              key={item.title}
              className="bg-[var(--background)] rounded-xl overflow-hidden group"
            >
              <div className="relative h-64">
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" className="text-white border-white">
                    Подробнее
                  </Button>
                </div>
                <img 
                  src="/api/placeholder/400/320"
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
                  {item.title}
                </h3>
                <div className="space-y-2 text-[var(--muted-foreground)]">
                  <p>Тип: {item.type}</p>
                  <p>Площадь: {item.area}</p>
                  <p>Срок: {item.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href="/portfolio">Смотреть все работы</a>
          </Button>
        </div>
      </div>
    </section>
  )
}