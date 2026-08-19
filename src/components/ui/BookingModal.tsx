"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Phone, CalendarHeart, CalendarCheck, CheckCircle2, MessageCircle, Send, ExternalLink, Scissors } from "lucide-react";
import { SERVICE_CATEGORIES, ServiceItem } from "@/data/services";
import { MASTERS, Master } from "@/data/masters";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialMasterId?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  initialServiceId,
  initialMasterId,
}: BookingModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<string>(initialServiceId || "");
  const [selectedMaster, setSelectedMaster] = useState<string>(initialMasterId || "");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceId) setSelectedService(initialServiceId);
    if (initialMasterId) setSelectedMaster(initialMasterId);
    if (isOpen) setIsSubmitted(false);
  }, [initialServiceId, initialMasterId, isOpen]);

  // Available time slots
  const timeSlots = ["09:30", "11:00", "12:30", "14:00", "15:30", "17:00", "18:30"];

  // All flat services
  const allServices = SERVICE_CATEGORIES.flatMap((c) => c.services);
  const filteredServices =
    selectedCategory === "all"
      ? allServices
      : allServices.filter((s) => s.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientPhone || !clientName) return;
    setIsSubmitted(true);
  };

  const getChosenService = () => allServices.find((s) => s.id === selectedService);
  const getChosenMaster = () => MASTERS.find((m) => m.id === selectedMaster);

  // Close on Escape & Body overflow lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-burgundy-dark/60 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-2xl bg-cream-50 rounded-3xl shadow-2xl border border-florida-powder/60 overflow-hidden z-10 my-8"
          >
            {/* Top decorative botanical banner */}
            <div className="relative bg-gradient-to-r from-florida-powder/80 via-cream-100 to-florida-soft/70 px-6 py-6 border-b border-rose-100">
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 text-florida-darkRose text-xs font-semibold uppercase tracking-wider mb-2 border border-florida-powder/40">
                    <CalendarHeart className="w-3.5 h-3.5" />
                    Онлайн-запись в салон «Флорида»
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-burgundy font-bold">
                    Забронировать визит
                  </h3>
                  <p className="text-xs sm:text-sm text-burgundy-muted mt-1">
                    г. Иркутск, ул. Байкальская 124/1, 2 этаж · Ежедневно 09:00–20:00
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/80 text-burgundy-muted hover:text-burgundy hover:bg-white transition-all shadow-sm"
                  aria-label="Закрыть"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Dikidi Quick Action Bar */}
              <div className="mt-4 p-3 bg-white/90 rounded-2xl border border-florida-rose/30 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                <div className="text-xs text-burgundy font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Удобно записаться через систему Dikidi Online:
                </div>
                <a
                  href="https://dikidi.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-florida-rose to-florida-deep text-white text-xs font-medium hover:brightness-105 transition-all shadow-sm"
                >
                  <span>Открыть в Dikidi</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-burgundy mb-2 flex items-center gap-1.5">
                      <Scissors className="w-4 h-4 text-florida-deep" />
                      1. Выберите услугу
                    </label>

                    {/* Category Filter Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <button
                        type="button"
                        onClick={() => setSelectedCategory("all")}
                        className={`px-3 py-1 text-xs rounded-full transition-all ${
                          selectedCategory === "all"
                            ? "bg-burgundy text-white font-medium shadow-sm"
                            : "bg-white text-burgundy-muted hover:bg-rose-50 border border-rose-100"
                        }`}
                      >
                        Все категории
                      </button>
                      {SERVICE_CATEGORIES.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`px-3 py-1 text-xs rounded-full transition-all ${
                            selectedCategory === cat.id
                              ? "bg-florida-deep text-white font-medium shadow-sm"
                              : "bg-white text-burgundy-muted hover:bg-rose-50 border border-rose-100"
                          }`}
                        >
                          {cat.shortName}
                        </button>
                      ))}
                    </div>

                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-rose-200 text-burgundy text-sm focus:outline-none focus:ring-2 focus:ring-florida-rose/50"
                    >
                      <option value="">Любая услуга / Консультация</option>
                      {filteredServices.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name} ({service.price} · {service.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Master Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-burgundy mb-2 flex items-center gap-1.5">
                      <User className="w-4 h-4 text-florida-deep" />
                      2. Желаемый мастер
                    </label>
                    <select
                      value={selectedMaster}
                      onChange={(e) => setSelectedMaster(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-rose-200 text-burgundy text-sm focus:outline-none focus:ring-2 focus:ring-florida-rose/50"
                    >
                      <option value="">Любой свободный топ-мастер</option>
                      {MASTERS.map((master) => (
                        <option key={master.id} value={master.id}>
                          {master.name} — {master.role} ({master.experience})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date and Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-burgundy mb-2 flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-florida-deep" />
                        3. Дата визита
                      </label>
                      <input
                        type="date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-rose-200 text-burgundy text-sm focus:outline-none focus:ring-2 focus:ring-florida-rose/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-burgundy mb-2 flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-florida-deep" />
                        4. Время
                      </label>
                      <div className="grid grid-cols-4 gap-1.5">
                        {timeSlots.slice(0, 4).map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setBookingTime(time)}
                            className={`py-2 text-xs rounded-xl text-center border transition-all ${
                              bookingTime === time
                                ? "bg-florida-deep text-white font-semibold border-florida-deep shadow-sm"
                                : "bg-white text-burgundy border-rose-100 hover:bg-rose-50"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-burgundy mb-2">
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Например, Екатерина"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-rose-200 text-burgundy text-sm focus:outline-none focus:ring-2 focus:ring-florida-rose/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-burgundy mb-2 flex items-center gap-1.5">
                        <Phone className="w-4 h-4 text-florida-deep" />
                        Телефон для связи *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+7 (999) 000-00-00"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-rose-200 text-burgundy text-sm focus:outline-none focus:ring-2 focus:ring-florida-rose/50"
                      />
                    </div>
                  </div>

                  {/* Note / Comment */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-burgundy mb-2">
                      Пожелания или комментарий
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Особые пожелания, снятие старого покрытия, аллергии..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl bg-white border border-rose-200 text-burgundy text-sm focus:outline-none focus:ring-2 focus:ring-florida-rose/50 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-florida-rose via-florida-deep to-florida-darkRose text-white font-serif text-lg font-semibold tracking-wide hover:shadow-glow-pink transition-all duration-300 shadow-soft-pink flex items-center justify-center gap-2"
                    >
                      <CalendarCheck className="w-5 h-5" />
                      <span>Подтвердить запись</span>
                    </button>
                    <p className="text-[11px] text-center text-burgundy-soft mt-2.5">
                      Администратор салона свяжется с вами в течение 10 минут для подтверждения времени
                    </p>
                  </div>

                  {/* Instant Messenger Shortcuts */}
                  <div className="pt-4 border-t border-rose-100 text-center">
                    <span className="text-xs text-burgundy-muted">Или напишите нам напрямую:</span>
                    <div className="flex items-center justify-center gap-3 mt-2">
                      <a
                        href="https://t.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#229ED9]/10 text-[#229ED9] text-xs font-semibold hover:bg-[#229ED9]/20 transition-all"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Telegram
                      </a>
                      <a
                        href="https://wa.me/79000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366]/10 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/20 transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </form>
              ) : (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-4"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-burgundy">
                    Спасибо, {clientName}!
                  </h4>
                  <p className="text-sm text-burgundy-muted max-w-md mx-auto">
                    Ваша предварительная заявка принята.
                    {getChosenService() && (
                      <span className="block font-medium text-burgundy mt-1">
                        Услуга: {getChosenService()?.name}
                      </span>
                    )}
                    {getChosenMaster() && (
                      <span className="block font-medium text-burgundy mt-0.5">
                        Мастер: {getChosenMaster()?.name} ({getChosenMaster()?.role})
                      </span>
                    )}
                  </p>
                  <div className="p-4 bg-white rounded-2xl border border-rose-100 max-w-sm mx-auto text-xs text-burgundy-muted space-y-1 text-left">
                    <div className="font-semibold text-burgundy">Детали визита:</div>
                    <div>📍 Иркутск, ул. Байкальская 124/1, 2 этаж</div>
                    <div>📞 Телефон для справок: +7 (950) 000-00-00</div>
                    <div>☕ Для вас подготовлен авторский чай и кофе</div>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={onClose}
                      className="px-8 py-3 rounded-xl bg-burgundy text-white text-sm font-medium hover:bg-burgundy-dark transition-all"
                    >
                      Закрыть
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
