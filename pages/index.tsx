'use client'
import { useState, useEffect } from  'react';
import RootLayout from "@/app/layout";
import HeroSection from "@/components/home/HeroSection";
import ElProyecto from "@/components/home/ElProyecto";
import Etapabilidad from "@/components/home/Etapabilidad";
import Beneficios from "@/components/home/Beneficios";
import Pasos from "@/components/home/Pasos";
import LoadingScreen from '@/components/utils/LoadingScreen';

export default function Home() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const shouldShow = localStorage.getItem("hasShownLoadingScreen") !== "true";
      setShowLoadingScreen(shouldShow);
    }
  }, []);

  useEffect(() => {
    if (!showLoadingScreen) {
      localStorage.setItem("hasShownLoadingScreen", "true");
    }
  }, [showLoadingScreen]);

  const handleSkip = () => {
    setShowLoadingScreen(false);
  };

  return (
    <RootLayout>
      {showLoadingScreen && (
        <LoadingScreen onSkip={handleSkip} onComplete={handleSkip}/>
      )}
      <HeroSection />
      <ElProyecto />
      <Etapabilidad />
      <Beneficios />
      <Pasos />
    </RootLayout>
  );
}