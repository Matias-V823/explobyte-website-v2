"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ButtonLink } from "@/components/ui/Button";

export function CTASection() {
  const ref = useScrollReveal<HTMLDivElement>({ y: 40 });

  return (
    <section id="cta" className="py-32 relative overflow-hidden">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-blue-500" aria-hidden="true" />

      {/* Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-125 h-125 rounded-full opacity-20 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-[-15%] right-[-8%] w-100 h-100 rounded-full opacity-15 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, #aecaff 0%, transparent 70%)", filter: "blur(50px)" }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div ref={ref} className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm font-medium backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Aceptamos nuevos proyectos
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] text-white">
            ¿Listo para construir
            <br />
            algo extraordinario?
          </h2>

          <p className="text-xl text-white/75 leading-relaxed max-w-2xl mx-auto">
            Cuéntanos tu idea. En menos de 24 horas te enviamos una propuesta
            técnica personalizada sin compromisos.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <ButtonLink
              variant="secondary"
              size="lg"
              href="mailto:hola@explobyte.dev"
              className="border-white/30! text-ink! bg-white! hover:bg-white/90! shadow-lg!"
            >
              Hablar con el equipo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </ButtonLink>
            <ButtonLink
              variant="ghost"
              size="lg"
              href="#proyectos"
              className="text-white/80! hover:text-white! border border-white/25 rounded-xl"
            >
              Ver nuestro trabajo
            </ButtonLink>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 pt-12 border-t border-white/15">
            {[
              {
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: "Respuesta en 24h",
                desc: "Primera respuesta garantizada el mismo día hábil",
              },
              {
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                title: "Código de calidad",
                desc: "TypeScript, tests y revisiones de arquitectura incluidas",
              },
              {
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                title: "Entrega ágil",
                desc: "Iteraciones semanales con demos y feedback continuo",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-white/10 border border-white/15 text-left backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <div className="text-white font-semibold text-sm mb-1.5">{item.title}</div>
                <div className="text-white/55 text-xs leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
