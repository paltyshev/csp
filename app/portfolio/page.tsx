'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/ui/Header'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/data/portfolio'
import { Search, Filter, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import ScrollToTop from '@/components/ScrollToTop'

// Получение уникальных типов проектов для фильтров
const projectTypes = ['Все проекты', ...Array.from(new Set(projects.map(project => project.type)))]
const projectLocations = ['Все города', ...Array.from(new Set(projects.map(project => project.location).filter(Boolean) as string[]))]

export default function PortfolioPage() {
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [activeType, setActiveType] = useState('Все проекты')
  const [activeLocation, setActiveLocation] = useState('Все города')
  const [searchQuery, setSearchQuery] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Применение фильтров
  useEffect(() => {
    let result = [...projects]
    
    // Фильтр по типу
    if (activeType !== 'Все проекты') {
      result = result.filter(project => project.type === activeType)
    }
    
    // Фильтр по городу
    if (activeLocation !== 'Все города') {
      result = result.filter(project => project.location === activeLocation)
    }
    
    // Фильтр по поисковому запросу
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        project => 
          project.title.toLowerCase().includes(query) || 
          project.description.toLowerCase().includes(query) ||
          (project.fullDescription && project.fullDescription.toLowerCase().includes(query))
      )
    }
    
    setFilteredProjects(result)
  }, [activeType, activeLocation, searchQuery])

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              Наши работы
            </h1>
            <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
              Каждый проект - это уникальное воплощение ваших желаний и нашего профессионализма.
              Посмотрите примеры наших работ.
            </p>
          </div>

          {/* Поиск и фильтры для десктопа */}
          <div className="hidden md:block mb-12">
            <div className="flex items-center justify-between gap-4 mb-6">
              {/* Поиск */}
              <div className="relative flex-grow max-w-md">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-[var(--muted-foreground)]" />
                </div>
                <input
                  type="text"
                  placeholder="Поиск проектов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-3 flex items-center"
                  >
                    <X className="h-4 w-4 text-[var(--muted-foreground)] hover:text-[var(--foreground)]" />
                  </button>
                )}
              </div>
              
              {/* Счетчик найденных проектов */}
              <div className="text-[var(--muted-foreground)]">
                Найдено: <span className="font-medium text-[var(--foreground)]">{filteredProjects.length}</span> проектов
              </div>
            </div>
            
            {/* Фильтры по типам проектов */}
            <div className="flex flex-wrap gap-3 mb-4">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeType === type
                      ? 'bg-[var(--primary)] text-white'
                      : 'bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--primary-light)]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            
            {/* Фильтры по городам */}
            {projectLocations.length > 1 && (
              <div className="flex flex-wrap gap-3">
                {projectLocations.map((location) => (
                  <button
                    key={location}
                    onClick={() => setActiveLocation(location)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      activeLocation === location
                        ? 'bg-[var(--secondary)] text-[var(--secondary-foreground)]'
                        : 'border border-[var(--border)] hover:border-[var(--secondary)]'
                    }`}
                  >
                    {location}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Мобильные фильтры */}
          <div className="md:hidden mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Button
                variant="outline"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center"
              >
                <Filter className="w-4 h-4 mr-2" />
                Фильтры
              </Button>
              
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-[var(--muted-foreground)]" />
                </div>
                <input
                  type="text"
                  placeholder="Поиск"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-2 flex items-center"
                  >
                    <X className="h-4 w-4 text-[var(--muted-foreground)]" />
                  </button>
                )}
              </div>
            </div>
            
            {/* Мобильные фильтры в развернутом виде */}
            {isFilterOpen && (
              <div className="bg-[var(--muted)] rounded-lg p-4 mb-4">
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Тип проекта</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setActiveType(type)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          activeType === type
                            ? 'bg-[var(--primary)] text-white'
                            : 'bg-[var(--background)] text-[var(--foreground)]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                
                {projectLocations.length > 1 && (
                  <div>
                    <h3 className="font-medium mb-2">Город</h3>
                    <div className="flex flex-wrap gap-2">
                      {projectLocations.map((location) => (
                        <button
                          key={location}
                          onClick={() => setActiveLocation(location)}
                          className={`px-3 py-1 rounded-full text-sm ${
                            activeLocation === location
                              ? 'bg-[var(--secondary)] text-[var(--secondary-foreground)]'
                              : 'bg-[var(--background)] text-[var(--foreground)]'
                          }`}
                        >
                          {location}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Счетчик найденных проектов на мобильных */}
            <div className="text-sm text-[var(--muted-foreground)] mb-6">
              Найдено: {filteredProjects.length} проектов
            </div>
          </div>

          {/* Сетка проектов */}
          {filteredProjects.length > 0 ? (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              key={`${activeType}-${activeLocation}-${searchQuery}`}
            >
              {filteredProjects.map((project) => (
                <div key={project.id} className="transition-opacity duration-300">
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    type={project.type}
                    area={project.area}
                    duration={project.duration}
                    description={project.description}
                    image={project.image}
                    location={project.location}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
                Проекты не найдены
              </h3>
              <p className="text-[var(--muted-foreground)] mb-8">
                Попробуйте изменить параметры поиска или фильтры
              </p>
              <Button onClick={() => {
                setActiveType('Все проекты');
                setActiveLocation('Все города');
                setSearchQuery('');
              }}>
                Сбросить фильтры
              </Button>
            </div>
          )}

          {/* Призыв к действию */}
          <div className="mt-20 text-center bg-[var(--muted)] rounded-lg p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-6">
              Хотите обсудить ваш проект?
            </h2>
            <p className="text-[var(--muted-foreground)] mb-8 max-w-2xl mx-auto">
              Мы готовы помочь воплотить ваши идеи в реальность. Свяжитесь с нами для консультации и расчета стоимости вашего проекта.
            </p>
            <Button size="lg" asChild>
              <Link href="/contacts">Обсудить проект</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Кнопка для прокрутки наверх */}
      <ScrollToTop />
    </div>
  )
}