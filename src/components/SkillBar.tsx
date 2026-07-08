"use client";

import { useEffect, useRef, useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

type SkillBarProps = {
  name: string;
  level: number;
  delay?: number;
};

export default function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFilled(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimateOnScroll delay={delay}>
      <div ref={barRef}>
        <div className="mb-2 flex justify-between text-sm">
          <span className="font-medium">{name}</span>
          <span className="font-mono text-muted">{level}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light transition-all duration-1000 ease-out"
            style={{ width: filled ? `${level}%` : "0%" }}
          />
        </div>
      </div>
    </AnimateOnScroll>
  );
}
