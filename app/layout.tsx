'use client'
import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/utils/LoadingScreen";
import Preguntas from "@/components/layout/Preguntas";
import DownloadApp from "@/components/layout/DownloadApp";
//import Sin3dDownloadApp from "@/components/layout/Sin3dDownloadApp"
import theme from "./theme";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 10000); {/* Tiempo de pantalla de carga */}
    return () => clearTimeout(timeout);
  }, []);

  const handleSkipClick = () => {
    setLoading(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="stylesheet" href="/fonts.css" />
      </Head>
      <Box minHeight="100vh" width="100%" overflowX={"hidden"}>
        {loading && <LoadingScreen onSkip={handleSkipClick}/>} {/* Render de pantalla de carga */}
        <Navbar />
        {children}
        <DownloadApp />
        {/*  <Sin3dDownloadApp />  */}
        <Preguntas />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}