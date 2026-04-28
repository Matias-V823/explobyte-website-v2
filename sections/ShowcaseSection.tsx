"use client";

import { useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { registerGSAP, gsap, ScrollTrigger } from "@/lib/gsap";

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
  const headRef   = useScrollReveal<HTMLDivElement>({ y: 30 });
  const infoRef   = useScrollReveal<HTMLDivElement>({ y: 40, delay: 0.15 });
  const sectionRef = useRef<HTMLElement>(null);
  const mockupRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!mockupRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(mockupRef.current,
        { y: 60, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true } }
      );
      gsap.to(mockupRef.current, { y: -8, duration: 4.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="proyectos" ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
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
          <div ref={mockupRef} aria-label="Vista previa del sistema Explo">
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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {[
                { label: "Propiedades", val: "500+", color: "#4b8afe" },
                { label: "Usuarios activos", val: "80+",  color: "#3e71d0" },
                { label: "Uptime",          val: "99.9%", color: "#315aa5" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold" style={{ color: s.color }}>{s.val}</div>
                  <div className="text-xs text-ink-4 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {["React","TypeScript","FastAPI","PostgreSQL","Docker","AWS"].map((t) => (
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

function ExploBrowserMockup() {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-[#d2e2ff] shadow-2xl"
      style={{ background: "linear-gradient(145deg, #152747 0%, #0f172a 100%)",
               boxShadow: "0 32px 64px -12px rgba(75,138,254,0.18), 0 0 0 1px rgba(75,138,254,0.12)" }}>

      {/* Chrome */}
      <div className="h-10 border-b border-white/10 flex items-center px-4 gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-rose-400/80" />
          <div className="w-3 h-3 rounded-full bg-amber-400/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-1 w-56">
            <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
            <span className="text-[11px] text-white/30">app.explo.cl</span>
          </div>
        </div>
        <div className="w-16" />
      </div>

      {/* Layout */}
      <div className="flex" style={{ height: 420 }}>
        {/* Sidebar */}
        <div className="w-48 border-r border-white/10 flex flex-col">
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-xs">E</span>
              </div>
              <div>
                <div className="text-white text-xs font-semibold">Explo</div>
                <div className="text-white/30 text-[10px]">Admin</div>
              </div>
            </div>
          </div>
          <nav className="flex-1 p-3 space-y-0.5">
            {[
              { label: "Dashboard",    active: true,  d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2" },
              { label: "Propiedades",  active: false, d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { label: "Contactos",    active: false, d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" },
              { label: "Calendario",   active: false, d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
              { label: "Tareas",       active: false, d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
            ].map((item) => (
              <div key={item.label} className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[11px] font-medium ${
                item.active ? "bg-blue-500/20 text-blue-400 border border-blue-500/25" : "text-white/35 hover:text-white/60"
              }`}>
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.d} />
                </svg>
                {item.label}
              </div>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 overflow-hidden space-y-3">
          <div className="flex items-end justify-between mb-4">
            <div>
              <div className="text-white font-bold text-base">Buenos días, Carlos</div>
              <div className="text-white/30 text-[11px]">Lunes, 28 de Abril 2026</div>
            </div>
            <div className="flex items-center gap-2 text-[11px] px-3 py-1.5 rounded-lg font-medium"
              style={{ background: "rgba(75,138,254,0.15)", border: "1px solid rgba(75,138,254,0.25)", color: "#78a7fe" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Sistema activo
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Ingresos",    val: "$84,200", sub: "+12.4%", color: "#4b8afe" },
              { label: "Propiedades", val: "142",     sub: "38 en arriendo", color: "#78a7fe" },
              { label: "Ocupación",   val: "94.2%",   sub: "↑ 3.1%",  color: "#aecaff" },
            ].map((k) => (
              <div key={k.label} className="rounded-xl p-3" style={{ background: `${k.color}0c`, border: `1px solid ${k.color}20` }}>
                <div className="text-[9px] text-white/30 mb-1">{k.label}</div>
                <div className="text-sm font-bold mb-0.5" style={{ color: k.color }}>{k.val}</div>
                <div className="text-[9px] text-white/25">{k.sub}</div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="text-[9px] text-white/30 mb-2">Ingresos — 12 meses</div>
              <div className="flex items-end gap-0.5 h-14">
                {[42,58,51,74,68,82,90,71,83,88,79,100].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm" style={{
                    height: `${h}%`,
                    background: i === 11 ? "linear-gradient(to top, #4b8afe, #aecaff)"
                               : i >= 9   ? "rgba(75,138,254,0.3)"
                                           : "rgba(255,255,255,0.07)",
                  }} />
                ))}
              </div>
            </div>

            <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="text-[9px] text-white/30 mb-2">Estado propiedades</div>
              <div className="space-y-2 mt-2">
                {[
                  { label: "Arrendadas",  pct: 75, color: "#4b8afe" },
                  { label: "Disponibles", pct: 15, color: "#78a7fe" },
                  { label: "Mantención", pct: 10, color: "#aecaff" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="flex justify-between text-[9px] text-white/25 mb-1">
                      <span>{s.label}</span><span>{s.pct}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-white/10">
                      <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="px-3 py-2 border-b border-white/10 text-[10px] text-white/40 font-medium">Propiedades recientes</div>
            <div className="divide-y divide-white/5">
              {[
                { name: "Apto. Las Condes 203", type: "Depto",    status: "Arrendado",  income: "$850k"  },
                { name: "Casa Ñuñoa Norte",      type: "Casa",     status: "Disponible", income: "$1.2M"  },
                { name: "Local Providencia",     type: "Comercial",status: "Arrendado",  income: "$980k"  },
              ].map((p) => (
                <div key={p.name} className="px-3 py-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md shrink-0" style={{ background: "rgba(75,138,254,0.15)" }} />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] text-white/70 truncate">{p.name}</div>
                    <div className="text-[9px] text-white/25">{p.type}</div>
                  </div>
                  <div className="text-[9px] px-2 py-0.5 rounded-full" style={{
                    background: p.status === "Arrendado" ? "rgba(75,138,254,0.15)" : "rgba(120,167,254,0.15)",
                    color: p.status === "Arrendado" ? "#78a7fe" : "#aecaff",
                    border: `1px solid ${p.status === "Arrendado" ? "rgba(75,138,254,0.25)" : "rgba(120,167,254,0.25)"}`,
                  }}>
                    {p.status}
                  </div>
                  <div className="text-[10px] text-white/50 font-medium ml-1">{p.income}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
