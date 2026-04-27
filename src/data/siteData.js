import {
  Wrench,
  Droplets,
  Gauge,
  Settings,
  ShieldCheck,
  Users,
  Factory,
  Workflow,
  Building2,
} from "lucide-react";

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const productsData = [
  {
    id: 1,
    name: "Nebulizadores",
    category: "Pulverización",
    price: "Cotizar",
    description:
      "Nebulizadores para sistemas de agua pulverizada, orientados a soluciones técnicas e industriales según requerimiento del cliente.",
    badge: "Disponible",
  },
  {
    id: 2,
    name: "Insumos hidráulicos",
    category: "Hidráulica",
    price: "Cotizar",
    description:
      "Venta de insumos hidráulicos para instalaciones, mantenciones y montajes en terreno.",
    badge: "Disponible",
  },
  {
    id: 3,
    name: "Cañerías PVC y HDP",
    category: "Tuberías",
    price: "Cotizar",
    description:
      "Materiales y soluciones para montaje de cañerías PVC, HDP y trabajos hidráulicos en general.",
    badge: "Disponible",
  },
];

export const services = [
  {
    icon: Settings,
    title: "Mantenimiento de pozos profundos",
    text: "Servicios técnicos orientados al mantenimiento de pozos profundos, con foco en continuidad operativa, diagnóstico y correcta ejecución en terreno.",
  },
  {
    icon: Wrench,
    title: "Montajes y habilitación en terreno",
    text: "Ejecutamos montajes, habilitación de equipos e instalaciones técnicas en terreno con criterios de orden, seguridad y eficiencia operativa.",
  },
  {
    icon: Droplets,
    title: "Hidráulica industrial",
    text: "Servicios de mantención preventiva y correctiva para equipos, instalaciones y operaciones industriales vinculadas al área hidráulica.",
  },
  {
    icon: Gauge,
    title: "Instalación de flujos variables y bombas",
    text: "Implementación e instalación de sistemas de flujos variables, bombas y soluciones asociadas al control y conducción de agua.",
  },
  {
    icon: ShieldCheck,
    title: "Montaje de cañerías PVC, HDP e hidráulica general",
    text: "Montaje e instalación de cañerías PVC, HDP y sistemas hidráulicos en general, ajustados a los requerimientos técnicos de cada proyecto.",
  },
  {
    icon: Users,
    title: "Atención a empresas y operaciones",
    text: "Prestamos servicios a distintas empresas que requieren respaldo técnico confiable en mantención, montaje e hidráulica industrial.",
  },
];

export const features = [
  "Especialización en pozos profundos",
  "Montajes y habilitación en terreno",
  "Experiencia en hidráulica industrial",
  "Venta de insumos técnicos del rubro",
  "Imagen corporativa sobria y profesional",
  "Base preparada para seguir creciendo",
];

export const capabilities = [
  {
    icon: Factory,
    title: "Experiencia técnica aplicada",
    text: "Soluciones ejecutadas con criterio técnico, enfoque operativo y atención a requerimientos reales de terreno.",
  },
  {
    icon: Workflow,
    title: "Capacidad de ejecución",
    text: "Montaje, mantención e instalación con una metodología ordenada, profesional y orientada a resultados.",
  },
  {
    icon: Building2,
    title: "Enfoque corporativo",
    text: "Presentación y atención pensadas para empresas que buscan respaldo, confianza y continuidad operativa.",
  },
];