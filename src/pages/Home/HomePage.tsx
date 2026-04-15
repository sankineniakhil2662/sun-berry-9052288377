

import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import GuaranteesSection from "./sections/GuaranteesSection";
import ProcessSection from "./sections/ProcessSection";
import IndustriesSection from "./sections/IndustriesSection";
import TestimonialsSection from "./sections/TestimonalsSection";
import TopServices from "./sections/TopServices";
import ClientsSection from "../../components/home/ClientsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <TopServices />
      <WhyChooseUsSection />
      <GuaranteesSection />
      <ProcessSection />
      {/* <ServicesSection /> */}
      <IndustriesSection />
      <TestimonialsSection />
    </>
  );
};

 export default HomePage;

// import React, { useRef, useState, useEffect } from "react";

// export default function App() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const [playing, setPlaying] = useState(false);
//   const [muted, setMuted] = useState(false);
//   const [current, setCurrent] = useState(0);
//   const [duration, setDuration] = useState(0);

//   // Menu controller
//   type MenuType = "main" | "speed" | "quality" | "cc" | null;
//   const [openMenu, setOpenMenu] = useState<MenuType>(null);

//   const [speed, setSpeed] = useState(1);
//   const [quality, setQuality] = useState("1080p");
//   const [ccLang, setCcLang] = useState<"en" | "hi" | "off">("off");
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   /* ---------- lifecycle ---------- */
//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;

//     const handleLoadedMetadata = () => setDuration(v.duration);
//     const handleTimeUpdate = () => setCurrent(v.currentTime);
//     const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);

//     v.addEventListener("loadedmetadata", handleLoadedMetadata);
//     v.addEventListener("timeupdate", handleTimeUpdate);
//     document.addEventListener("fullscreenchange", handleFullscreenChange);

//     return () => {
//       v.removeEventListener("loadedmetadata", handleLoadedMetadata);
//       v.removeEventListener("timeupdate", handleTimeUpdate);
//       document.removeEventListener("fullscreenchange", handleFullscreenChange);
//     };
//   }, []);

//   /* ---------- helpers ---------- */
//   const formatTime = (t: number) =>
//     `${Math.floor(t / 60)}:${Math.floor(t % 60)
//       .toString()
//       .padStart(2, "0")}`;

//   const toggleMenu = (menu: MenuType) => {
//     setOpenMenu((prev) => (prev === menu ? null : menu));
//   };

//   /* ---------- controls ---------- */
//   const togglePlay = () => {
//     const v = videoRef.current;
//     if (!v) return;
//     if (v.paused) {
//       v.play();
//       setPlaying(true);
//     } else {
//       v.pause();
//       setPlaying(false);
//     }
//   };

//   const toggleMute = () => {
//     const v = videoRef.current;
//     if (!v) return;
//     v.muted = !muted;
//     setMuted(!muted);
//   };

//   const toggleFullscreen = async () => {
//     const el = containerRef.current;
//     if (!el) return;
//     try {
//       if (!document.fullscreenElement) {
//         await el.requestFullscreen();
//       } else {
//         await document.exitFullscreen();
//       }
//     } catch (error) {
//       console.error("Fullscreen error:", error);
//     }
//   };

//   const seek = (e: React.MouseEvent<HTMLDivElement>) => {
//     const v = videoRef.current;
//     if (!v || duration === 0) return;
//     const rect = e.currentTarget.getBoundingClientRect();
//     v.currentTime = ((e.clientX - rect.left) / rect.width) * duration;
//   };

//   const changeSpeed = (s: number) => {
//     const v = videoRef.current;
//     if (!v) return;
//     v.playbackRate = s;
//     setSpeed(s);
//     setOpenMenu(null);
//   };

//   const changeQuality = (q: string) => {
//     setQuality(q);
//     setOpenMenu(null);
//   };

//   const changeCC = (lang: "en" | "hi" | "off") => {
//     const v = videoRef.current;
//     if (!v) return;
    
//     const tracks = v.textTracks;
//     for (let i = 0; i < tracks.length; i++) {
//       tracks[i].mode =
//         lang === "off"
//           ? "disabled"
//           : tracks[i].language === lang
//           ? "showing"
//           : "disabled";
//     }

//     setCcLang(lang);
//     setOpenMenu(null);
//   };

//   return (
//     <div 
//       ref={containerRef} 
//       className="relative w-[900px] aspect-video bg-black overflow-hidden mx-auto my-10"
//     >
//       {/* INLINE SUBTITLE STYLE — REQUIRED */}
//       <style>
//         {`
//           video::cue {
//             background: rgba(0,0,0,0.75);
//             color: white;
//             font-size: 18px;
//             line-height: 2.4;
//           }
//         `}
//       </style>
   
