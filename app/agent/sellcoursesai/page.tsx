
import { PixelGeneralMeta } from "@/components/pixel/pixelGeneralMeta/PixelGeneralMeta";
import VendeCursosAI from "@/components/vendecursosai/VendeCursosAI";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <>
      <main>
        <VendeCursosAI />
      </main>
      <Suspense fallback={null}>
        <PixelGeneralMeta pixelId="1021962520134015" />
      </Suspense>
    </>
  );
}
