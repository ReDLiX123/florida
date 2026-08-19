"use client";

import { Marquee } from "@/components/ui/marquee";

const marqueeItems1 = [
  "Маникюр с гель-лаком",
  "LED-наращивание ресниц",
  "SMART-педикюр",
  "Архитектура и окрашивание бровей",
  "Свадебные прически",
  "Дневной и вечерний визаж",
  "Японский эко-маникюр",
  "Ламинирование ресниц с Botox",
  "Выезд мастеров на дом и отели",
];

const marqueeItems2 = [
  "Стерильность 100% (СанПиН)",
  "Косметика Lux (Dior, Tom Ford)",
  "Крафт-пакеты открываются при вас",
  "LED-полимеризация за 1 секунду",
  "Более 500+ довольных отзывов",
  "Иркутск, ул. Байкальская 124/1",
  "Удобная парковка у входа",
  "Чай, свежий кофе и Prosecco",
];

export function ServicesMarquee() {
  return (
    <div className="relative py-5 sm:py-6 bg-gradient-to-r from-cream-100 via-rose-50 to-cream-100 border-y border-rose-200/70 overflow-hidden shadow-inner select-none">
      {/* Left Delicate Pink Cloud & Smoky Glow Overlay */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-32 z-20 pointer-events-none flex items-center">
        {/* Soft edge gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream-100 via-rose-100/50 to-transparent" />

        {/* Ambient misty pink cloud puff */}
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-tr from-florida-powder/60 via-florida-rose/30 to-transparent blur-xl opacity-60 animate-pulse-glow" />

        {/* Floating delicate light mist */}
        <div className="absolute left-2 top-1/3 -translate-y-1/2 w-16 h-16 rounded-full bg-rose-200/40 blur-lg opacity-50 animate-float" />
      </div>

      {/* Right Delicate Pink Cloud & Smoky Glow Overlay */}
      <div className="absolute right-0 inset-y-0 w-16 sm:w-32 z-20 pointer-events-none flex items-center justify-end">
        {/* Soft edge gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-l from-cream-100 via-rose-100/50 to-transparent" />

        {/* Ambient misty pink cloud puff */}
        <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-tl from-florida-powder/60 via-florida-rose/30 to-transparent blur-xl opacity-60 animate-pulse-glow" />

        {/* Floating delicate light mist */}
        <div className="absolute right-2 bottom-1/3 translate-y-1/2 w-16 h-16 rounded-full bg-rose-200/40 blur-lg opacity-50 animate-float" />
      </div>

      {/* First Marquee: Core Services (Leftward) */}
      <Marquee pauseOnHover className="[--duration:34s] py-1">
        {marqueeItems1.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white/95 border border-florida-powder/60 text-xs sm:text-sm font-serif font-medium text-burgundy tracking-wide shadow-2xs hover:border-florida-rose transition-colors shrink-0"
          >
            <span className="text-florida-deep text-base shrink-0 leading-none">🌸</span>
            <span className="whitespace-nowrap">{item}</span>
          </div>
        ))}
      </Marquee>

      {/* Second Marquee: Quality Standards & Salon Perks (Rightward / Opposite Direction) */}
      <Marquee reverse pauseOnHover className="[--duration:40s] py-1 mt-2">
        {marqueeItems2.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-cream-50/95 border border-rose-200/80 text-xs sm:text-sm font-sans font-medium text-burgundy-muted tracking-wide shadow-2xs hover:text-burgundy transition-colors shrink-0"
          >
            <span className="text-gold text-xs shrink-0 leading-none">✦</span>
            <span className="whitespace-nowrap">{item}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
