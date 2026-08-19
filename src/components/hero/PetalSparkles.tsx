"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  swaySpeed: number;
  swayOffset: number;
}

export function PetalSparkles({
  className = "",
  count = 28,
}: {
  className?: string;
  count?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let isVisible = true;
    let isTabActive = true;
    let lastFrameTime = 0;

    // Detect mobile for lighter particle workload
    const isMobile = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;
    const effectiveCount = isMobile ? Math.min(count, 12) : count;
    const frameInterval = isMobile ? 1000 / 30 : 1000 / 60;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive && isVisible && !animationFrameId) {
        animationFrameId = requestAnimationFrame(render);
      } else if (!isTabActive && animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Pause canvas completely when Hero is scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVisible = entry.isIntersecting;
        if (isVisible && isTabActive && !animationFrameId) {
          animationFrameId = requestAnimationFrame(render);
        } else if (!isVisible && animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);

    const colors = [
      "rgba(245, 198, 214, 0.55)", // Powder pink
      "rgba(240, 168, 194, 0.45)", // Soft rose
      "rgba(232, 140, 168, 0.35)", // Warm rose
      "rgba(255, 235, 240, 0.65)", // Light petal
      "rgba(212, 104, 134, 0.25)", // Deep rose tint
    ];

    const petals: Petal[] = [];

    for (let i = 0; i < effectiveCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 7 + 4,
        speedX: Math.random() * 0.4 - 0.2,
        speedY: Math.random() * 0.5 + 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: Math.random() * 0.015 - 0.0075,
        color: colors[Math.floor(Math.random() * colors.length)],
        swaySpeed: Math.random() * 0.015 + 0.005,
        swayOffset: Math.random() * Math.PI * 2,
      });
    }

    // High performance drawing of single botanical petal shape
    const drawPetal = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      color: string
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.fillStyle = color;

      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.bezierCurveTo(size * 0.7, -size * 0.6, size * 0.9, size * 0.3, 0, size);
      ctx.bezierCurveTo(-size * 0.9, size * 0.3, -size * 0.7, -size * 0.6, 0, -size);
      ctx.fill();

      // Delicate inner shine line
      ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.6);
      ctx.lineTo(0, size * 0.6);
      ctx.stroke();

      ctx.restore();
    };

    let tick = 0;
    const render = (timestamp: number) => {
      if (!isVisible || !isTabActive) {
        animationFrameId = null;
        return;
      }

      // On touch devices 30 fps is visually identical for slow petals and cuts
      // canvas/main-thread work roughly in half.
      if (timestamp - lastFrameTime < frameInterval) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      lastFrameTime = timestamp;

      tick++;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(tick * p.swaySpeed + p.swayOffset) * 0.35;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) {
          p.x = -20;
        } else if (p.x < -20) {
          p.x = width + 20;
        }

        drawPetal(ctx, p.x, p.y, p.size, p.rotation, p.color);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [count, shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
