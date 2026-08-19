"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedGradientText({
  children,
  className,
}: AnimatedGradientTextProps) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#f5c6d61f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%]",
        "border border-florida-rose/30 bg-white/70 hover:shadow-[inset_0_-5px_10px_#f5c6d63f]",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#e88ca8]/40 via-[#d46886]/40 to-[#e88ca8]/40 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"
        )}
      />
      {children}
    </div>
  );
}
