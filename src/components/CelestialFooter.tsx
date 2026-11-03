"use client";

import Image from "next/image";

export default function CelestialFooter() {
  return (
    <footer className="w-full bg-[#040713] border-t border-primary-container/15 py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative flex flex-col sm:flex-row items-center justify-center">
        {/* Monograma Central e Detalhes do Evento */}
        <div className="flex flex-col items-center text-center">
          <span className="font-cinzel text-xs text-secondary tracking-[0.3em] uppercase">
            ✦ SF • MMXXVII ✦
          </span>
          <p className="font-cinzel text-[11px] text-on-surface-variant tracking-[0.2em] uppercase mt-1">
            Sophia Fontes • 15 Anos • Ballroom Solarium
          </p>
        </div>

        {/* Botão Logo MSO (Canto Direito) */}
        <div className="mt-5 sm:mt-0 sm:absolute sm:right-6 md:right-8 flex items-center">
          <a
            href="https://msodevsites.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            id="btn-mso-dev"
            title="MSO - Desenvolvimento de Sites"
            aria-label="Acessar MSO Desenvolvimento de Sites"
            className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#f3f5f8] p-1.5 border border-primary-container/30 shadow-[0_0_15px_rgba(246,202,101,0.2)] hover:shadow-[0_0_25px_rgba(0,132,255,0.65)] hover:border-cyan-400 hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <Image
              src="/mso-logo.png"
              alt="MSO Desenvolvimento de Sites"
              width={40}
              height={40}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              unoptimized
            />
            {/* Tooltip flutuante discreto ao passar o mouse */}
            <span className="absolute bottom-full mb-2 right-1/2 translate-x-1/2 sm:right-0 sm:translate-x-0 hidden group-hover:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#070d20] border border-primary-container/40 text-primary font-cinzel text-[10px] tracking-wider uppercase whitespace-nowrap shadow-xl pointer-events-none transition-opacity z-20">
              <span>MSO DEV</span>
              <span className="material-symbols-outlined text-[12px] text-secondary">
                open_in_new
              </span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
