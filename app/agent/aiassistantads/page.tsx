import { PixelGeneralMeta } from "@/components/pixel/pixelGeneralMeta/PixelGeneralMeta";
import AdsAssistantAI from "@/components/aiassistantads/AdsAssistantAI";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <>
      <main>
        <AdsAssistantAI />
      </main>
      <Suspense fallback={null}>
        <PixelGeneralMeta pixelId="1021962520134015" />
      </Suspense>
    </>
  );
}
