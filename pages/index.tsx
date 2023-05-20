'use client'
import { useState, useEffect } from 'react';
import RootLayout from "@/app/layout";
import HeroSection from "@/components/home/HeroSection";
import ElProyecto from "@/components/home/ElProyecto";
import Etapabilidad from "@/components/home/Etapabilidad";
import Beneficios from "@/components/home/Beneficios";
import Pasos from "@/components/home/Pasos";
import LoadingScreen from '@/components/utils/LoadingScreen';

const LOADING_SCREEN_INTERVAL_MS = 30 * 60 * 1000; // media hora

export default function Home() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lastShown = parseInt(localStorage.getItem("lastShownLoadingScreen") || "0", 10);
      const shouldShow = isNaN(lastShown) || Date.now() - lastShown > LOADING_SCREEN_INTERVAL_MS;
      setShowLoadingScreen(shouldShow);
    }
  }, []);

  useEffect(() => {
    if (!showLoadingScreen) {
      localStorage.setItem("lastShownLoadingScreen", Date.now().toString());
    }
  }, [showLoadingScreen]);

  const handleSkip = () => {
    setShowLoadingScreen(false);
  };

  return (
    <RootLayout>
      {showLoadingScreen && (
        <LoadingScreen onSkip={handleSkip} onComplete={handleSkip} />
      )}
      <HeroSection />
      <ElProyecto />
      <Etapabilidad />
      <Beneficios />
      <Pasos />
    </RootLayout>
  );
}