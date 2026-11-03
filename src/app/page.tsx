"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import IntroVideoOverlay from "@/components/IntroVideoOverlay";
import HeaderAudio from "@/components/HeaderAudio";
import CelestialCanvas from "@/components/CelestialCanvas";
import CelestialStage, { ModalType } from "@/components/CelestialStage";
import CelestialModals from "@/components/CelestialModals";
import CelestialFooter from "@/components/CelestialFooter";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [userMutedAudio, setUserMutedAudio] = useState(false);
  const [isIntroOpen, setIsIntroOpen] = useState(true);
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);

  const startBackgroundMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || userMutedAudio) return;

    audio.volume = 0.65;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlayingAudio(true);
        })
        .catch((err) => {
          console.warn("Autoplay do áudio bloqueado:", err);
          setIsPlayingAudio(false);
        });
    }
  }, [userMutedAudio]);

  const handleEnterInvitation = () => {
    setIsIntroOpen(false);
    startBackgroundMusic();
  };

  const handleToggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setUserMutedAudio(true);
      setIsPlayingAudio(false);
    } else {
      setUserMutedAudio(false);
      audio
        .play()
        .then(() => {
          setIsPlayingAudio(true);
        })
        .catch((err) => {
          console.error("Erro ao reproduzir áudio:", err);
        });
    }
  };

  const handleReplayIntroVideo = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      setIsPlayingAudio(false);
    }
    setIsIntroOpen(true);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlayingAudio(true);
    const onPause = () => setIsPlayingAudio(false);
    const onEnded = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <>
      {/* Elemento de áudio em segundo plano */}
      <audio ref={audioRef} id="bg-audio" loop preload="auto">
        <source src="/musica-sol-e-lua.mpeg" type="audio/mpeg" />
      </audio>

      {/* Introdução fullscreen em vídeo */}
      <IntroVideoOverlay
        isOpen={isIntroOpen}
        onEnterInvitation={handleEnterInvitation}
      />

      {/* Top Header com Monograma e Áudio */}
      <HeaderAudio
        isPlaying={isPlayingAudio}
        onToggle={handleToggleAudio}
      />

      {/* Dynamic Stardust Canvas */}
      <CelestialCanvas />

      {/* Palco Celestial Central */}
      <CelestialStage onOpenModal={setActiveModal} />

      {/* Modais Celestiais */}
      <CelestialModals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        onOpenModal={setActiveModal}
        onReplayIntroVideo={handleReplayIntroVideo}
      />

      {/* Rodapé Minimalista */}
      <CelestialFooter />
    </>
  );
}
