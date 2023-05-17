'use client'
import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Global, css } from '@emotion/react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preguntas from "@/components/layout/Preguntas";
import DownloadApp from "@/components/layout/Sin3dDownloadApp";
import theme from "../styles/theme";
import '../styles/globals.css';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Global
        styles={css`
          @import url('https://fonts.adobe.com/fonts/acumin-variable?vf-axes=slnt%2C0%2Cwdth%2C57%2Cwght%2C700&vf-font-size=128&vf-font=AcuminVF#fonts-section');
          body {
            font-family: "acumin-variable",sans-serif;
            font-variation-settings: 'wght' 700, 'wdth' 57, 'slnt' 0;
          }
        `}
      />
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
