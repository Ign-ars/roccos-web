import { motion } from "framer-motion";
import imgMontaje from "../assets/images/4.jpeg";
import imgHidraulica from "../assets/images/17.jpeg";
import imgTuberias from "../assets/images/1.jpeg";
import imgAutomatizacion from "../assets/images/10.jpeg";

export default function ServicesSection() {
  const services = [
    {
      title: "Montaje Industrial",
      description:
        "Ejecución de montajes, instalación de estructuras, estanques y equipos industriales con criterio técnico y operación en terreno.",
      image: imgMontaje,
    },
    {
      title: "Sistemas Hidráulicos",
      description:
        "Implementación, mantenimiento y optimización de sistemas de bombeo, presión y conducción hidráulica para distintas operaciones.",
      image: imgHidraulica,
    },
    {
      title: "Instalación de Tuberías",
      description:
        "Montaje de redes hidráulicas, uniones, líneas de conducción y terminaciones técnicas con foco en calidad y continuidad.",
      image: imgTuberias,
    },
    {
      title: "Automatización y Control",
      description:
        "Integración de tableros, variadores de frecuencia y soluciones orientadas al control operativo y eficiencia del sistema.",
      image: imgAutomatizacion,
    },
  ];

  return (
    <section id="servicios" className="bg-gray-100 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <h2 className="mb-10 text-center text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Nuestros Servicios
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  loading="lazy"
                  alt={service.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-90"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold text-slate-950">
                  {service.title}
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}