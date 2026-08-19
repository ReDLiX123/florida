"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverEffect = ({
  items,
  className,
  onItemClick,
}: {
  items: {
    title: string;
    description: string;
    link?: string;
  }[];
  className?: string;
  onItemClick?: (index: number) => void;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.title || idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => onItemClick && onItemClick(idx)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-florida-powder/40 block rounded-3xl -z-10"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-white border border-rose-100 group-hover:border-florida-rose/50 relative z-20 transition-all duration-300 shadow-card-subtle group-hover:shadow-card-hover">
            <div className="relative z-50">
              <h4 className="text-burgundy font-serif font-semibold tracking-wide mt-2 text-xl">
                {item.title}
              </h4>
              <p className="mt-3 text-burgundy-muted tracking-wide leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
