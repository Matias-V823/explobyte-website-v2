"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";


function GlyphPeople() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
      <circle cx="20" cy="20" r="4" stroke="#4b8afe" strokeWidth="1.2" />
      <circle cx="20" cy="20" r="9" stroke="#4b8afe" strokeWidth="0.7" strokeDasharray="2.5 2.5" />
      <circle cx="20" cy="20" r="14" stroke="#d2e2ff" strokeWidth="0.7" />
      <circle cx="20" cy="6" r="1.5" fill="#4b8afe" />
      <circle cx="34" cy="20" r="1.5" fill="#4b8afe" />
      <circle cx="20" cy="34" r="1.5" fill="#4b8afe" />
      <circle cx="6" cy="20" r="1.5" fill="#4b8afe" />
    </svg>
  );
}

function GlyphTeam() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
      <circle cx="14" cy="20" r="8" stroke="#4b8afe" strokeWidth="1" />
      <circle cx="26" cy="20" r="8" stroke="#4b8afe" strokeWidth="1" />
      <path d="M20 13 Q24 20 20 27 Q16 20 20 13Z" fill="#4b8afe" fillOpacity="0.15" />
      <line x1="14" y1="8" x2="14" y2="4" stroke="#d2e2ff" strokeWidth="0.8" />
      <line x1="26" y1="8" x2="26" y2="4" stroke="#d2e2ff" strokeWidth="0.8" />
      <line x1="14" y1="32" x2="14" y2="36" stroke="#d2e2ff" strokeWidth="0.8" />
      <line x1="26" y1="32" x2="26" y2="36" stroke="#d2e2ff" strokeWidth="0.8" />
    </svg>
  );
}

function GlyphPlace() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
      {[8, 16, 24, 32].map((x) =>
        [8, 16, 24, 32].map((y) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.2"
            fill={x === 20 && y === 20 ? "#4b8afe" : "#d2e2ff"} />
        ))
      )}
      <circle cx="20" cy="20" r="1.2" fill="#4b8afe" />
      <line x1="20" y1="20" x2="8" y2="8" stroke="#4b8afe" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="20" y1="20" x2="32" y2="8" stroke="#4b8afe" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="20" y1="20" x2="8" y2="32" stroke="#4b8afe" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="20" y1="20" x2="32" y2="32" stroke="#4b8afe" strokeWidth="0.8" strokeOpacity="0.5" />
    </svg>
  );
}

function GlyphTime() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
      <path d="M4 20 Q10 10 16 20 Q22 30 28 20 Q34 10 40 20"
        stroke="#4b8afe" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M4 26 Q10 16 16 26 Q22 36 28 26 Q34 16 40 26"
        stroke="#d2e2ff" strokeWidth="0.7" strokeLinecap="round" />
      <circle cx="16" cy="20" r="2" fill="#4b8afe" />
      <circle cx="28" cy="20" r="2" fill="#4b8afe" />
      <circle cx="4" cy="20" r="1.2" fill="#d2e2ff" />
      <circle cx="40" cy="20" r="1.2" fill="#d2e2ff" />
    </svg>
  );
}

const features = [
  {
    index: "01",
    title: "Las personas correctas",
    description:
      "Nuestro riguroso proceso de selección asegura que solo los candidatos más calificados, con dominio en IA, formen parte del equipo.",
    glyph: <GlyphPeople />,
  },
  {
    index: "02",
    title: "El equipo correcto",
    description:
      "Desde ingenieros individuales hasta equipos multi-proyecto. Opciones de gestión flexibles que se adaptan a tu negocio.",
    glyph: <GlyphTeam />,
  },
  {
    index: "03",
    title: "El lugar correcto",
    description:
      "Nuestros equipos están disponibles cuando tú lo necesitas. Comunicación clara, directa y sin barreras.",
    glyph: <GlyphPlace />,
  },
  {
    index: "04",
    title: "El momento correcto",
    description:
      "Equipos que arrancan cuando los necesitas. Escala hacia arriba o hacia abajo con total facilidad.",
    glyph: <GlyphTime />,
  },
];

