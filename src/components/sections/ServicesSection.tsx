"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Scissors, Eye, Palette, Car, Gem } from "lucide-react";
import { SERVICE_CATEGORIES, ServiceCategory, ServiceItem } from "@/data/services";

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("nails");
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  const activeCategory =
    SERVICE_CATEGORIES.find((cat) => cat.id === activeCategoryId) || SERVICE_CATEGORIES[0];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Gem":
        return <Gem className="w-4 h-4" />;
      case "Eye":
        return <Eye className="w-4 h-4" />;
      case "Palette":
        return <Palette className="w-4 h-4" />;
      case "Scissors":
        return <Scissors className="w-4 h-4" />;
      case "Car":
        return <Car className="w-4 h-4" />;
      default:
        return <Gem className="w-4 h-4" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-cream-50 relative overflow-hidden">
      {/* Decorative floral background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-florida-powder/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-florida-soft/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-florida-powder text-florida-darkRose text-xs font-semibold uppercase tracking-wider shadow-sm">
            <span className="text-sm">🌸</span>
            <span>Услуги и актуальный прайс</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy tracking-tight">
            Каталог ритуалов красоты
          </h2>

          <p className="text-sm sm:text-base text-burgundy-muted leading-relaxed">
            Мы объединили самые востребованные направления эстетики. Все процедуры проводятся
            на сертифицированных материалах люкс-сегмента с соблюдением стандартов СанПиН.
          </p>
        </div>

        {/* Animated Underline Tabs (Aceternity / Framer Motion Tabs) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl sm:rounded-full bg-white/90 backdrop-blur-md border border-rose-200/90 shadow-sm flex-wrap justify-center gap-1">
            {SERVICE_CATEGORIES.map((cat) => {
              const isActive = activeCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`relative px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-2 z-10 cursor-pointer ${
                    isActive ? "text-white font-semibold" : "text-burgundy-muted hover:text-burgundy"
                  }`}
                >
                  {getCategoryIcon(cat.iconName)}
                  <span>{cat.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-gradient-to-r from-florida-rose via-florida-deep to-florida-darkRose rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Description Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-florida-powder/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-rose-100/70 text-florida-darkRose flex items-center justify-center shrink-0">
              {getCategoryIcon(activeCategory.iconName)}
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-burgundy">
                {activeCategory.name}
              </h3>
              <p className="text-xs sm:text-sm text-burgundy-muted">
                {activeCategory.description}
              </p>
            </div>
          </div>

          <div className="text-xs text-florida-darkRose font-medium shrink-0 bg-florida-powder/20 px-3 py-1.5 rounded-full border border-florida-powder/40">
            {activeCategory.services.length} доступных ритуалов
          </div>
        </div>

        {/* Services Cards Grid (Guaranteed 100% Reliable Render) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategory.services.map((service: ServiceItem) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredServiceId(service.id)}
              onMouseLeave={() => setHoveredServiceId(null)}
              className={`relative rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between bg-white border ${
                hoveredServiceId === service.id
                  ? "border-florida-rose shadow-card-hover scale-[1.01]"
                  : "border-rose-100 shadow-card-subtle"
              }`}
            >
              {/* Popular / New Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex flex-wrap gap-1.5">
                  {service.isPopular && (
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-florida-darkRose text-[10px] font-bold uppercase tracking-wider border border-rose-200">
                      Популярно
                    </span>
                  )}
                  {service.isNew && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider border border-emerald-200">
                      Новинка
                    </span>
                  )}
                  {service.tags?.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-full bg-cream-100 text-burgundy-muted text-[10px] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-xs text-burgundy-muted shrink-0">
                  <Clock className="w-3.5 h-3.5 text-florida-deep" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Service Name & Description */}
              <div className="space-y-2 mb-6">
                <h4 className="font-serif text-xl font-bold text-burgundy leading-snug group-hover:text-florida-darkRose transition-colors">
                  {service.name}
                </h4>
                <p className="text-xs sm:text-sm text-burgundy-muted leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Price and CTA Row */}
              <div className="pt-4 border-t border-rose-100 flex items-center justify-between gap-3 mt-auto relative z-20">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-burgundy-muted block">
                    Стоимость
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-burgundy">
                    {service.price}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(service.id)}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-florida-rose to-florida-deep text-white text-xs font-semibold shadow-sm hover:shadow-soft-pink hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Записаться</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote about pricing */}
        <div className="mt-12 text-center text-xs text-burgundy-muted max-w-xl mx-auto bg-white/60 p-4 rounded-2xl border border-rose-100">
          <p>
            * Точная стоимость может варьироваться в зависимости от длины волос, категории мастера и
            сложности авторского дизайна. Подробности уточняйте у администратора.
          </p>
        </div>
      </div>
    </section>
  );
}
