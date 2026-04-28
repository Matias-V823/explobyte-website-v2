"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function HeroSection() {
  const badgeRef   = useRef<HTMLDivElement>(null);
  const headRef    = useRef<HTMLHeadingElement>(null);
  const subRef     = useRef<HTMLParagraphElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const mockupRef  = useRef<HTMLDivElement>(null);
  const orbRef1    = useRef<HTMLDivElement>(null);
  const orbRef2    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(orbRef1.current,  { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2 })
      .fromTo(orbRef2.current,  { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2 }, "<0.2")
      .fromTo(badgeRef.current,  { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, 0.25)
      .fromTo(headRef.current,   { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85 }, 0.42)
      .fromTo(subRef.current,    { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, 0.65)
      .fromTo(ctaRef.current,    { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, 0.82)
      .fromTo(statsRef.current,  { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6  }, 0.96)
      .fromTo(mockupRef.current, { y: 56, opacity: 0, scale: 0.96 }, { y: 0, opacity: 1, scale: 1, duration: 1.1 }, 0.5);

    gsap.to(mockupRef.current, { y: -10, duration: 5, ease: "sine.inOut", yoyo: true, repeat: -1 });
    gsap.to(orbRef1.current,   { scale: 1.08, duration: 7, ease: "sine.inOut", yoyo: true, repeat: -1 });
    gsap.to(orbRef2.current,   { scale: 0.92, duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.5 });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-white">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60" aria-hidden="true" />

      {/* Orbs */}
      <div ref={orbRef1} className="absolute top-[-15%] left-[-8%] w-160 h-160 rounded-full pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(circle, rgba(75,138,254,0.12) 0%, transparent 70%)", filter: "blur(48px)" }} />
      <div ref={orbRef2} className="absolute bottom-[-20%] right-[-10%] w-140 h-140 rounded-full pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(circle, rgba(49,90,165,0.08) 0%, transparent 70%)", filter: "blur(48px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div className="space-y-8">
          <div ref={badgeRef}>
            <Badge>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Disponibles para nuevos proyectos
            </Badge>
          </div>

          <h1 ref={headRef} className="text-5xl md:text-6xl xl:text-[68px] font-bold tracking-tight leading-[1.05] text-ink">
            Software que{" "}
            <span className="gradient-text">transforma</span>
            <br />
            tu negocio
          </h1>

          <p ref={subRef} className="text-lg md:text-xl text-ink-3 leading-relaxed max-w-xl">
            Construimos productos digitales de alta calidad: aplicaciones web,
            móviles, APIs e integraciones. Convertimos tu visión en software
            que escala.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4 items-center">
            <ButtonLink variant="primary" size="lg" href="#cta">
              Empezar proyecto
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </ButtonLink>
            <ButtonLink variant="secondary" size="lg" href="#proyectos">
              Ver proyectos
            </ButtonLink>
          </div>

          <div ref={statsRef} className="flex items-center gap-8 pt-2 border-t border-border">
            {[
              { label: "Proyectos entregados", value: "20+" },
              { label: "Clientes activos",      value: "12"  },
              { label: "Tecnologías",           value: "15+" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-blue-500">{stat.value}</div>
                <div className="text-xs text-ink-4 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — mockup */}
        <div className="hidden lg:block" aria-hidden="true">
          <CPUServicesMockup />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 animate-bounce" aria-hidden="true">
        <span className="text-[10px] tracking-widest uppercase text-ink-4">Scroll</span>
        <svg className="w-4 h-4 text-ink-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

function CPUServicesMockup() {
  return (
    <div className="relative w-full max-w-130 mx-auto">
      <svg viewBox="0 0 480 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <defs>
          <linearGradient id="cpuBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a3468" />
            <stop offset="100%" stopColor="#0a1628" />
          </linearGradient>
          <linearGradient id="cpuDie" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#152d5e" />
            <stop offset="100%" stopColor="#070f22" />
          </linearGradient>
          <linearGradient id="cpuSheen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4b8afe" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4b8afe" stopOpacity="0" />
          </linearGradient>
          <filter id="cpuShadow">
            <feDropShadow dx="0" dy="12" stdDeviation="20" floodColor="#4b8afe" floodOpacity="0.3" />
          </filter>
          <filter id="dieGlow">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          <linearGradient id="gUp" x1="0" y1="155" x2="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="mUp"><rect x="0" y="0" width="480" height="520" fill="url(#gUp)" /></mask>

          <linearGradient id="gDown" x1="0" y1="337" x2="0" y2="520" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="mDown"><rect x="0" y="0" width="480" height="520" fill="url(#gDown)" /></mask>

          <linearGradient id="gLeft" x1="155" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="mLeft"><rect x="0" y="0" width="480" height="520" fill="url(#gLeft)" /></mask>

          <linearGradient id="gRight" x1="337" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="mRight"><rect x="0" y="0" width="480" height="520" fill="url(#gRight)" /></mask>
        </defs>

        <g mask="url(#mUp)" stroke="#94a3b8" strokeWidth={1} fill="none" opacity={0.7}>
          <path d="M 186 152 L 186 115 L 155 115 L 155 50" />
          <path d="M 210 152 L 210 95 L 245 95 L 245 20" />
          <path d="M 235 152 L 235 85 L 175 85 L 175 15" />
          <path d="M 260 152 L 260 75 L 315 75 L 315 10" />
          <path d="M 286 152 L 286 105 L 345 105 L 345 35" />
          <path d="M 309 152 L 309 135 L 375 135 L 375 70" />
          {([[186,115],[155,115],[210,95],[245,95],[235,85],[175,85],[260,75],[315,75],[286,105],[345,105],[309,135],[375,135]] as [number,number][]).map(([x,y]) => (
            <circle key={`u${x}${y}`} cx={x} cy={y} r={2} fill="#94a3b8" stroke="none" />
          ))}
        </g>

        <g mask="url(#mDown)" stroke="#94a3b8" strokeWidth={1} fill="none" opacity={0.7}>
          <path d="M 186 340 L 186 375 L 148 375 L 148 455" />
          <path d="M 210 340 L 210 365 L 252 365 L 252 445" />
          <path d="M 235 340 L 235 398 L 192 398 L 192 495" />
          <path d="M 260 340 L 260 378 L 312 378 L 312 472" />
          <path d="M 286 340 L 286 358 L 338 358 L 338 452" />
          <path d="M 309 340 L 309 392 L 378 392 L 378 512" />
          {([[186,375],[148,375],[210,365],[252,365],[235,398],[192,398],[260,378],[312,378],[286,358],[338,358],[309,392],[378,392]] as [number,number][]).map(([x,y]) => (
            <circle key={`d${x}${y}`} cx={x} cy={y} r={2} fill="#94a3b8" stroke="none" />
          ))}
        </g>

        <g mask="url(#mLeft)" stroke="#94a3b8" strokeWidth={1} fill="none" opacity={0.7}>
          <path d="M 152 192 L 108 192 L 108 158 L 45 158" />
          <path d="M 152 218 L 98 218 L 98 252 L 18 252" />
          <path d="M 152 248 L 118 248 L 118 295 L 38 295" />
          <path d="M 152 275 L 88 275 L 88 315 L 12 315" />
          <path d="M 152 305 L 112 305 L 112 352 L 58 352" />
          {([[108,192],[108,158],[98,218],[98,252],[118,248],[118,295],[88,275],[88,315],[112,305],[112,352]] as [number,number][]).map(([x,y]) => (
            <circle key={`l${x}${y}`} cx={x} cy={y} r={2} fill="#94a3b8" stroke="none" />
          ))}
        </g>

        <g mask="url(#mRight)" stroke="#94a3b8" strokeWidth={1} fill="none" opacity={0.7}>
          <path d="M 340 192 L 382 192 L 382 152 L 452 152" />
          <path d="M 340 220 L 402 220 L 402 268 L 472 268" />
          <path d="M 340 250 L 398 250 L 398 302 L 472 302" />
          <path d="M 340 278 L 388 278 L 388 328 L 462 328" />
          <path d="M 340 308 L 378 308 L 378 362 L 448 362" />
          {([[382,192],[382,152],[402,220],[402,268],[398,250],[398,302],[388,278],[388,328],[378,308],[378,362]] as [number,number][]).map(([x,y]) => (
            <circle key={`r${x}${y}`} cx={x} cy={y} r={2} fill="#94a3b8" stroke="none" />
          ))}
        </g>

        {[182, 202, 222, 242, 262, 282, 302].map((x) => (
          <rect key={`pt${x}`} x={x} y={152} width={7} height={18} rx={2} fill="#3b82f6" opacity={0.75} />
        ))}
        {[182, 202, 222, 242, 262, 282, 302].map((x) => (
          <rect key={`pb${x}`} x={x} y={340} width={7} height={18} rx={2} fill="#3b82f6" opacity={0.75} />
        ))}
        {[185, 205, 225, 245, 265, 285, 310].map((y) => (
          <rect key={`pl${y}`} x={152} y={y} width={18} height={7} rx={2} fill="#3b82f6" opacity={0.75} />
        ))}
        {[185, 205, 225, 245, 265, 285, 310].map((y) => (
          <rect key={`pr${y}`} x={340} y={y} width={18} height={7} rx={2} fill="#3b82f6" opacity={0.75} />
        ))}

        <rect x={170} y={170} width={160} height={160} rx={14}
              fill="url(#cpuBody)" stroke="#3b82f6" strokeWidth={1.5} filter="url(#cpuShadow)" />
        <rect x={170} y={170} width={160} height={55} rx={14} fill="url(#cpuSheen)" />

        {[200, 220, 240, 260, 280, 300, 320].map((v) => (
          <line key={`gh${v}`} x1={175} y1={v} x2={325} y2={v} stroke="#4b8afe" strokeWidth={0.5} opacity={0.14} />
        ))}
        {[200, 220, 240, 260, 280, 300, 320].map((v) => (
          <line key={`gv${v}`} x1={v} y1={175} x2={v} y2={325} stroke="#4b8afe" strokeWidth={0.5} opacity={0.14} />
        ))}

        <path d="M 200 175 L 200 195 L 220 195" stroke="#4b8afe" strokeWidth={1.2} opacity={0.4} />
        <path d="M 300 175 L 300 195 L 280 195" stroke="#4b8afe" strokeWidth={1.2} opacity={0.4} />
        <path d="M 200 325 L 200 305 L 220 305" stroke="#4b8afe" strokeWidth={1.2} opacity={0.4} />
        <path d="M 300 325 L 300 305 L 280 305" stroke="#4b8afe" strokeWidth={1.2} opacity={0.4} />

        {([[200,195],[220,195],[280,195],[300,195],[200,305],[220,305],[280,305],[300,305]] as [number,number][]).map(([x, y]) => (
          <circle key={`d${x}${y}`} cx={x} cy={y} r={2.5} fill="#4b8afe" opacity={0.55} />
        ))}

        <rect x={205} y={205} width={90} height={90} rx={8}
              fill="url(#cpuDie)" stroke="#4b8afe" strokeWidth={1} filter="url(#dieGlow)" />

        <rect x={213} y={213} width={36} height={36} rx={4} fill="#1a3a78" stroke="#4b8afe" strokeWidth={0.8} opacity={0.85} />
        <rect x={253} y={213} width={36} height={36} rx={4} fill="#1a3a78" stroke="#4b8afe" strokeWidth={0.8} opacity={0.85} />
        <rect x={213} y={253} width={36} height={36} rx={4} fill="#1a3a78" stroke="#4b8afe" strokeWidth={0.8} opacity={0.85} />
        <rect x={253} y={253} width={36} height={36} rx={4} fill="#4b8afe" stroke="#4b8afe" strokeWidth={0.8} opacity={0.65} />

        <text x={250} y={249} textAnchor="middle" fill="#93c5fd" fontSize={9} fontWeight="700" fontFamily="monospace" letterSpacing="2">CPU</text>
        <text x={250} y={259} textAnchor="middle" fill="#78a7fe" fontSize={6} fontFamily="monospace" opacity={0.7} letterSpacing="1.5">EXPLOBYTE</text>

        <circle cx={270} cy={272} r={4} fill="#4b8afe" opacity={0.9} />
        <circle cx={270} cy={272} r={8} fill="none" stroke="#4b8afe" strokeWidth={1} opacity={0.3} />
      </svg>

      <div className="absolute" style={{ top: "7%", left: "4%" }}>
        <ServiceLabel label="Desarrollo Web" />
      </div>
      <div className="absolute" style={{ top: "42%", right: "1%" }}>
        <ServiceLabel label="Desarrollo Móvil" />
      </div>
      <div className="absolute" style={{ bottom: "28%", left: "2%" }}>
        <ServiceLabel label="APIs e Integraciones" />
      </div>
      <div className="absolute" style={{ bottom: "8%", left: "12%" }}>
        <ServiceLabel label="Cloud & DevOps" />
      </div>
    </div>
  );
}

function ServiceLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm rounded-full pl-4 pr-1 py-1.5 shadow-lg border border-[#d2e2ff]">
      <span className="text-[13px] font-semibold text-blue-900 whitespace-nowrap">{label}</span>
      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
           style={{ background: "linear-gradient(135deg, #4b8afe, #315aa5)" }}>
        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
        </svg>
      </div>
    </div>
  );
}
