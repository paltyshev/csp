'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/Button'

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    // Блокируем прокрутку страницы при открытии лайтбокса
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    // Возвращаем прокрутку при закрытии
    document.body.style.overflow = 'auto'
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  // Обработчик клавиш для навигации по галерее
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, images.length])

  // Отображаем первое изображение крупнее для основной галереи
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Главное изображение */}
        {images.length > 0 && (
          <div className="md:col-span-12 lg:col-span-8 relative aspect-video rounded-lg overflow-hidden cursor-pointer group" onClick={() => openLightbox(0)}>
            <Image
              src={images[0]}
              alt={`${title} - главное фото`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
              quality={90}
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 px-4 py-2 rounded-md">
                Открыть галерею
              </span>
            </div>
          </div>
        )}

        {/* Миниатюры */}
        <div className="md:col-span-12 lg:col-span-4 grid grid-cols-2 gap-4">
          {images.slice(1, 5).map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(index + 1)}
            >
              <Image
                src={image}
                alt={`${title} - фото ${index + 2}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
              {index === 3 && images.length > 5 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <span className="text-white font-semibold text-lg">+{images.length - 5}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Кнопка для показа всех изображений */}
      {images.length > 5 && (
        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => openLightbox(0)}
            className="mt-4"
          >
            Смотреть все фотографии ({images.length})
          </Button>
        </div>
      )}

      {/* Лайтбокс */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={closeLightbox}
              className="rounded-full p-2 bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative w-full max-w-6xl max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full aspect-video">
              <Image
                src={images[currentImageIndex]}
                alt={`${title} - изображение ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                quality={90}
              />
            </div>

            {/* Навигация */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 rounded-full p-2 bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 rounded-full p-2 bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Счетчик изображений */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-md">
                {currentImageIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}