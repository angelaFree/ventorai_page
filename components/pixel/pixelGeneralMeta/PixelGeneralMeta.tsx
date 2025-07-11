"use client";
import { initializePixel } from "@/utils/facebookPixel";
import React, { useEffect } from "react";

interface PixelGeneralMetaProps {
  pixelId: string;
}

export const PixelGeneralMeta: React.FC<PixelGeneralMetaProps> = ({ pixelId }) => {
  useEffect(() => {
    initializePixel(pixelId); // Ahora `initializePixel` es una función asíncrona
  }, [pixelId]);

  return null;
};
