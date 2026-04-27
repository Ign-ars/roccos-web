import { Routes, Route } from "react-router-dom";

import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import CapabilitiesSection from "./sections/CapabilitiesSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import GallerySection from "./sections/GallerySection";
import Watermark from "./components/Watermark";
import ScrollToTop from "./components/ScrollToTop";

import QuotePage from "./pages/QuotePage";
import CatalogPage from "./pages/CatalogPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function SectionWrapper({ children, variant = "right" }) {
  return (
    <div className="relative overflow-hidden">
      <Watermark variant={variant} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function Home() {
  return (
    <>
      <SectionWrapper variant="hero">
        <HeroSection />
      </SectionWrapper>

      <SectionWrapper variant="left">
        <AboutSection />
      </SectionWrapper>

      <SectionWrapper variant="right">
        <ServicesSection />
      </SectionWrapper>

      <SectionWrapper variant="center">
        <CapabilitiesSection />
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <GallerySection />
      </SectionWrapper>

      <SectionWrapper variant="left">
        <ContactSection />
      </SectionWrapper>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white">
      <ScrollToTop />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/catalogo"
            element={
              <SectionWrapper variant="right">
                <CatalogPage />
              </SectionWrapper>
            }
          />

          <Route
            path="/catalogo/:id"
            element={
              <SectionWrapper variant="left">
                <ProductDetailPage />
              </SectionWrapper>
            }
          />
          <Route
            path="/cotizar"
            element={
            <SectionWrapper variant="right">
              <QuotePage />
            </SectionWrapper>
          }
        />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}