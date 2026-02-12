import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionProblema from "@/components/SectionProblema";
import SectionComoFunciona from "@/components/SectionComoFunciona";
import SectionParaQuem from "@/components/SectionParaQuem";
import SectionQuemFaz from "@/components/SectionQuemFaz";
import SectionProximoPasso from "@/components/SectionProximoPasso";
import FormDiagnostico from "@/components/FormDiagnostico";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionProblema />
        <SectionComoFunciona />
        <SectionParaQuem />
        <SectionQuemFaz />
        <SectionProximoPasso />
        <FormDiagnostico />

        <footer
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: "40px",
            paddingBottom: "40px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              color: "var(--color-text-secondary)",
            }}
          >
            © {new Date().getFullYear()} Viviane · Mentoria de Livro
          </p>
        </footer>
      </main>
    </>
  );
}
