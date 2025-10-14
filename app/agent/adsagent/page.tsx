import { PixelGeneralMeta } from "@/components/pixel/pixelGeneralMeta/PixelGeneralMeta";
import AdsAgentAI from "@/components/adsagent/AdsAgentAI";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <>
      <main>
        <AdsAgentAI />
      </main>
      <Suspense fallback={null}>
        <PixelGeneralMeta pixelId="1021962520134015" />
      </Suspense>
    </>
  );
}
