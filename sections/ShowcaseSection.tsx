"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  {
    title: "Dashboard en tiempo real",
    desc: "KPIs, ingresos, ocupación y alertas actualizados al instante.",
    color: "#4b8afe",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Gestión de propiedades y contratos",
    desc: "Alta de propiedades, inquilinos, contratos y documentos.",
    color: "#3e71d0",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Calendario y tareas integradas",
    desc: "Planificación de visitas, mantenimientos y seguimiento de actividades.",
    color: "#315aa5",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Análisis e informes",
    desc: "Gráficos de ingresos, ocupación y rendimiento por propiedad.",
    color: "#4b8afe",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export function ShowcaseSection() {
  const headRef = useScrollReveal<HTMLDivElement>({ y: 30 });
  const infoRef = useScrollReveal<HTMLDivElement>({ y: 40, delay: 0.15 });
  const mockupRef = useScrollReveal<HTMLDivElement>({ y: 50, delay: 0.05 });

  return (
    <section id="proyectos" className="py-32 bg-white relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-[#d2e2ff] to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headRef} className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-500 uppercase mb-4 block">
            Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
            Software real,
            <br />
            <span className="gradient-text">impacto real</span>
          </h2>
          <p className="text-ink-3 text-lg max-w-2xl mx-auto">
            Conoce Explo, nuestro sistema de gestión inmobiliaria: un producto
            end-to-end que transforma la administración de propiedades.
          </p>
        </div>

        {/* Two-col */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mockup */}
          <div ref={mockupRef}>
            <ExploBrowserMockup />
          </div>

          {/* Info */}
          <div ref={infoRef} className="space-y-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <div>
                  <div className="text-ink font-semibold text-lg">Sistema Explo</div>
                  <div className="text-ink-4 text-sm">Gestión Inmobiliaria</div>
                </div>
              </div>
              <p className="text-ink-3 leading-relaxed text-sm">
                Plataforma completa para la administración de propiedades, contratos e
                inquilinos. Dashboard en tiempo real, calendario de tareas, gestión de
                transacciones y análisis de rendimiento.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-4">
              {features.map((f) => (
                <div key={f.title} className="flex gap-3.5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: `${f.color}12`, border: `1px solid ${f.color}20`, color: f.color }}>
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-ink text-sm font-semibold mb-0.5">{f.title}</div>
                    <div className="text-[#64748b] text-sm leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {["React","TypeScript","NestJS","PostgreSQL","Docker","AWS"].map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-[#f6f9ff] text-ink-3 border border-border font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const views = [
  {
    src: "/home-explo.png",
    alt: "Dashboard principal de Explo",
    label: "Dashboard",
    width: 1400,
    height: 875,
  },
  {
    src: "/map-explo.png",
    alt: "Mapa de propiedades de Explo",
    label: "Mapa",
    width: 900,
    height: 540,
  },
  {
    src: "/property-explo.png",
    alt: "Ficha de propiedad en Explo",
    label: "Propiedades",
    width: 700,
    height: 520,
  },
];

function ExploBrowserMockup() {
  const [active, setActive] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(6);
  const [rotY, setRotY] = useState(-15);
  const [gloss, setGloss] = useState({ x: 38, y: 28 });
  const [hovered, setHovered] = useState(false);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setRotX((0.5 - y) * 18);
    setRotY((x - 0.5) * 22);
    setGloss({ x: x * 100, y: y * 100 });
  }

  function onMouseLeave() {
    setRotX(6);
    setRotY(-15);
    setGloss({ x: 38, y: 28 });
    setHovered(false);
  }

  const transition = hovered
    ? "transform 0.08s ease-out"
    : "transform 0.75s cubic-bezier(0.23,1,0.32,1)";

  const shadowOffsetX = (rotY / 22) * 20;
  const shadowOffsetY = (-rotX / 18) * 16;

  return (
    <div
      className="select-none space-y-4"
      aria-label="Vista previa del sistema Explo"
      style={{ perspective: "1100px" }}
    >
      {/* 3D card wrapper */}
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transition,
          transformStyle: "preserve-3d",
          willChange: "transform",
          position: "relative",
        }}
      >
        {/* Floating glow shadow — reacts to tilt */}
        <div
          style={{
            position: "absolute",
            inset: "8%",
            bottom: "-6%",
            borderRadius: 24,
            background: "rgba(10,20,50,0.55)",
            filter: "blur(32px)",
            transform: `translateZ(-60px) translateX(${shadowOffsetX}px) translateY(${shadowOffsetY}px)`,
            transition,
            pointerEvents: "none",
          }}
        />

        {/* Edge depth layer — visible when tilted */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 18,
            background: "linear-gradient(135deg, #0c1220 0%, #050a14 100%)",
            transform: "translateZ(-10px)",
            border: "1px solid #0e1828",
            pointerEvents: "none",
          }}
        />

        {/* Main browser frame */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "#080d18",
            boxShadow: "0 0 0 1px #141c2e",
            transform: "translateZ(0px)",
          }}
        >
          {/* Gloss overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-10 rounded-2xl"
            style={{
              background: `radial-gradient(ellipse at ${gloss.x}% ${gloss.y}%, rgba(255,255,255,0.065) 0%, transparent 62%)`,
              transition: hovered ? "none" : "background 0.5s ease",
            }}
          />

          {/* Titlebar */}
          <div
            className="flex items-center px-4 gap-3"
            style={{ height: 34, borderBottom: "1px solid #101827" }}
          >
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#1e2740" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#1e2740" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#1e2740" }} />
            </div>
            <div className="flex-1 flex justify-center">
              <span
                className="text-[11px] uppercase tracking-widest"
                style={{ color: "#2d3d5c", letterSpacing: "0.15em" }}
              >
                {views[active].label}
              </span>
            </div>
            <div className="w-14" />
          </div>

          {/* Main image — cross-fade between views */}
          <div className="relative" style={{ aspectRatio: "16/9" }}>
            {views.map((view, i) => (
              <div
                key={view.src}
                className="absolute inset-0 overflow-hidden"
                style={{
                  opacity: i === active ? 1 : 0,
                  transition: "opacity 0.35s ease",
                  pointerEvents: i === active ? "auto" : "none",
                }}
              >
                <Image
                  src={view.src}
                  alt={view.alt}
                  width={view.width}
                  height={view.height}
                  className="w-full h-full object-cover object-top"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnails — flat, not tilted */}
      <div className="grid grid-cols-3 gap-2.5">
        {views.map((view, i) => (
          <button
            key={view.src}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            aria-label={`Mostrar ${view.label}`}
            className="relative overflow-hidden rounded-xl focus:outline-none"
            style={{
              height: 100,
              border: `2px solid ${i === active ? "#4b8afe" : "transparent"}`,
              boxShadow: i === active
                ? "0 0 0 1px rgba(75,138,254,0.2), 0 8px 20px -6px rgba(0,0,0,0.18)"
                : "0 0 0 1px #e2e8f0, 0 2px 8px -2px rgba(0,0,0,0.06)",
              transition: "border-color 0.2s ease, box-shadow 0.2s ease",
              cursor: i === active ? "default" : "pointer",
            }}
          >
            <Image
              src={view.src}
              alt={view.alt}
              width={view.width}
              height={view.height}
              className="w-full h-full object-cover object-top"
              style={{
                opacity: i === active ? 1 : 0.72,
                transition: "opacity 0.2s ease",
              }}
            />
            <div
              className="absolute bottom-0 inset-x-0 px-2 pb-1.5 pt-4"
              style={{
                background: "linear-gradient(to top, rgba(8,13,24,0.72) 0%, transparent 100%)",
              }}
            >
              <span className="text-[10px] font-semibold text-white/90 tracking-wide">
                {view.label}
              </span>
            </div>
            {i === active && (
              <div
                className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full"
                style={{ background: "#4b8afe" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
