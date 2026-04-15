import img1 from "../../../../assets/services/game/game-1.png";
import img2 from "../../../../assets/services/game/game-2.png";
import img3 from "../../../../assets/services/game/game-3.png";
import img4 from "../../../../assets/services/game/game-4.png";
import img5 from "../../../../assets/services/game/game-5.png";
import img6 from "../../../../assets/services/game/game-6.png";
import img7 from "../../../../assets/services/game/game-7.png";
import img8 from "../../../../assets/services/game/game-8.png";


export type GamingDevelopmentData = {
  title: string;
  description: string;
  cta: { label: string; href: string };
  screenshots: { src: string; alt: string }[];
};

export const GAMING_HERO: GamingDevelopmentData = {
  title: "Our Game Try Your Luck",
  description:
    "We are a trusted game development company delivering full-cycle and co-development solutions. From global studios to publishers and enterprises, we craft immersive, high-quality gaming experiences across platforms.",
  cta: { label: "Contact Us", href: "/contact" },
  screenshots: [
   
    { src: img1, alt: "Gameplay screenshot 2" },
    { src: img2, alt: "Gameplay screenshot 3" },
    { src: img3, alt: "Gameplay screenshot 4" },
    { src: img4, alt: "Gameplay screenshot 5" },
    { src: img5, alt: "Gameplay screenshot 6" },
    { src: img6, alt: "Gameplay screenshot 7" },
    { src: img7, alt: "Gameplay screenshot 8" },
    { src: img8, alt: "Gameplay screenshot 9" },
  ],
};