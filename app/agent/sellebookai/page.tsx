import { PixelGeneralMeta } from "@/components/pixel/pixelGeneralMeta/PixelGeneralMeta";
import VendeEbookAI from "@/components/vendeebookai/VendeEbookAI";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <>
      <main>
        <VendeEbookAI />
      </main>
      <Suspense fallback={null}>
        <PixelGeneralMeta pixelId="1021962520134015" />
      </Suspense>
    </>
  );
}

