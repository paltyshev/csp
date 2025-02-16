'use client'

import React from 'react'
import Header from '@/components/ui/Header'
import ProjectCard from '@/components/ProjectCard'

// Временные данные для портфолио
const projects = [
  {
    id: 1,
    title: 'Современная квартира-студия',
    type: 'Дизайнерский ремонт',
    area: '45 м²',
    duration: '3 месяца',
    description: 'Полный ремонт квартиры-студии в современном стиле. Перепланировка пространства, замена всех коммуникаций, установка современной техники.',
    image: 'https://res.cloudinary.com/ddpeoofxn/image/upload/v1730643859/comfortstroy/prj100/d9wa1nfkhoi0uer0pbt4'
  },
  {
    id: 2,
    title: 'Классическая двухкомнатная квартира',
    type: 'Капитальный ремонт',
    area: '65 м²',
    duration: '4 месяца',
    description: 'Капитальный ремонт двухкомнатной квартиры в классическом стиле. Замена перекрытий, выравнивание стен, замена коммуникаций.',
    image: 'https://res.cloudinary.com/ddpeoofxn/image/upload/v1730643859/comfortstroy/95ae975a-f685-430a-8c72-8ca6510d4b54_aiaivx'
  },
]

export default function PortfolioPage() {
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
              <ProjectCard
                key={project.id}
                title={project.title}
                type={project.type}
                area={project.area}
                duration={project.duration}
                description={project.description}
                image={project.image}
              />
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