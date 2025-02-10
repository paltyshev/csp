'use client'

import { Phone, PhoneCall, MessageCircle, Send } from 'lucide-react'
import { Button } from './Button'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null

  const handleCallBack = () => {
    // Здесь можно добавить логику для обработки обратного звонка
    console.log('Обратный звонок')
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/79897602629', '_blank')
  }

  const handleTelegram = () => {
    window.open('https://t.me/+79897602629', '_blank')
  }

  const handlePhone = () => {
    window.location.href = 'tel:+79897602629'
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center" onClick={onClose}>
      <div className="bg-[var(--background)] rounded-lg p-6 max-w-sm w-full mx-4" onClick={e => e.stopPropagation()}>
        <h2 className="text-xl font-bold mb-4 text-center">Выберите способ связи</h2>
        <div className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full justify-start gap-3" 
            onClick={handleCallBack}
          >
            <PhoneCall className="h-5 w-5" />
            Обратный звонок
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start gap-3" 
            onClick={handleWhatsApp}
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start gap-3" 
            onClick={handleTelegram}
          >
            <Send className="h-5 w-5" />
            Telegram
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start gap-3" 
            onClick={handlePhone}
          >
            <Phone className="h-5 w-5" />
            Позвонить
          </Button>
        </div>
      </div>
    </div>
  )
}