"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ─── Data ─────────────────────────────────────────────────────── */
const services = [
  {
    path: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Desarrollo Web",
    description:
      "Creamos plataformas web de alto rendimiento diseñadas para escalar con tu negocio. Nuestro equipo de expertos garantiza soluciones robustas, seguras y optimizadas que generan resultados tangibles desde el primer día.",
    benefits: [
      "Arquitecturas escalables que crecen con tu empresa",
      "Rendimiento optimizado y posicionamiento SEO avanzado",
      "Equipo certificado con amplia experiencia en proyectos web",
    ],
    color: "#4b8afe",
  },
  {
    path: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    title: "Desarrollo Móvil",
    description:
      "Llevamos tu negocio al dispositivo de tus clientes con aplicaciones que destacan por su fluidez y usabilidad. Contamos con especialistas en desarrollo móvil que transforman ideas en productos de alto impacto.",
    benefits: [
      "Apps nativas e híbridas para iOS y Android",
      "Experiencias de usuario intuitivas que fidelizan clientes",
      "Soporte y mantenimiento continuo post-lanzamiento",
    ],
    color: "#3e71d0",
  },
  {
    path: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "APIs e Integraciones",
    description:
      "Conectamos tus sistemas y plataformas para que tu negocio opere de manera unificada y eficiente. Nuestros expertos en backend diseñan integraciones confiables que eliminan silos de información y aceleran la operación.",
    benefits: [
      "Integración con cualquier sistema o plataforma existente",
      "Alta disponibilidad con SLAs garantizados",
      "Seguridad robusta en cada punto de conexión",
    ],
    color: "#315aa5",
  },
  {
    path: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Automatización",
    description:
      "Liberamos el potencial de tu equipo eliminando tareas repetitivas con flujos de trabajo inteligentes. Nuestros especialistas identifican oportunidades de mejora y diseñan soluciones que reducen costos operacionales de forma medible.",
    benefits: [
      "Reducción significativa de errores y tiempos de proceso",
      "Flujos personalizados adaptados a tu operación",
      "ROI medible desde el primer mes de implementación",
    ],
    color: "#4b8afe",
  },
  {
    path: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    title: "UX / UI Design",
    description:
      "Diseñamos experiencias digitales que conectan con tus usuarios y fortalecen la identidad de tu marca. Nuestro equipo de diseñadores especializados crea interfaces que no solo se ven bien, sino que convierten y retienen.",
    benefits: [
      "Diseño centrado en el usuario respaldado por investigación",
      "Sistemas de diseño escalables y consistentes",
      "Prototipado y validación antes del desarrollo",
    ],
    color: "#3e71d0",
  },
  {
    path: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    title: "Cloud & DevOps",
    description:
      "Gestionamos tu infraestructura en la nube con los más altos estándares de disponibilidad y seguridad. Nuestros ingenieros certificados aseguran que tu aplicación esté siempre operativa y lista para escalar cuando lo necesites.",
    benefits: [
      "Infraestructura resiliente con alta disponibilidad garantizada",
      "Despliegues continuos sin interrupciones del servicio",
      "Monitoreo 24/7 y respuesta proactiva ante incidentes",
    ],
    color: "#315aa5",
  },
  {
    path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Reportabilidad",
    description:
      "Transformamos tus datos en información estratégica para que tomes decisiones basadas en evidencia. Nuestro equipo de analistas diseña dashboards y reportes que revelan el verdadero potencial de tu negocio.",
    benefits: [
      "Dashboards ejecutivos con métricas clave en tiempo real",
      "Integración con múltiples fuentes de datos",
      "Capacitación y soporte continuo para tu equipo analítico",
    ],
    color: "#315aa5",
  },
];

/* ─── Shared helpers ────────────────────────────────────────────── */
function Icon({ path }: { path: string }) {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={path} />
    </svg>
  );
}

