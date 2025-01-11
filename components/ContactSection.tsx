'use client'

import { useState } from 'react'
import { Button } from './ui/Button'

interface FormData {
  name: string
  phone: string
  type: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    type: 'consultation',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log(formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section className="py-24" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">
              Оставить заявку
            </h2>
            <p className="mt-4 text-lg text-[var(--muted-foreground)]">
              Получите бесплатную консультацию или вызовите замерщика
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--foreground)] mb-2"
                >
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                  required
                />
              </div>
              <div>
                <label 
                  htmlFor="phone"
                  className="block text-sm font-medium text-[var(--foreground)] mb-2"
                >
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                  required
                />
              </div>
            </div>

            <div>
              <label 
                htmlFor="type"
                className="block text-sm font-medium text-[var(--foreground)] mb-2"
              >
                Тип услуги
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
              >
                <option value="consultation">Консультация</option>
                <option value="measurement">Вызов замерщика</option>
                <option value="design">Дизайн-проект</option>
                <option value="repair">Ремонт под ключ</option>
              </select>
            </div>

            <div>
              <label 
                htmlFor="message"
                className="block text-sm font-medium text-[var(--foreground)] mb-2"
              >
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
              ></textarea>
            </div>

            <div className="text-center">
              <Button type="submit" size="lg">
                Отправить заявку
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}