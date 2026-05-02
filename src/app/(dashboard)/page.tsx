// "use client";

// import { useEffect, useRef, useState } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   AnimatePresence,
// } from "framer-motion";

// const VOICES = [
//   {
//     name: "Aria",
//     tag: "Conversational",
//     wave: [3, 8, 14, 20, 28, 35, 42, 35, 28, 20, 14, 8, 3],
//   },
//   {
//     name: "Marcus",
//     tag: "Narration",
//     wave: [5, 12, 22, 30, 40, 50, 40, 30, 22, 12, 5, 12, 22],
//   },
//   {
//     name: "Zara",
//     tag: "News",
//     wave: [8, 18, 28, 38, 48, 38, 28, 18, 8, 18, 28, 38, 28],
//   },
//   {
//     name: "Eliot",
//     tag: "Character",
//     wave: [2, 10, 18, 32, 45, 52, 45, 32, 18, 10, 2, 10, 18],
//   },
// ];

// const STATS = [
//   { value: "1M+", label: "Developers" },
//   { value: "99.9%", label: "Uptime SLA" },
//   { value: "32", label: "Languages" },
//   { value: "10ms", label: "Latency" },
// ];

// const FEATURES = [
//   {
//     icon: "◈",
//     title: "Ultra-Realistic Synthesis",
//     desc: "Voices indistinguishable from human speech. Emotion, cadence, and breath — all rendered with precision.",
//   },
//   {
//     icon: "⬡",
//     title: "Voice Cloning",
//     desc: "Clone any voice with just 60 seconds of audio. Deploy instantly across your entire product.",
//   },
//   {
//     icon: "◎",
//     title: "Real-Time Streaming",
//     desc: "Sub-10ms first-chunk latency. Built for conversational AI, live dubbing, and interactive media.",
//   },
//   {
//     icon: "⬢",
//     title: "32 Languages",
//     desc: "Speak to the world natively. Every language, every accent, every nuance — preserved.",
//   },
// ];

// function WaveBar({ height, delay }: { height: number; delay: number }) {
//   return (
//     <motion.div
//       className="w-[3px] rounded-full bg-gradient-to-t from-violet-600 to-fuchsia-400"
//       style={{ height: `${height}px` }}
//       animate={{ scaleY: [1, 1.6, 0.7, 1.3, 1] }}
//       transition={{ duration: 1.4, repeat: Infinity, delay, ease: "easeInOut" }}
//     />
//   );
// }

// function VoiceCard({
//   voice,
//   index,
// }: {
//   voice: (typeof VOICES)[0];
//   index: number;
// }) {
//   const [playing, setPlaying] = useState(false);
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.1, duration: 0.6 }}
//       className="relative group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-violet-500/40 transition-all duration-500 hover:bg-white/[0.06]"
//     >
//       <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//       <div className="flex items-center justify-between mb-5">
//         <div>
//           <p className="text-white font-semibold text-lg tracking-tight">
//             {voice.name}
//           </p>
//           <span className="text-xs text-violet-400 font-medium tracking-widest uppercase">
//             {voice.tag}
//           </span>
//         </div>
//         <button
//           onClick={() => setPlaying(!playing)}
//           className="w-10 h-10 rounded-full border border-violet-500/50 flex items-center justify-center text-violet-400 hover:bg-violet-500/20 hover:border-violet-400 transition-all duration-200"
//         >
//           {playing ? "▪" : "▶"}
//         </button>
//       </div>
//       <div className="flex items-end gap-[3px] h-14">
//         {voice.wave.map((h, i) => (
//           <WaveBar key={i} height={playing ? h : h * 0.4} delay={i * 0.07} />
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// export default function Home() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({ target: containerRef });
//   const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="min-h-screen bg-[#08040f] text-white overflow-x-hidden"
//       style={{ fontFamily: "'DM Sans', sans-serif" }}
//     >
//       {/* Google Fonts */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@600;700;800&display=swap');
//         .font-display { font-family: 'Syne', sans-serif; }
//         .radial-glow {
//           background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.25) 0%, transparent 70%);
//         }
//         .radial-center {
//           background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%);
//         }
//         .noise {
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
//         }
//         ::-webkit-scrollbar { width: 4px; background: #08040f; }
//         ::-webkit-scrollbar-thumb { background: #4c1d95; border-radius: 4px; }
//       `}</style>

