import { motion } from "framer-motion";
import mainImg from "../assets/images/8.jpeg";
import imgCamion from "../assets/images/servicio-montaje.jpg";
import imgTrabajo from "../assets/images/servicio-instalacion.jpg";
import logo from "../assets/logo.png";

export default function AboutSection() {
  return (
    <section id="empresa" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 w-[520px] -translate-x-1/2 -translate-y-1/2 opacity-[0.045] blur-[0.5px] sm:w-[720px] lg:w-[820px]"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          className="grid grid-cols-2 gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="group col-span-2 overflow-hidden rounded-2xl">
            <img
              src={mainImg}
              loading="lazy"
              className="h-72 w-full rounded-2xl object-cover shadow-xl transition duration-500 group-hover:scale-[1.03] group-hover:brightness-90 sm:h-96"
              alt="Proyecto"
            />
          </div>

          <div className="group overflow-hidden rounded-2xl">
            <img
              src={imgCamion}
              loading="lazy"
              className="h-36 w-full rounded-2xl object-cover shadow-md transition duration-500 group-hover:scale-105 group-hover:brightness-90 sm:h-48"
              alt="Camión empresa"
            />
          </div>

          <div className="group overflow-hidden rounded-2xl">
            <img
              src={imgTrabajo}
              loading="lazy"
              className="h-36 w-full rounded-2xl object-cover shadow-md transition duration-500 group-hover:scale-105 group-hover:brightness-90 sm:h-48"
              alt="Trabajo en terreno"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Sobre Nosotros
            </h2>

            <h3 className="mt-2 text-5xl font-black leading-tight tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Rocco´s
            </h3>

            <p className="mt-1 text-lg font-medium text-slate-600 sm:text-xl">
              Mantención Industrial
            </p>
          </div>

          <p className="mb-4 leading-8 text-slate-600">
            Somos una empresa orientada a la ejecución de soluciones
            industriales en terreno, especializada en montaje, sistemas
            hidráulicos, redes de tuberías y automatización aplicada.
          </p>

          <p className="mb-4 leading-8 text-slate-600">
            Trabajamos con una mirada técnica, operativa y responsable,
            asegurando calidad de ejecución, continuidad de servicio y respuesta
            efectiva frente a requerimientos reales de nuestros clientes.
          </p>

          <p className="leading-8 text-slate-600">
            Contamos con experiencia en proyectos de distinta complejidad,
            personal capacitado y una presentación alineada a estándares
            corporativos, técnicos y de terreno.
          </p>
        </motion.div>
      </div>
    </section>
  );
}