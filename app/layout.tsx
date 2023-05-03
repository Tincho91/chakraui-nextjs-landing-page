'use client'
import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preguntas from "@/components/layout/Preguntas";
import DownloadApp from "@/components/layout/Sin3dDownloadApp";
import theme from "../styles/theme";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Box minHeight="100vh" width="100%" overflowX={"hidden"}>
        <Navbar />
        {children}
        <DownloadApp />
        <Preguntas />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}