//       {/* Mouse-tracked radial glow */}
//       <div
//         className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
//         style={{
//           background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(109,40,217,0.12), transparent 70%)`,
//         }}
//       />

//       {/* Noise overlay */}
//       <div className="noise pointer-events-none fixed inset-0 z-0 opacity-40" />

//       {/* NAV */}
//       <motion.nav
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//         className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-white/[0.06] backdrop-blur-md bg-[#08040f]/60"
//       >
//         <div className="flex items-center gap-2">
//           <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-xs font-bold">
//             11
//           </div>
//           <span className="font-display text-lg font-700 tracking-tight">
//             ElevenLabs
//           </span>
//         </div>
//         <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
//           {["Products", "Voices", "Pricing", "Docs"].map((item) => (
//             <a
//               key={item}
//               href="#"
//               className="hover:text-white transition-colors duration-200"
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//         <div className="flex items-center gap-3">
//           <a
//             href="#"
//             className="text-sm text-white/50 hover:text-white transition-colors"
//           >
//             Log in
//           </a>
//           <motion.a
//             href="#"
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium hover:opacity-90 transition-opacity"
//           >
//             Start free
//           </motion.a>
//         </div>
//       </motion.nav>

//       {/* HERO */}
//       <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
//         {/* Radial background */}
//         <div className="radial-glow absolute inset-0 pointer-events-none" />
//         <div
//           className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(109,40,217,0.18) 0%, transparent 65%)",
//           }}
//         />

//         {/* Grid lines */}
//         <div
//           className="absolute inset-0 pointer-events-none opacity-[0.04]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
//             backgroundSize: "80px 80px",
//           }}
//         />

//         <motion.div
//           style={{ y: heroY, opacity: heroOpacity }}
//           className="relative z-10 max-w-5xl"
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 mb-8"
//           >
//             <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
//             <span className="text-xs text-violet-300 tracking-widest uppercase font-medium">
//               Now with Turbo v2.5
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.35, duration: 0.8 }}
//             className="font-display text-6xl md:text-8xl font-800 leading-[1.0] tracking-tight mb-6"
//           >
//             Voice is the
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-violet-500">
//               new interface.
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
//           >
//             Generate ultra-realistic speech in 32 languages. Clone voices. Build
//             audio experiences that feel unmistakably human — at any scale.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.65, duration: 0.7 }}
//             className="flex flex-col sm:flex-row items-center justify-center gap-4"
//           >
//             <motion.button
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.96 }}
//               className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-base shadow-lg shadow-violet-900/40 hover:shadow-violet-700/50 transition-shadow"
//             >
//               Generate your voice
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.96 }}
//               className="px-8 py-4 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-white/20 font-medium text-base transition-all duration-200"
//             >
//               Hear demos →
//             </motion.button>
//           </motion.div>
//         </motion.div>

//         {/* Hero waveform visual */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.85, duration: 0.9 }}
//           className="relative z-10 mt-20 flex items-center justify-center gap-[4px] h-24"
//         >
//           {Array.from({ length: 60 }, (_, i) => {
//             const h = Math.abs(Math.sin(i * 0.4)) * 60 + 8;
//             return (
//               <motion.div
//                 key={i}
//                 className="w-[3px] rounded-full"
//                 style={{
//                   height: `${h}px`,
//                   background: `linear-gradient(to top, rgba(109,40,217,0.8), rgba(192,132,252,${0.3 + Math.abs(Math.sin(i * 0.3)) * 0.7}))`,
//                 }}
//                 animate={{ scaleY: [1, 1.4, 0.8, 1.2, 1] }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   delay: i * 0.04,
//                   ease: "easeInOut",
//                 }}
//               />
//             );
//           })}
//         </motion.div>
//       </section>

