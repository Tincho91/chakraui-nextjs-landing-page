'use client'
import RootLayout from "@/app/layout";
import EtapaActual from "@/components/colecta/EtapaActual";
import NivelDeColecta from "@/components/colecta/NivelDeColecta"


export default function Colecta() {
  return (
    <RootLayout>
      <NivelDeColecta />
      <EtapaActual />
    </RootLayout>
  );
}