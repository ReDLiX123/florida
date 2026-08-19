"use client";

import Image from "next/image";
import { Coffee, CheckCircle } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

export function SalonAtmosphere() {
  const stats = [
    { value: "5.0", label: "Рейтинг в 2ГИС и Яндекс", desc: "Более 500+ реальных оценок" },
    { value: "100%", label: "Стерильность СанПиН", desc: "Крафт-пакет вскрывается при вас" },
    { value: "09:00–20:00", label: "Ежедневно", desc: "Индивидуальный график по предзаписи" },
    { value: "7+ лет", label: "Опыт топ-мастеров", desc: "Регулярное повышение квалификации" },
  ];

  const interiorImages = [
    { src: "/media/salon1.jpg", caption: "Уютные зоны отдыха и ожидания с авторским чаем" },
    { src: "/media/salon2.jpg", caption: "Эргономичные кресла и премиальное освещение" },
    { src: "/media/salon3.jpg", caption: "Зона ногтевого сервиса и SMART-педикюра" },
    { src: "/media/salon4.jpg", caption: "Кабинет LED-наращивания и ламинирования ресниц" },
  ];

  const features = [
    {
      title: "Индивидуальный подход",
      text: "Мы не работаем по шаблону. Форма бровей, изгиб ресниц и оттенок покрытия подбираются под ваш цветотип, форму лица и стиль жизни.",
    },
    {
      title: "Медицинская стерилизация",
      text: "3-этапная дезинфекция и сухожаровой шкаф ГП-10. Все расходники (пилочки, бафы, простыни) — строго одноразовые.",
    },
    {
      title: "Премиальная косметика",
      text: "Используем люксовые европейские и японские бренды (Luxio, Uno, Masura, Bronsun, Lycon, Charlotte Tilbury, Dior).",
    },
    {
      title: "Атмосфера релакса и заботы",
      text: "Вкуснейший свежесваренный капучино, травяной сбор, бокал игристого Prosecco, мягкие пледы и приятная музыка.",
    },
  ];

  return (
    <section id="atmosphere" className="py-24 bg-cream-100/60 relative overflow-hidden content-auto">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-florida-powder/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-florida-powder text-florida-darkRose text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Coffee className="w-3.5 h-3.5 text-florida-deep" />
            <span>О салоне & Атмосфера</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy tracking-tight">
            Оазис гармонии и бережной заботы
          </h2>

          <p className="text-sm sm:text-base text-burgundy-muted leading-relaxed">
            «Флорида» — это не просто салон красоты, а место вашей перезагрузки. Мы позаботились
            о том, чтобы время, проведённое у нас, приносило вам удовольствие, комфорт и уверенность в себе.
          </p>
        </div>

        {/* Big Numbers & Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 border border-rose-100/90 shadow-card-subtle text-center flex flex-col justify-center items-center group hover:border-florida-rose/50 transition-colors"
            >
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy tracking-tight group-hover:text-florida-darkRose transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-burgundy mt-2">
                {stat.label}
              </div>
              <div className="text-[11px] text-burgundy-muted mt-0.5">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Interior Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {interiorImages.map((img, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-white shadow-md bg-cream-200"
            >
              <Image
                src={getAssetPath(img.src)}
                alt={img.caption}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/75 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex items-end p-4">
                <p className="text-white text-xs font-medium leading-snug">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-rose-100 shadow-card-subtle flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-florida-darkRose shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-burgundy">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm text-burgundy-muted leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
