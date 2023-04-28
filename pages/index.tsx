'use client'
import RootLayout from "@/app/layout";
import HeroSection from "@/components/home/HeroSection";
import ElProyecto from "@/components/home/ElProyecto";
import Etapabilidad from "@/components/home/Etapabilidad";
import Beneficios from "@/components/home/Beneficios";
import Pasos from "@/components/home/Pasos";

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