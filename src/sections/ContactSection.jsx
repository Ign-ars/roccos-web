import { Mail, MapPin, Phone, Send } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { Button, Card, CardContent, Input, Textarea } from "../components/ui";

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow="Contacto"
              title="Hablemos de tu requerimiento."
              text="Atención directa para empresas, proyectos y operaciones en terreno."
            />

            <div className="mt-8 grid gap-4 sm:mt-10">
              {[
                { icon: Phone, label: "Teléfono", value: "+56 9 5667 4596" },
                { icon: Mail, label: "Correo", value: "srm.mecanic@gmail.com" },
                {
                  icon: MapPin,
                  label: "Cobertura",
                  value: "Región de O’Higgins y alrededores",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <Card
                    key={item.label}
                    className="rounded-3xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.07)]"
                  >
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm text-slate-500">{item.label}</p>
                        <p className="break-words font-bold text-slate-950">
                          {item.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="rounded-[2rem] border border-slate-100 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <CardContent className="p-5 sm:p-8 md:p-10">
              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
                  Solicitud
                </p>

                <h3 className="mt-3 text-3xl font-black text-slate-950">
                  Envíanos tu mensaje
                </h3>

                <p className="mt-3 text-slate-600">
                  Responderemos a la brevedad.
                </p>
              </div>

              <div className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Input placeholder="Nombre" />
                  <Input placeholder="Correo electrónico" />
                </div>

                <Input placeholder="Asunto" />

                <Textarea placeholder="Mensaje" className="min-h-[150px]" />

                <Button className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-red-600 font-bold text-white shadow-lg shadow-red-200/70 transition hover:bg-red-700">
                  <Send className="h-5 w-5" />
                  <span>Enviar mensaje</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}