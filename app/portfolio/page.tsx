'use client'

import React, { useState } from 'react'
import Header from '@/components/ui/Header'

// Временные данные для портфолио
const projects = [
  {
    id: 1,
    title: 'Современная квартира-студия',
    type: 'Дизайнерский ремонт',
    area: '45 м²',
    duration: '3 месяца',
    description: 'Полный ремонт квартиры-студии в современном стиле. Перепланировка пространства, замена всех коммуникаций, установка современной техники.',
    // В реальном проекте здесь будут реальные фотографии
    images: ['/projects/project1-1.jpg', '/projects/project1-2.jpg']
  },
  {
    id: 2,
    title: 'Классическая двухкомнатная квартира',
    type: 'Капитальный ремонт',
    area: '65 м²',
    duration: '4 месяца',
    description: 'Капитальный ремонт двухкомнатной квартиры в классическом стиле. Замена перекрытий, выравнивание стен, замена коммуникаций.',
    images: ['/projects/project2-1.jpg', '/projects/project2-2.jpg']
  },
  // Добавьте больше проектов по мере необходимости
]

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              Наши работы
            </h1>
            <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
              Каждый проект - это уникальное воплощение ваших желаний и нашего профессионализма.
              Посмотрите примеры наших работ.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border border-[var(--border)] rounded-lg overflow-hidden hover:border-[var(--primary)] transition-colors"
              >
                <div className="aspect-video bg-[var(--muted)] flex items-center justify-center">
                  {/* В реальном проекте здесь будет изображение */}
                  <span className="text-[var(--muted-foreground)]">Фото проекта</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-[var(--muted-foreground)] mb-4">
                    <span>{project.type}</span>
                    <span>•</span>
                    <span>{project.area}</span>
                    <span>•</span>
                    <span>{project.duration}</span>
                  </div>
                  <p className="text-[var(--muted-foreground)] mb-4">
                    {project.description}
                  </p>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-[var(--primary)] hover:underline"
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-6">
              Хотите такой же результат?
            </h2>
            <a
              href="tel:+79001234567"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[var(--primary-foreground)] bg-[var(--primary)] hover:opacity-90 transition-colors"
            >
              Обсудить проект
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
