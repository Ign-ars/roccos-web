import { useState } from "react";
import {
  Building2,
  ClipboardList,
  Send,
  User,
} from "lucide-react";
import { Button, Card, CardContent, Input, Textarea } from "../components/ui";

const initialForm = {
  nombre: "",
  empresa: "",
  telefono: "",
  correo: "",
  tipoSolicitud: "",
  urgencia: "",
  productoServicio: "",
  ubicacion: "",
  detalle: "",
  observaciones: "",
};

export default function QuotePage() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (
      !form.nombre ||
      !form.telefono ||
      !form.correo ||
      !form.tipoSolicitud ||
      !form.detalle
    ) {
      setMessage({
        type: "error",
        text: "Completa los campos obligatorios.",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:4000/api/cotizacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al enviar.");
      }

      setMessage({
        type: "success",
        text: "Solicitud enviada correctamente.",
      });

      setForm(initialForm);
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message || "Ocurrió un error.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-600">
            Cotización
          </p>

          <h1 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl md:text-6xl">
            Solicita una cotización técnica
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Completa los datos para evaluar tu requerimiento.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl sm:mt-16">
          <Card className="rounded-[2rem] border border-slate-100 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <CardContent className="p-5 sm:p-8 md:p-10">
              <div className="mb-8 flex items-start gap-4 border-b border-slate-100 pb-8 sm:mb-10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white sm:h-14 sm:w-14">
                  <ClipboardList className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-2xl font-black text-slate-950">
                    Formulario
                  </h2>
                  <p className="mt-2 text-slate-600">
                    Mientras más detalle, mejor respuesta.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-8">
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <User className="h-5 w-5 text-red-600" />
                    <h3 className="text-lg font-black text-slate-950">
                      Datos
                    </h3>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Input
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Nombre *"
                    />
                    <Input
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Empresa"
                    />
                    <Input
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="Teléfono *"
                    />
                    <Input
                      name="correo"
                      type="email"
                      value={form.correo}
                      onChange={handleChange}
                      placeholder="Correo *"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <Building2 className="h-5 w-5 text-red-600" />
                    <h3 className="text-lg font-black text-slate-950">
                      Solicitud
                    </h3>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <select
                      name="tipoSolicitud"
                      value={form.tipoSolicitud}
                      onChange={handleChange}
                      className="h-12 w-full rounded-2xl border border-slate-200 px-4 text-slate-600 outline-none focus:border-red-500"
                    >
                      <option value="">Tipo de solicitud *</option>
                      <option>Compra de producto</option>
                      <option>Cotización de servicio</option>
                      <option>Mantención</option>
                      <option>Montaje</option>
                      <option>Hidráulica</option>
                      <option>Otro</option>
                    </select>

                    <select
                      name="urgencia"
                      value={form.urgencia}
                      onChange={handleChange}
                      className="h-12 w-full rounded-2xl border border-slate-200 px-4 text-slate-600 outline-none focus:border-red-500"
                    >
                      <option value="">Urgencia</option>
                      <option>Normal</option>
                      <option>Prioritario</option>
                      <option>Urgente</option>
                    </select>

                    <Input
                      name="productoServicio"
                      value={form.productoServicio}
                      onChange={handleChange}
                      placeholder="Producto o servicio"
                    />

                    <Input
                      name="ubicacion"
                      value={form.ubicacion}
                      onChange={handleChange}
                      placeholder="Ubicación"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <ClipboardList className="h-5 w-5 text-red-600" />
                    <h3 className="text-lg font-black text-slate-950">
                      Detalle
                    </h3>
                  </div>

                  <Textarea
                    name="detalle"
                    value={form.detalle}
                    onChange={handleChange}
                    placeholder="Describe el requerimiento *"
                    className="min-h-[180px]"
                  />

                  <Textarea
                    name="observaciones"
                    value={form.observaciones}
                    onChange={handleChange}
                    placeholder="Observaciones"
                    className="mt-4 min-h-[120px]"
                  />
                </div>

                {message && (
                  <div
                    className={`rounded-2xl px-5 py-4 text-sm font-semibold ${
                      message.type === "success"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {message.text}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-red-600 text-base font-bold text-white shadow-lg shadow-red-200/70 transition hover:bg-red-700 disabled:opacity-70"
                >
                  <Send className="h-5 w-5" />
                  <span>
                    {loading
                      ? "Enviando..."
                      : "Enviar solicitud de cotización"}
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}