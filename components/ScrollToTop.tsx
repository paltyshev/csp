'use client'

import React, { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Отслеживаем положение прокрутки страницы
  useEffect(() => {
    const toggleVisibility = () => {
      // Показываем кнопку только когда пользователь прокрутил хотя бы 500px
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    
    // Очищаем слушатель при размонтировании компонента
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Функция для прокрутки наверх при клике на кнопку
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[var(--primary)] text-white shadow-lg hover:bg-[var(--primary-hover)] transition-all duration-300 z-50 opacity-90 hover:opacity-100"
          aria-label="Прокрутить наверх"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  )
}