"use client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Head from "next/head";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import theme from "./theme"; // import the custom theme

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider theme={theme}>
        <Head>
          <link rel="stylesheet" href="/fonts.css" />
        </Head>
          <Box minHeight="100vh" width="100%" overflowX={"hidden"}>
            <Navbar />
            {children}
            <Footer />
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}