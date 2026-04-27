import { motion } from "framer-motion";
import heroImage from "../assets/images/2.jpeg";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100vh-88px)] items-center justify-center overflow-hidden px-4 py-20 text-white sm:px-6 lg:min-h-screen"
    >
      <motion.img
        src={heroImage}
        alt="Montaje industrial"
        className="absolute h-full w-full object-cover"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      <div className="absolute h-full w-full bg-black/65 md:bg-black/60" />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl text-center"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-red-500 sm:text-sm sm:tracking-[0.35em]">
          Rocco´s Mantención Industrial
        </p>

        <h1 className="mx-auto max-w-5xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl xl:text-7xl">
          Soluciones industriales en montaje, hidráulica y operación en terreno
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg md:text-xl">
          Desarrollamos soluciones técnicas para empresas que requieren
          ejecución confiable, continuidad operativa y respaldo profesional en
          terreno.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href="/#servicios"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-red-600 px-8 py-3 font-semibold text-white shadow-lg shadow-red-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl hover:shadow-red-900/30"
          >
            Conocer servicios
          </a>

          <p className="max-w-sm text-sm leading-6 text-slate-300">
            Atención directa para empresas y operaciones en terreno
          </p>
        </div>
      </motion.div>
    </section>
  );
}