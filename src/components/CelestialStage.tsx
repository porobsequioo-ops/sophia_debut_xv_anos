"use client";

import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

export type ModalType =
  | "poema"
  | "rsvp"
  | "mapa"
  | "dresscode"
  | "presentes"
  | "info"
  | "galeria";

interface CelestialStageProps {
  onOpenModal: (type: ModalType) => void;
}

export default function CelestialStage({ onOpenModal }: CelestialStageProps) {
  return (
    <main className="w-full min-h-screen bg-[#070d20] relative flex flex-col items-center justify-center overflow-hidden">
      {/* Ambient Golden and Midnight Nebulae */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-primary-container/15 via-[#1b2b5a]/30 to-transparent blur-[160px] pointer-events-none z-0" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-primary-container/10 blur-[130px] pointer-events-none z-0" />

      {/* MAIN CELESTIAL STAGE */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 pt-20 pb-16 flex flex-col items-center text-center">
        {/* Title & Date Header */}
        <div className="flex flex-col items-center mb-6 sm:mb-8 animate-float">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary-container/30 bg-[#0b132b]/80 backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(246,202,101,0.15)]">
            <span className="text-secondary text-xs">✦</span>
            <span className="font-cinzel text-[11px] sm:text-xs uppercase tracking-[0.35em] text-secondary font-semibold">
              Celebração de 15 Anos
            </span>
            <span className="text-secondary text-xs">✦</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary-container to-secondary tracking-[0.22em] uppercase font-bold drop-shadow-[0_4px_24px_rgba(246,202,101,0.4)]">
            Sophia Fontes
          </h1>

          <p className="font-serif-display text-base sm:text-xl text-primary/90 italic tracking-[0.25em] sm:tracking-[0.3em] uppercase mt-2">
            ✦ O Encontro do Sol com a Lua ✦
          </p>

          <div className="flex items-center gap-4 text-xs sm:text-sm text-secondary/80 font-cinzel tracking-[0.25em] uppercase mt-2">
            <span>05 de Junho de 2027</span>
            <span className="text-primary-container text-[8px]">●</span>
            <span>Às 18:30h</span>
            <span className="text-primary-container text-[8px]">●</span>
            <span>Ballroom Solarium</span>
          </div>
        </div>

        {/* CENTRAL CELESTIAL ARTWORK WITH ORBITING STARS */}
        <div className="orbit-container relative w-full max-w-[840px] aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center my-2 sm:my-4">
          {/* Orbital Astronomical Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[114%] h-[114%] rounded-[50%] border border-primary-container/20 pointer-events-none rotate-[-12deg]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[128%] h-[128%] rounded-[50%] border border-dashed border-primary-container/15 pointer-events-none rotate-[24deg]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[98%] h-[98%] rounded-[50%] border border-primary-container/25 pointer-events-none" />

          {/* Luminous Celestial Orbit Path Guide Track */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[106%] h-[106%] sm:w-[108%] sm:h-[108%] rounded-[50%] border border-primary-container/25 border-dashed pointer-events-none shadow-[0_0_20px_rgba(246,202,101,0.15)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[106%] h-[106%] sm:w-[108%] sm:h-[108%] rounded-[50%] border border-primary-container/10 pointer-events-none" />

          {/* Golden Halo Glow behind Artwork */}
          <div className="absolute inset-4 sm:inset-6 rounded-2xl bg-gradient-to-r from-primary-container/25 via-secondary/20 to-primary-container/25 blur-2xl -z-10 animate-pulse-gold" />

          {/* The Central Art Piece */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary-container/50 shadow-[0_0_60px_rgba(246,202,101,0.35),0_25px_80px_rgba(0,0,0,0.9)] group">
            <Image
              src="/arte-principal.jpg"
              alt="O Encontro do Sol com a Lua - Sophia Fontes 15 Anos"
              fill
              priority
              className="object-cover object-center scale-[1.01] group-hover:scale-105 transition-transform duration-1000 ease-out"
            />

            {/* Subtle Vignette & Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070d20]/80 via-transparent to-[#070d20]/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070d20]/50 via-transparent to-[#070d20]/50 pointer-events-none" />

            {/* Center Golden Invitation Seal Button */}
            <button
              type="button"
              onClick={() => onOpenModal("poema")}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group/seal flex flex-col items-center justify-center focus:outline-none transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-secondary-container via-primary-container to-secondary p-[2px] shadow-[0_0_35px_rgba(246,202,101,0.7),0_0_70px_rgba(246,202,101,0.35)] animate-pulse">
                <div className="w-full h-full rounded-full bg-[#070d20]/90 backdrop-blur-md flex flex-col items-center justify-center border border-primary/50 relative overflow-hidden">
                  <span className="material-symbols-outlined text-primary-container text-2xl group-hover/seal:scale-125 transition-transform">
                    auto_awesome
                  </span>
                  <span className="font-cinzel text-[9px] uppercase tracking-[0.25em] text-primary mt-1 font-bold">
                    Abrir
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.2em] text-secondary/90 font-manrope">
                    Mensagem
                  </span>
                </div>
              </div>
              <span className="mt-2.5 px-3 py-1 rounded-full bg-[#070d20]/85 border border-primary-container/40 text-[10px] font-cinzel uppercase tracking-[0.25em] text-primary shadow-lg backdrop-blur-sm opacity-90 group-hover/seal:opacity-100">
                Convite Cerimonial
              </span>
            </button>

            {/* Lower Emblem Caption */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none flex items-center gap-2 px-4 py-1 rounded-full bg-[#070d20]/85 backdrop-blur-md border border-primary-container/30">
              <span className="text-secondary text-xs">✦</span>
              <span className="font-cinzel text-[10px] sm:text-xs text-primary font-bold tracking-[0.25em] uppercase">
                SF • Portal Oficial Sol &amp; Lua
              </span>
              <span className="text-secondary text-xs">✦</span>
            </div>
          </div>

          {/* DYNAMIC CONTINUOUS ORBITING SYSTEM (60° INTERVALS) */}
          <div className="orbit-track absolute top-1/2 left-1/2 w-[106%] h-[106%] sm:w-[108%] sm:h-[108%] pointer-events-none z-30">
            {/* 1. RSVP / Confirmação */}
            <div className="absolute top-[6.7%] left-[25%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
              <div className="orbit-counter">
                <button
                  type="button"
                  onClick={() => onOpenModal("rsvp")}
                  className="group flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full bg-[#09112a]/95 border border-primary-container/70 shadow-[0_0_25px_rgba(246,202,101,0.4)] backdrop-blur-md hover:border-primary-container hover:scale-110 hover:shadow-[0_0_35px_rgba(246,202,101,0.8)] transition-all whitespace-nowrap cursor-pointer"
                >
                  <span className="text-primary-container text-base sm:text-xl group-hover:rotate-45 transition-transform duration-500">
                    ✦
                  </span>
                  <span className="font-cinzel text-[11px] sm:text-sm uppercase tracking-[0.2em] text-primary font-bold">
                    CONFIRMAÇÃO
                  </span>
                </button>
              </div>
            </div>

            {/* 2. Localização */}
            <div className="absolute top-[6.7%] left-[75%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
              <div className="orbit-counter">
                <button
                  type="button"
                  onClick={() => onOpenModal("mapa")}
                  className="group flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full bg-[#09112a]/95 border border-primary-container/60 shadow-[0_0_25px_rgba(246,202,101,0.35)] backdrop-blur-md hover:border-primary-container hover:scale-110 hover:shadow-[0_0_35px_rgba(246,202,101,0.8)] transition-all whitespace-nowrap cursor-pointer"
                >
                  <span className="text-primary-container text-base sm:text-xl group-hover:rotate-45 transition-transform duration-500">
                    ✦
                  </span>
                  <span className="font-cinzel text-[11px] sm:text-sm uppercase tracking-[0.2em] text-primary font-bold">
                    Localização
                  </span>
                </button>
              </div>
            </div>

            {/* 3. Galeria */}
            <div className="absolute top-[50%] left-[100%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
              <div className="orbit-counter">
                <button
                  type="button"
                  onClick={() => onOpenModal("galeria")}
                  className="group flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full bg-[#09112a]/95 border border-primary-container/60 shadow-[0_0_25px_rgba(246,202,101,0.35)] backdrop-blur-md hover:border-primary-container hover:scale-110 hover:shadow-[0_0_35px_rgba(246,202,101,0.8)] transition-all whitespace-nowrap cursor-pointer"
                >
                  <span className="text-primary-container text-base sm:text-xl group-hover:rotate-45 transition-transform duration-500">
                    ✦
                  </span>
                  <span className="font-cinzel text-[11px] sm:text-sm uppercase tracking-[0.2em] text-primary font-bold">
                    Galeria
                  </span>
                </button>
              </div>
            </div>

            {/* 4. Informações */}
            <div className="absolute top-[93.3%] left-[75%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
              <div className="orbit-counter">
                <button
                  type="button"
                  onClick={() => onOpenModal("info")}
                  className="group flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full bg-[#09112a]/95 border border-primary-container/60 shadow-[0_0_25px_rgba(246,202,101,0.35)] backdrop-blur-md hover:border-primary-container hover:scale-110 hover:shadow-[0_0_35px_rgba(246,202,101,0.8)] transition-all whitespace-nowrap cursor-pointer"
                >
                  <span className="text-primary-container text-base sm:text-xl group-hover:rotate-45 transition-transform duration-500">
                    ✦
                  </span>
                  <span className="font-cinzel text-[11px] sm:text-sm uppercase tracking-[0.2em] text-primary font-bold">
                    Informações
                  </span>
                </button>
              </div>
            </div>

            {/* 5. Presentes */}
            <div className="absolute top-[93.3%] left-[25%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
              <div className="orbit-counter">
                <button
                  type="button"
                  onClick={() => onOpenModal("presentes")}
                  className="group flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full bg-[#09112a]/95 border border-primary-container/60 shadow-[0_0_25px_rgba(246,202,101,0.35)] backdrop-blur-md hover:border-primary-container hover:scale-110 hover:shadow-[0_0_35px_rgba(246,202,101,0.8)] transition-all whitespace-nowrap cursor-pointer"
                >
                  <span className="text-primary-container text-base sm:text-xl group-hover:rotate-45 transition-transform duration-500">
                    ✦
                  </span>
                  <span className="font-cinzel text-[11px] sm:text-sm uppercase tracking-[0.2em] text-primary font-bold">
                    Presentes
                  </span>
                </button>
              </div>
            </div>

            {/* 6. Dress Code */}
            <div className="absolute top-[50%] left-[0%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
              <div className="orbit-counter">
                <button
                  type="button"
                  onClick={() => onOpenModal("dresscode")}
                  className="group flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full bg-[#09112a]/95 border border-primary-container/60 shadow-[0_0_25px_rgba(246,202,101,0.35)] backdrop-blur-md hover:border-primary-container hover:scale-110 hover:shadow-[0_0_35px_rgba(246,202,101,0.8)] transition-all whitespace-nowrap cursor-pointer"
                >
                  <span className="text-primary-container text-base sm:text-xl group-hover:rotate-45 transition-transform duration-500">
                    ✦
                  </span>
                  <span className="font-cinzel text-[11px] sm:text-sm uppercase tracking-[0.2em] text-primary font-bold">
                    Dress Code
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />
      </div>
    </main>
  );
}
