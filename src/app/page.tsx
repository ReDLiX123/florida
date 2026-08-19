"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/hero/Hero";
import { ServicesMarquee } from "@/components/sections/ServicesMarquee";
import { Master } from "@/data/masters";

// Keep the above-the-fold experience small. The sections still render on the
// server for SEO, but their interactive code is split into independent chunks.
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection").then((mod) => mod.ServicesSection));
const MastersSection = dynamic(() => import("@/components/sections/MastersSection").then((mod) => mod.MastersSection));
const SalonAtmosphere = dynamic(() => import("@/components/sections/SalonAtmosphere").then((mod) => mod.SalonAtmosphere));
const PortfolioSection = dynamic(() => import("@/components/sections/PortfolioSection").then((mod) => mod.PortfolioSection));
const ReviewsSection = dynamic(() => import("@/components/sections/ReviewsSection").then((mod) => mod.ReviewsSection));
const BookingCTA = dynamic(() => import("@/components/sections/BookingCTA").then((mod) => mod.BookingCTA));
const Footer = dynamic(() => import("@/components/layout/Footer").then((mod) => mod.Footer));

// Dynamically import heavy modals to keep initial bundle ultra-lean
const BookingModal = dynamic(
  () => import("@/components/ui/BookingModal").then((mod) => mod.BookingModal),
  { ssr: false }
);

const MasterPortfolioModal = dynamic(
  () => import("@/components/ui/MasterPortfolioModal").then((mod) => mod.MasterPortfolioModal),
  { ssr: false }
);

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedMasterId, setSelectedMasterId] = useState<string | undefined>(undefined);

  const [activePortfolioMaster, setActivePortfolioMaster] = useState<Master | null>(null);
  const [activePortfolioPhotoIndex, setActivePortfolioPhotoIndex] = useState<number>(0);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState<boolean>(false);

  // Open booking with optional pre-selection
  const handleOpenBooking = (serviceId?: string, masterId?: string) => {
    setSelectedServiceId(serviceId);
    setSelectedMasterId(masterId);
    setIsBookingModalOpen(true);
  };

  // Open portfolio modal for a specific master with optional start photo index
  const handleViewMasterPortfolio = (master: Master, initialPhotoIndex: number = 0) => {
    setActivePortfolioMaster(master);
    setActivePortfolioPhotoIndex(initialPhotoIndex);
    setIsPortfolioModalOpen(true);
  };

  // Book with master from portfolio modal
  const handleBookWithMaster = (masterId: string) => {
    setIsPortfolioModalOpen(false);
    setSelectedMasterId(masterId);
    setSelectedServiceId(undefined);
    setIsBookingModalOpen(true);
  };

  // Select service from services section
  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setSelectedMasterId(undefined);
    setIsBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-cream-50 text-burgundy selection:bg-florida-powder selection:text-burgundy">
      {/* Top Sticky Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* 1. Hero Section */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* 2. Services & Benefits Marquee */}
      <ServicesMarquee />

      {/* 3. Categorized Services with Tabs & Pricing */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* 4. Masters Team Showcase */}
      <MastersSection
        onBookWithMaster={(masterId) => handleOpenBooking(undefined, masterId)}
        onViewPortfolio={handleViewMasterPortfolio}
      />

      {/* 5. Atmosphere & Interior Gallery */}
      <SalonAtmosphere />

      {/* 6. Lookbook & Portfolio Gallery */}
      <PortfolioSection
        onBookWithMaster={(masterId) => handleOpenBooking(undefined, masterId)}
      />

      {/* 7. Client Reviews from 2GIS and Yandex */}
      <ReviewsSection />

      {/* 8. Booking Call to Action */}
      <BookingCTA onOpenBooking={handleOpenBooking} />

      {/* 9. Contacts & Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      {isBookingModalOpen && (
        <BookingModal
          isOpen
          onClose={() => setIsBookingModalOpen(false)}
          initialServiceId={selectedServiceId}
          initialMasterId={selectedMasterId}
        />
      )}

      {/* Master's Portfolio Detail Modal */}
      {isPortfolioModalOpen && (
        <MasterPortfolioModal
          master={activePortfolioMaster}
          isOpen
          initialPhotoIndex={activePortfolioPhotoIndex}
          onClose={() => setIsPortfolioModalOpen(false)}
          onBookWithMaster={handleBookWithMaster}
        />
      )}
    </main>
  );
}
