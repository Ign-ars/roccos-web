import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Rocco´s Mantención Industrial"
              className="h-10 w-auto object-contain"
            />
            <div>
              <p className="text-sm font-black text-slate-950">
                Rocco´s Mantención Industrial
              </p>
              <p className="text-sm text-slate-500">
                Montaje, hidráulica y mantenimiento industrial.
              </p>
            </div>
          </div>

          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="transition hover:text-red-600">
              Privacidad
            </a>
            <a href="#" className="transition hover:text-red-600">
              Términos
            </a>
            <a href="#contacto" className="transition hover:text-red-600">
              Contacto
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © 2026 Rocco´s Mantención Industrial. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}