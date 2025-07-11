// src/app/page.tsx

import FlyerIALanding from "@/components/flyerIaLanding/FlyerIALanding";
import { Footer } from "@/components/Footer";
import { PixelGeneralMeta } from "@/components/pixel/pixelGeneralMeta/PixelGeneralMeta";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <>
      <main>
        <FlyerIALanding />
        <Footer />
      </main>
      <Suspense fallback={null}>
        <PixelGeneralMeta pixelId="1021962520134015" />
      </Suspense>
    </>
  );
}
