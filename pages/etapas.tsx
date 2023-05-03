'use client'
import RootLayout from "@/app/layout";
import HeroSection from "@/components/etapas/HeroSection";
import EtapaActual from "@/components/etapas/EtapaActual";
import ProximasEtapas from "@/components/etapas/ProximasEtapas";
// Import your Etapas-specific components here

export default function Etapas() {
  return (
    <RootLayout>
      <HeroSection />
      <EtapaActual />
      <ProximasEtapas />
    </RootLayout>
  );
}