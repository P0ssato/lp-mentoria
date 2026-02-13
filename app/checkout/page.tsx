import Navbar from "@/components/Navbar";
import SectionProblema from "@/components/SectionProblema";
import SectionComoFunciona from "@/components/SectionComoFunciona";
import SectionParaQuem from "@/components/SectionParaQuem";
import SectionQuemFaz from "@/components/SectionQuemFaz";
import Footer from "@/components/Footer";
import HeroCheckout from "@/components/checkout/HeroCheckout";
import SectionCTACheckout from "@/components/checkout/SectionCTACheckout";
import SectionPreco from "@/components/checkout/SectionPreco";

export const metadata = {
  title: "Mentoria de Livro | Viviane — Garanta sua vaga",
  description:
    "Mentoria individual para profissionais que querem escrever um livro de não ficção. Da primeira linha ao capítulo final em 12 meses.",
};

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <HeroCheckout />

        {/* 2. Problema */}
        <SectionProblema />

        {/* 3. O processo da mentoria */}
        <SectionComoFunciona />

        {/* 4. Preço + CTA direto */}
        <SectionPreco />

        {/* 5. Para quem */}
        <SectionParaQuem />

        {/* 6. Quem faz — Viviane */}
        <SectionQuemFaz />

        {/* 7. CTA Final */}
        <SectionCTACheckout />
      </main>

      <Footer />
    </>
  );
}
