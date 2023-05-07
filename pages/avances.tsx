'use client'
import RootLayout from "@/app/layout";

import AvancesDelProyecto from "@/components/avances/AvancesDelProyecto";
import Noticias from "@/components/avances/Noticias"


export default function Avances() {
  return (
    <RootLayout>
      <AvancesDelProyecto />
      <Noticias />
    </RootLayout>
  );
}