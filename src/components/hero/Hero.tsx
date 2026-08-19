"use client";

import { motion } from "framer-motion";
import { CalendarHeart, Star, ArrowRight, ShieldCheck, Heart, Zap } from "lucide-react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { BloomingFlowerSvg } from "./BloomingFlowerSvg";
import { PetalSparkles } from "./PetalSparkles";

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-white">
      {/* Floating Canvas Petals */}
      <PetalSparkles count={35} />

      {/* Decorative Botanical Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-florida-powder/40 via-florida-soft/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-florida-powder/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Top Badge: Rating & Concept */}
            <div className="inline-block">
              <AnimatedGradientText>
                <div className="flex items-center gap-2 text-xs font-semibold text-burgundy">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                  <span className="text-burgundy-muted font-normal">|</span>
                  <span className="tracking-wide">5.0 · 500+ отзывов в 2ГИС & Яндекс</span>
                  <span className="inline-block animate-pulse text-florida-deep">🌸</span>
                </div>
              </AnimatedGradientText>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-florida-darkRose font-bold">
                <span className="h-px w-6 bg-florida-rose inline-block" />
                <span>Салон красоты «Флорида» · Иркутск</span>
                <span className="h-px w-6 bg-florida-rose inline-block" />
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight text-burgundy leading-[1.12]">
                Пространство, где{" "}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-florida-rose via-florida-deep to-florida-darkRose italic">
                  хочется цвести
                  <svg
                    className="absolute -bottom-2 inset-x-0 w-full h-3 text-florida-soft/60 -z-10"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9C50 2 150 2 198 9"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-burgundy-muted max-w-2xl leading-relaxed font-sans pt-2">
                «Флорида» означает «цветущая». Мы создали салон премиум-класса с заботой
                о вашей естественной привлекательности: инновационное LED-наращивание
                ресниц, ювелирный SMART-педикюр, архитектура бровей и чувственные образы.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 relative z-20">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-florida-rose via-florida-deep to-florida-darkRose text-white font-serif text-lg font-semibold tracking-wide shadow-soft-pink hover:shadow-glow-pink transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <CalendarHeart className="w-5 h-5 text-white/90 group-hover:rotate-6 transition-transform" />
                <span>Записаться на визит</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <a
                href="#services"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/90 hover:bg-white text-burgundy border border-rose-200 hover:border-florida-rose text-sm font-medium transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Выбрать услугу и прайс</span>
              </a>
            </div>

            {/* Key Quality Guarantees Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-rose-200/60">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/60 backdrop-blur-sm border border-rose-100/80">
                <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-florida-deep shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-burgundy">100% СанПиН</p>
                  <p className="text-[11px] text-burgundy-muted">Крафт-пакет при вас</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/60 backdrop-blur-sm border border-rose-100/80">
                <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-florida-deep shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-burgundy">LED-технология</p>
                  <p className="text-[11px] text-burgundy-muted">Ресницы до 8 недель</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/60 backdrop-blur-sm border border-rose-100/80 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-florida-deep shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-burgundy">Сервис & Уют</p>
                  <p className="text-[11px] text-burgundy-muted">Кофе, чай & Prosecco</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Blooming Flower Botanical Centerpiece */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full flex items-center justify-center">
              {/* Botanical Frame & Blooming Center */}
              <BloomingFlowerSvg />

              {/* Floating Botanical Micro-badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 right-4 sm:right-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-florida-powder flex items-center gap-2 text-xs font-medium text-burgundy z-20"
              >
                <span className="text-base">🌸</span>
                <div>
                  <div className="font-bold text-[11px] text-florida-darkRose uppercase">Floridēre</div>
                  <div>«Цвести и сиять»</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 left-4 sm:left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-florida-powder flex items-center gap-2 text-xs font-medium text-burgundy z-20"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">
                  ✓
                </div>
                <div>
                  <div className="font-bold text-[11px] text-burgundy">Мастера-эксперты</div>
                  <div className="text-[10px] text-burgundy-muted">Опыт от 4 до 7+ лет</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
