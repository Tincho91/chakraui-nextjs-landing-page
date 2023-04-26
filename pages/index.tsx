'use client'
import RootLayout from "@/app/layout";
import HeroSection from "@/components/HeroSection";
import ElProyecto from "@/components/ElProyecto";
import Etapabilidad from "@/components/Etapabilidad";
import Beneficios from "@/components/Beneficios";
import Pasos from "@/components/Pasos";

export default function Home() {
  return (
    <RootLayout>
      <HeroSection />
      <ElProyecto />
      <Etapabilidad />
      <Beneficios />
      <Pasos />
    </RootLayout>
  );
}