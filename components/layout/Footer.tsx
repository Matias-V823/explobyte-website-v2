import { CurrentYear } from "@/components/ui/CurrentYear";

const links = {
  Servicios: [
    "Desarrollo Web",
    "Desarrollo Móvil",
    "APIs e Integraciones",
    "Automatización",
    "UX / UI Design",
    "Cloud & DevOps",
  ],
  Empresa: ["Sobre nosotros", "Proyectos", "Blog técnico", "Contacto"],
  Legal: ["Privacidad", "Términos de uso"],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-ink font-semibold text-lg tracking-tight">
                Explobyte
              </span>
            </div>
            <p className="text-[#64748b] text-sm leading-relaxed max-w-xs">
              Construimos software que transforma negocios. Calidad,
              velocidad y atención al detalle en cada proyecto.
            </p>
            <div className="flex gap-2">
              {[
                { href: "#", label: "GitHub",   path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" },
                { href: "#", label: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
                { href: "#", label: "Twitter",  path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-ink-4 hover:text-blue-500 hover:border-[#d2e2ff] transition-colors duration-200 bg-white">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-ink text-sm font-semibold mb-4">{section}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#64748b] text-sm hover:text-blue-500 transition-colors duration-150">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ink-4 text-xs">
            © <CurrentYear /> Explobyte. Todos los derechos reservados.
          </p>
          <p className="text-ink-4 text-xs">
            Hecho con dedicación en Chile 🇨🇱
          </p>
        </div>
      </div>
    </footer>
  );
}
