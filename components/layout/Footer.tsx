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
        <img src="logo_explobyte_negro.png" alt="logo-explobyte" className="w-50 h-40 m-0"/>

            <p className="text-[#64748b] text-sm leading-relaxed max-w-xs">
              Construimos software que transforma negocios. Calidad,
              velocidad y atención al detalle en cada proyecto.
            </p>
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
        </div>
      </div>
    </footer>
  );
}