function BenefitsList({ benefits, color }: { benefits: string[]; color: string }) {
  return (
    <div className="space-y-2">
      {benefits.map((benefit, i) => (
        <div key={i} className="flex items-start gap-2.5">
          <div
            className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
            style={{ background: `${color}18` }}
          >
            <svg
              className="w-2.5 h-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-[11px] text-gray-600 leading-relaxed">{benefit}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Desktop: MacBook ──────────────────────────────────────────── */
function MacBookView() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Lid */}
      <div
        className="relative bg-[#1d1d1f] rounded-t-[20px] rounded-b-[3px] p-3.5 pb-2.5"
        style={{
          boxShadow:
            "0 50px 100px -20px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06) inset",
        }}
      >
        {/* Camera */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.75 h-1.75 rounded-full bg-[#2c2c2e] border border-[#3a3a3c]" />

        {/* Screen */}
        <div className="rounded-lg overflow-hidden" style={{ aspectRatio: "16/10" }}>
          <div
            className="w-full h-full flex flex-col"
            style={{ background: "linear-gradient(145deg, #0f1b35 0%, #162440 50%, #0d1929 100%)" }}
          >
            {/* macOS Menu bar */}
            <div
              className="h-6 flex items-center px-3 shrink-0 gap-4 border-b border-white/5"
              style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(12px)" }}
            >
              <svg className="w-2.5 h-2.5 fill-white/75 shrink-0" viewBox="0 0 814 1000">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-155.8-109.4c-48.7-68.7-88.8-176.9-88.8-280.2 0-188.6 123.4-288.2 244.6-288.2 64.2 0 117.8 42.7 158.4 42.7 38.7 0 100-45 176.3-45 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
              </svg>
              <div className="flex gap-3 text-[10px] text-white/80">
                <span className="font-semibold">Explobyte</span>
                <span className="text-white/40">Archivo</span>
                <span className="text-white/40">Editar</span>
                <span className="text-white/40">Vista</span>
              </div>
              <div className="ml-auto flex items-center gap-2 text-white/50 text-[10px]">
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
                <span>9:41</span>
              </div>
            </div>

            {/* Desktop */}
            <div className="flex-1 p-2.5 min-h-0">
              {/* Window */}
              <div
                className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col"
                style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.55)" }}
              >
                {/* Title bar */}
                <div className="h-9 bg-[#ebebeb] border-b border-gray-300/60 flex items-center px-3 shrink-0 relative">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d6a01d]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
                  </div>
                  <span className="absolute left-1/2 -translate-x-1/2 text-[11px] text-gray-400 font-medium tracking-tight">
                    Servicios — Explobyte
                  </span>
                  <div className="ml-auto flex items-center gap-2 text-gray-400">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 min-h-0">
                  {/* Sidebar */}
                  <div className="w-44 bg-[#f2f2f2] border-r border-gray-200/80 flex flex-col shrink-0 overflow-y-auto">
                    <div className="px-3 pt-3 pb-1 text-[9px] uppercase font-semibold text-gray-400 tracking-widest shrink-0">
                      Servicios
                    </div>
                    <div className="flex flex-col gap-0.5 px-1.5 pb-2">
                      {services.map((service, i) => (
                        <button
                          key={service.title}
                          onClick={() => setActive(i)}
                          className={`flex items-center gap-2 px-2 py-1.75 rounded-md text-left w-full transition-all duration-150 cursor-pointer ${
                            active === i
                              ? "bg-blue-500 text-white shadow-sm"
                              : "text-gray-600 hover:bg-gray-300/50"
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 shrink-0"
                            style={{ color: active === i ? "white" : service.color }}
                          >
                            <Icon path={service.path} />
                          </span>
                          <span className="text-[11px] font-medium truncate leading-tight">
                            {service.title}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Content pane */}
                  <div className="flex-1 overflow-y-auto bg-white min-w-0">
                    <div
                      key={active}
                      className="p-5 flex flex-col gap-4"
                      style={{ animation: "macContentIn 0.3s ease forwards" }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center p-2.5 shrink-0"
                          style={{
                            background: `${s.color}14`,
                            border: `1px solid ${s.color}28`,
                            color: s.color,
                          }}
                        >
                          <Icon path={s.path} />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 leading-tight">{s.title}</h3>
                        </div>
                      </div>

                      <p
                        className="text-[11px] text-gray-500 leading-relaxed border-l-2 pl-3"
                        style={{ borderColor: `${s.color}50` }}
                      >
                        {s.description}
                      </p>

                      <div
                        className="rounded-xl p-3.5"
                        style={{ background: `${s.color}06`, border: `1px solid ${s.color}14` }}
                      >
                        <p className="text-[9px] uppercase font-semibold tracking-widest mb-2.5" style={{ color: s.color }}>
                          Por qué elegirnos
                        </p>
                        <BenefitsList benefits={s.benefits} color={s.color} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hinge */}
      <div
        className="h-0.75 mx-px"
        style={{ background: "linear-gradient(to bottom, #2a2a2a, #181818)" }}
      />

      {/* Base */}
      <div
        className="relative rounded-b-[10px] h-9 overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #cfcfd1, #b8b8ba)" }}
      >
        <div
          className="absolute inset-x-8 top-1.5 bottom-2 rounded-sm opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 1px, transparent 1px, transparent 8px)",
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-20 rounded-b"
          style={{ background: "rgba(0,0,0,0.12)" }}
        />
        <div
          className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-4.5 rounded"
          style={{
            background: "linear-gradient(to bottom, #c2c2c4, #adadaf)",
            border: "1px solid rgba(0,0,0,0.18)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
          }}
        />
      </div>

      {/* Bottom edge */}
      <div
        className="h-1.25 rounded-b-2xl mx-2"
        style={{ background: "linear-gradient(to bottom, #9a9a9c, #8a8a8c)" }}
      />
    </div>
  );
}

/* ─── Mobile: iPhone ────────────────────────────────────────────── */
function IPhoneView() {
  const [view, setView]   = useState<"list" | "detail">("list");
  const [active, setActive] = useState(0);
  const [dir, setDir]     = useState<"forward" | "back">("forward");
  const s = services[active];

  function openDetail(i: number) {
    setDir("forward");
    setActive(i);
    setView("detail");
  }

  function goBack() {
    setDir("back");
    setView("list");
  }

  const animStyle = {
    animation: `${dir === "forward" ? "slideFromRight" : "slideFromLeft"} 0.28s ease forwards`,
  };

  return (
    <div className="max-w-70 w-full mx-auto">
      {/* iPhone body */}
      <div
        className="relative bg-[#1d1d1f] rounded-[44px] p-3"
        style={{
          boxShadow:
            "0 50px 100px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07) inset",
        }}
      >
        {/* Volume buttons (left) */}
        <div className="absolute -left-1 top-27 w-1 h-7 bg-[#2c2c2e] rounded-l-md" />
        <div className="absolute -left-1 top-37 w-1 h-7 bg-[#2c2c2e] rounded-l-md" />
        <div className="absolute -left-1 top-47 w-1 h-7 bg-[#2c2c2e] rounded-l-md" />
        {/* Power button (right) */}
        <div className="absolute right-1 top-35 w-1 h-14 bg-[#2c2c2e] rounded-r-md" />

        {/* Screen */}
        <div
          className="bg-[#f2f2f7] rounded-[34px] overflow-hidden flex flex-col"
          style={{ aspectRatio: "9/19" }}
        >
          {/* Dynamic Island + status bar */}
          <div className="relative bg-[#f2f2f7] pt-3 pb-1 px-5 flex items-end shrink-0">
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-22.5 h-7 bg-black rounded-full" />
            <span className="text-[12px] font-semibold text-black relative z-10">9:41</span>
            <div className="ml-auto flex items-center gap-1 relative z-10">
              {/* Signal */}
              <svg className="w-3 h-3 fill-black" viewBox="0 0 17 12">
                <rect x="0" y="8" width="3" height="4" rx="0.5" />
                <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5" />
                <rect x="9" y="3" width="3" height="9" rx="0.5" />
                <rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="0.3" />
              </svg>
              {/* Wifi */}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
                <path strokeLinecap="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
              {/* Battery */}
              <div className="flex items-center gap-0.5">
                <div className="w-5 h-2.5 rounded-xs border border-black/60 relative flex items-center px-0.5">
                  <div className="h-1.5 w-[70%] bg-black rounded-[1px]" />
                </div>
                <div className="w-0.5 h-1.5 bg-black/40 rounded-r-[1px]" />
              </div>
            </div>
          </div>

          {/* Navigation bar */}
          <div className="h-11 bg-white/90 border-b border-gray-200/70 flex items-center px-4 relative shrink-0"
               style={{ backdropFilter: "blur(12px)" }}>
            {view === "detail" && (
              <button
                onClick={goBack}
                className="flex items-center gap-0.5 text-[#007aff] text-[10px] font-normal cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Volver
              </button>
            )}
            <span className="absolute left-1/2 -translate-x-1/2 text-[10px] font-semibold pointer-events-none">
              {view === "list" ? "Servicios" : s.title}
            </span>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto overscroll-contain min-h-0">
            {view === "list" ? (
              <div key="list" className="p-3" style={animStyle}>
                {/* Section label */}
                <p className="text-[10px] uppercase text-gray-400 font-semibold px-2 mb-1.5 tracking-wider">
                  Nuestros servicios
                </p>
                {/* Grouped card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-100">
                  {services.map((service, i) => (
                    <button
                      key={service.title}
                      onClick={() => openDetail(i)}
                      className="w-full flex items-center gap-3 px-4 py-3.5 text-left active:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center p-2 shrink-0"
                        style={{ background: `${service.color}14`, color: service.color }}
                      >
                        <Icon path={service.path} />
                      </div>
                      <span className="flex-1 text-[10px]">
                        {service.title}
                      </span>
                      <svg className="w-3.5 h-3.5 text-gray-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div key={`detail-${active}`} className="p-3 space-y-2.5" style={animStyle}>
                {/* Hero card */}
                <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
                  <div
                    className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center p-3.5"
                    style={{ background: `${s.color}12`, color: s.color }}
                  >
                    <Icon path={s.path} />
                  </div>
                  <h3 className="text-[17px] font-semibold text-black mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{s.description}</p>
                </div>

                {/* Benefits */}
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <p className="text-[11px] uppercase text-gray-400 font-semibold mb-2.5 tracking-wider">
                    Por qué elegirnos
                  </p>
                  <div className="space-y-2.5">
                    {s.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: `${s.color}15` }}
                        >
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            style={{ color: s.color }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[13px] text-gray-600 leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pagination dots */}
                <div className="flex justify-center gap-1.5 pt-1 pb-2">
                  {services.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => openDetail(i)}
                      className="rounded-full transition-all duration-200 cursor-pointer"
                      style={{
                        width: i === active ? 16 : 6,
                        height: 6,
                        background: i === active ? s.color : "#d1d5db",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Home indicator */}
          <div className="flex justify-center py-2 bg-[#f2f2f7] shrink-0">
            <div className="w-25 h-1 bg-black/20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────────── */
export function ServicesSection() {
  const headRef   = useScrollReveal<HTMLDivElement>({ y: 30 });
  const deviceRef = useScrollReveal<HTMLDivElement>({ y: 60 });

  return (
    <section id="servicios" className="py-32 bg-[#f6f9ff] relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse, rgba(75,138,254,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div ref={headRef} className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-500 uppercase mb-4 block">
            Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6">
            Todo lo que necesitas
            <br />
            <span className="gradient-text">en un solo equipo</span>
          </h2>
          <p className="text-ink-3 text-lg max-w-2xl mx-auto leading-relaxed">
            Contamos con profesionales especializados en cada área para acompañarte
            desde la estrategia hasta la entrega, con resultados que impulsan tu negocio.
          </p>
        </div>

        {/* Device — MacBook on ≥md, iPhone on <md */}
        <div ref={deviceRef}>
          <div className="hidden md:block">
            <MacBookView />
          </div>
          <div className="md:hidden flex justify-center">
            <IPhoneView />
          </div>
        </div>
      </div>
    </section>
  );
}
