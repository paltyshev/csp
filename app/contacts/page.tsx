'use client'

import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Header from '@/components/ui/Header'

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Form data:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
              Готовы обсудить ваш проект? Оставьте заявку или свяжитесь с нами любым удобным способом.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[var(--primary)]" />
                <div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">Телефон</h3>
                  <p className="text-[var(--muted-foreground)]">
                    <a href="tel:+79001234567" className="hover:text-[var(--primary)]">
                      +7 900 123-45-67
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[var(--primary)]" />
                <div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">Email</h3>
                  <p className="text-[var(--muted-foreground)]">
                    <a href="mailto:info@comfortstroy.pro" className="hover:text-[var(--primary)]">
                      info@comfortstroy.pro
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[var(--primary)]" />
                <div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">Адрес</h3>
                  <p className="text-[var(--muted-foreground)]">
                    г. Краснодар, ул. Примерная, д. 123
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-[var(--primary)]" />
                <div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">Режим работы</h3>
                  <p className="text-[var(--muted-foreground)]">
                    Пн-Пт: 9:00 - 20:00<br />
                    Сб: 10:00 - 18:00<br />
                    Вс: выходной
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--background)] border border-[var(--border)] rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">
                Оставить заявку
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[var(--border)] rounded-md bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[var(--border)] rounded-md bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="+7 (999) 999-99-99"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[var(--border)] rounded-md bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="example@mail.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-[var(--border)] rounded-md bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    placeholder="Опишите ваш проект..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-[var(--primary-foreground)] bg-[var(--primary)] hover:opacity-90 transition-colors"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
