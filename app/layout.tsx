"use client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { useState, useEffect } from 'react'
import Head from "next/head";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import theme from "./theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Timeout para pantalla de carga
    const timeout = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider theme={theme}>
          <Head>
            <link rel="stylesheet" href="/fonts.css" />
          </Head>
          <Box minHeight="100vh" width="100%" overflowX={"hidden"}>
            {loading && <LoadingScreen />} {/* Render the loading screen */}
            <Navbar />
            {children}
            <Footer />
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}