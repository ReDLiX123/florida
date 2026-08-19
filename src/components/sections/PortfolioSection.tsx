"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Calendar,
  Eye,
  Gem,
  Scissors,
  PenTool,
  Palette,
  CheckCircle2,
} from "lucide-react";
import { getAssetPath } from "@/lib/utils";

export interface PortfolioItem {
  id: string;
  image: string;
  caption: string;
  category: "lashes-brows" | "nails" | "hair-makeup" | "permanent";
  categoryLabel: string;
  masterName: string;
  masterRole: string;
  masterAvatar: string;
  masterId: string;
}

function getPortfolioCategoryIcon(
  category: string,
  className: string = "w-3 h-3 text-florida-darkRose"
) {
  switch (category) {
    case "lashes-brows":
      return <Eye className={className} />;
    case "nails":
      return <Gem className={className} />;
    case "hair-makeup":
      return <Scissors className={className} />;
    case "permanent":
      return <PenTool className={className} />;
    default:
      return <Camera className={className} />;
  }
}

const portfolioGallery: PortfolioItem[] = [
  {
    id: "p-1",
    image: "/media/arina-master/before-after/1e8bsj9t76.jpg",
    caption: "Текстурные локоны и прикорневой объем",
    category: "hair-makeup",
    categoryLabel: "Прически & Укладки",
    masterName: "Арина",
    masterRole: "Топ-стилист по волосам",
    masterAvatar: "/media/arina-master/5esuffkgno.jpg",
    masterId: "arina",
  },
  {
    id: "p-2",
    image: "/media/veronika-master/examples/1erpm43t25.jpg",
    caption: "LED-наращивание 2D с эффектом стрелки",
    category: "lashes-brows",
    categoryLabel: "LED-ресницы",
    masterName: "Вероника",
    masterRole: "Топ-мастер LED-наращивания",
    masterAvatar: "/media/veronika-master/1mv5fp2eci.jpg",
    masterId: "veronika",
  },
  {
    id: "p-3",
    image: "/media/aisel-master/examples/105v8gtsqo.jpg",
    caption: "Нюдовый глянец с изящным микрофренчем",
    category: "nails",
    categoryLabel: "Маникюр & Дизайн",
    masterName: "Айсель",
    masterRole: "Мастер ногтевого сервиса",
    masterAvatar: "/media/aisel-master/3h0qgvj00i.jpg",
    masterId: "aisel",
  },
  {
    id: "p-4",
    image: "/media/regina/before-after/4avadhjvmh.jpg",
    caption: "Акварельная растушевка губ в оттенке Nude Rose",
    category: "permanent",
    categoryLabel: "Перманентный макияж",
    masterName: "Регина",
    masterRole: "Мастер перманентного макияжа",
    masterAvatar: "/media/regina/regina-master.jpg",
    masterId: "regina",
  },
  {
    id: "p-5",
    image: "/media/evgenia-master/examples/2lefm5nrk7.jpg",
    caption: "Свадебный Nude макияж с сиянием кожи",
    category: "hair-makeup",
    categoryLabel: "Визаж & Макияж",
    masterName: "Евгения",
    masterRole: "Pro-визажист & Стилист",
    masterAvatar: "/media/evgenia-master/22aevs7ild.jpg",
    masterId: "evgenia",
  },
  {
    id: "p-6",
    image: "/media/victoria-master/before-after/32ssb2i0ls.jpg",
    caption: "Моделирование взгляда: Мокрый эффект с лучиками",
    category: "lashes-brows",
    categoryLabel: "Lash-стилистика",
    masterName: "Виктория",
    masterRole: "Lash-стилист эксперт",
    masterAvatar: "/media/victoria-master/7h7brsrvo2.jpg",
    masterId: "victoria",
  },
  {
    id: "p-7",
    image: "/media/valeria2-master/examples/37p4p3kpcd.jpg",
    caption: "Моделирование формы четкий квадрат",
    category: "nails",
    categoryLabel: "Моделирование ногтей",
    masterName: "Валерия",
    masterRole: "Мастер ногтевой эстетики",
    masterAvatar: "/media/valeria2-master/85m37ipt08.jpg",
    masterId: "valeria-nails",
  },
  {
    id: "p-8",
    image: "/media/regina/before-after/1t8kmb5qbf.jpg",
    caption: "Пудровое напыление бровей в мягкой теневой технике",
    category: "permanent",
    categoryLabel: "Перманент бровей",
    masterName: "Регина",
    masterRole: "Мастер перманентного макияжа",
    masterAvatar: "/media/regina/regina-master.jpg",
    masterId: "regina",
  },
  {
    id: "p-9",
    image: "/media/anastasia-master/examples/3rqmtocfa1.jpg",
    caption: "Долговременная укладка бровей и тонирование",
    category: "lashes-brows",
    categoryLabel: "Архитектура бровей",
    masterName: "Анастасия",
    masterRole: "Brow & Lash архитектор",
    masterAvatar: "/media/anastasia-master/62cmkgk2kr.jpg",
    masterId: "anastasia",
  },
  {
    id: "p-10",
    image: "/media/ekaterina-master/examples/3ut91tch62.jpg",
    caption: "Японский эко-глянец и оздоровление ногтей",
    category: "nails",
    categoryLabel: "Эко-маникюр",
    masterName: "Екатерина",
    masterRole: "Мастер подологии и эстетики",
    masterAvatar: "/media/ekaterina-master/6ods0e7t55.jpg",
    masterId: "ekaterina",
  },
  {
    id: "p-11",
    image: "/media/arina-master/before-after/2orjnlhj74.jpg",
    caption: "Свадебный воздушный текстурный пучок",
    category: "hair-makeup",
    categoryLabel: "Свадебные прически",
    masterName: "Арина",
    masterRole: "Свадебный стилист",
    masterAvatar: "/media/arina-master/5esuffkgno.jpg",
    masterId: "arina",
  },
  {
    id: "p-12",
    image: "/media/valeria-master/examples/2j5or9fshd.jpg",
    caption: "Высокий текстурный вечерний хвост",
    category: "hair-makeup",
    categoryLabel: "Вечерние прически",
    masterName: "Валерия",
    masterRole: "Стилист по укладкам",
    masterAvatar: "/media/valeria-master/3c7fq2d71d.jpg",
    masterId: "valeria",
  },
];

