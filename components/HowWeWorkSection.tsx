import { Phone, ClipboardList, Calculator, Truck, Hammer, CheckSquare } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    title: 'Заявка',
    description: 'Оставьте заявку на сайте или позвоните нам'
  },
  {
    icon: Calculator,
    title: 'Расчёт',
    description: 'Бесплатный выезд замерщика и составление сметы'
  },
  {
    icon: ClipboardList,
    title: 'Договор',
    description: 'Заключение договора с фиксированной стоимостью'
  },
  {
    icon: Truck,
    title: 'Материалы',
    description: 'Закупка и доставка материалов на объект'
  },
  {
    icon: Hammer,
    title: 'Ремонт',
    description: 'Выполнение работ согласно графику'
  },
  {
    icon: CheckSquare,
    title: 'Сдача',
    description: 'Приёмка работ и подписание акта'
  }
]

export default function HowWeWorkSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[var(--foreground)]">
            Как мы работаем
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            6 простых шагов к ремонту вашей мечты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary-light)]">
                    <Icon className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="flex-1 w-px bg-[var(--border)] my-2" />
                  )}
                </div>
                <div>
                  <div className="flex items-center h-12">
                    <h3 className="text-xl font-semibold text-[var(--foreground)]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[var(--muted-foreground)]">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}