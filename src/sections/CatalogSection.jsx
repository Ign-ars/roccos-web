import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Filter, Search } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { Button, Card, CardContent, Input } from "../components/ui";
import { fadeUp } from "../data/siteData";
import products from "../data/products";

export default function CatalogSection() {
  const [searchParams] = useSearchParams();
  const searchFromUrl = searchParams.get("buscar") || "";

  const [search, setSearch] = useState(searchFromUrl);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  useEffect(() => {
    setSearch(searchFromUrl);
  }, [searchFromUrl]);

  const categories = useMemo(() => {
    return ["Todos", ...new Set(products.map((item) => item.categoria))];
  }, []);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();

    return products.filter((item) => {
      const matchesSearch =
        !normalizedSearch ||
        item.nombre.toLowerCase().includes(normalizedSearch) ||
        item.categoria.toLowerCase().includes(normalizedSearch) ||
        item.descripcionCorta.toLowerCase().includes(normalizedSearch) ||
        item.descripcionLarga.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        selectedCategory === "Todos" || item.categoria === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <section id="catalogo" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <SectionTitle
            eyebrow="Catálogo"
            title="Productos e insumos técnicos para el área hidráulica y de conducción."
            text="Revisa nuestro catálogo de válvulas, filtros, bombas y productos de nebulización."
          />
        </motion.div>

        <div className="mt-10 flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-[0_10px_35px_rgba(15,23,42,0.04)] sm:p-5 lg:mt-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar producto..."
              className="h-12 border-slate-200 bg-white pl-11"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 rounded-2xl border px-4 ${
                  selectedCategory === category
                    ? "bg-slate-950 text-white hover:bg-red-600"
                    : "border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
                }`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        {search && (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-600">
            Resultado para:{" "}
            <span className="font-black text-slate-950">{search}</span>{" "}
            <span className="text-slate-400">
              ({filteredProducts.length} producto
              {filteredProducts.length !== 1 ? "s" : ""})
            </span>
          </div>
        )}

        {filteredProducts.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3 lg:mt-12">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="h-full"
              >
                <Card className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
                  <div className="flex h-60 items-center justify-center overflow-hidden border-b border-slate-100 bg-slate-100 p-6 sm:h-72 sm:p-8">
                    <img
                      src={product.imagen}
                      loading="lazy"
                      alt={product.nombre}
                      className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <CardContent className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
                        {product.categoria}
                      </span>
                      <span className="text-base font-black text-slate-950 sm:text-lg">
                        {product.precio}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-black leading-tight text-slate-950 sm:min-h-[72px] sm:text-2xl">
                      {product.nombre}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:min-h-[120px] sm:text-base sm:leading-8">
                      {product.descripcionCorta}
                    </p>

                    <div className="mt-auto pt-6">
                      <Link
                        to={`/catalogo/${product.id}`}
                        className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl border border-red-200 bg-red-600 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg hover:shadow-red-200/60"
                      >
                        Ver más
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 text-center sm:p-10 lg:mt-12">
            <h3 className="text-2xl font-black text-slate-950">
              No encontramos productos
            </h3>
            <p className="mt-3 text-slate-600">
              Intenta buscar por válvulas, filtros, bombas o nebulizadores.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}