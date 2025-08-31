"use client";

import { useState, useEffect } from "react";
import CarouselFlyers, { Flyer } from "./CarouselFlyers";
import CountryPriceText from "./CountryPriceText";
import { PlansSection, AssistantsShowcase } from "../subscriptions";
import HeroSection from "./HeroSection";
import VideoSection from "./VideoSection";
import HowItWorksSection from "./HowItWorksSection";
import TestimonialsSection from "./TestimonialsSection";
import PricingSection from "./PricingSection";
import FixedCtaButtons from "./FixedCtaButtons";

export default function FlyerIALanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentFlyer, setCurrentFlyer] = useState(0);
  const linkPagoHotmart =
    "https://pay.hotmart.com/G100299066R?off=xhs7uuy4&checkoutMode=10";

  const handleComprar = async (url?: string) => {
    const ReactPixel = (await import("react-facebook-pixel")).default;
    ReactPixel.track("InitiateCheckout", {
      
    });
    window.open(url ?? linkPagoHotmart, "_blank", "noopener,noreferrer");
  };

  // Reemplazo de enlaces externos por rutas locales en public/ventor
  // Vertical: usa archivos existentes en public/ventor/vertical
  const verticalFiles = [
    "vertical images1.png",
    "vertical images2.png",
    "vertical images3.png",
    "vertical images4.png",
    "vertical images5.png",
    "vertical images6.png",
    "vertical images7.png",
    "vertical images9.png",
    "vertical images10.png",
    "vertical images11.png",
    "vertical images12.png",
    "vertical images13.png",
    "vertical images14.png",
    "vertical images15.png",
    "vertical images16.png",
    "vertical images17.png",
    "vertical images18.png",
    "vertical images19.png",
    "vertical images20.png",
    "vertical images22.png",
    "vertical images24.png",
    "vertical images25.png",
    "vertical images26.png",
    "vertical images28.png",
    "vertical images29.png",
    "vertical images30.png",
    "vertical images31.png",
    "vertical images32.png",
    "vertical images33.png",
    "vertical images34.png",
    "vertical images35.png",
    "vertical images36.png",
    "vertical images37.png",
    "vertical images38.png",
    "vertical images39.png",
    "vertical images40.png",
    "vertical images41.png",
    "vertical images42.png",
    "vertical images43.png",
    "vertical images44.png",
    "vertical images45.png",
    "vertical images46.png",
    "vertical images47.png",
    "vertical images48.png",
    "vertical images49.png",
    "vertical images50.png",
    "vertical images51.png",
    "vertical images52.png",
    "vertical images53.png",
    "vertical images54.png",
    "vertical images55.png",
    "vertical images56.png",
    "vertical images57.png",
    "vertical images58.png",
    "vertical images59.png",
    "vertical images61.png",
    "vertical images62.png",
    "vertical images63.png",
    "vertical images64.png",
    "vertical images65.png",
  ];

  const flyersVertical: Flyer[] = verticalFiles.map((file, idx) => ({
    id: idx + 1,
    category: "General",
    image: `/ventor/vertical/${file}`,
  }));
  const flyersSquare: Flyer[] = [
    {
      id: 1,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1dYt07NEb2dtg73jQGBKDKNFupfUMlBOl&sz=w1000",
    },
    {
      id: 2,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1Kho3JHxuubDdz1fUWdpDYXjXjzN4--eR&sz=w1000",
    },
    {
      id: 3,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1RTo6VwaK3kSNIe7GgPresoGzeIqmA_Iz&sz=w1000",
    },
    {
      id: 4,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1iVmSot3WqkDOxTcaOHHTjDWe9NJ1OGP2&sz=w1000",
    },
    {
      id: 5,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1Huy_7wuXjP93NE-rkNwKI_XkFhWmqdDD&sz=w1000",
    },
    {
      id: 6,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1x40uaDiEIsZdlVZLK9dT-EMKirRnt7XY&sz=w1000",
    },
    {
      id: 7,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1rsptqz6BIb_2bwGECIjsjkAKNjY98ooU&sz=w1000",
    },
    {
      id: 8,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1euvWRa-L-t1mARWiq0TYvsEYpjamNHVE&sz=w1000",
    },
    {
      id: 9,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1J7OXnoTd5dGQK0TCaaUj1UzreU59UPKq&sz=w1000",
    },
    {
      id: 10,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1PebpmiQ2nWpApPnAMTcNW_W-srFDlj51&sz=w1000",
    },
    {
      id: 11,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1OWdJk30Fg3r5Np4wdWizX48B-2I6Nn3V&sz=w1000",
    },
    {
      id: 12,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1jqtJRjj9CK4w3swfWG4Qw3fRMPMEZv50&sz=w1000",
    },
    {
      id: 13,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1D-Jkc6Hurld6YZRrtvJKH3CBcgGe_10-&sz=w1000",
    },
    {
      id: 14,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1Ce87KY3l2YFi8e_-hH5Cdg6mmaHPY65r&sz=w1000",
    },
    {
      id: 15,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1IrX9aPpJSna4tLNRb9Jh0ZQeFW2YHIRM&sz=w1000",
    },
    {
      id: 16,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=15lSd6hR_2SWKTaFVMlE2jQ3WP_2_MD_0&sz=w1000",
    },
    {
      id: 17,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=17JJeEluBPfCukIo4WomTVP5_TRUpQE9O&sz=w1000",
    },
    {
      id: 18,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=18XYBSqAGmm4qRhCopY1Ppz2oCimyqtjI&sz=w1000",
    },
    {
      id: 19,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1lGrN7p7r-MH7HnRPVHeWCWISLHYmKw1y&sz=w1000",
    },
    {
      id: 20,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=18Rl_z_S0vM8VOUB5MIrTGinUEM5CEIRs&sz=w1000",
    },
    {
      id: 21,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=13D7zl_RuWt2hyIqPzRxGH2IBu47O0Abn&sz=w1000",
    },
    {
      id: 22,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=15me-L-v49iQWwWYB0DFUgHla9ExIbTNR&sz=w1000",
    },
    {
      id: 23,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1ID80VpfetmNKOwn9TdlsNX3CmkpRBWd5&sz=w1000",
    },
    {
      id: 24,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=17Ti0OF1WdHwiUd07O8IWEDxeDH6Qbcom&sz=w1000",
    },
    {
      id: 25,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1e3n2dzUgKyeR8IZkPkst4Wkmg4IMuYHF&sz=w1000",
    },
    {
      id: 26,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1a9yZZ9Qk9jPCvKm8LSlkNy-qqGqnngPX&sz=w1000",
    },
    {
      id: 27,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1ezY9bLcbmtoE5rMyPsYf5r7lhoaLMSOD&sz=w1000",
    },
    {
      id: 28,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=17fM1GuLJGgkzRd1Ddao6W8AtJYE89yeA&sz=w1000",
    },
    {
      id: 29,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1wVJaNBo-VEuT9yfMjMsBTDJDQbVrrqtO&sz=w1000",
    },
    {
      id: 30,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1Bhaa_aBbO62x-UL-2rcMFNBjHhhnRdHo&sz=w1000",
    },
    {
      id: 31,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1IWzQBKIcKPz0oPwMJOOnsUrekkvZTNed&sz=w1000",
    },
    {
      id: 32,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1wwUJqZtxV3uk0vsJJgGsyGDZ-LEjJpFh&sz=w1000",
    },
    {
      id: 33,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1F8kQomg0wlON6ezbZ3QELGYT48FjFeNu&sz=w1000",
    },
    {
      id: 34,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1ZDUSBKJcagrTCAGlC8gioAauF0zsdXPH&sz=w1000",
    },
    {
      id: 35,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1BDgCuo7Sei92niGqgn6uxET9OuY4SlFF&sz=w1000",
    },
    {
      id: 36,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=12ikgMJ_P6vBULCuOzEfABJCKM4ApUgIb&sz=w1000",
    },
    {
      id: 37,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1Xxh9C2evTj3FSe9aF7ymz_BNEb3CKfaM&sz=w1000",
    },
    {
      id: 38,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1GR0ew650iitkjPE7J2p3xZFx9kRge6xl&sz=w1000",
    },
    {
      id: 39,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1SGbmaH8Umxqa_v2foS5BzJqAT_Agm2mz&sz=w1000",
    },
    {
      id: 40,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=19-jbFwsNWVTZviiHkswZwIDE6p5IDKX8&sz=w1000",
    },
    {
      id: 41,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1uqfsh1vJPbcbkqnmtUmPDuK4-rJoE1SQ&sz=w1000",
    },
    {
      id: 42,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1rKXvfAPveyTFoYoyZY_BOLKKsXT6qTBD&sz=w1000",
    },
    {
      id: 43,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1dr4i_cxBjrHCK-gn-F8ECQi6zGQp8MX5&sz=w1000",
    },
    {
      id: 44,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1wTN8LRlhP0vOCiRY_dZYmppkIq0FhcCV&sz=w1000",
    },
    {
      id: 45,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1e2I7KhuqlnulZNqU_camG-LxTaZMLntG&sz=w1000",
    },
    {
      id: 46,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1SQtdfACj31sfafWgvaunSBggVfiTIftx&sz=w1000",
    },
    {
      id: 47,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1fjWppiQM40OQkbpk5PPn0IlSwWobdoWn&sz=w1000",
    },
    {
      id: 48,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1OH9q1m_2w7o9S4Q85cXhYlFKNQnZY8VV&sz=w1000",
    },
    {
      id: 49,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1NFK0rh0oXYLwmsJLW1cj_qgyDBq_TJB0&sz=w1000",
    },
    {
      id: 50,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1obTgp-idi1T2Vdb4kZ2f-zw1FFV7rzUg&sz=w1000",
    },
    {
      id: 51,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1TYRv9omfOCp2lPn5SWh_feeaSUsZisRl&sz=w1000",
    },
    {
      id: 52,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1zM3iE1jaXxPY31DGlkJUkv9yW9UurqlQ&sz=w1000",
    },
    {
      id: 53,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1xUqL_bxdgqLq0LCHpvarmPXONeLFIdLx&sz=w1000",
    },
    {
      id: 54,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1zIoxWTpYOANXj5X1hq3Ou7k62rYqbx5s&sz=w1000",
    },
    {
      id: 55,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1TbAe4jnFEAS6Cu9wULznNRxTCZapLIwr&sz=w1000",
    },
    {
      id: 56,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1RF5N2WOynCHyxPvQV4L5rYjkVHAGcjxP&sz=w1000",
    },
    {
      id: 57,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1PKfkzHxJV45L2ut90gcU7qfMTZbry0oO&sz=w1000",
    },
    {
      id: 58,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1_MN2Y9nUosGlhKGacOy0OVbjzdlqJek9&sz=w1000",
    },
    {
      id: 59,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1L9Kbv9XZ7MsTy_FmdS0hcPWGPXGTpsUz&sz=w1000",
    },
    {
      id: 60,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1IDLZl_GECmZ1N9TonCOYD6MtJTjOArMS&sz=w1000",
    },
    {
      id: 61,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1BeWlOyBh0RA2ULd2jx7PuB8XqEH6FtRo&sz=w1000",
    },
    {
      id: 62,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1k-DgLc_TkxzqYiZpgXuIpcTq6-w4oady&sz=w1000",
    },
    {
      id: 63,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1S3bn1KYaY52jNEm5wE1ExYBeWyt9X5Ne&sz=w1000",
    },
    {
      id: 64,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1FjJlx-PtKZ_Ca021pP1aAHLd13LhObEO&sz=w1000",
    },
    {
      id: 65,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1MEEE3oo2-8dXZrqGqvDDCNAoHCUqlovG&sz=w1000",
    },
    {
      id: 66,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1-t3YJXrpVryvqf7hHJJTrCoYHpqt9wzQ&sz=w1000",
    },
    {
      id: 67,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1jgHCHF1uL42TnyNThX2uVBzER0MoMEDB&sz=w1000",
    },
    {
      id: 68,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1gD2gau65ZNOg2s4dlc7JzzPd5EU0rWsj&sz=w1000",
    },
    {
      id: 69,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1ZRDTiVvmYJYVrhgeSBKkveHvBhv9BFtq&sz=w1000",
    },
    {
      id: 70,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1b0vT2wUEq5rV7UY5FCkKAqoavGkxOztY&sz=w1000",
    },
    {
      id: 71,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1npwt7y1iXXQE5QJ9onuNrdpDZ2scT90M&sz=w1000",
    },
    {
      id: 72,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1ETx2fQkhvIHNhP3o9-Nyoec0a7KSBeYM&sz=w1000",
    },
    {
      id: 73,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1Sd_8xEMDW5ushbYxR6KCtwTu7K-yLQix&sz=w1000",
    },
    {
      id: 74,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1-VcSvu8SzmehmLD6zTm0k6K68B7x-uw3&sz=w1000",
    },
    {
      id: 75,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1-EeFI8hE4Cw9nFoWZdn9ejZqOBjE_1Xq&sz=w1000",
    },
    {
      id: 76,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1BEeh_yJeiiNlkEVDta4puwsClQ6_PJzt&sz=w1000",
    },
    {
      id: 77,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1KgGOyVGuuA4FTsUvKyFekrJosHTds36J&sz=w1000",
    },
    {
      id: 78,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1USbGR9JP8aQPvxPWwCrchtd9hjwJ3ogl&sz=w1000",
    },
    {
      id: 79,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1CytGrsECgwCbMcxGNotfru_YKI204o4J&sz=w1000",
    },
    {
      id: 80,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1xRSLDo-kDcOjVx_UB-6mTygYD4x7rIFy&sz=w1000",
    },
    {
      id: 81,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1Rkz8jAWyG1CcMaJfwRWL3NthcrhQz9PA&sz=w1000",
    },
    {
      id: 82,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1GS7noXyB6nOg7F2XfqswJEBSyO6eiGmN&sz=w1000",
    },
    {
      id: 83,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1h-JoMWLSsJmkMe3cEWZ6P_reDlnwOb71&sz=w1000",
    },
    {
      id: 84,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=100VxjSSepoP-YYO_624EUJYHZYo_kuQy&sz=w1000",
    },
    {
      id: 85,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1lFSl9eNJP9--P3NJNeELkJl_t4LDBo7j&sz=w1000",
    },
    {
      id: 86,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1T8BSJNK2u9jj2XLuQNkHMQmxWA6OSXON&sz=w1000",
    },
    {
      id: 87,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1QX46pZan7RMhyJ6cL1O-8qsINB7bkGmM&sz=w1000",
    },
    {
      id: 88,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1DIkVt2dY-iOs8epuwZub8CicYFO13T7j&sz=w1000",
    },
    {
      id: 89,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1InsUjGw0o9FRNUdMkIH2OqZXqIvh5gcO&sz=w1000",
    },
    {
      id: 90,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=17yo1a5rr9CIRfATCOimcA3RD108Aot6P&sz=w1000",
    },
    {
      id: 91,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=19s_RDKm_-0lCW88MSR_777xqVNezjN4c&sz=w1000",
    },
    {
      id: 92,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=167R9uX7LQE_8gh9M-mpFPYkUPOQGhV80&sz=w1000",
    },
    {
      id: 93,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=14ds2wr9Fyfu0UpLEDQ6Mo7O8afu7zIxv&sz=w1000",
    },
    {
      id: 94,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1WMGhfXo291CaHxxgDJKkf_L3bLJUz9X6&sz=w1000",
    },
    {
      id: 95,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1DJC2eJKiqn4lDzslqXdRAs_JVNwKB53_&sz=w1000",
    },
    {
      id: 96,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1lBhQ7WWLySFsWuPNMi_BMtfs1n5_p1cq&sz=w1000",
    },
    {
      id: 97,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1Kvqy2Ao-b8GxHHkGx4Uy1Ad9NnBrO4lU&sz=w1000",
    },
    {
      id: 98,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1XbN4t2ZHvqceKkRLJRYNBb8Eh9-hP7Jb&sz=w1000",
    },
    {
      id: 99,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1CuUIEvbZaPTcJCpAKNFhdyg_YzyFbhO-&sz=w1000",
    },
    {
      id: 100,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1Ebrl3QlUIvTCENWj7n43z0XgKThzgvVK&sz=w1000",
    },
    {
      id: 101,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1fDITPJ9nVmd339E_qKinug0Jqtqawil-&sz=w1000",
    },
    {
      id: 102,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1rQ3MIqgRSvPUGRoMIstP_ROdIwyf6pUT&sz=w1000",
    },
    {
      id: 103,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1_LveOee0p5TcrK9l20oPfz4OV1WyG5a9&sz=w1000",
    },
    {
      id: 104,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1K-hOiVnu5Ayn_UzSKtFbwM1DLrXzlS7C&sz=w1000",
    },
    {
      id: 105,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1iVG5Ms5D13XZpZiFqpdrhtViqx0vtWng&sz=w1000",
    },
    {
      id: 106,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1-CRX0bwB9abG2f3MXVN-bLUsbKcWcx__&sz=w1000",
    },
    {
      id: 107,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1gHHKjp2g7Cnvo-MANn7lc9AL9M36Z8aa&sz=w1000",
    },
    {
      id: 108,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1fILSUbgcdvGEuNSF5XReL-Fx9tsSeVfW&sz=w1000",
    },
    {
      id: 109,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1wrvC1vsQn53QUAsXCnOketM5xw63OqdR&sz=w1000",
    },
    {
      id: 110,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1LxGrSLWOngI76fX-GApJr0TK5LJuDrRx&sz=w1000",
    },
    {
      id: 111,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1kgEcrlDt8-B2QjkcrOv9m0kO8Qw05PKO&sz=w1000",
    },
    {
      id: 112,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1-BJVQdK0L6i6yBVRvClrBo-XRuvy_Afs&sz=w1000",
    },
    {
      id: 113,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1r135SqDln-ZBvojMtWD3PpDI32J3SdnL&sz=w1000",
    },
    {
      id: 114,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1x0pXsq9UGXtqd0hMtrSvtSv_jN7NWXZc&sz=w1000",
    },
    {
      id: 115,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1whkb8hf9L_dyXUfTMvWGC8BZAO9kYAT1&sz=w1000",
    },
    {
      id: 116,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1xuuIwWM0E3-YZv8SXGLcPiJg9BGmj3md&sz=w1000",
    },
    {
      id: 117,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1RSTNNEar2iZpz9YjfB0LBYkj294A0Z8H&sz=w1000",
    },
    {
      id: 118,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1M2hoERCBuCdIHp_BJQhwEaDegYQ0iqhi&sz=w1000",
    },
    {
      id: 119,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1Eo60fqzF-ElIlWPnSgoShLzTYs3t8H4G&sz=w1000",
    },
    {
      id: 120,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1Yqnhq_6q9PfDcsCdFsEUkVGzx0IXd-93&sz=w1000",
    },
    {
      id: 121,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1RTw74EcQhydtVvX2nQRK69ItsOGxCxWk&sz=w1000",
    },
    {
      id: 122,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1k-mspGihrEcZuMa-k1p_gvCVIG3MD6Dq&sz=w1000",
    },
    {
      id: 123,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1uk38TbryyXUM7Kx1Wqf9EEM7boNFQA_Y&sz=w1000",
    },
    {
      id: 124,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1rpF8uPgTs-FOZeLnv5zN1UY7zBaka3gt&sz=w1000",
    },
    {
      id: 125,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1rXjWew_bDeWspXkb5dQLBvO7ruCXeDaa&sz=w1000",
    },
    {
      id: 126,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1iB2GQOIHaYt98VHDkZeKI5MCRD31UN_7&sz=w1000",
    },
    {
      id: 127,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=12Xovllky8ju5jLjAoG3ok4AGIDfQHVtf&sz=w1000",
    },
    {
      id: 128,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1zjfg6IUH6vPux9QZYuNyEffLVRhFYia9&sz=w1000",
    },
    {
      id: 129,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1l9lZjjsJGcC3oD7S54KgcLtdAPYnDuQ5&sz=w1000",
    },
    {
      id: 130,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1Zn4OQEn_JTczzmHGbW3AJmfZLvFXmrNQ&sz=w1000",
    },
    {
      id: 131,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1Tl2MLu-qiYpuPnXK2UQvK99GPUjs-RGI&sz=w1000",
    },
    {
      id: 132,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1N_FFPwKCKphWwMaBnhrk8EVXawOJULKu&sz=w1000",
    },
    {
      id: 133,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1IJHvfUCGIkzXweayRHRa-iVVnhZWt8uH&sz=w1000",
    },
    {
      id: 134,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=19qe9qAiIR5iYaFJEEvk9eZhYLgPd74WZ&sz=w1000",
    },
    {
      id: 135,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1xlYD_AWHyJ3-xWB1I0c7ojKolAtB6WE0&sz=w1000",
    },
    {
      id: 136,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1d3Qltmchdb6axo6eXnZ8EdYjNMzBPss0&sz=w1000",
    },
    {
      id: 137,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1YJI5oqkHY_QWS2wW_AlMw1h09JxtUxqa&sz=w1000",
    },
    {
      id: 138,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1XwPwXUd7Eo1U-6II8q4rqK6RSvLvKm-b&sz=w1000",
    },
    {
      id: 139,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1Ji0LXvPqq3qUEXNB4rEObFVm7E4FYs9B&sz=w1000",
    },
    {
      id: 140,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1zIXjpN26SKDuFfo_0oGCGUDGpy3RbQd_&sz=w1000",
    },
    {
      id: 141,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1xC7sXneS5W3F2mhZeLNL_MCTvf5nQqLo&sz=w1000",
    },
    {
      id: 142,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1kw1_HQnEon7liKoKLWRPGA_fE4PCsdXa&sz=w1000",
    },
    {
      id: 143,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1kcShQfG6z6OOz5rAH2423xyw47A2UlUr&sz=w1000",
    },
    {
      id: 144,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1X18lbrPXhWqeXZqa5YeTmhrleOjZY8_-&sz=w1000",
    },
    {
      id: 145,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1NUlJrCn8BnKmFj9azTaqWFBl7ZqCJgVJ&sz=w1000",
    },
    {
      id: 146,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1FCriNKcWdfsAhxjQ4YOFwcU80PBAT_7R&sz=w1000",
    },
  ];
  const flyersSquareHeader: Flyer[] = [
    {
      id: 1,
      category: "Elegant",
      image:
        "https://drive.google.com/thumbnail?id=1dYt07NEb2dtg73jQGBKDKNFupfUMlBOl&sz=w1000",
    },
    {
      id: 2,
      category: "Construction",
      image:
        "https://drive.google.com/thumbnail?id=1Kho3JHxuubDdz1fUWdpDYXjXjzN4--eR&sz=w1000",
    },
    {
      id: 3,
      category: "Services",
      image:
        "https://drive.google.com/thumbnail?id=1RTo6VwaK3kSNIe7GgPresoGzeIqmA_Iz&sz=w1000",
    },
    {
      id: 4,
      category: "Ebooks",
      image:
        "https://drive.google.com/thumbnail?id=1iVmSot3WqkDOxTcaOHHTjDWe9NJ1OGP2&sz=w1000",
    },
    {
      id: 6,
      category: "Fitness",
      image:
        "https://drive.google.com/thumbnail?id=1x40uaDiEIsZdlVZLK9dT-EMKirRnt7XY&sz=w1000",
    },
    {
      id: 7,
      category: "Shopping",
      image:
        "https://drive.google.com/thumbnail?id=1rsptqz6BIb_2bwGECIjsjkAKNjY98ooU&sz=w1000",
    },
    {
      id: 8,
      category: "Leds",
      image:
        "https://drive.google.com/thumbnail?id=1euvWRa-L-t1mARWiq0TYvsEYpjamNHVE&sz=w1000",
    },
    {
      id: 9,
      category: "Party",
      image:
        "https://drive.google.com/thumbnail?id=1J7OXnoTd5dGQK0TCaaUj1UzreU59UPKq&sz=w1000",
    },
    {
      id: 21,
      category: "Ecommerce",
      image:
        "https://drive.google.com/thumbnail?id=13D7zl_RuWt2hyIqPzRxGH2IBu47O0Abn&sz=w1000",
    },
    {
      id: 22,
      category: "Sales",
      image:
        "https://drive.google.com/thumbnail?id=15me-L-v49iQWwWYB0DFUgHla9ExIbTNR&sz=w1000",
    },

    {
      id: 24,
      category: "Shoes",
      image:
        "https://drive.google.com/thumbnail?id=17Ti0OF1WdHwiUd07O8IWEDxeDH6Qbcom&sz=w1000",
    },
    {
      id: 25,
      category: "Catering",
      image:
        "https://drive.google.com/thumbnail?id=1e3n2dzUgKyeR8IZkPkst4Wkmg4IMuYHF&sz=w1000",
    },
    {
      id: 26,
      category: "Events",
      image:
        "https://drive.google.com/thumbnail?id=1a9yZZ9Qk9jPCvKm8LSlkNy-qqGqnngPX&sz=w1000",
    },
    {
      id: 27,
      category: "Retail",
      image:
        "https://drive.google.com/thumbnail?id=1ezY9bLcbmtoE5rMyPsYf5r7lhoaLMSOD&sz=w1000",
    },
    {
      id: 28,
      category: "Services",
      image:
        "https://drive.google.com/thumbnail?id=17fM1GuLJGgkzRd1Ddao6W8AtJYE89yeA&sz=w1000",
    },
    {
      id: 29,
      category: "Toys",
      image:
        "https://drive.google.com/thumbnail?id=1wVJaNBo-VEuT9yfMjMsBTDJDQbVrrqtO&sz=w1000",
    },
  ];

  const testimonials = [
    {
      text: "Llevo 30 minutos de compra y ya tengo tres diseños listos para Instagram, LinkedIn y Facebook.",
      author: "María González",
      role: "Marketing Manager",
      rating: 5,
      avatar: "/avatar_maria.png",
    },
    {
      text: "Increíble cómo FlyerAI captura las tendencias virales. Mis conversiones subieron 300%.",
      author: "Carlos Ruiz",
      role: "E-commerce Owner",
      rating: 5,
      avatar: "/avatar_carlos.png",
    },
    {
      text: "Adiós Canva, adiós diseñadores caros. FlyerAI es todo lo que necesito.",
      author: "Ana Martínez",
      role: "Social Media Specialist",
      rating: 5,
      avatar: "/avatar_ana.png",
    },
  ];

  // Función genérica que parte un array en N grupos casi uniformes
  function splitIntoGroups<T>(items: T[], groupCount: number): T[][] {
    const total = items.length;
    const baseSize = Math.floor(total / groupCount);
    const remainder = total % groupCount;

    const groups: T[][] = [];
    let start = 0;

    for (let i = 0; i < groupCount; i++) {
      const extra = i < remainder ? 1 : 0;
      const size = baseSize + extra;
      const end = start + size;
      groups.push(items.slice(start, end));
      start = end;
    }

    return groups;
  }

  // --- Definir versiones locales (cuadrado) desde public/ventor/cuadrado ---
  const squareFiles = [
    "imagenes cuadradas1.png",
    "imagenes cuadradas2.png",
    "imagenes cuadradas3.png",
    "imagenes cuadradas4.png",
    "imagenes cuadradas6.png",
    "imagenes cuadradas8.png",
    "imagenes cuadradas9.png",
    "imagenes cuadradas11.png",
    "imagenes cuadradas12.png",
    "imagenes cuadradas13.png",
    "imagenes cuadradas14.png",
    "imagenes cuadradas15.png",
    "imagenes cuadradas20.png",
    "imagenes cuadradas21.png",
    "imagenes cuadradas22.png",
    "imagenes cuadradas24.png",
    "imagenes cuadradas25.png",
    "imagenes cuadradas26.png",
    "imagenes cuadradas29.png",
    "imagenes cuadradas30.png",
    "imagenes cuadradas31.png",
    "imagenes cuadradas32.png",
    "imagenes cuadradas33.png",
    "imagenes cuadradas35.png",
    "imagenes cuadradas36.png",
    "imagenes cuadradas37.png",
    "imagenes cuadradas39.png",
    "imagenes cuadradas40.png",
    "imagenes cuadradas41.png",
    "imagenes cuadradas42.png",
    "imagenes cuadradas44.png",
    "imagenes cuadradas45.png",
    "imagenes cuadradas46.png",
    "imagenes cuadradas47.png",
    "imagenes cuadradas48.png",
    "imagenes cuadradas50.png",
    "imagenes cuadradas52.png",
    "imagenes cuadradas53.png",
    "imagenes cuadradas54.png",
    "imagenes cuadradas55.png",
    "imagenes cuadradas58.png",
    "imagenes cuadradas60.png",
    "imagenes cuadradas62.png",
    "imagenes cuadradas63.png",
    "imagenes cuadradas64.png",
    "imagenes cuadradas66.png",
    "imagenes cuadradas67.png",
    "imagenes cuadradas70.png",
    "imagenes cuadradas71.png",
    "imagenes cuadradas73.png",
    "imagenes cuadradas74.png",
    "imagenes cuadradas75.png",
    "imagenes cuadradas77.png",
    "imagenes cuadradas78.png",
    "imagenes cuadradas80.png",
    "imagenes cuadradas81.png",
    "imagenes cuadradas84.png",
    "imagenes cuadradas85.png",
    "imagenes cuadradas89.png",
    "imagenes cuadradas91.png",
    "imagenes cuadradas92.png",
    "imagenes cuadradas94.png",
    "imagenes cuadradas95.png",
    "imagenes cuadradas96.png",
    "imagenes cuadradas98.png",
    "imagenes cuadradas99.png",
    "imagenes cuadradas102.png",
    "imagenes cuadradas105.png",
    "imagenes cuadradas106.png",
    "imagenes cuadradas107.png",
    "imagenes cuadradas109.png",
    "imagenes cuadradas111.png",
    "imagenes cuadradas113.png",
    "imagenes cuadradas114.png",
    "imagenes cuadradas118.png",
    "imagenes cuadradas120.png",
    "imagenes cuadradas122.png",
    "imagenes cuadradas123.png",
    "imagenes cuadradas124.png",
    "imagenes cuadradas125.png",
    "imagenes cuadradas126.png",
    "imagenes cuadradas132.png",
    "imagenes cuadradas133.png",
    "imagenes cuadradas134.png",
    "imagenes cuadradas136.png",
    "imagenes cuadradas137.png",
    "imagenes cuadradas139.png",
    "imagenes cuadradas141.png",
    "imagenes cuadradas143.png",
    "imagenes cuadradas145.png",
    "imagenes cuadradas146.png",
  ];
  const flyersSquareLocal: Flyer[] = squareFiles.map((file, idx) => ({
    id: idx + 1,
    category: "General",
    image: `/ventor/cuadrado/${file}`,
  }));
  const flyersSquareHeaderLocal: Flyer[] = flyersSquareLocal.slice(0, 16);

  // --- Agrupando flyersSquare en 4 bloques ---
  const [
    flyersSquareGroup1,
    flyersSquareGroup2,
    flyersSquareGroup3,
    flyersSquareGroup4,
  ] = splitIntoGroups(flyersSquareLocal, 4);

  // --- Agrupando flyersVertical en 4 bloques ---
  const [
    flyersVerticalGroup1,
    flyersVerticalGroup2,
    flyersVerticalGroup3,
    flyersVerticalGroup4,
  ] = splitIntoGroups(flyersVertical, 4);

  // Ya tienes:
  // flyersSquareGroup1..4  (each ~145/4 items)
  // flyersVerticalGroup1..4 (each ~flyersVertical.length/4 items)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFlyer((prev) => (prev + 1) % flyersSquareHeaderLocal.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [flyersSquareHeaderLocal.length]);

  const priceMap = {
    US: 6.9,
    PE: 27.0,
    MX: 162.9,
    CO: 29.73,
    BO: 52.0,
  };
  return (
    <>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-cyan-50">
        <HeroSection
          linkPagoHotmart={linkPagoHotmart}
          priceMap={priceMap}
          flyersSquareHeader={flyersSquareHeaderLocal}
          currentFlyer={currentFlyer}
        />
                <CarouselFlyers flyers={flyersVerticalGroup1} itemType="vertical" />
        <CarouselFlyers flyers={flyersSquareGroup1} itemType="square" />
        <AssistantsShowcase />

        <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden">
          <div className="container mx-auto px-4 mb-12">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">Flyers Que Están Arrasando</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Diseños virales creados con FlyerAI que están generando miles de conversiones</p>
            </div>
          </div>
          <CarouselFlyers flyers={flyersVerticalGroup2} itemType="vertical" />
          <CarouselFlyers flyers={flyersSquareGroup2} itemType="square" />
        </section>
        <VideoSection />
        <HowItWorksSection />
        <CarouselFlyers flyers={flyersVerticalGroup3} itemType="vertical" />
        <CarouselFlyers flyers={flyersSquareGroup3} itemType="square" />
        <TestimonialsSection
          testimonials={testimonials}
          current={currentTestimonial}
          setCurrent={setCurrentTestimonial}
        />
        <CarouselFlyers flyers={flyersVerticalGroup4} itemType="vertical" />
        <CarouselFlyers flyers={flyersSquareGroup4} itemType="square" />
                <PlansSection onBuy={(url) => handleComprar(url)} />

{/*         <PricingSection priceMap={priceMap} linkPagoHotmart={linkPagoHotmart} />
 */}
      </div>
    </>
  );
}
