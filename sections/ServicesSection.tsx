"use client";

import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas con React, Next.js y Node.js. Rendimiento óptimo, SEO avanzado y arquitecturas escalables.",
    tags: ["React", "Next.js", "TypeScript"],
    shade: "#4b8afe",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Desarrollo Móvil",
    description: "Apps nativas e híbridas para iOS y Android con React Native y Expo. Experiencias fluidas en todos los dispositivos.",
    tags: ["React Native", "Expo", "iOS/Android"],
    shade: "#3e71d0",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "APIs e Integraciones",
    description: "APIs REST y GraphQL robustas, integraciones con servicios de terceros, sistemas de pago y plataformas externas.",
    tags: ["REST", "GraphQL", "Webhooks"],
    shade: "#315aa5",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Automatización",
    description: "Flujos de trabajo automatizados, bots y pipelines que eliminan tareas repetitivas y optimizan procesos internos.",
    tags: ["n8n", "Python", "Bots"],
    shade: "#4b8afe",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "UX / UI Design",
    description: "Interfaces modernas centradas en el usuario. Sistemas de diseño, prototipos interactivos y experiencias que convierten.",
    tags: ["Figma", "Design Systems", "Prototipado"],
    shade: "#3e71d0",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud & DevOps",
    description: "Infraestructura en AWS, GCP y Vercel. CI/CD, Docker, Kubernetes y monitoreo para máxima disponibilidad y escalabilidad.",
    tags: ["AWS", "Docker", "Vercel"],
    shade: "#315aa5",
  },
];

export function ServicesSection() {
  const headRef = useScrollReveal<HTMLDivElement>({ y: 30 });
  const gridRef = useScrollReveal<HTMLDivElement>({ y: 40, stagger: 0.08, selector: ".service-card", start: "top 82%" });

  return (
    <section id="servicios" className="py-32 bg-[#f6f9ff] relative overflow-hidden">
      {/* Subtle bg orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 rounded-full pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse, rgba(75,138,254,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />

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
            Desde la idea hasta el lanzamiento. Cubrimos todo el ciclo de
            desarrollo con tecnologías de vanguardia y metodologías ágiles.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, tags, shade }: (typeof services)[0]) {
  const cardRef = useRef<HTMLDivElement>(null);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = cardRef.current;
    if (!r) return;
    const rect = r.getBoundingClientRect();
    r.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    r.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      className="service-card group relative bg-white border border-border rounded-2xl p-6 overflow-hidden
                 transition-all duration-300 hover:border-[#d2e2ff] hover:shadow-xl"
      style={{ "--shadow-color": `${shade}18` } as React.CSSProperties}
    >
      {/* Mouse-tracked glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{ background: `radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(75,138,254,0.07), transparent 60%)` }} />

      {/* Icon */}
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${shade}12`, border: `1px solid ${shade}22`, color: shade }}>
        {icon}
      </div>

      <h3 className="text-base font-semibold text-ink mb-2.5">{title}</h3>
      <p className="text-ink-3 text-sm leading-relaxed mb-5">{description}</p>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span key={t} className="text-[11px] px-2.5 py-1 rounded-full font-medium"
            style={{ background: `${shade}0e`, color: shade, border: `1px solid ${shade}20` }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
