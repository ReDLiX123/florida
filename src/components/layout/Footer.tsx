"use client";

import { MapPin, Phone, Clock, Send, MessageCircle, Heart, Navigation } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacts" className="bg-burgundy text-white pt-20 pb-12 relative overflow-hidden content-auto">
      {/* Decorative dark rose background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-florida-darkRose/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-florida-deep/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Salon Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-florida-rose/20 border border-florida-rose/40 flex items-center justify-center">
                <span className="text-florida-powder font-serif text-lg font-bold">❀</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  Флорида
                </span>
                <span className="text-[10px] uppercase font-sans tracking-widest text-florida-powder ml-2">
                  салон красоты
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-burgundy-light leading-relaxed">
              «Флорида» — пространство заботы и бережного отношения к вашей природной привлекательности в самом сердце Иркутска.
            </p>

            <div className="pt-2 text-xs text-florida-powder space-y-1 font-serif">
              <p>🌸 «Цвести и сиять каждый день»</p>
              <p>★ Рейтинг 5.0 в 2ГИС и Яндекс Картах</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-florida-powder font-bold">
              Навигация
            </h4>
            <ul className="space-y-2 text-xs text-burgundy-light">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Услуги и прайс
                </a>
              </li>
              <li>
                <a href="#masters" className="hover:text-white transition-colors">
                  Наши мастера
                </a>
              </li>
              <li>
                <a href="#atmosphere" className="hover:text-white transition-colors">
                  Интерьер и атмосфера
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  До / После (Портфолио)
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Отзывы клиентов
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts & Working Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-florida-powder font-bold">
              Контакты и режим
            </h4>
            <ul className="space-y-2.5 text-xs text-burgundy-light">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-florida-rose shrink-0 mt-0.5" />
                <span>г. Иркутск, ул. Байкальская 124/1, 2 этаж (ост. Баргузин / Трилиссера)</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-florida-rose shrink-0" />
                <span>Ежедневно: 09:00 – 20:00 (по записи)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-florida-rose shrink-0" />
                <a href="tel:+73952000000" className="hover:text-white transition-colors font-medium">
                  +7 (3952) 00-00-00
                </a>
              </li>
            </ul>

            {/* Social Media Pills */}
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href="https://vk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white transition-colors font-medium"
              >
                ВКонтакте
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-[#229ED9]/20 hover:bg-[#229ED9]/30 text-xs text-[#64c3f7] transition-colors font-medium flex items-center gap-1"
              >
                <Send className="w-3 h-3" />
                <span>Telegram-канал</span>
              </a>
              <a
                href="https://wa.me/79000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-xs text-[#52ea8c] transition-colors font-medium flex items-center gap-1"
              >
                <MessageCircle className="w-3 h-3" />
                <span>MAX / WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 4: Visual Map & Landmark Card */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs space-y-3 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">Как добраться:</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px]">
                  Парковка есть
                </span>
              </div>
              <p className="text-burgundy-light text-[11px] leading-relaxed">
                2 этаж над торговой галереей. Вход с торца здания. Рядом удобная парковка для гостей.
              </p>
              <div className="pt-1 flex gap-2">
                <a
                  href="https://yandex.ru/maps/?text=Иркутск, ул. Байкальская 124/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-xl bg-florida-deep/30 hover:bg-florida-deep/50 text-white text-center text-xs font-medium border border-florida-rose/30 transition-all flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Открыть в Яндекс Картах</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-burgundy-light">
          <div>
            © {new Date().getFullYear()} Салон красоты «Флорида» (Иркутск). Все права защищены.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>С заботой и любовью</span>
            <Heart className="w-3 h-3 text-florida-rose fill-florida-rose inline-block" />
            <span>в Иркутске</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
