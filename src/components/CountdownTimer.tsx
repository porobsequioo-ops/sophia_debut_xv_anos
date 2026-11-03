"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: string;
  hours: string;
  mins: string;
  secs: string;
}

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });

  useEffect(() => {
    setMounted(true);
    const eventDate = new Date("2027-06-05T18:30:00").getTime();

    function update() {
      const now = new Date().getTime();
      const diff = eventDate - now;

      if (diff > 0) {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(d).padStart(2, "0"),
          hours: String(h).padStart(2, "0"),
          mins: String(m).padStart(2, "0"),
          secs: String(s).padStart(2, "0"),
        });
      } else {
        setTimeLeft({
          days: "00",
          hours: "00",
          mins: "00",
          secs: "00",
        });
      }
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-14 sm:mt-16 w-full max-w-xl mx-auto p-4 sm:p-5 rounded-2xl bg-[#09112a]/80 border border-primary-container/30 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_25px_rgba(246,202,101,0.12)] flex flex-col items-center">
      <div className="flex items-center gap-2 text-secondary font-cinzel text-xs uppercase tracking-[0.25em] mb-3">
        <span>✦</span>
        <span>Contagem para o Alinhamento</span>
        <span>✦</span>
      </div>
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4 w-full text-center">
        <div className="p-2 sm:p-3 rounded-lg bg-[#070d20]/80 border border-primary-container/20">
          <span className="font-cinzel text-2xl sm:text-3xl text-primary font-bold block" id="cd-days">
            {mounted ? timeLeft.days : "--"}
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-secondary/80 font-cinzel">
            Dias
          </span>
        </div>
        <div className="p-2 sm:p-3 rounded-lg bg-[#070d20]/80 border border-primary-container/20">
          <span className="font-cinzel text-2xl sm:text-3xl text-primary font-bold block" id="cd-hours">
            {mounted ? timeLeft.hours : "--"}
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-secondary/80 font-cinzel">
            Horas
          </span>
        </div>
        <div className="p-2 sm:p-3 rounded-lg bg-[#070d20]/80 border border-primary-container/20">
          <span className="font-cinzel text-2xl sm:text-3xl text-primary font-bold block" id="cd-mins">
            {mounted ? timeLeft.mins : "--"}
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-secondary/80 font-cinzel">
            Minutos
          </span>
        </div>
        <div className="p-2 sm:p-3 rounded-lg bg-[#070d20]/80 border border-primary-container/20">
          <span className="font-cinzel text-2xl sm:text-3xl text-secondary font-bold block" id="cd-secs">
            {mounted ? timeLeft.secs : "--"}
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-secondary/80 font-cinzel">
            Segundos
          </span>
        </div>
      </div>
      <div className="mt-3 text-[11px] tracking-[0.2em] text-on-surface-variant font-cinzel uppercase text-center">
        05 de Junho de 2027 • Ballroom Solarium (Bangu)
      </div>
    </div>
  );
}
