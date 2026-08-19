"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarHeart, Phone, Menu, X, Clock, MapPin, Send, MessageCircle, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Tuned Smart Show/Hide on Scroll & Smooth Island Morphing with requestAnimationFrame
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    let currentScrolled = window.scrollY > 40;
    let currentVisible = true;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldBeScrolled = currentScrollY > 40;

      if (shouldBeScrolled !== currentScrolled) {
        currentScrolled = shouldBeScrolled;
        setIsScrolled(shouldBeScrolled);
      }

      if (!mobileMenuOpen) {
        const delta = currentScrollY - lastScrollY;
        let shouldBeVisible = currentVisible;

        if (currentScrollY <= 50) {
          shouldBeVisible = true;
        } else if (delta > 8 && currentScrollY > 120) {
          shouldBeVisible = false;
        } else if (delta < -6) {
          shouldBeVisible = true;
        }

        if (shouldBeVisible !== currentVisible) {
          currentVisible = shouldBeVisible;
          setIsVisible(shouldBeVisible);
        }
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // Auto-close mobile menu on desktop resize or Escape
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Clean, concise single-word navigation labels (prevent 2-line wrapping)
  const navLinks = [
    { label: "Услуги", href: "#services", number: "01" },
    { label: "Мастера", href: "#masters", number: "02" },
    { label: "Атмосфера", href: "#atmosphere", number: "03" },
    { label: "Портфолио", href: "#portfolio", number: "04" },
    { label: "Отзывы", href: "#reviews", number: "05" },
    { label: "Контакты", href: "#contacts", number: "06" },
  ];

  return (
    <>
      {/* Outer Floating Wrapper with Silky-Smooth Slide Down from Top */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -110,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1], // Smooth Apple-style ease-out (no bounce/spring jerk)
        }}
        className="fixed top-0 inset-x-0 z-40 pointer-events-none"
      >
        <div
          className={`w-full transition-[padding] duration-500 ease-out ${
            isScrolled ? "pt-2.5 sm:pt-3.5 px-3 sm:px-6" : "pt-4 sm:pt-6 px-4 sm:px-8"
          }`}
        >
          {/* Morphing Inner Bar: smoothly transitions layout, width, background & radius */}
          <motion.div
            layout
            transition={{
              layout: {
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            className={`pointer-events-auto mx-auto flex items-center justify-between transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-out ${
              isScrolled
                ? "max-w-6xl rounded-full bg-cream-50/92 backdrop-blur-xl border border-rose-200/90 shadow-[0_16px_36px_-8px_rgba(212,104,134,0.22),0_4px_12px_rgba(0,0,0,0.03)] px-4 sm:px-6 py-2 sm:py-2.5"
                : "max-w-7xl rounded-2xl sm:rounded-3xl bg-white/70 backdrop-blur-md border border-rose-100/80 shadow-xs px-5 sm:px-8 py-3.5"
            }`}
          >
            {/* 1. Living Logo with Interactive Botanical Micro-Bloom */}
            <a
              href="#"
              className="flex items-center gap-2.5 group shrink-0 select-none"
              aria-label="Флорида — Салон красоты"
            >
              {/* Living Botanical Emblem */}
              <motion.div
                whileHover={{ rotate: 90, scale: 1.12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-florida-powder via-cream-100 to-florida-soft flex items-center justify-center border border-florida-rose/50 shadow-sm shrink-0"
              >
                <span className="text-florida-deep font-serif text-base sm:text-lg font-bold leading-none">
                  ❀
                </span>
              </motion.div>

              {/* Brand Title & Subtitle */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-burgundy group-hover:text-florida-darkRose transition-colors whitespace-nowrap leading-tight">
                    Флорида
                  </span>

                  {/* Status Badge (Shows on wide screens or when at top) */}
                  <span className={`hidden ${isScrolled ? "2xl:inline-flex" : "xl:inline-flex"} items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-[10px] font-semibold text-emerald-800 tracking-wider uppercase whitespace-nowrap`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Открыто до 20:00
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {!isScrolled && (
                    <motion.span
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: -2 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="text-[10px] text-burgundy-muted tracking-widest uppercase hidden lg:block font-sans whitespace-nowrap overflow-hidden"
                    >
                      beauty salon · Иркутск
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </a>

            {/* 2. Desktop Navigation with Liquid Sliding Pill */}
            <nav
              onMouseLeave={() => setHoveredTab(null)}
              className="hidden lg:flex items-center gap-0.5 bg-white/60 backdrop-blur-md px-2 py-1 rounded-full border border-rose-100/90 shadow-2xs shrink-0"
            >
              {navLinks.map((link) => {
                const isHovered = hoveredTab === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredTab(link.href)}
                    className="relative px-3 py-1.5 text-xs font-medium text-burgundy/85 hover:text-burgundy transition-colors rounded-full whitespace-nowrap"
                  >
                    {/* Sliding Liquid Pill Background */}
                    {isHovered && (
                      <motion.span
                        layoutId="navbarHoverPill"
                        className="absolute inset-0 bg-gradient-to-r from-florida-powder/70 via-rose-100 to-florida-powder/60 rounded-full -z-10 shadow-2xs"
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* 3. Action Buttons & Quick Call */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* Phone Link (Compact & Always in 1 line) */}
              <a
                href="tel:+73952000000"
                className="hidden md:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold text-burgundy hover:text-florida-darkRose hover:bg-white/80 transition-all whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-florida-deep shrink-0" />
                <span className="hidden xl:inline whitespace-nowrap">+7 (3952) 00-00-00</span>
              </a>

              {/* Glowing Booking CTA Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenBooking}
                className="relative group px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-florida-rose via-florida-deep to-florida-darkRose text-white font-medium text-xs uppercase tracking-wider shadow-soft-pink hover:shadow-glow-pink transition-all duration-300 overflow-hidden flex items-center gap-1.5 shrink-0 whitespace-nowrap cursor-pointer"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <CalendarHeart className="w-3.5 h-3.5 text-white shrink-0" />
                <span className="relative z-10 font-semibold whitespace-nowrap">Записаться</span>
              </motion.button>

              {/* Mobile Animated Morph Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-white/90 border border-rose-200 text-burgundy lg:hidden shadow-xs hover:bg-rose-50 transition-colors flex items-center justify-center shrink-0 cursor-pointer"
                aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 text-florida-darkRose" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5 text-burgundy" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* 4. Luxury Mobile Sheet Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-burgundy-dark/60 backdrop-blur-md"
            />

            {/* Mobile Sheet Content */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative w-full bg-cream-50 rounded-t-[2.5rem] border-t border-florida-powder shadow-2xl p-6 sm:p-8 z-10 max-h-[85vh] overflow-y-auto space-y-6"
            >
              {/* Sheet Drag Handle */}
              <div className="w-12 h-1.5 rounded-full bg-rose-200 mx-auto -mt-2 mb-4" />

              <div className="flex items-center justify-between pb-3 border-b border-rose-100">
                <div className="flex items-center gap-2">
                  <span className="text-florida-deep text-lg">❀</span>
                  <span className="font-serif text-xl font-bold text-burgundy">Салон «Флорида»</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full bg-white text-burgundy-muted hover:text-burgundy border border-rose-100 shadow-2xs"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Items with Numbers */}
              <nav className="flex flex-col divide-y divide-rose-100/70">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    className="py-3 flex items-center justify-between group"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-[11px] font-sans font-semibold text-florida-deep">
                        {link.number}
                      </span>
                      <span className="font-serif text-xl font-medium text-burgundy group-hover:text-florida-darkRose transition-colors">
                        {link.label}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-rose-300 group-hover:text-florida-deep group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </motion.a>
                ))}
              </nav>

              {/* Quick Contacts & Info Box */}
              <div className="p-4 bg-white rounded-2xl border border-rose-100 space-y-2.5 text-xs text-burgundy-muted">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-florida-deep shrink-0 mt-0.5" />
                  <span>Иркутск, ул. Байкальская 124/1, 2 этаж (ост. Баргузин)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-florida-deep shrink-0" />
                  <span>Ежедневно 09:00 – 20:00 (по предзаписи)</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <Phone className="w-3.5 h-3.5 text-florida-deep shrink-0" />
                  <a href="tel:+73952000000" className="font-bold text-burgundy hover:underline">
                    +7 (3952) 00-00-00
                  </a>
                </div>
              </div>

              {/* Instant Social Shortcuts */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-[#229ED9]/10 text-[#229ED9] text-xs font-semibold hover:bg-[#229ED9]/20 transition-all flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram</span>
                </a>
                <a
                  href="https://wa.me/79000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-[#25D366]/10 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/20 transition-all flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Big Online Booking Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-florida-rose via-florida-deep to-florida-darkRose text-white font-serif font-semibold text-lg shadow-soft-pink flex items-center justify-center gap-2 hover:shadow-glow-pink transition-all"
              >
                <CalendarHeart className="w-5 h-5" />
                <span>Записаться онлайн</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
