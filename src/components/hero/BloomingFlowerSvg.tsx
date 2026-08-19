"use client";

import Image from "next/image";
import { Flower2 } from "lucide-react";

export function BloomingFlowerSvg() {
  return (
    <div className="relative w-full max-w-[480px] sm:max-w-[520px] aspect-square flex items-center justify-center select-none">
      {/* 1. Ambient Background Glows (GPU Accelerated CSS Pulse) */}
      <div
        className="absolute inset-4 rounded-full bg-gradient-to-tr from-florida-powder/60 via-florida-soft/40 to-florida-rose/30 blur-3xl pointer-events-none -z-10 animate-pulse-glow"
        style={{ willChange: "opacity, transform" }}
      />

      <div
        className="absolute inset-10 rounded-full bg-gradient-to-br from-rose-200/40 via-cream-100/50 to-florida-powder/30 blur-2xl pointer-events-none -z-10 animate-float"
        style={{ animationDelay: "1s", willChange: "opacity, transform" }}
      />

      {/* 2. Haute-Couture Botanical Orbiting Rings (SVG Line-Art) */}
      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0"
      >
        <defs>
          <linearGradient id="goldRoseRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e88ca8" stopOpacity="0.7" />
            <stop offset="35%" stopColor="#d4af37" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#f5c6d6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#d46886" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="softRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#e88ca8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
          </linearGradient>

          {/* Curved Text Path */}
          <path
            id="textCirclePath"
            d="M 250,250 m -215,0 a 215,215 0 1,1 430,0 a 215,215 0 1,1 -430,0"
          />
        </defs>

        {/* Outer Fine-Line Botanical Orbit (GPU Composited) */}
        <circle
          cx="250"
          cy="250"
          r="230"
          fill="none"
          stroke="url(#goldRoseRing)"
          strokeWidth="1"
          strokeDasharray="4 8"
          className="animate-spin-slow origin-[250px_250px]"
        />

        {/* Concentric Halo Ring */}
        <circle
          cx="250"
          cy="250"
          r="215"
          fill="none"
          stroke="url(#softRingGrad)"
          strokeWidth="1.2"
          opacity="0.6"
        />

        {/* Decorative Celestial Starlight & Floral Dots */}
        {[
          { angle: 0, x: 480, y: 250 },
          { angle: 60, x: 365, y: 449.186 },
          { angle: 120, x: 135, y: 449.186 },
          { angle: 180, x: 20, y: 250 },
          { angle: 240, x: 135, y: 50.814 },
          { angle: 300, x: 365, y: 50.814 },
        ].map(({ angle, x, y }) => (
          <g key={angle}>
            <circle cx={x} cy={y} r="3" fill="#d4af37" opacity="0.8" />
            <circle cx={x} cy={y} r="1.5" fill="#ffffff" />
          </g>
        ))}

        {/* Circular Inscription (GPU Composited) */}
        <g className="animate-spin-text origin-[250px_250px]">
          <text
            className="text-[9px] uppercase tracking-[0.38em] fill-burgundy-muted/60 font-sans font-semibold select-none"
          >
            <textPath href="#textCirclePath" startOffset="0%">
              ❀ FLORIDĒRE · SALON DE BEAUTÉ · ИРКУТСК · ПРОСТРАНСТВО ВАШЕГО ЦВЕТЕНИЯ · EST. 2026 ·
            </textPath>
          </text>
        </g>
      </svg>

      {/* 3. Main Centerpiece: Hyper-Realistic Blooming Garden Rose Portrait */}
      <div className="relative w-[320px] h-[320px] sm:w-[370px] sm:h-[370px] rounded-full p-2.5 bg-gradient-to-tr from-florida-powder via-white to-florida-soft shadow-[0_25px_60px_-15px_rgba(212,104,134,0.35)] border border-white z-10">
        {/* Inner Floral Disc Frame */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/90 shadow-inner bg-cream-100">
          <Image
            src="/media/hero-flower.jpg"
            alt="Раскрывающийся цветок розы — Флорида"
            fill
            priority
            sizes="(max-width: 768px) 320px, 400px"
            className="object-cover scale-105 hover:scale-110 transition-transform duration-1000 ease-out"
          />

          {/* Soft subtle vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/20 via-transparent to-white/10 pointer-events-none" />
        </div>

        {/* Subtle Glassmorphism Emblem Tag */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-md border border-florida-powder/60 flex items-center gap-1.5 text-xs font-serif font-bold text-burgundy tracking-wide whitespace-nowrap z-20">
          <Flower2 className="w-3.5 h-3.5 text-florida-deep" />
          <span>«Флорида» — Цветущая</span>
        </div>
      </div>
    </div>
  );
}
