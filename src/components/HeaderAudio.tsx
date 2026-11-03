"use client";

interface HeaderAudioProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function HeaderAudio({ isPlaying, onToggle }: HeaderAudioProps) {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-40 pointer-events-none p-5 sm:p-7 flex items-center justify-between">
      {/* Monograma Discreto à Esquerda */}
      <div className="pointer-events-auto flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-primary-container/40 bg-[#070d20]/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(246,202,101,0.25)] transition-transform hover:scale-110">
          <span className="font-cinzel text-xs text-primary font-bold tracking-widest">
            SF
          </span>
        </div>
        <span className="hidden sm:inline font-cinzel text-[11px] uppercase tracking-[0.3em] text-secondary/80">
          Sophia Fontes • XV
        </span>
      </div>

      {/* Botão de Áudio à Direita */}
      <div className="pointer-events-auto flex items-center gap-3">
        <button
          onClick={onToggle}
          className={`w-10 h-10 rounded-full border backdrop-blur-md flex items-center justify-center text-primary-container transition-all cursor-pointer relative ${
            isPlaying
              ? "border-primary-container bg-[#070d20]/90 shadow-[0_0_20px_rgba(246,202,101,0.5)]"
              : "border-primary-container/30 bg-[#070d20]/80 opacity-70 hover:opacity-100 hover:border-primary-container hover:shadow-[0_0_20px_rgba(246,202,101,0.4)]"
          }`}
          id="audio-toggle-btn"
          title={
            isPlaying
              ? "Pausar Trilha Sonora Celestial"
              : "Tocar Trilha Sonora Celestial"
          }
          aria-label={
            isPlaying
              ? "Pausar Trilha Sonora Celestial"
              : "Tocar Trilha Sonora Celestial"
          }
        >
          <span className="material-symbols-outlined text-[18px]" id="audio-icon">
            {isPlaying ? "volume_up" : "volume_off"}
          </span>
          {isPlaying && (
            <>
              <span
                className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-primary-container animate-ping opacity-75"
                id="audio-pulse-indicator"
              />
              <span
                className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-primary-container"
                id="audio-status-dot"
              />
            </>
          )}
        </button>
      </div>
    </header>
  );
}
