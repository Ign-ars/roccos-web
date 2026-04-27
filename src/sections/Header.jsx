import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Button } from "../components/ui";
import products from "../data/products";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const suggestions = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return [];

    return products
      .filter((product) =>
        product.nombre.toLowerCase().includes(query) ||
        product.categoria.toLowerCase().includes(query) ||
        product.descripcionCorta.toLowerCase().includes(query)
      )
      .slice(0, 5);
  }, [search]);

  const closeMobile = () => setMobileOpen(false);

  const handleSearch = (e) => {
    e.preventDefault();

    const query = search.trim();

    if (query) {
      navigate(`/catalogo?buscar=${encodeURIComponent(query)}`);
      setSearch("");
      setShowSuggestions(false);
      closeMobile();
    }
  };

  const handleSuggestionClick = (productId) => {
    navigate(`/catalogo/${productId}`);
    setSearch("");
    setShowSuggestions(false);
    closeMobile();
  };

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Empresa", href: "/#empresa" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Capacidades", href: "/#capacidades" },
    { label: "Contacto", href: "/#contacto" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-md backdrop-blur-xl"
          : "border-b border-transparent bg-white/90 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" onClick={closeMobile} className="flex shrink-0 items-center gap-3">
          <img
            src={logo}
            alt="Rocco´s Mantención Industrial"
            className="h-12 w-auto object-contain sm:h-14"
          />

          <div className="leading-none">
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-500 sm:text-[11px]">
              Empresa
            </p>

            <h1 className="mt-1 text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
              Rocco´s
            </h1>

            <p className="mt-1 text-xs font-medium tracking-wide text-slate-600 sm:text-sm">
              Mantención Industrial
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-red-600"
            >
              {item.label}
            </a>
          ))}

          <Link
            to="/catalogo"
            className="text-sm font-medium text-slate-600 transition hover:text-red-600"
          >
            Catálogo
          </Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <form onSubmit={handleSearch} className="relative w-[230px] xl:w-[250px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              placeholder="Buscar producto..."
              className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-4 focus:ring-red-50"
            />

            {showSuggestions && search.trim() && (
              <div className="absolute right-0 top-[52px] z-50 w-[340px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/40">
                {suggestions.length > 0 ? (
                  suggestions.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      onMouseDown={() => handleSuggestionClick(product.id)}
                      className="flex w-full items-center gap-3 border-b border-slate-100 px-4 py-3 text-left transition last:border-b-0 hover:bg-slate-50"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 p-2">
                        <img
                          src={product.imagen}
                          alt={product.nombre}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-slate-950">
                          {product.nombre}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-red-600">
                          {product.categoria}
                        </p>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-4 text-sm font-semibold text-slate-500">
                    No encontramos productos relacionados.
                  </div>
                )}
              </div>
            )}
          </form>

          <Link to="/cotizar">
            <Button className="flex h-12 min-w-[190px] items-center justify-center rounded-2xl bg-slate-950 px-6 font-bold text-white whitespace-nowrap hover:bg-red-600">
              Cotizar proyecto
            </Button>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm lg:hidden"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-5 shadow-xl lg:hidden">
          <form onSubmit={handleSearch} className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowSuggestions(true);
              }}
              placeholder="Buscar producto..."
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none focus:border-red-500"
            />
          </form>

          {search.trim() && (
            <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {suggestions.length > 0 ? (
                suggestions.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => handleSuggestionClick(product.id)}
                    className="flex w-full items-center gap-3 border-b border-slate-100 px-4 py-3 text-left last:border-b-0"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 p-2">
                      <img
                        src={product.imagen}
                        alt={product.nombre}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-slate-950">
                        {product.nombre}
                      </p>
                      <p className="text-xs font-semibold text-red-600">
                        {product.categoria}
                      </p>
                    </div>
                  </button>
                ))
              ) : (
                <div className="px-4 py-4 text-sm font-semibold text-slate-500">
                  No encontramos productos relacionados.
                </div>
              )}
            </div>
          )}

          <nav className="mt-5 grid gap-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}

            <Link
              to="/catalogo"
              onClick={closeMobile}
              className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
            >
              Catálogo
            </Link>

            <Link to="/cotizar" onClick={closeMobile}>
              <Button className="mt-2 flex h-12 w-full items-center justify-center rounded-2xl bg-slate-950 font-bold text-white hover:bg-red-600">
                Cotizar proyecto
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}