//       <video
//         ref={videoRef}
//         className="w-full h-full block cursor-pointer"
//         onClick={togglePlay}
//         src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
//       >
//         <track
//           kind="subtitles"
//           srcLang="en"
//           src="/subs/english.vtt"
//         />
//         <track
//           kind="subtitles"
//           srcLang="hi"
//           src="/subs/hindi.vtt"
//         />
//       </video>

//       {/* SEEK */}
//       <div 
//         className="absolute bottom-12 left-0 right-0 h-1 bg-gray-800 cursor-pointer z-20" 
//         onClick={seek}
//       >
//         <div 
//           className="h-full bg-red-600" 
//           style={{ width: `${(current / duration) * 100 || 0}%` }}
//         />
//       </div>

//       {/* CONTROLS */}
//       <div className="absolute bottom-0 left-0 right-0 h-12 flex items-center gap-2.5 px-3 bg-black/85 text-white z-30">
//         <button onClick={togglePlay} className="w-8 h-8 flex items-center justify-center">
//           {playing ? "❚❚" : "▶"}
//         </button>
//         <button onClick={toggleMute} className="w-8 h-8 flex items-center justify-center">
//           {muted ? "🔇" : "🔊"}
//         </button>

//         <span className="flex-1 text-sm">
//           {formatTime(current)} / {formatTime(duration)}
//         </span>

//         <button onClick={() => toggleMenu("cc")} className="w-8 h-8 flex items-center justify-center">
//           CC
//         </button>
//         <button onClick={() => toggleMenu("main")} className="w-8 h-8 flex items-center justify-center">
//           ⚙
//         </button>
//         <button onClick={() => toggleMenu("quality")} className="w-8 h-8 flex items-center justify-center">
//           HD
//         </button>
//         <button onClick={toggleFullscreen} className="w-8 h-8 flex items-center justify-center">
//           {isFullscreen ? "🡼" : "⛶"}
//         </button>
//       </div>

//       {/* SETTINGS */}
//       {openMenu && (
//         <div 
//           className="absolute right-2.5 bottom-14 bg-gray-900 w-55 rounded-lg z-40 shadow-lg" 
//           onClick={(e) => e.stopPropagation()}
//         >
//           {openMenu === "main" && (
//             <>
//               <div className="px-2.5 py-2.5 flex justify-between cursor-pointer hover:bg-gray-800" onClick={() => toggleMenu("speed")}>
//                 Playback speed <span>{speed === 1 ? "Normal" : speed}</span>
//               </div>
//               <div className="px-2.5 py-2.5 flex justify-between cursor-pointer hover:bg-gray-800" onClick={() => toggleMenu("quality")}>
//                 Quality <span>{quality}</span>
//               </div>
//               <div className="px-2.5 py-2.5 flex justify-between cursor-pointer hover:bg-gray-800" onClick={() => toggleMenu("cc")}>
//                 Subtitles <span>{ccLang}</span>
//               </div>
//             </>
//           )}

//           {openMenu === "speed" &&
//             [0.5, 0.75, 1, 1.25, 1.5, 2].map((s) => (
//               <div 
//                 key={s} 
//                 className="px-2.5 py-2.5 flex justify-between cursor-pointer hover:bg-gray-800" 
//                 onClick={() => changeSpeed(s)}
//               >
//                 {s === 1 ? "Normal" : s} {speed === s && "✔"}
//               </div>
//             ))}

//           {openMenu === "quality" &&
//             ["1080p", "720p", "480p"].map((q) => (
//               <div 
//                 key={q} 
//                 className="px-2.5 py-2.5 flex justify-between cursor-pointer hover:bg-gray-800" 
//                 onClick={() => changeQuality(q)}
//               >
//                 {q} {quality === q && "✔"}
//               </div>
//             ))}

//           {openMenu === "cc" && (
//             <>
//               <div className="px-2.5 py-2.5 flex justify-between cursor-pointer hover:bg-gray-800" onClick={() => changeCC("en")}>
//                 English {ccLang === "en" && "✔"}
//               </div>
//               <div className="px-2.5 py-2.5 flex justify-between cursor-pointer hover:bg-gray-800" onClick={() => changeCC("hi")}>
//                 Hindi {ccLang === "hi" && "✔"}
//               </div>
//               <div className="px-2.5 py-2.5 flex justify-between cursor-pointer hover:bg-gray-800" onClick={() => changeCC("off")}>
//                 Off {ccLang === "off" && "✔"}
//               </div>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