interface PortfolioSectionProps {
  onBookWithMaster: (masterId: string) => void;
}

export function PortfolioSection({ onBookWithMaster }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filterTabs = [
    { label: "Все работы", value: "all", count: portfolioGallery.length },
    {
      label: "Ресницы & Брови",
      value: "lashes-brows",
      count: portfolioGallery.filter((i) => i.category === "lashes-brows").length,
    },
    {
      label: "Ногтевой сервис",
      value: "nails",
      count: portfolioGallery.filter((i) => i.category === "nails").length,
    },
    {
      label: "Макияж & Прически",
      value: "hair-makeup",
      count: portfolioGallery.filter((i) => i.category === "hair-makeup").length,
    },
    {
      label: "Перманентный макияж",
      value: "permanent",
      count: portfolioGallery.filter((i) => i.category === "permanent").length,
    },
  ];

  const filteredItems = portfolioGallery.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  // Track mobile snap scroll position to update pagination dots
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.offsetWidth * 0.85;
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (
      newIndex >= 0 &&
      newIndex < filteredItems.length &&
      newIndex !== activeSlideIndex
    ) {
      setActiveSlideIndex(newIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const itemWidth = container.offsetWidth * 0.85;
    container.scrollTo({
      left: index * itemWidth,
      behavior: "smooth",
    });
    setActiveSlideIndex(index);
  };

  const scrollPrev = () => {
    if (activeSlideIndex > 0) {
      scrollToSlide(activeSlideIndex - 1);
    }
  };

  const scrollNext = () => {
    if (activeSlideIndex < filteredItems.length - 1) {
      scrollToSlide(activeSlideIndex + 1);
    }
  };

  // Reset slide index when filter changes
  useEffect(() => {
    setActiveSlideIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeFilter]);

  // Lightbox navigation
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };

  const nextLightboxPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevLightboxPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
    );
  };

  const currentLightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="portfolio" className="py-24 sm:py-28 bg-cream-50/50 relative overflow-hidden">
      {/* Background floral accents */}
      <div className="absolute top-1/3 right-1/4 w-[750px] h-[750px] bg-gradient-to-b from-rose-100/40 via-cream-100/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-100 border border-florida-powder/80 text-florida-darkRose text-xs font-semibold uppercase tracking-widest shadow-2xs">
            <Camera className="w-3.5 h-3.5 text-florida-deep" />
            <span>Галерея вдохновения</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy tracking-tight leading-[1.15]">
            Эстетика авторских работ
          </h2>

          <p className="text-sm sm:text-base text-burgundy-muted leading-relaxed max-w-2xl mx-auto">
            Оцените безупречное качество исполнения: от бархатных изгибов ресниц и чистоты кутикулы до стойких свадебных образов.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 pt-4">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveFilter(tab.value)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-burgundy text-white shadow-md shadow-burgundy/15 ring-2 ring-florida-powder/60 scale-[1.02]"
                      : "bg-white text-burgundy-muted hover:text-burgundy hover:bg-rose-50/80 border border-rose-200/70"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-rose-100/80 text-burgundy-soft"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: Horizontal Snap Carousel (< 768px)                         */}
        {/* ========================================================================= */}
        <div className="block md:hidden">
          {/* Controls Bar: Hint & Arrows */}
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs font-medium text-burgundy-muted/80 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-florida-deep animate-pulse" />
              Листайте работы ({activeSlideIndex + 1} из {filteredItems.length})
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                disabled={activeSlideIndex === 0}
                className="w-8 h-8 rounded-full bg-white border border-rose-200 shadow-sm flex items-center justify-center text-burgundy disabled:opacity-30 disabled:cursor-not-allowed hover:bg-rose-50 active:scale-95 transition-all"
                aria-label="Предыдущая работа"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                disabled={activeSlideIndex >= filteredItems.length - 1}
                className="w-8 h-8 rounded-full bg-white border border-rose-200 shadow-sm flex items-center justify-center text-burgundy disabled:opacity-30 disabled:cursor-not-allowed hover:bg-rose-50 active:scale-95 transition-all"
                aria-label="Следующая работа"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Swipe Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 pt-1 -mx-4 px-4 scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="w-[84vw] max-w-[340px] shrink-0 snap-center"
              >
                <PortfolioLookbookCard
                  item={item}
                  onOpenLightbox={() => openLightbox(idx)}
                  onBookWithMaster={() => onBookWithMaster(item.masterId)}
                />
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          {filteredItems.length > 1 && (
            <div className="flex items-center justify-center gap-1.5 pt-2">
              {filteredItems.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlideIndex === idx
                      ? "w-6 bg-florida-darkRose"
                      : "w-1.5 bg-rose-200 hover:bg-rose-300"
                  }`}
                  aria-label={`Перейти к работе ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP & TABLET VIEW: Responsive Lookbook Grid (>= 768px)                */}
        {/* ========================================================================= */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
              >
                <PortfolioLookbookCard
                  item={item}
                  onOpenLightbox={() => openLightbox(idx)}
                  onBookWithMaster={() => onBookWithMaster(item.masterId)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* LIGHTBOX MODAL: High-Res Photo View                                       */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {currentLightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto overscroll-contain">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-burgundy-dark/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl bg-cream-50 rounded-3xl shadow-2xl border border-rose-200/80 overflow-hidden z-10 my-auto flex flex-col md:flex-row max-h-[calc(100dvh-1.5rem)] sm:max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-burgundy shadow-md transition-all cursor-pointer"
                aria-label="Закрыть просмотр"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo View Container */}
              <div className="relative w-full md:w-[54%] h-[min(52dvh,430px)] md:h-auto md:min-h-[460px] bg-burgundy-dark flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src={getAssetPath(currentLightboxItem.image)}
                  alt={currentLightboxItem.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 54vw"
                  className="object-cover"
                />

                {/* Left/Right Arrows inside Lightbox */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        prevLightboxPhoto();
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all cursor-pointer z-20"
                      aria-label="Предыдущее фото"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextLightboxPhoto();
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all cursor-pointer z-20"
                      aria-label="Следующее фото"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Lightbox Information Sidebar */}
              <div className="w-full md:w-[46%] p-5 sm:p-7 flex flex-col justify-between bg-white overflow-y-auto">
                <div className="space-y-3.5">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-100 text-burgundy text-xs font-semibold border border-rose-200">
                    {getPortfolioCategoryIcon(currentLightboxItem.category, "w-3.5 h-3.5 text-florida-deep")}
                    <span>{currentLightboxItem.categoryLabel}</span>
                  </div>

                  {/* Caption */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-burgundy leading-snug">
                    {currentLightboxItem.caption}
                  </h3>

                  {/* Author Card */}
                  <div className="pt-3.5 border-t border-rose-100 flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-florida-rose shrink-0 shadow-sm">
                      <Image
                        src={getAssetPath(currentLightboxItem.masterAvatar)}
                        alt={currentLightboxItem.masterName}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-burgundy">
                        {currentLightboxItem.masterName}
                      </div>
                      <div className="text-xs text-burgundy-muted">
                        {currentLightboxItem.masterRole}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-4 border-t border-rose-100 mt-4 space-y-2.5">
                  <p className="text-xs text-burgundy-muted leading-relaxed">
                    Хотите такой же образ? Запишитесь к автору работы:
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      closeLightbox();
                      onBookWithMaster(currentLightboxItem.masterId);
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-florida-rose via-florida-deep to-florida-darkRose text-white text-xs font-semibold tracking-wide shadow-soft-pink hover:shadow-glow-pink hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>Записаться к мастеру ({currentLightboxItem.masterName.split(" ")[0]})</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Lookbook Portfolio Card Component
// ---------------------------------------------------------------------------
interface PortfolioLookbookCardProps {
  item: PortfolioItem;
  onOpenLightbox: () => void;
  onBookWithMaster: () => void;
}

function PortfolioLookbookCard({
  item,
  onOpenLightbox,
  onBookWithMaster,
}: PortfolioLookbookCardProps) {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-rose-200/80 shadow-card-subtle hover:shadow-card-hover hover:border-florida-rose transition-all duration-500 flex flex-col justify-between h-full">
      {/* Soft glow on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-florida-powder/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

      {/* Main Image Area with Overlay */}
      <div
        onClick={onOpenLightbox}
        className="relative aspect-[4/5] w-full overflow-hidden bg-cream-100 cursor-pointer"
      >
        <Image
          src={getAssetPath(item.image)}
          alt={item.caption}
          fill
          sizes="(max-width: 768px) 84vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Multi-stop gradient shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/95 via-burgundy-dark/35 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

        {/* Top Floating Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
          <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-burgundy shadow-sm border border-white/60 flex items-center gap-1">
            {getPortfolioCategoryIcon(item.category, "w-3 h-3 text-florida-darkRose")}
            <span>{item.categoryLabel}</span>
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenLightbox();
            }}
            className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-burgundy shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:scale-110"
            aria-label="Увеличить фото"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Over-Photo Text Info */}
        <div className="absolute bottom-3 inset-x-4 z-10 text-white space-y-1.5">
          <h4 className="font-serif text-base sm:text-lg font-bold leading-snug text-white drop-shadow-sm group-hover:text-rose-100 transition-colors line-clamp-2">
            {item.caption}
          </h4>

          {/* Master Signature */}
          <div className="flex items-center gap-2 pt-1">
            <div className="relative w-5 h-5 rounded-full overflow-hidden border border-florida-powder shrink-0">
              <Image
                src={getAssetPath(item.masterAvatar)}
                alt={item.masterName}
                fill
                sizes="20px"
                className="object-cover"
              />
            </div>
            <span className="text-[11px] font-medium text-florida-powder tracking-wide">
              Мастер: {item.masterName}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Action Button */}
      <div className="p-3 bg-white border-t border-rose-100/60">
        <button
          type="button"
          onClick={onBookWithMaster}
          className="w-full py-2.5 rounded-xl bg-cream-50 hover:bg-gradient-to-r hover:from-florida-rose hover:to-florida-deep text-burgundy hover:text-white border border-rose-200 hover:border-transparent text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs group/btn"
        >
          <span>Хочу такой результат</span>
          <ArrowRight className="w-3.5 h-3.5 text-florida-deep group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
        </button>
      </div>
    </div>
  );
}