const roles = [
  {
    label: "Desarrolladores\nde software",
    icon: (
      <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    offset: 0,
  },
  {
    label: "Ingenieros\nde QA",
    icon: (
      <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    offset: -16,
  },
  {
    label: "Diseñadores\nUX / UI",
    icon: (
      <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    offset: -32,
  },
  {
    label: "Científicos\nde datos",
    icon: (
      <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    offset: -16,
  },
  {
    label: "Gestores\nde proyecto",
    icon: (
      <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
      </svg>
    ),
    offset: 0,
  },
];

export function UsSection() {
  const headRef = useScrollReveal<HTMLDivElement>({ y: 30 });
  const gridRef = useScrollReveal<HTMLDivElement>({ y: 32, stagger: 0.1 });
  const rolesRef = useScrollReveal<HTMLDivElement>({ y: 50, stagger: 0.1, delay: 0.1 });

  return (
    <section id="nosotros" className="py-32 relative overflow-hidden" style={{ background: "#f6f9ff" }}>
      {/* Subtle background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-120 rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse, rgba(75,138,254,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div ref={headRef} className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-500 uppercase mb-4 block">
            Nosotros
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
            style={{ color: "#0f172a" }}
          >
            Sin dudas.
            <br />
            Trabajar con nosotros es una experiencia excelente
            <span style={{ color: "#4b8afe" }}>.</span>
          </h2>
        </div>

        {/* Feature strips */}
        <div ref={gridRef} className="mb-24">
          {features.map((f, i) => (
            <div key={f.index}>
              {i === 0 && <div className="w-full h-px" style={{ background: "#e2e8f0" }} />}
              <div
                className="group flex items-center gap-6 md:gap-10 py-7 pl-0 pr-2 relative transition-all duration-200 cursor-default"
                style={{ borderLeft: "2px solid transparent" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = "#4b8afe";
                  (e.currentTarget as HTMLDivElement).style.paddingLeft = "20px";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(75,138,254,0.02)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = "transparent";
                  (e.currentTarget as HTMLDivElement).style.paddingLeft = "0px";
                  (e.currentTarget as HTMLDivElement).style.background = "transparent";
                }}
              >
                {/* Ordinal */}
                <span
                  className="shrink-0 font-bold leading-none select-none transition-colors duration-200 group-hover:text-blue-500"
                  style={{
                    fontFamily: "var(--font-robert)",
                    fontSize: "clamp(32px, 4vw, 52px)",
                    color: "#d2e2ff",
                    minWidth: "3.5rem",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {f.index}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p
                    className="font-bold text-ink mb-1.5 leading-snug"
                    style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}
                  >
                    {f.title}
                  </p>
                  <p className="text-ink-3 text-sm leading-relaxed max-w-lg">
                    {f.description}
                  </p>
                </div>

                {/* Glyph */}
                <div className="hidden md:flex shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                  {f.glyph}
                </div>
              </div>
              <div className="w-full h-px" style={{ background: "#e2e8f0" }} />
            </div>
          ))}
        </div>

        {/* Roles row */}
        <div
          ref={rolesRef}
          className="flex flex-wrap justify-center gap-6 md:gap-0 md:justify-between items-end"
        >
          {roles.map((role) => (
            <div
              key={role.label}
              className="flex flex-col items-center gap-4"
              style={{ transform: `translateY(${role.offset}px)` }}
            >
              {/* Icon circle */}
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center relative"
                style={{
                  background: "linear-gradient(145deg, #e8f0ff 0%, #dce8ff 100%)",
                  border: "2px solid #d2e2ff",
                  color: "#4b8afe",
                }}
              >
                {role.icon}
                {/* Decorative ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: "0 8px 32px rgba(75,138,254,0.15)",
                  }}
                />
              </div>

              {/* Role label */}
              <p
                className="text-center text-xs font-semibold leading-snug whitespace-pre-line"
                style={{ color: "#64748b" }}
              >
                {role.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
