"use client";

import { useRef } from "react";
import { gsap } from "gsap";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "gradient-bg text-white glow-blue hover:opacity-90",
  secondary:
    "bg-white border border-border text-[#1e293b] hover:border-[#4b8afe] hover:text-blue-500 shadow-sm",
  ghost:
    "bg-transparent text-ink-3 hover:text-blue-500",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

function baseClass(variant: Variant, size: Size, extra: string) {
  return [
    "inline-flex items-center gap-2 rounded-xl font-medium transition-all duration-200 cursor-pointer select-none",
    variantStyles[variant],
    sizeStyles[size],
    extra,
  ].join(" ");
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  function handleMouseEnter() {
    gsap.to(ref.current, { scale: 1.04, duration: 0.18, ease: "power2.out" });
  }
  function handleMouseLeave() {
    gsap.to(ref.current, { scale: 1, duration: 0.22, ease: "power2.inOut" });
  }
  function handleMouseDown() {
    gsap.to(ref.current, { scale: 0.97, duration: 0.08, ease: "power2.in" });
  }
  function handleMouseUp() {
    gsap.to(ref.current, { scale: 1, duration: 0.18, ease: "power2.out" });
  }

  return (
    <button
      ref={ref}
      className={baseClass(variant, size, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      {...props}
    >
      {children}
    </button>
  );
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a className={baseClass(variant, size, className)} {...props}>
      {children}
    </a>
  );
}
