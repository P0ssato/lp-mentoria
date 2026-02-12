import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionProblema from "@/components/SectionProblema";
import SectionComoFunciona from "@/components/SectionComoFunciona";
import FormDiagnostico from "@/components/FormDiagnostico";
import SectionParaQuem from "@/components/SectionParaQuem";
import SectionQuemFaz from "@/components/SectionQuemFaz";
import SectionProximoPasso from "@/components/SectionProximoPasso";
import SectionCTAFinal from "@/components/SectionCTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Problema */}
        <SectionProblema />

        {/* 3. O processo da mentoria */}
        <SectionComoFunciona />

        {/* 4. Diagnóstico — logo após o processo */}
        <FormDiagnostico />

        {/* 5. Para quem */}
        <SectionParaQuem />

        {/* 6. Quem faz — Viviane */}
        <SectionQuemFaz />

        {/* 7. Próximo passo */}
        <SectionProximoPasso />

        {/* 8. CTA Final — editorial full-bleed */}
        <SectionCTAFinal />
      </main>

      {/* Footer completo */}
      <Footer />
    </>
  );
}
