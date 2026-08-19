"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, Star, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Master } from "@/data/masters";

interface MasterPortfolioModalProps {
  master: Master | null;
  isOpen: boolean;
  initialPhotoIndex?: number;
  onClose: () => void;
  onBookWithMaster: (masterId: string) => void;
}

export function MasterPortfolioModal({
  master,
  isOpen,
  initialPhotoIndex = 0,
  onClose,
  onBookWithMaster,
}: MasterPortfolioModalProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);

  useEffect(() => {
    if (isOpen && master) {
      setSelectedPhotoIndex(initialPhotoIndex ?? 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, master, initialPhotoIndex]);

  if (!master) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto overscroll-contain">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-burgundy-dark/60 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl max-h-[calc(100dvh-1.5rem)] sm:max-h-[90vh] bg-cream-50 rounded-3xl shadow-2xl border border-florida-powder/60 overflow-hidden z-10 my-auto pointer-events-auto flex flex-col"
          >
            {/* Header / Master Bio Header */}
            <div className="relative shrink-0 bg-gradient-to-r from-cream-100 via-rose-50 to-cream-100 px-5 sm:px-6 py-5 sm:py-6 border-b border-rose-100 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-florida-rose shadow-md shrink-0">
                  <Image
                    src={master.avatar}
                    alt={master.name}
                    fill
                    sizes="(max-width: 640px) 64px, 80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-2xl font-bold text-burgundy">
                      {master.name}
                    </h3>
                    <div className="bg-amber-100/80 px-2 py-0.5 rounded-full flex items-center gap-1 text-[11px] font-bold text-burgundy border border-amber-200">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{master.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-florida-deep font-semibold tracking-wide">
                    {master.role} · Опыт {master.experience}
                  </p>
                  <p className="text-xs text-burgundy-muted mt-1 max-w-md hidden sm:block">
                    {master.description}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full bg-white/80 text-burgundy-muted hover:text-burgundy hover:bg-white transition-all shadow-sm cursor-pointer"
                aria-label="Закрыть"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Gallery Section */}
            <div className="p-5 sm:p-8 space-y-5 sm:space-y-6 overflow-y-auto overscroll-contain">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-florida-deep" />
                  <h4 className="font-serif text-lg font-bold text-burgundy">
                    Портфолио работ мастера ({master.portfolio.length})
                  </h4>
                </div>
                <span className="text-xs text-burgundy-muted">
                  Фото {selectedPhotoIndex + 1} из {master.portfolio.length}
                </span>
              </div>

              {/* Main Expanded Photo View */}
              {master.portfolio.length > 0 && (
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-rose-200 shadow-md bg-white">
                  <Image
                    src={master.portfolio[selectedPhotoIndex].image}
                    alt={master.portfolio[selectedPhotoIndex].caption || `Работа мастера ${master.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/50 via-transparent to-transparent pointer-events-none" />
                </div>
              )}

              {/* Thumbnail Strip */}
              {master.portfolio.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 scrollbar-thin">
                  {master.portfolio.map((photo, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedPhotoIndex(idx)}
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        selectedPhotoIndex === idx
                          ? "border-florida-deep scale-105 shadow-md ring-2 ring-florida-powder"
                          : "border-white/90 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={photo.image}
                        alt={`Миниатюра ${idx + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Master Specialization Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-rose-100">
                {master.badges.map((b) => (
                  <span
                    key={b}
                    className="px-3 py-1 rounded-full bg-cream-100 text-burgundy text-xs font-medium border border-rose-200"
                  >
                    ❀ {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer CTA */}
            <div className="shrink-0 p-4 sm:p-6 bg-white border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-burgundy-muted text-center sm:text-left">
                Запишитесь на удобное время к <strong className="text-burgundy">{master.name}</strong>
              </div>

              <button
                type="button"
                onClick={() => onBookWithMaster(master.id)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-florida-rose via-florida-deep to-florida-darkRose text-white font-medium text-xs uppercase tracking-wider shadow-soft-pink hover:shadow-glow-pink hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Записаться к мастеру</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
