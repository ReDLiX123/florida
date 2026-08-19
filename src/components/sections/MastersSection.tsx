"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Camera,
  Calendar,
  Award,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { MASTERS, Master } from "@/data/masters";
import { getAssetPath } from "@/lib/utils";

interface MastersSectionProps {
  onBookWithMaster: (masterId: string) => void;
  onViewPortfolio: (master: Master, initialPhotoIndex?: number) => void;
}

export function MastersSection({
  onBookWithMaster,
  onViewPortfolio,
}: MastersSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filterOptions = [
    { label: "Все мастера", value: "all", count: MASTERS.length },
    {
      label: "Ресницы & Брови",
      value: "lashes-brows",
      count: MASTERS.filter(
        (m) =>
          m.id === "veronika" ||
          m.id === "anastasia" ||
          m.id === "regina" ||
          m.id === "victoria"
      ).length,
    },
    {
      label: "Ногтевой сервис",
      value: "nails",
      count: MASTERS.filter(
        (m) =>
          m.id === "aisel" ||
          m.id === "ekaterina" ||
          m.id === "valeria-nails"
      ).length,
    },
    {
      label: "Стилисты & Визаж",
      value: "styling",
      count: MASTERS.filter(
        (m) =>
          m.id === "arina" || m.id === "evgenia" || m.id === "valeria"
      ).length,
    },
  ];

  const filteredMasters = MASTERS.filter((m) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "lashes-brows") {
      return (
        m.id === "veronika" ||
        m.id === "anastasia" ||
        m.id === "regina" ||
        m.id === "victoria"
      );
    }
    if (selectedFilter === "nails") {
      return (
        m.id === "aisel" ||
        m.id === "ekaterina" ||
        m.id === "valeria-nails"
      );
    }
    if (selectedFilter === "styling") {
      return (
        m.id === "arina" || m.id === "evgenia" || m.id === "valeria"
      );
    }
    return true;
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
      newIndex < filteredMasters.length &&
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
    if (activeSlideIndex < filteredMasters.length - 1) {
      scrollToSlide(activeSlideIndex + 1);
    }
  };

  // Reset slide index when filter changes
  useEffect(() => {
    setActiveSlideIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [selectedFilter]);

  return (
    <section
      id="masters"
      className="py-24 sm:py-28 bg-white relative overflow-hidden"
    >
      {/* Delicate background aura and floral sparkles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[850px] bg-gradient-to-b from-florida-powder/25 via-rose-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-100/90 border border-florida-powder/80 text-florida-darkRose text-xs font-semibold uppercase tracking-widest shadow-2xs">
            <Award className="w-3.5 h-3.5 text-florida-deep" />
            <span>Команда профессионалов</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy tracking-tight leading-[1.15]">
            Мастера, создающие ваше сияние
          </h2>

          <p className="text-sm sm:text-base text-burgundy-muted leading-relaxed max-w-2xl mx-auto">
            Каждый специалист салона «Флорида» — сертифицированный эксперт с
            авторским почерком, владеющий передовыми техниками и относящийся к
            красоте как к высокому искусству.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 pt-4">
            {filterOptions.map((opt) => {
              const isActive = selectedFilter === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setSelectedFilter(opt.value)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-burgundy text-white shadow-md shadow-burgundy/15 ring-2 ring-florida-powder/60 scale-[1.02]"
                      : "bg-cream-50/90 text-burgundy-muted hover:text-burgundy hover:bg-rose-50/80 border border-rose-200/70"
                  }`}
                >
                  <span>{opt.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-rose-100/80 text-burgundy-soft"
                    }`}
                  >
                    {opt.count}
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
              Листайте карточки ({activeSlideIndex + 1} из {filteredMasters.length})
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                disabled={activeSlideIndex === 0}
                className="w-8 h-8 rounded-full bg-white border border-rose-200 shadow-sm flex items-center justify-center text-burgundy disabled:opacity-30 disabled:cursor-not-allowed hover:bg-rose-50 active:scale-95 transition-all"
                aria-label="Предыдущий мастер"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                disabled={activeSlideIndex >= filteredMasters.length - 1}
                className="w-8 h-8 rounded-full bg-white border border-rose-200 shadow-sm flex items-center justify-center text-burgundy disabled:opacity-30 disabled:cursor-not-allowed hover:bg-rose-50 active:scale-95 transition-all"
                aria-label="Следующий мастер"
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
            {filteredMasters.map((master) => (
              <div
                key={master.id}
                className="w-[84vw] max-w-[340px] shrink-0 snap-center"
              >
                <MasterLookbookCard
                  master={master}
                  onBookWithMaster={onBookWithMaster}
                  onViewPortfolio={onViewPortfolio}
                />
              </div>
            ))}
          </div>

          {/* Pagination Dots Indicator */}
          {filteredMasters.length > 1 && (
            <div className="flex items-center justify-center gap-1.5 pt-2">
              {filteredMasters.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlideIndex === idx
                      ? "w-6 bg-florida-darkRose"
                      : "w-1.5 bg-rose-200 hover:bg-rose-300"
                  }`}
                  aria-label={`Перейти к мастеру ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP & TABLET VIEW: Responsive Editorial Grid (>= 768px)               */}
        {/* ========================================================================= */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredMasters.map((master, idx) => (
              <motion.div
                key={master.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <MasterLookbookCard
                  master={master}
                  onBookWithMaster={onBookWithMaster}
                  onViewPortfolio={onViewPortfolio}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Editorial Lookbook Master Card Component
// ---------------------------------------------------------------------------
interface MasterLookbookCardProps {
  master: Master;
  onBookWithMaster: (masterId: string) => void;
  onViewPortfolio: (master: Master, initialPhotoIndex?: number) => void;
}

function MasterLookbookCard({
  master,
  onBookWithMaster,
  onViewPortfolio,
}: MasterLookbookCardProps) {
  const previewWorks = master.portfolio.slice(0, 3);
  const remainingCount = Math.max(0, master.portfolio.length - 3);

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border border-rose-200/80 shadow-card-subtle hover:shadow-card-hover hover:border-florida-rose/70 transition-all duration-500 flex flex-col justify-between h-full">
      {/* Soft botanical glow backdrop on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-florida-powder/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

      <div>
        {/* 1. EDITORIAL PORTRAIT SECTION */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-100">
          <Image
            src={getAssetPath(master.avatar)}
            alt={master.name}
            fill
            sizes="(max-width: 768px) 84vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Luxury multi-stop gradient shadow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark via-burgundy-dark/40 to-transparent opacity-95 pointer-events-none" />

          {/* Top Floating Badges */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
            {/* Experience Badge */}
            <div className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-burgundy shadow-sm border border-white/60 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-florida-darkRose" />
              <span>Опыт {master.experience}</span>
            </div>

            {/* Rating Badge */}
            <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-burgundy shadow-sm border border-amber-200/80 flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{master.rating.toFixed(1)}</span>
              <span className="text-[10px] font-normal text-burgundy-muted">
                ({master.reviewsCount})
              </span>
            </div>
          </div>

          {/* Bottom Over-Photo Master Identity */}
          <div className="absolute bottom-3 inset-x-4 z-10 text-white space-y-1">
            {/* Key Skill Chip */}
            {master.badges.length > 0 && (
              <div className="inline-block px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-florida-powder border border-white/30">
                {master.badges[0]}
              </div>
            )}

            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-sm group-hover:text-rose-100 transition-colors">
              {master.name}
            </h3>

            <p className="text-xs text-rose-100/90 font-medium line-clamp-1">
              {master.role}
            </p>
          </div>
        </div>

        {/* 2. MASTER BIO & PHILOSOPHY */}
        <div className="p-4 space-y-3">
          <p className="text-xs text-burgundy-muted leading-relaxed line-clamp-2 italic">
            «{master.description}»
          </p>

          {/* Secondary Badge Chips */}
          <div className="flex flex-wrap gap-1.5">
            {master.badges.slice(1, 3).map((badge) => (
              <span
                key={badge}
                className="px-2 py-0.5 rounded-full bg-cream-100 text-burgundy text-[10px] font-medium border border-rose-200/70"
              >
                ❀ {badge}
              </span>
            ))}
          </div>

          {/* 3. MINI-PORTFOLIO GALLERY STRIP */}
          {previewWorks.length > 0 && (
            <div className="pt-2 border-t border-rose-100/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-burgundy flex items-center gap-1.5">
                  <Camera className="w-3 h-3 text-florida-deep" />
                  <span>Работы мастера</span>
                </span>

                <button
                  type="button"
                  onClick={() => onViewPortfolio(master, 0)}
                  className="text-[11px] font-medium text-florida-darkRose hover:text-burgundy transition-colors flex items-center gap-0.5 cursor-pointer"
                >
                  <span>Все ({master.portfolio.length})</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>

              {/* 3 Works Thumbnail Grid */}
              <div className="grid grid-cols-3 gap-1.5">
                {previewWorks.map((work, idx) => {
                  const isLastWithMore = idx === 2 && remainingCount > 0;

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => onViewPortfolio(master, idx)}
                      className="relative aspect-square rounded-xl overflow-hidden border border-rose-200/90 hover:border-florida-deep transition-all duration-300 cursor-pointer group/thumb shadow-2xs"
                      title={work.caption || `Работа ${idx + 1}`}
                      aria-label={`Посмотреть работу мастера ${master.name}`}
                    >
                      <Image
                        src={getAssetPath(work.image)}
                        alt={work.caption || `Работа ${idx + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover group-hover/thumb:scale-110 transition-transform duration-500"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-burgundy/30 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                        <Camera className="w-3.5 h-3.5 text-white drop-shadow-sm" />
                      </div>

                      {/* +N More Overlay on the 3rd thumbnail if available */}
                      {isLastWithMore && (
                        <div className="absolute inset-0 bg-burgundy-dark/70 backdrop-blur-[1px] flex items-center justify-center text-white text-[11px] font-bold">
                          +{remainingCount}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4. FOOTER ACTION BUTTONS */}
      <div className="p-4 pt-1 space-y-2 border-t border-rose-100/60 mt-auto">
        <button
          type="button"
          onClick={() => onBookWithMaster(master.id)}
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-florida-rose via-florida-deep to-florida-darkRose text-white text-xs font-semibold tracking-wide uppercase shadow-sm hover:shadow-soft-pink hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Записаться к {master.name.split(" ")[0]}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