//       {/* STATS */}
//       <section className="relative z-10 py-16 border-y border-white/[0.06]">
//         <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
//           {STATS.map((s, i) => (
//             <motion.div
//               key={s.label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1, duration: 0.6 }}
//               className="text-center"
//             >
//               <p className="font-display text-4xl font-700 text-transparent bg-clip-text bg-gradient-to-br from-violet-300 to-fuchsia-400">
//                 {s.value}
//               </p>
//               <p className="text-white/40 text-sm mt-1 tracking-wide">
//                 {s.label}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* VOICES */}
//       <section className="relative z-10 py-28 px-6">
//         <div className="radial-center absolute inset-0 pointer-events-none" />
//         <div className="max-w-5xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-14 text-center"
//           >
//             <p className="text-xs tracking-widest uppercase text-violet-400 mb-3 font-medium">
//               Voice Library
//             </p>
//             <h2 className="font-display text-4xl md:text-5xl font-700 tracking-tight">
//               Every voice, a character.
//             </h2>
//           </motion.div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {VOICES.map((v, i) => (
//               <VoiceCard key={v.name} voice={v} index={i} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="relative z-10 py-28 px-6 border-t border-white/[0.06]">
//         <div className="max-w-5xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mb-14 text-center"
//           >
//             <p className="text-xs tracking-widest uppercase text-violet-400 mb-3 font-medium">
//               Capabilities
//             </p>
//             <h2 className="font-display text-4xl md:text-5xl font-700 tracking-tight">
//               Built for production.
//             </h2>
//           </motion.div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             {FEATURES.map((f, i) => (
//               <motion.div
//                 key={f.title}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.08, duration: 0.6 }}
//                 className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-500"
//               >
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <span className="text-2xl text-violet-400 mb-4 block">
//                   {f.icon}
//                 </span>
//                 <h3 className="font-display text-xl font-600 mb-2 tracking-tight">
//                   {f.title}
//                 </h3>
//                 <p className="text-white/40 text-sm leading-relaxed">
//                   {f.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="relative z-10 py-32 px-6 text-center">
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(109,40,217,0.2) 0%, transparent 70%)",
//           }}
//         />
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative max-w-3xl mx-auto"
//         >
//           <h2 className="font-display text-5xl md:text-6xl font-800 tracking-tight mb-6 leading-tight">
//             The voice of your
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
//               next product.
//             </span>
//           </h2>
//           <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto">
//             Join over a million developers building the future of voice-first
//             AI.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.96 }}
//             className="px-10 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-base shadow-xl shadow-violet-900/50 hover:shadow-violet-700/60 transition-shadow"
//           >
//             Start building — it&apos;s free
//           </motion.button>
//         </motion.div>
//       </section>

//       {/* FOOTER */}
//       <footer className="relative z-10 border-t border-white/[0.06] py-10 px-8">
//         <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="flex items-center gap-2">
//             <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-[10px] font-bold">
//               11
//             </div>
//             <span className="font-display text-sm font-600 text-white/60">
//               ElevenLabs
//             </span>
//           </div>
//           <p className="text-white/20 text-xs">
//             © 2026 ElevenLabs. All rights reserved.
//           </p>
//           <div className="flex gap-6 text-xs text-white/30">
//             {["Privacy", "Terms", "Status"].map((l) => (
//               <a
//                 key={l}
//                 href="#"
//                 className="hover:text-white/60 transition-colors"
//               >
//                 {l}
//               </a>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import { DashboardView } from "@/features/dashboard/views/dashboard-view";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function Home() {
  return <DashboardView />;
}
