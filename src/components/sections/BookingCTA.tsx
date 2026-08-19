"use client";

import { motion } from "framer-motion";
import { Flower2, Calendar, User, Phone, Send, MessageCircle, ExternalLink } from "lucide-react";

interface BookingCTAProps {
  onOpenBooking: (serviceId?: string, masterId?: string) => void;
}

export function BookingCTA({ onOpenBooking }: BookingCTAProps) {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-cream-100 to-cream-200">
      {/* Soft Radial Pink Aura Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,198,214,0.45)_0,rgba(255,245,243,0.2)_60%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-[2.5rem] bg-white/90 backdrop-blur-xl border-2 border-florida-powder/70 p-8 sm:p-12 lg:p-16 shadow-xl text-center space-y-8 overflow-hidden">
          {/* Subtle floral watermark */}
          <div className="absolute -top-12 -right-12 text-[180px] text-florida-powder/20 select-none pointer-events-none font-serif">
            🌸
          </div>
          <div className="absolute -bottom-12 -left-12 text-[180px] text-florida-powder/20 select-none pointer-events-none font-serif">
            ❀
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-50 border border-florida-rose/30 text-florida-darkRose text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Flower2 className="w-3.5 h-3.5 text-florida-deep" />
            <span>Время цвести</span>
          </div>

          {/* Main Title */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy tracking-tight">
              Запишитесь на ритуал красоты в салон «Флорида»
            </h2>
            <p className="text-sm sm:text-base text-burgundy-muted leading-relaxed">
              Выберите удобный формат: онлайн через сервис Dikidi, звонок администратору или сообщение в мессенджере. Мы всегда рады подобрать для вас идеальное время!
            </p>
          </div>

          {/* Action Choice Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2 relative z-20">
            <button
              onClick={() => onOpenBooking()}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-florida-rose via-florida-deep to-florida-darkRose text-white font-serif text-lg font-semibold tracking-wide shadow-soft-pink hover:shadow-glow-pink hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Выбрать услугу</span>
            </button>

            <a
              href="#masters"
              className="w-full py-4 px-6 rounded-2xl bg-white hover:bg-rose-50 text-burgundy border-2 border-florida-rose/50 font-serif text-lg font-semibold tracking-wide hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <User className="w-5 h-5 text-florida-deep" />
              <span>Выбрать мастера</span>
            </a>
          </div>

          {/* Dikidi & Instant Messengers */}
          <div className="pt-6 border-t border-rose-100/80 flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href="https://dikidi.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-rose-200 text-burgundy font-medium hover:bg-rose-50 transition-colors shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Запись через Dikidi Online</span>
              <ExternalLink className="w-3.5 h-3.5 text-florida-deep" />
            </a>

            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#229ED9]/10 text-[#229ED9] font-medium hover:bg-[#229ED9]/20 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram-бот / чат</span>
            </a>

            <a
              href="https://wa.me/79000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366]/10 text-[#25D366] font-medium hover:bg-[#25D366]/20 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp онлайн</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
