"use client";
import { ChakraProvider, Box } from "@chakra-ui/react";

import WithSubnavigation from "@/components/Navbar";
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
          <Box minHeight="100vh" width="100%">
            <WithSubnavigation />
            {children}
            <Footer />
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}