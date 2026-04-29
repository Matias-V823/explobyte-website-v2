"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const ROW_1 = [
  "React", "Next.js", "TypeScript", "Python", "Node.js",
  "FastAPI", "PostgreSQL", "Docker", "AWS", "Redis",
];

const ROW_2 = [
  "Vue.js", "JavaScript", "Go", "Flutter", "React Native",
  "MongoDB", "Kubernetes", "LangChain", "OpenAI", "GraphQL",
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden w-full" aria-hidden="true">
      <div
        className="flex whitespace-nowrap"
        style={{
          gap: "clamp(32px, 5vw, 64px)",
          width: "max-content",
          animation: `${reverse ? "marquee-right" : "marquee-left"} 60s linear infinite`,
        }}
      >
        {doubled.map((tech, i) => (
          <span
            key={i}
            className="font-bold leading-none select-none"
            style={{
              fontSize: "clamp(38px, 5.5vw, 68px)",
              color: i < items.length ? "#c2cfe0" : "#d3dde9",
              fontFamily: "var(--font-robert)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TechStackSection() {
  const headRef = useScrollReveal<HTMLDivElement>({ y: 24 });

  return (
    <section className="py-28 overflow-hidden" style={{ background: "#f8fafc" }}>
      {/* Header */}
      <div ref={headRef} className="text-center px-6 mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-5"
          style={{ color: "#0f172a", lineHeight: 1.15 }}
        >
          Sí, cubrimos el stack tecnológico
          <br />
          que tu proyecto necesita
          <span style={{ color: "#4b8afe" }}>.</span>
        </h2>
        <p
          className="text-lg max-w-3xl mx-auto leading-relaxed"
          style={{ color: "#64748b" }}
        >
          Contamos con amplia experiencia en más de 20 tecnologías y lenguajes de programación, complementada con el uso de herramientas de inteligencia artificial que están redefiniendo la creación de soluciones digitales.
        </p>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-5">
        <MarqueeRow items={ROW_1} />
        <MarqueeRow items={ROW_2} reverse />
      </div>
    </section>
  );
}
