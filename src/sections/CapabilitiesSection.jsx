import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { Card, CardContent } from "../components/ui";
import { capabilities, fadeUp } from "../data/siteData";

export default function CapabilitiesSection() {
  return (
    <section id="capacidades" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <SectionTitle
          eyebrow="Capacidades"
          title="Una propuesta de valor orientada a ejecución, respaldo y continuidad operativa."
          text="Trabajamos con criterio técnico, atención profesional y presentación corporativa."
          align="center"
        />
      </motion.div>

      <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-3">
        {capabilities.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="h-full"
            >
              <Card className="h-full rounded-[2rem] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}