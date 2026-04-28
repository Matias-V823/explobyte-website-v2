"use client";

import { useEffect, useRef } from "react";
import { registerGSAP, gsap, ScrollTrigger, type ScrollRevealOptions } from "@/lib/gsap";

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    registerGSAP();
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const {
      y = 40,
      x = 0,
      opacity = 0,
      duration = 0.85,
      stagger = 0.1,
      delay = 0,
      ease = "power3.out",
      start = "top 85%",
      selector,
    } = options;

    const targets = selector ? el.querySelectorAll(selector) : [el];

    const anim = gsap.fromTo(
      targets,
      { y, x, opacity },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration,
        stagger,
        delay,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
      }
    );

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
