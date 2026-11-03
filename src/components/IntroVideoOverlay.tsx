"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

interface IntroVideoOverlayProps {
  isOpen: boolean;
  onEnterInvitation: () => void;
}

export default function IntroVideoOverlay({
  isOpen,
  onEnterInvitation,
}: IntroVideoOverlayProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleVideoCompleted = useCallback(() => {
    setVideoEnded(true);
    setProgressPercent(100);
  }, []);

  // Tentativa inicial de autoplay ou fallback do prompt
  useEffect(() => {
    if (!isOpen) return;

    setIsFadingOut(false);
    setVideoEnded(false);
    setProgressPercent(0);

    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setShowPrompt(false);
        })
        .catch(() => {
          setShowPrompt(true);
        });
    }
  }, [isOpen]);

  const startVideoManual = () => {
    setShowPrompt(false);
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => {
        console.warn("Erro ao reproduzir vídeo manualmente:", err);
        handleVideoCompleted();
      });
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const pct = (video.currentTime / video.duration) * 100;
    setProgressPercent(pct);

    if (video.currentTime >= video.duration - 0.25) {
      handleVideoCompleted();
    }
  };

  const handleEnter = () => {
    if (isFadingOut) return;
    setIsFadingOut(true);

    const video = videoRef.current;
    if (video) {
      video.pause();
    }

    setTimeout(() => {
      onEnterInvitation();
    }, 900);
  };

  if (!isOpen) return null;

  return (
    <div
      id="intro-video-overlay"
      className={`fixed inset-0 z-[100] bg-[#040713] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-1000 select-none ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
    >
      <div className="relative w-full h-full flex items-center justify-center bg-black">
        <video
          ref={videoRef}
          id="intro-video"
          className="w-full h-full object-contain bg-black"
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoCompleted}
          onError={() => {
            console.warn("Erro ao carregar vídeo, liberando entrada.");
            handleVideoCompleted();
          }}
        >
          <source src="/video-intro.mp4" type="video/mp4" />
          Seu navegador não suporta a reprodução deste vídeo.
        </video>

        {/* Prompt de início quando o navegador restringe o autoplay com áudio */}
        {showPrompt && (
          <div
            id="intro-play-prompt"
            onClick={startVideoManual}
            className="absolute inset-0 bg-[#040713]/90 backdrop-blur-md flex flex-col items-center justify-center z-20 text-center p-6 transition-all duration-500 cursor-pointer"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-primary-container/60 bg-[#070d20]/90 backdrop-blur-md flex items-center justify-center text-secondary mb-4 shadow-[0_0_35px_rgba(246,202,101,0.4)] animate-pulse">
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-primary">
                SF
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary-container/30 bg-[#0b132b]/80 backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(246,202,101,0.15)]">
              <span className="text-secondary text-xs">✦</span>
              <span className="font-cinzel text-[11px] sm:text-xs uppercase tracking-[0.35em] text-secondary font-semibold">
                Sophia Fontes • 15 Anos
              </span>
              <span className="text-secondary text-xs">✦</span>
            </div>
            <h2 className="font-serif-display text-2xl sm:text-4xl text-primary italic mb-6 tracking-wide drop-shadow-[0_2px_15px_rgba(246,202,101,0.3)]">
              ✦ O Encontro do Sol com a Lua ✦
            </h2>
            <button
              id="btn-start-intro"
              onClick={(e) => {
                e.stopPropagation();
                startVideoManual();
              }}
              className="group px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-gradient-to-r from-secondary-fixed via-primary-container to-secondary text-on-primary-container font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.25em] shadow-[0_0_30px_rgba(246,202,101,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl group-hover:scale-125 transition-transform">
                play_arrow
              </span>
              <span>Iniciar Experiência</span>
            </button>
            <span className="text-[10px] sm:text-[11px] text-on-surface-variant font-cinzel uppercase tracking-[0.2em] mt-4 opacity-80">
              Toque para assistir à introdução
            </span>

            {/* Rodapé desenvolvedor */}
            <div
              className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex items-center justify-center gap-2.5 px-4 pointer-events-auto z-30"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-[11px] sm:text-xs text-on-surface-variant/75 font-manrope tracking-wider">
                Desenvolvido por
              </span>
              <a
                href="https://msodevsites.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-mso-intro"
                title="MSO - Desenvolvimento de Sites"
                aria-label="Acessar MSO Desenvolvimento de Sites"
                className="group inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#f3f5f8] p-1 border border-primary-container/30 shadow-[0_0_12px_rgba(0,132,255,0.25)] hover:shadow-[0_0_20px_rgba(0,132,255,0.6)] hover:border-cyan-400 hover:scale-110 active:scale-95 transition-all duration-200"
              >
                <Image
                  src="/mso-logo.png"
                  alt="MSO Desenvolvimento de Sites"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                  unoptimized
                />
              </a>
            </div>
          </div>
        )}

        {/* Barra de Progresso Dourada */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#070d20]/80 z-10 pointer-events-none">
          <div
            id="intro-progress-bar"
            style={{ width: `${progressPercent}%` }}
            className="h-full bg-gradient-to-r from-secondary via-primary-container to-secondary transition-all duration-150 shadow-[0_0_12px_rgba(246,202,101,0.9)]"
          />
        </div>

        {/* Botão de Entrar ao término do vídeo */}
        {videoEnded && (
          <div
            id="intro-finish-cta"
            onClick={handleEnter}
            className="absolute inset-0 bg-gradient-to-t from-[#040713]/95 via-[#040713]/50 to-transparent flex flex-col items-center justify-end pb-14 sm:pb-20 z-30 cursor-pointer animate-fade-in"
          >
            <div className="flex flex-col items-center text-center px-4 animate-float">
              <div className="w-14 h-14 rounded-full border border-primary-container/70 bg-[#070d20]/90 backdrop-blur-md flex items-center justify-center text-primary-container shadow-[0_0_30px_rgba(246,202,101,0.6)] mb-3">
                <span className="material-symbols-outlined text-2xl animate-pulse">
                  auto_awesome
                </span>
              </div>
              <button
                id="btn-enter-invite"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEnter();
                }}
                className="px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-gradient-to-r from-secondary-fixed via-primary-container to-secondary text-on-primary-container font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.25em] shadow-[0_0_35px_rgba(246,202,101,0.8)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Entrar no Convite ✦
              </button>
              <p className="font-cinzel text-[11px] sm:text-xs text-secondary tracking-[0.25em] uppercase mt-3 animate-pulse">
                Toque em qualquer lugar da tela para entrar
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
