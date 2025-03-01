'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, Home, Clock, CheckCircle2, ChevronRight, Mail, Phone } from 'lucide-react'
import Header from '@/components/ui/Header'
import { projects } from '@/lib/data/portfolio'
import { Button } from '@/components/ui/Button'
import ProjectGallery from '@/components/ProjectGallery'
import Testimonial from '@/components/Testimonial'
import ProjectTags from '@/components/ProjectTags'
import ScrollToTop from '@/components/ScrollToTop'

interface ProjectClientContainerProps {
  projectId: number;
}

export default function ProjectClientContainer({ projectId }: ProjectClientContainerProps) {
  const [project, setProject] = useState(() => projects.find(p => p.id === projectId));
  const [activeTab, setActiveTab] = useState<'description' | 'details'>('description');
  const [prevProject, setPrevProject] = useState<typeof projects[0] | null>(null);
  const [nextProject, setNextProject] = useState<typeof projects[0] | null>(null);
  
  // Используем useEffect для вычисления зависимых состояний
  useEffect(() => {
    // Находим проект
    setProject(projects.find(p => p.id === projectId));
    
    // Находим предыдущий и следующий проекты для навигации
    const currentIndex = projects.findIndex(p => p.id === projectId);
    setPrevProject(currentIndex > 0 ? projects[currentIndex - 1] : null);
    setNextProject(currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--background)]">
        <Header />
        <div className="container mx-auto px-4 pt-32 text-center">
          <h1 className="text-3xl font-bold text-[var(--foreground)]">
            Проект не найден
          </h1>
          <Link href="/portfolio" className="text-[var(--primary)] hover:underline mt-4 inline-block">
            Вернуться к портфолио
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <div className="container mx-auto px-4 pt-32 pb-16">
        {/* Навигация */}
        <div className="flex justify-between items-center mb-8">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к портфолио
          </Link>
          
          <div className="text-sm text-[var(--muted-foreground)] flex items-center">
            <Link href="/" className="hover:text-[var(--foreground)]">Главная</Link>
            <ChevronRight className="w-3 h-3 mx-2" />
            <Link href="/portfolio" className="hover:text-[var(--foreground)]">Портфолио</Link>
            <ChevronRight className="w-3 h-3 mx-2" />
            <span className="text-[var(--foreground)]">{project.title}</span>
          </div>
        </div>

        {/* Заголовок проекта */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-[var(--muted-foreground)]">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--primary-light)] text-[var(--primary)]">
              {project.type}
            </span>
            {project.location && (
              <span className="inline-flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {project.location}
              </span>
            )}
            {project.year && (
              <span className="inline-flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {project.year} год
              </span>
            )}
            <span className="inline-flex items-center">
              <Home className="w-4 h-4 mr-1" />
              {project.area}
            </span>
            <span className="inline-flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {project.duration}
            </span>
          </div>
        </div>

        {/* Галерея проекта */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-12">
            <ProjectGallery images={project.gallery} title={project.title} />
          </div>
        )}

        {/* Табы для переключения между описанием и деталями (на мобильных) */}
        <div className="lg:hidden mb-8 flex border-b border-[var(--border)]">
          <button
            className={`py-3 px-4 font-medium ${activeTab === 'description' ? 'text-[var(--primary)] border-b-2 border-[var(--primary)]' : 'text-[var(--muted-foreground)]'}`}
            onClick={() => setActiveTab('description')}
          >
            О проекте
          </button>
          <button
            className={`py-3 px-4 font-medium ${activeTab === 'details' ? 'text-[var(--primary)] border-b-2 border-[var(--primary)]' : 'text-[var(--muted-foreground)]'}`}
            onClick={() => setActiveTab('details')}
          >
            Детали
          </button>
        </div>

        {/* Содержимое проекта */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Основное содержимое */}
          <div className={`lg:col-span-2 ${activeTab === 'details' ? 'hidden lg:block' : ''}`}>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
                О проекте
              </h2>
              <p className="text-[var(--foreground)] text-lg mb-8">
                {project.fullDescription || project.description}
              </p>

              {project.features && project.features.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-6">
                    Особенности проекта
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start bg-[var(--muted)] p-4 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-[var(--primary)] mr-3 mt-1 flex-shrink-0" />
                        <span className="text-[var(--foreground)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Отзыв клиента, если есть */}
              {project.testimonial && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-6">
                    Отзыв клиента
                  </h3>
                  <Testimonial 
                    text={project.testimonial.text}
                    author={project.testimonial.author}
                    position={project.testimonial.position}
                  />
                </div>
              )}
              
              {/* Теги проекта */}
              {project.tags && project.tags.length > 0 && (
                <ProjectTags tags={project.tags} />
              )}
            </div>
            
            {/* Навигация по проектам (только на десктопе) */}
            <div className="mt-12 hidden lg:flex items-center justify-between pt-8 border-t border-[var(--border)]">
              {prevProject ? (
                <Link href={`/portfolio/${prevProject.id}`} className="inline-flex items-center text-[var(--foreground)] hover:text-[var(--primary)]">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <div>
                    <div className="text-sm text-[var(--muted-foreground)]">Предыдущий проект</div>
                    <div className="font-medium">{prevProject.title}</div>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
              
              {nextProject && (
                <Link href={`/portfolio/${nextProject.id}`} className="inline-flex items-center text-[var(--foreground)] hover:text-[var(--primary)]">
                  <div className="text-right">
                    <div className="text-sm text-[var(--muted-foreground)]">Следующий проект</div>
                    <div className="font-medium">{nextProject.title}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              )}
            </div>
          </div>

          {/* Боковая панель */}
          <div className={`lg:col-span-1 ${activeTab === 'description' ? 'hidden lg:block' : ''}`}>
            <div className="bg-[var(--muted)] rounded-lg p-6 mb-8">
              {project.services && project.services.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">
                    Выполненные работы
                  </h3>
                  <ul className="space-y-3">
                    {project.services.map((service, index) => (
                      <li key={index} className="text-[var(--muted-foreground)] flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-[var(--primary)] mr-2 mt-1 flex-shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.materials && project.materials.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">
                    Использованные материалы
                  </h3>
                  <ul className="space-y-3">
                    {project.materials.map((material, index) => (
                      <li key={index} className="text-[var(--muted-foreground)] flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-[var(--primary)] mr-2 mt-1 flex-shrink-0" />
                        <span>{material}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Блок с обсуждением проекта */}
            <div className="bg-[var(--primary-light)] rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
                Хотите похожий проект?
              </h3>
              <p className="text-[var(--muted-foreground)] mb-6">
                Свяжитесь с нами, чтобы обсудить ваш проект. Мы поможем воплотить ваши идеи в реальность.
              </p>
              <div className="space-y-4 mb-6">
                <a href="tel:+79001234567" className="flex items-center text-[var(--foreground)] hover:text-[var(--primary)]">
                  <Phone className="w-5 h-5 mr-3" />
                  +7 (900) 123-45-67
                </a>
                <a href="mailto:info@comfortstroy.ru" className="flex items-center text-[var(--foreground)] hover:text-[var(--primary)]">
                  <Mail className="w-5 h-5 mr-3" />
                  info@comfortstroy.ru
                </a>
              </div>
              <Button size="lg" asChild className="w-full">
                <Link href="/contacts">Обсудить проект</Link>
              </Button>
            </div>
            
            {/* Рекомендуемые проекты */}
            {projects.length > 1 && (
              <div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">
                  Похожие проекты
                </h3>
                <div className="space-y-4">
                  {projects.filter(p => p.id !== project.id).slice(0, 2).map((relatedProject) => (
                    <Link 
                      key={relatedProject.id} 
                      href={`/portfolio/${relatedProject.id}`}
                      className="block group"
                    >
                      <div className="flex gap-4">
                        <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={relatedProject.image}
                            alt={relatedProject.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 25vw, 10vw"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                            {relatedProject.title}
                          </h4>
                          <p className="text-sm text-[var(--muted-foreground)]">
                            {relatedProject.type}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Навигация по проектам (на мобильном) */}
        <div className="mt-12 lg:hidden flex items-center justify-between pt-8 border-t border-[var(--border)]">
          {prevProject ? (
            <Link href={`/portfolio/${prevProject.id}`} className="text-[var(--foreground)] hover:text-[var(--primary)]">
              <div className="inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span>Предыдущий</span>
              </div>
            </Link>
          ) : (
            <div></div>
          )}
          
          {nextProject && (
            <Link href={`/portfolio/${nextProject.id}`} className="text-[var(--foreground)] hover:text-[var(--primary)]">
              <div className="inline-flex items-center">
                <span>Следующий</span>
                <ChevronRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          )}
        </div>
      </div>
      
      {/* Кнопка для прокрутки наверх */}
      <ScrollToTop />
    </div>
  )
}