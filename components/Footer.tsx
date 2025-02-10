import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Компания */}
          <div>
            <h3 className="text-xl font-bold mb-4">О компании</h3>
            <p className="text-slate-300 mb-4">
              Профессиональный ремонт квартир в Краснодаре и Геленджике. Качество, надежность и индивидуальный подход к каждому клиенту.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-300 hover:text-white transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-slate-300 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-xl font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li className="text-slate-300">Капитальный ремонт</li>
              <li className="text-slate-300">Косметический ремонт</li>
              <li className="text-slate-300">Дизайнерский ремонт</li>
              <li className="text-slate-300">Ремонт коммерческих помещений</li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-slate-300" />
                <a href="tel:+79001234567" className="text-slate-300 hover:text-white transition-colors">
                  +7 (900) 123-45-67
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-slate-300" />
                <a href="mailto:info@comfortstroy.pro" className="text-slate-300 hover:text-white transition-colors">
                  info@comfortstroy.pro
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-slate-300" />
                <span className="text-slate-300">
                  Краснодар, Геленджик
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Комфорт Строй Про. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer