import { motion } from "framer-motion";
import img3 from "../assets/images/3.jpeg";
import img7 from "../assets/images/7.jpeg";
import img8 from "../assets/images/8.jpeg";
import img12 from "../assets/images/12.jpeg";
import img18 from "../assets/images/18.jpeg";
import img19 from "../assets/images/19.jpeg";

export default function GallerySection() {
  const images = [
    { src: img3, alt: "Instalación hidráulica en terreno" },
    { src: img7, alt: "Operación y apoyo logístico en terreno" },
    { src: img8, alt: "Sistema de bombeo instalado" },
    { src: img12, alt: "Equipo de presión y componentes hidráulicos" },
    { src: img18, alt: "Sistema de bombeo y tablero de control" },
    { src: img19, alt: "Instalación de estanques y estructura" },
  ];

  return (
    <section className="bg-slate-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400 md:text-sm">
            Respaldo visual
          </p>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Trabajos realizados
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
            Proyectos, instalaciones y trabajos en terreno que reflejan la
            experiencia operativa de Rocco´s Mantención Industrial.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-14 lg:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="group overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                loading="lazy"
                alt={image.alt}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-75 sm:h-64"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}