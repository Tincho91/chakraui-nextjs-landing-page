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
      @font-face {
        font-family: 'AcuminVariable';
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url("/fonts/Acumin-Variable.ttf") format('truetype');
      }
      body {
        font-family: 'AcuminVariable', sans-serif;
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
