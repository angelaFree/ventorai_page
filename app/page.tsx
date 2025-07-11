// src/app/page.tsx

import FlyerIALanding from "@/components/flyerIaLanding/FlyerIALanding";
import { PixelGeneralMeta } from "@/components/pixel/pixelGeneralMeta/PixelGeneralMeta";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <>
      <main>
        <FlyerIALanding />
      </main>
      <Suspense fallback={null}>
        <PixelGeneralMeta pixelId="1021962520134015" />
      </Suspense>
    </>
  );
}
