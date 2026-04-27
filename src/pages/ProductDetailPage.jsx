import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MessageCircle, ShieldCheck } from "lucide-react";
import { Button, Card, CardContent } from "../components/ui";
import products from "../data/products";
import logo from "../assets/logo.png";

export default function ProductDetailPage() {
  const { id } = useParams();
  const PHONE = "56956674596";

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const product = useMemo(() => {
    return products.find((item) => String(item.id) === String(id));
  }, [id]);

  const handleWhatsApp = () => {
    if (!product) return;

    const message = `Hola, me interesa el producto: ${product.nombre}. ¿Podrían entregarme más información, disponibilidad y cotización?`;
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  if (!product) {
    return (
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card className="rounded-[2rem]">
            <CardContent className="p-8 text-center sm:p-10">
              <h1 className="text-3xl font-black text-slate-950">
                Producto no encontrado
              </h1>

              <p className="mt-4 text-slate-600">
                No pudimos encontrar el producto que estás buscando.
              </p>

              <Link
                to="/catalogo"
                className="mt-6 inline-flex min-h-12 items-center rounded-2xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al catálogo
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-160px] top-[20%] w-[420px] opacity-[0.05] grayscale sm:right-[-100px] sm:top-1/2 sm:w-[600px] sm:-translate-y-1/2 sm:opacity-[0.08]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/catalogo"
          className="inline-flex items-center text-sm font-semibold text-slate-600 transition hover:text-red-600"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al catálogo
        </Link>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
          <Card className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="flex h-[320px] items-center justify-center bg-slate-100 p-6 sm:h-[420px] sm:p-10 lg:h-[520px] lg:p-14">
              <img
                src={product.imagen}
                alt={product.nombre}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </Card>

          <div className="flex flex-col">
            <span className="inline-flex w-fit rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
              {product.categoria}
            </span>

            <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {product.nombre}
            </h1>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              {product.descripcionLarga}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-500">Stock</p>
                <p className="mt-2 text-lg font-black text-slate-950">
                  {product.stock}
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-500">Categoría</p>
                <p className="mt-2 text-lg font-black text-slate-950">
                  {product.categoria}
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-500">Precio</p>
                <p className="mt-2 text-lg font-black text-slate-950">
                  {product.precio}
                </p>
              </div>
            </div>

            {product.especificaciones?.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-black text-slate-950">
                  Especificaciones
                </h2>

                <ul className="mt-4 space-y-3 text-slate-600">
                  {product.especificaciones.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                    >
                      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={handleWhatsApp}
                className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-red-600 px-8 text-white shadow-lg shadow-red-200/70 hover:bg-red-700"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Consultar producto</span>
              </Button>

              <Link
                to="/catalogo"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Ver más productos
              </Link>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Atención directa para empresas y operaciones en terreno.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}