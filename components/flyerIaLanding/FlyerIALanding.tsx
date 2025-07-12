"use client";

import { useState, useEffect } from "react";
import CarouselFlyers, { Flyer } from "./CarouselFlyers";
import Image from "next/image";
import CountryPriceText from "./CountryPriceText";
import Subscriptions from "../Subscriptions";

export default function FlyerIALanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentFlyer, setCurrentFlyer] = useState(0);
  const linkPagoHotmart =
    "https://pay.hotmart.com/G100299066R?off=xhs7uuy4&checkoutMode=10";

  const flyersVertical: Flyer[] = [
    {
      id: 1,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=14CLn_QHogDYJgHk9-D5FEIZH2NSJT40G&sz=w1000",
    },
    {
      id: 2,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1MpCIJNcu14BaqSBXveS0B3EnVMGRaM9I&sz=w1000",
    },
    {
      id: 3,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1MKNuOxcZbBTlOcRiUSkOuvj7-kUUBY2T&sz=w1000",
    },
    {
      id: 4,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1UTvtHfyICNsQVWYncmVZgJeEVwskmr_M&sz=w1000",
    },
    {
      id: 5,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1TbMdCIRlWy-mxL031oBeiSS7PcBbSEeH&sz=w1000",
    },
    {
      id: 6,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1xUVHkMssC1LiLtzFCsDmnov6TLzoVVE8&sz=w1000",
    },
    {
      id: 7,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1HHAbpxGRy_aVZ_RiB9bFZthcCeyPtl6t&sz=w1000",
    },
    {
      id: 8,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1xpJQgsnHDLZYPA5UYgSzTwOb2v9z8pBW&sz=w1000",
    },
    {
      id: 9,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1p3NyM3v9U3GHZIo9mojeYe1QtHoxS4BA&sz=w1000",
    },
    {
      id: 10,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1Q3FJx9p8s7hwnhdkaH1v_M1Fo-wxNLSn&sz=w1000",
    },
    {
      id: 11,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1kCGPcq2XBw8dH-H0MEaoMIOWFZnD1ohF&sz=w1000",
    },
    {
      id: 12,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1QvbTyYuByGfFsRaGOIqC-zjIIxkxAFM-&sz=w1000",
    },
    {
      id: 13,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1eSSRtcph59dwIXumwB1rzsmaRYhPNCj6&sz=w1000",
    },
    {
      id: 14,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1xK1-XWAirQn9rqR2a3fku7XjyuwXBCYr&sz=w1000",
    },
    {
      id: 15,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1LU1Ab8G1Y9iHwXwrJsfb1JRTyrk9yPIr&sz=w1000",
    },
    {
      id: 16,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1hcQr4Uv1-PstV0L49pwqETbUA9A6F1vQ&sz=w1000",
    },
    {
      id: 17,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=14Lyd7kNaOxLyCgpRhD1TkXPQgwvt2-EM&sz=w1000",
    },
    {
      id: 18,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1Bp-jLHRxUsMqJGB1gnd2gSn8A0nd1TRf&sz=w1000",
    },
    {
      id: 19,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1o7GnKulvI1bDUlb2FGVE3rX7mYb5-_8t&sz=w1000",
    },
    {
      id: 20,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1rJmFj_bxeWSEbnwEMtV3dfESpjyjxY7z&sz=w1000",
    },
    {
      id: 21,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1QLl6RSxjwhCKac9KfOVI4-yXevetf8S8&sz=w1000",
    },
    {
      id: 22,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=12HOXi3-Q_v6BFw2YhQSsMNaRBEVmwQCG&sz=w1000",
    },
    {
      id: 23,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1KKU0M47V9aXdj0Ecizz1WwSqCY6Iw0f5&sz=w1000",
    },
    {
      id: 24,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1CwmC4avVAtYFmzAsCq2GEPCXGfhseLjZ&sz=w1000",
    },
    {
      id: 25,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1xch5x-vO6vsdYq3EVgacIw17u9NU5TfU&sz=w1000",
    },
    {
      id: 26,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=16_GY9-tvU6cnw0jp30-wtgzDzjRPz5Kv&sz=w1000",
    },
    {
      id: 27,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1uPUz2cDABVwy9qPfMAJd3mMZNgAw7Bvr&sz=w1000",
    },
    {
      id: 28,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1nC5TJRlMq25LaoDv3o8AyPjmU1e4vcJf&sz=w1000",
    },
    {
      id: 29,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=14oNw2-P6P2V-Q8SKNuqsjPzQYWCkfnXi&sz=w1000",
    },
    {
      id: 30,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=19RTkowIWRgkAEfk3EIZIGiXpzrYLpUvS&sz=w1000",
    },
    {
      id: 31,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1gtsGPcAwd352T38fU9_QvQMkO5zus__Y&sz=w1000",
    },
    {
      id: 32,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1m2caZNQXY4EihU7RQbSXoTeuelX-j86G&sz=w1000",
    },
    {
      id: 33,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1D5zeq6p_-4k7-nc7v9Z9MCMkm9g04kQy&sz=w1000",
    },
    {
      id: 34,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1067blT_fGZAgSvax0TtJZqOw2quT3M_h&sz=w1000",
    },
    {
      id: 35,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=165xOD1o6jiEc7CPFgGdeUTWFwj4-mTOI&sz=w1000",
    },
    {
      id: 36,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=15NNrgSfLdvI_E0qGc5VROovQ1pEnsX0s&sz=w1000",
    },
    {
      id: 37,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1X6BQsPgzb3ddo8y8h6IoitiL1Qz6d-t5&sz=w1000",
    },
    {
      id: 38,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1Xhdivs37LpOPM_cD-JkTc0aBpjJoD7Ug&sz=w1000",
    },
    {
      id: 39,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1-eECnIfV7vxu1vi9RbEfmsjRnafuVWKu&sz=w1000",
    },
    {
      id: 40,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=15nWvD6sE4PVTUIhNpFqiyzUvvQtq81pM&sz=w1000",
    },
    {
      id: 41,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=14IirpfZN-jTapkWu70WjMsA33em6LfmR&sz=w1000",
    },
    {
      id: 42,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1-ZC_UtNHeneOEWy1MDji0X1fub4p_pzW&sz=w1000",
    },
    {
      id: 43,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1SXJYQAcsSpezIyRswY2lPEYEo6ZFXOI6&sz=w1000",
    },
    {
      id: 44,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1JoRXgwqCy33lxIqRP1Vfnbqd6tKF-QDK&sz=w1000",
    },
    {
      id: 45,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1lGuLquU0zSt_4z04Vs9lYHyY2ur7tVoY&sz=w1000",
    },
    {
      id: 46,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1CMEsQ-4wRyCMAuXH2EDi6bNIrl859M55&sz=w1000",
    },
    {
      id: 47,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1mR0Z67F6KkY0dQ6EVbDACSROCw6dhmty&sz=w1000",
    },
    {
      id: 48,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1nuWAc2vmGz0wxRec8P2jNc96qC3tOOnU&sz=w1000",
    },
    {
      id: 49,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=15DQvXKdpwzAV3KZY4VWJ6XH07ieBsIuw&sz=w1000",
    },
    {
      id: 50,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1wgXpfexRMWOjkUP6FxddpywyJg11VskK&sz=w1000",
    },
    {
      id: 51,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1vhv9m6_a9K9_HRPV2KJDmPlBFeaSjNWZ&sz=w1000",
    },
    {
      id: 52,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1CYl33azB_4I9lBubVOk1mZRpEacs8w7v&sz=w1000",
    },
    {
      id: 53,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1j5-mqDkM1S9Udf6ioLOn8DSHqFnLNRgz&sz=w1000",
    },
    {
      id: 54,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1B5hXeCYYp6WiyuR4Oui_083aMW6XqESB&sz=w1000",
    },
    {
      id: 55,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=16C15zZhYe2OFTYAjrMwVj7sjyf29Vigg&sz=w1000",
    },
    {
      id: 56,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1AkJYbmvG0x4OeLbtawU-n2sx0OqK0zjk&sz=w1000",
    },
    {
      id: 57,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1afseuk9zaUl2KcOBq9pop5wsCXg1uv9j&sz=w1000",
    },
    {
      id: 58,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1-7hz9JjhfZbBm4FBWl7nsRb_IXgzSPA0&sz=w1000",
    },
    {
      id: 59,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1uCOSckNY00_Ss9sehPIDMQGBjIG2DL-N&sz=w1000",
    },
    {
      id: 60,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1clBrWHkmPCcr3JA2fP4hBWZsQh78CvdA&sz=w1000",
    },
    {
      id: 61,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1LOj3Yulhap0UHCPbTkwu9ZRomARRJO6a&sz=w1000",
    },
    {
      id: 62,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1i7m1F81fKxg6UH5yuSbUohelZXX4pbz1&sz=w1000",
    },
    {
      id: 63,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1_fKzfcEBt8J3wPM_qjMZhuErjubsvmvx&sz=w1000",
    },
    {
      id: 64,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1j4OLLmmxPHE7uxh-bomxxJc9ZTm522QV&sz=w1000",
    },
    {
      id: 65,
      category: "General",
      image:
        "https://drive.google.com/thumbnail?id=1iD_2HnD_RjdDPauaIgdkNO2VRAIZUU1u&sz=w1000",
    },
  ];
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

  // --- Agrupando flyersSquare en 4 bloques ---
  const [
    flyersSquareGroup1,
    flyersSquareGroup2,
    flyersSquareGroup3,
    flyersSquareGroup4,
  ] = splitIntoGroups(flyersSquare, 4);

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
      setCurrentFlyer((prev) => (prev + 1) % flyersSquareHeader.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [flyersSquareHeader.length]);

  // Icons as SVG components
  const SparklesIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );

  const RocketIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );

  const StarIcon = ({ filled = false }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );

  const TrendingUpIcon = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
      <polyline points="16,7 22,7 22,13" />
    </svg>
  );

  const ZapIcon = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
    </svg>
  );

  const TargetIcon = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );

  const PaletteIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" />
      <circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" />
      <circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );

  const PlayIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5,3 19,12 5,21" />
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22,4 12,14.01 9,11.01" />
    </svg>
  );

  const UsersIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="m22 21-3-3" />
      <path d="m16 16 3 3" />
    </svg>
  );

  const HeartIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
    </svg>
  );
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
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-20 text-center">
            <div className="mx-auto max-w-4xl">
              <div className="inline-flex items-center rounded-full bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-6 py-2 mb-6 font-medium">
                <SparklesIcon />
                <span className="ml-2">¡Nuevo! IA Generativa para Flyers</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent leading-tight">
                Crea Flyers Virales en Segundos con FlyerAI
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                Olvídate de Canva y diseñadores: genera tus diseños a partir de
                los anuncios más exitosos en Facebook Ads Library.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button
                  type="button"
                  onClick={() => window.open(linkPagoHotmart, "_blank")}
                  className="inline-flex items-center justify-center rounded-full text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <RocketIcon />
                  <span className="ml-3">
                    Comprar por <CountryPriceText prices={priceMap} />
                  </span>
                </button>

                <div className="flex items-center text-cyan-100">
                  <StarIcon filled />
                  <StarIcon filled />
                  <StarIcon filled />
                  <StarIcon filled />
                  <StarIcon filled />
                  <span className="text-sm ml-2">+1,200 usuarios activos</span>
                </div>
              </div>

              {/* Animated Flyer Preview */}
              <div className="relative mx-auto w-64 h-64 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-2xl transform rotate-12 opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl transform -rotate-6 opacity-40"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <div className="text-center">
                    <div className="w-full h-45 mb-4 rounded-lg overflow-hidden">
                      <img
                        src={flyersSquareHeader[currentFlyer].image}
                        alt={`Flyer ${flyersSquareHeader[currentFlyer].category}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-gray-800 font-bold text-lg">
                      {flyersSquareHeader[currentFlyer].category}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CarouselFlyers flyers={flyersVerticalGroup1} itemType="vertical" />

        <CarouselFlyers flyers={flyersSquareGroup1} itemType="square" />
        {/* Benefits Carousel */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg shadow-sm">
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUpIcon />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Modelos Siempre Actualizados
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Acceso a los patrones más virales extraídos directamente de
                    Facebook Ads Library cada semana.
                  </p>
                </div>
              </div>

              <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg shadow-sm">
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ZapIcon />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Sin Curva de Aprendizaje
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Olvídate de diseñadores caros y herramientas complicadas.
                    Solo describe y obtén resultados profesionales.
                  </p>
                </div>
              </div>

              <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-lg shadow-sm">
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TargetIcon />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Para Cualquier Industria
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Retail, tech, food, fitness, educación... Diseños
                    optimizados para todas las redes sociales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Image Carousel */}
        <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden">
          <div className="container mx-auto px-4 mb-12">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                Flyers Que Están Arrasando
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Diseños virales creados con FlyerAI que están generando miles de
                conversiones
              </p>
            </div>
          </div>

          {/* Scrolling Carousel */}
          {/* Carousel de imágenes usando tu array de flyers con propiedad `image` */}

          <CarouselFlyers flyers={flyersVerticalGroup2} itemType="vertical" />
          <CarouselFlyers flyers={flyersSquareGroup2} itemType="square" />
        </section>

        {/* Video Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                Ve FlyerAI en Acción
              </h2>
              <p className="text-xl text-purple-100 mb-12">
                Descubre cómo crear flyers virales en menos de 30 segundos
              </p>

              <div className="relative mx-auto max-w-sm">
                {/* Vídeo en primer plano */}
                <div className="aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl relative z-10">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/GECrfns4fwQ?rel=0"
                    title="Vídeo FlyerIA"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {/* Overlay decorativo detrás, sin capturar clicks */}
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 rounded-3xl opacity-30 blur-xl pointer-events-none -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Flyers Gallery */}
        {/*  <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                Galería de Flyers Virales
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada diseño está basado en anuncios que han generado millones de
                impresiones y miles de conversiones
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {flyersSquare.map((flyer) => (
                <div
                  key={flyer.id}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 rounded-lg shadow-sm"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img
                      src={flyer.image}
                      alt={flyer.category}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-flex items-center rounded-full bg-white/90 text-gray-800 px-2.5 py-0.5 text-xs font-medium mb-2">
                     </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <HeartIcon />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-8 py-4">
                Comenzar a Crear Flyers
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </section>
 */}
        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                Cómo Funciona la Magia
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tecnología de IA avanzada que analiza millones de anuncios
                exitosos para crear tus diseños perfectos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Conexión Automática
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nos conectamos a Facebook Ads Library, Google Trends y TikTok
                  Ads Library, basándonos en indicadores.{" "}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Extracción de Patrones
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nuestra IA identifica los elementos visuales, colores,
                  tipografías y layouts que generan más conversiones.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Generación Instantánea
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Describes tu producto o servicio y obtienes flyers
                  personalizados basados en los patrones más exitosos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CarouselFlyers flyers={flyersVerticalGroup3} itemType="vertical" />
        <CarouselFlyers flyers={flyersSquareGroup3} itemType="square" />
        {/* Testimonials Carousel */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-12">
                Lo Que Dicen Nuestros Usuarios
              </h2>

              <div className="relative">
                <div className="bg-white/10 border-0 backdrop-blur-sm rounded-lg shadow-sm">
                  <div className="p-12">
                    {/* Estrellas */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <StarIcon key={i} filled />
                        )
                      )}
                    </div>

                    {/* Texto */}
                    <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                      &quot;{testimonials[currentTestimonial].text}&quot;
                    </blockquote>

                    {/* Avatar + Autor */}
                    <div className="flex items-center justify-center">
                      <Image
                        width={64}
                        height={64}
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].author}
                        className="w-16 h-16 rounded-full mr-4 object-cover"
                      />
                      <div className="text-left">
                        <div className="font-bold text-lg">
                          {testimonials[currentTestimonial].author}
                        </div>
                        <div className="text-gray-300">
                          {testimonials[currentTestimonial].role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? "bg-orange-400"
                          : "bg-white/30"
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <CarouselFlyers flyers={flyersVerticalGroup4} itemType="vertical" />
        <CarouselFlyers flyers={flyersSquareGroup4} itemType="square" />
        {/* Pricing & Final CTA */}
        <section className="py-20 bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                Solo <CountryPriceText prices={priceMap} />
              </h2>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-6">Lo Que Incluye:</h3>
                    <div className="space-y-4 text-left">
                      <div className="flex items-center">
                        <CheckCircleIcon />
                        <span className="text-lg ml-3">Flyers ilimitados</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircleIcon />
                        <span className="text-lg ml-3">
                          Actualizaciones semanales
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircleIcon />
                        <span className="text-lg ml-3">
                          Nuevas plantillas cada semana
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircleIcon />
                        <span className="text-lg ml-3">
                          Tutoriales y hacks exclusivos
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircleIcon />
                        <span className="text-lg ml-3">
                          Manual de uso completo
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircleIcon />
                        <span className="text-lg ml-3">
                          Soporte prioritario
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-6xl font-black mb-4">
                      <CountryPriceText prices={priceMap} />
                    </div>
                    <div className="text-xl text-cyan-100 mb-8">por oferta</div>

                    <button
                      type="button"
                      onClick={() => window.open(linkPagoHotmart, "_blank")}
                      className="inline-flex items-center justify-center rounded-full bg-white text-gray-800 hover:bg-gray-100 font-bold text-xl px-12 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300 w-full"
                    >
                      <RocketIcon />
                      <span className="ml-3">Comprar Ahora</span>
                    </button>

                    <p className="text-sm text-cyan-100 mt-4">
                      Cancela cuando quieras • Sin compromisos
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <span className="inline-flex items-center rounded-full bg-yellow-400 text-black text-lg px-4 py-2 font-medium">
                  <UsersIcon />
                  <span className="ml-2">+1,200 usuarios activos</span>
                </span>
                <span className="inline-flex items-center rounded-full bg-green-400 text-black text-lg px-4 py-2 font-medium">
                  <StarIcon />
                  <span className="ml-2">4.9/5 estrellas</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <Subscriptions />

        {/* Fixed CTA Buttons */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <button
            type="button"
            onClick={() => window.open(linkPagoHotmart, "_blank")}
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-full shadow-2xl animate-pulse"
          >
            Comprar por <CountryPriceText prices={priceMap} />
          </button>
        </div>
      </div>
    </>
  );
}
