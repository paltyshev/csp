import React from 'react';
import { Calculator, Image as ImageIcon, Clock, CheckCircle2 } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Калькулятор */}
        <a href="#calculate" className="group">
          <div className="h-full rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all hover:border-[var(--primary)] hover:shadow-lg">
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-[var(--primary-light)] p-2">
              <Calculator className="h-6 w-6 text-[var(--primary)]" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[var(--foreground)]">Рассчитать стоимость</h3>
            <p className="mb-4 text-[var(--muted-foreground)]">Узнайте предварительную стоимость ремонта вашей квартиры</p>
            
            {/* Примерный калькулятор */}
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
          </div>
        </a>

        {/* Коллаж работ */}
        <a href="#portfolio" className="group">
          <div className="h-full rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all hover:border-[var(--primary)] hover:shadow-lg">
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-[var(--primary-light)] p-2">
              <ImageIcon className="h-6 w-6 text-[var(--primary)]" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[var(--foreground)]">Наши работы</h3>
            <p className="mb-4 text-[var(--muted-foreground)]">Более 150 выполненных проектов за 5 лет работы</p>
            
            {/* Сетка фотографий */}
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-square rounded-lg bg-[var(--muted)]"></div>
              <div className="aspect-square rounded-lg bg-[var(--muted)]"></div>
              <div className="aspect-square rounded-lg bg-[var(--muted)]"></div>
              <div className="aspect-square rounded-lg bg-[var(--muted)]"></div>
            </div>
          </div>
        </a>

        {/* Преимущества */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-6">
          <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-[var(--primary-light)] p-2">
            <CheckCircle2 className="h-6 w-6 text-[var(--primary)]" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-[var(--foreground)]">Почему мы?</h3>
          <p className="mb-4 text-[var(--muted-foreground)]">Гарантируем качество и соблюдение сроков</p>
          
          {/* Список преимуществ */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-[var(--primary)]" />
              <div>
                <p className="font-medium text-[var(--foreground)]">Точные сроки</p>
                <p className="text-sm text-[var(--muted-foreground)]">Работаем по графику</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-[var(--primary)]" />
              <div>
                <p className="font-medium text-[var(--foreground)]">Гарантия 2 года</p>
                <p className="text-sm text-[var(--muted-foreground)]">На все виды работ</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calculator className="h-5 w-5 text-[var(--primary)]" />
              <div>
                <p className="font-medium text-[var(--foreground)]">Фиксированная цена</p>
                <p className="text-sm text-[var(--muted-foreground)]">Без скрытых доплат</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;