"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ModalType } from "./CelestialStage";

interface CelestialModalsProps {
  activeModal: ModalType | null;
  onClose: () => void;
  onOpenModal: (type: ModalType) => void;
  onReplayIntroVideo: () => void;
}

export default function CelestialModals({
  activeModal,
  onClose,
  onOpenModal,
  onReplayIntroVideo,
}: CelestialModalsProps) {
  // Estado do formulário RSVP
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [attendance, setAttendance] = useState("sim");
  const [guestCount, setGuestCount] = useState("1");
  const [guestMessage, setGuestMessage] = useState("");
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  // Travar o scroll do body quando modal está aberto e fechar com ESC
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [activeModal, onClose]);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSubmitted(true);
  };

  const resetRsvpForm = () => {
    setRsvpSubmitted(false);
    setGuestName("");
    setGuestPhone("");
    setAttendance("sim");
    setGuestCount("1");
    setGuestMessage("");
  };

  if (!activeModal) return null;

  return (
    <div
      id="celestial-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 bg-[#040713]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      {/* MODAL: MENSAGEM POÉTICA / CONVITE CERIMONIAL */}
      {activeModal === "poema" && (
        <div
          id="modal-poema"
          className="modal-panel w-full max-w-2xl rounded-2xl bg-gradient-to-b from-[#0c142e] to-[#050a18] border border-primary-container/50 p-6 sm:p-10 shadow-[0_0_50px_rgba(246,202,101,0.25)] relative my-auto text-center"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors p-1 cursor-pointer"
            aria-label="Fechar modal"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <div className="w-14 h-14 mx-auto rounded-full border border-primary-container/50 flex items-center justify-center text-secondary mb-3 shadow-[0_0_20px_rgba(246,202,101,0.3)]">
            <span className="font-cinzel text-lg font-bold">SF</span>
          </div>
          <span className="font-cinzel text-[11px] tracking-[0.3em] uppercase text-secondary block mb-1">
            Com a bênção de seus pais e sob o testemunho do céu
          </span>
          <h3 className="font-cinzel text-2xl sm:text-3xl text-primary font-bold tracking-widest uppercase mb-4">
            Sophia Fontes
          </h3>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary-container to-transparent mb-5" />
          <p className="font-serif-display text-base sm:text-lg text-on-surface/95 italic leading-relaxed max-w-xl mx-auto">
            “Assim como o Sol ilumina os dias e a Lua encanta as noites, existem
            momentos feitos para brilhar eternamente.
            <br />
            <br />
            Entre sonhos, estrelas e novos começos, chegou a hora de celebrar meus
            15 anos. Uma noite em que o dourado do Sol encontra a magia da Lua,
            tornando realidade um dos capítulos mais especiais da minha história.
            <br />
            <br />
            Será uma alegria ter você comigo para iluminar essa noite e torná-la
            inesquecível.”
          </p>
          <div className="mt-8 pt-4 border-t border-primary-container/20 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenModal("rsvp")}
              className="px-7 py-2.5 rounded-full bg-gradient-to-r from-secondary-fixed via-primary-container to-secondary text-on-primary-container font-cinzel text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(246,202,101,0.4)] hover:scale-105 transition-all cursor-pointer"
            >
              Confirmar Presença (Confirmação)
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-primary-container/40 text-primary font-cinzel text-xs uppercase tracking-wider hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              Retornar ao Cosmos
            </button>
          </div>
        </div>
      )}

      {/* MODAL: RSVP */}
      {activeModal === "rsvp" && (
        <div
          id="modal-rsvp"
          className="modal-panel w-full max-w-lg rounded-2xl bg-gradient-to-b from-[#0c142e] to-[#050a18] border border-primary-container/50 p-6 sm:p-8 shadow-[0_0_50px_rgba(246,202,101,0.25)] relative my-auto"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors p-1 cursor-pointer"
            aria-label="Fechar modal"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <div className="text-center mb-6">
            <span className="text-primary-container text-2xl">✦</span>
            <h3 className="font-cinzel text-xl sm:text-2xl text-primary font-bold tracking-wider uppercase mt-1">
              Confirmar Presença
            </h3>
            <p className="text-xs text-on-surface-variant font-manrope mt-1">
              15 Anos de Sophia Fontes • Ballroom Solarium (05.06.2027)
            </p>
          </div>

          {!rsvpSubmitted ? (
            <form onSubmit={handleRsvpSubmit} className="space-y-4" id="rsvp-form">
              <div>
                <label
                  className="block font-cinzel text-xs uppercase tracking-wider text-secondary mb-1"
                  htmlFor="guest-name"
                >
                  Nome Completo do Convidado
                </label>
                <input
                  id="guest-name"
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Ex: Gabriel & Família"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#070d20] border border-primary-container/30 text-on-surface font-manrope text-sm focus:border-primary-container focus:outline-none focus:ring-1 focus:ring-primary-container transition-all"
                />
              </div>

              <div>
                <label
                  className="block font-cinzel text-xs uppercase tracking-wider text-secondary mb-1"
                  htmlFor="guest-phone"
                >
                  WhatsApp para Confirmação
                </label>
                <input
                  id="guest-phone"
                  type="tel"
                  required
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  placeholder="(21) 99999-9999"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#070d20] border border-primary-container/30 text-on-surface font-manrope text-sm focus:border-primary-container focus:outline-none focus:ring-1 focus:ring-primary-container transition-all"
                />
              </div>

              <div>
                <span className="block font-cinzel text-xs uppercase tracking-wider text-secondary mb-2">
                  Presença na Cerimônia
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <label
                    className={`flex items-center gap-2 p-2.5 rounded-lg bg-[#070d20] border cursor-pointer transition-colors ${
                      attendance === "sim"
                        ? "border-primary-container"
                        : "border-outline-variant/30 hover:border-primary-container"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="sim"
                      checked={attendance === "sim"}
                      onChange={() => setAttendance("sim")}
                      className="text-primary-container focus:ring-0"
                    />
                    <span className="font-cinzel text-xs text-primary font-semibold">
                      Sim, estarei lá! ✦
                    </span>
                  </label>
                  <label
                    className={`flex items-center gap-2 p-2.5 rounded-lg bg-[#070d20] border cursor-pointer transition-colors ${
                      attendance === "nao"
                        ? "border-primary-container"
                        : "border-outline-variant/30 hover:border-outline-variant"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="nao"
                      checked={attendance === "nao"}
                      onChange={() => setAttendance("nao")}
                      className="text-primary-container focus:ring-0"
                    />
                    <span className="font-cinzel text-xs text-on-surface-variant">
                      Infelizmente não
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label
                  className="block font-cinzel text-xs uppercase tracking-wider text-secondary mb-1"
                  htmlFor="guest-count"
                >
                  Quantidade de Pessoas
                </label>
                <select
                  id="guest-count"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#070d20] border border-primary-container/30 text-on-surface font-manrope text-sm focus:border-primary-container focus:outline-none transition-all"
                >
                  <option value="1">1 Pessoa (Apenas eu)</option>
                  <option value="2">2 Pessoas</option>
                  <option value="3">3 Pessoas (Família)</option>
                  <option value="4">4 Pessoas (Família)</option>
                </select>
              </div>

              <div>
                <label
                  className="block font-cinzel text-xs uppercase tracking-wider text-secondary mb-1"
                  htmlFor="guest-diet"
                >
                  Recado de Carinho para Sophia (Opcional)
                </label>
                <input
                  id="guest-diet"
                  type="text"
                  value={guestMessage}
                  onChange={(e) => setGuestMessage(e.target.value)}
                  placeholder="Deixe sua mensagem..."
                  className="w-full px-4 py-2.5 rounded-lg bg-[#070d20] border border-primary-container/30 text-on-surface font-manrope text-sm focus:border-primary-container focus:outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-lg bg-gradient-to-r from-secondary-fixed via-primary-container to-secondary text-on-primary-container font-cinzel text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(246,202,101,0.4)] hover:shadow-[0_0_30px_rgba(246,202,101,0.7)] transition-all cursor-pointer"
              >
                Confirmar Presença
              </button>

              <div className="text-center text-[10px] text-on-surface-variant/80 tracking-widest font-cinzel uppercase">
                Confirmação solicitada com carinho até 20 de Maio de 2027.
              </div>
            </form>
          ) : (
            <div className="text-center py-6" id="rsvp-success">
              <span className="text-primary-container text-4xl block mb-2">✦</span>
              <h4 className="font-cinzel text-lg text-primary font-bold uppercase">
                Presença Confirmada nas Estrelas!
              </h4>
              <p className="font-manrope text-sm text-on-surface-variant mt-2 max-w-sm mx-auto">
                Sua resposta foi gravada com honra. Será uma noite inesquecível ao
                lado de Sophia Fontes!
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 rounded-full bg-primary-container text-on-primary-container font-cinzel text-xs uppercase tracking-wider font-bold shadow-[0_0_15px_rgba(246,202,101,0.4)] cursor-pointer"
                >
                  Fechar
                </button>
                <button
                  type="button"
                  onClick={resetRsvpForm}
                  className="px-5 py-2 rounded-full border border-primary-container/40 text-primary font-cinzel text-xs uppercase tracking-wider hover:bg-surface-container-high transition-colors cursor-pointer"
                >
                  Nova Confirmação
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODAL: LOCALIZAÇÃO */}
      {activeModal === "mapa" && (
        <div
          id="modal-mapa"
          className="modal-panel w-full max-w-2xl rounded-2xl bg-gradient-to-b from-[#0c142e] to-[#050a18] border border-primary-container/50 p-6 sm:p-8 shadow-[0_0_50px_rgba(246,202,101,0.25)] relative my-auto"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors p-1 cursor-pointer"
            aria-label="Fechar modal"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <div className="text-center mb-5">
            <span className="text-primary-container text-2xl">✦</span>
            <h3 className="font-cinzel text-xl sm:text-2xl text-primary font-bold tracking-wider uppercase mt-1">
              Ballroom Solarium
            </h3>
            <p className="text-xs text-secondary font-cinzel tracking-widest uppercase mt-0.5">
              Bangu • Rio de Janeiro - RJ
            </p>
          </div>
          <div className="space-y-4 font-manrope text-sm text-on-surface">
            <div className="p-3.5 rounded-xl bg-[#070d20] border border-primary-container/20 flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                schedule
              </span>
              <div>
                <strong className="text-primary block font-cinzel">
                  Horário de Chegada
                </strong>{" "}
                18:30h (pedimos pontualidade para o cortejo e momento solene).
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#070d20] border border-primary-container/20 flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                location_on
              </span>
              <div>
                <strong className="text-primary block font-cinzel">Endereço</strong>{" "}
                Ballroom Solarium - Casa de Festas em Bangu, Rio de Janeiro - RJ.
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#070d20] border border-primary-container/20 flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                local_parking
              </span>
              <div>
                <strong className="text-primary block font-cinzel">
                  Acesso & Estacionamento
                </strong>{" "}
                Entrada principal com serviço de recepção e manobrista.
              </div>
            </div>
            <a
              className="w-full py-3 rounded-lg bg-gradient-to-r from-secondary-fixed via-primary-container to-secondary text-on-primary-container font-cinzel text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(246,202,101,0.35)] flex items-center justify-center gap-2 text-center hover:scale-[1.02] transition-all cursor-pointer"
              href="https://www.google.com/maps/place/Ballroom+Solarium+-+Casa+de+Festas+em+Bangu/@-22.878492,-43.475471,849m/data=!3m1!1e3!4m6!3m5!1s0x9bdfe640b3eb0d:0x65fa3828c85d8aaa!8m2!3d-22.878492!4d-43.475471!16s%2Fg%2F11cn5rmf67!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MTAxNC4wIKXMDSoASAFQAw%3D%3D"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-lg">near_me</span>
              Abrir Rota no Google Maps
            </a>
          </div>
        </div>
      )}

      {/* MODAL: DRESS CODE */}
      {activeModal === "dresscode" && (
        <div
          id="modal-dresscode"
          className="modal-panel w-full max-w-xl rounded-2xl bg-gradient-to-b from-[#0c142e] to-[#050a18] border border-primary-container/50 p-6 sm:p-8 shadow-[0_0_50px_rgba(246,202,101,0.25)] relative my-auto"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors p-1 cursor-pointer"
            aria-label="Fechar modal"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <div className="text-center mb-5">
            <span className="text-primary-container text-2xl">✦</span>
            <h3 className="font-cinzel text-xl sm:text-2xl text-primary font-bold tracking-wider uppercase mt-1">
              Dress Code Oficial
            </h3>
            <p className="text-xs text-secondary font-cinzel tracking-widest uppercase mt-0.5">
              Orientações de Traje Cerimonial
            </p>
          </div>
          <div className="space-y-3 font-manrope text-sm">
            <div className="p-3.5 rounded-xl bg-[#070d20] border border-primary-container/20 flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                verified
              </span>
              <div>
                <h4 className="font-cinzel text-primary font-bold text-xs uppercase tracking-wider">
                  Traje: Passeio
                </h4>
                <p className="text-on-surface-variant text-xs mt-0.5">
                  Elegância e conforto na medida certa para celebrar este
                  alinhamento astral.
                </p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#070d20] border border-error/30 flex items-start gap-3">
              <span className="material-symbols-outlined text-error text-xl shrink-0 mt-0.5">
                block
              </span>
              <div>
                <h4 className="font-cinzel text-error font-bold text-xs uppercase tracking-wider">
                  Cores Reservadas: Sem Azul e Sem Dourado
                </h4>
                <p className="text-on-surface-variant text-xs mt-0.5">
                  <strong>Não utilizar roupas azuis ou douradas</strong> de qualquer
                  tonalidade. Estas cores são exclusivas da debutante Sophia Fontes
                  para os momentos do Sol e da Lua.
                </p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#070d20] border border-secondary/30 flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                texture
              </span>
              <div>
                <h4 className="font-cinzel text-secondary font-bold text-xs uppercase tracking-wider">
                  Uso Obrigatório de Peças Lisas
                </h4>
                <p className="text-on-surface-variant text-xs mt-0.5">
                  <strong>Não utilize estampas de qualquer tipo</strong> (florais,
                  listradas, geométricas, etc.). É obrigatório o uso de tecidos
                  totalmente lisos para manter a harmonia visual da cerimônia.
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-full mt-5 py-2.5 rounded-lg bg-surface-container border border-primary-container/40 text-primary font-cinzel text-xs uppercase tracking-wider hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            Entendido com carinho
          </button>
        </div>
      )}

      {/* MODAL: GUIA DE PRESENTES */}
      {activeModal === "presentes" && (
        <div
          id="modal-presentes"
          className="modal-panel w-full max-w-xl rounded-2xl bg-gradient-to-b from-[#0c142e] to-[#050a18] border border-primary-container/50 p-6 sm:p-8 shadow-[0_0_50px_rgba(246,202,101,0.25)] relative my-auto"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors p-1 cursor-pointer"
            aria-label="Fechar modal"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <div className="text-center mb-5">
            <span className="text-primary-container text-2xl">✦</span>
            <h3 className="font-cinzel text-xl sm:text-2xl text-primary font-bold tracking-wider uppercase mt-1">
              Guia de Presentes
            </h3>
            <p className="text-xs text-secondary font-cinzel tracking-widest uppercase mt-0.5">
              Medidas e Preferências da Sophia
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-manrope">
            <div className="p-3.5 rounded-xl bg-[#070d20] border border-primary-container/20">
              <span className="font-cinzel text-[10px] uppercase tracking-wider text-secondary block font-semibold">
                Vestuário
              </span>
              <span className="font-cinzel text-base text-primary font-bold block mt-0.5">
                Tamanho 36 / P
              </span>
              <span className="text-xs text-on-surface-variant mt-0.5 block">
                Vestidos, saias e blusas elegantes.
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#070d20] border border-primary-container/20">
              <span className="font-cinzel text-[10px] uppercase tracking-wider text-secondary block font-semibold">
                Calçados
              </span>
              <span className="font-cinzel text-base text-primary font-bold block mt-0.5">
                Tamanho 36
              </span>
              <span className="text-xs text-on-surface-variant mt-0.5 block">
                Sandálias ou sapatos finos.
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#070d20] border border-primary-container/20 sm:col-span-2">
              <span className="font-cinzel text-[10px] uppercase tracking-wider text-secondary block font-semibold">
                Acessórios & Joias
              </span>
              <span className="font-cinzel text-sm text-primary font-bold block mt-0.5">
                Anéis tamanho 18 • Pulseiras e cordões
              </span>
              <span className="text-xs text-on-surface-variant mt-0.5 block">
                Preferência por tons dourados ou prata clara delicada.
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#070d20] border border-primary-container/20 sm:col-span-2">
              <span className="font-cinzel text-[10px] uppercase tracking-wider text-secondary block font-semibold">
                Cosméticos & Beleza
              </span>
              <span className="font-cinzel text-sm text-primary font-bold block mt-0.5">
                Fragrâncias Suaves & Maquiagens
              </span>
              <span className="text-xs text-on-surface-variant mt-0.5 block">
                Fragrâncias florais/frescas ou body splash (sem ser muito doce) e
                maquiagem em geral.
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-full mt-5 py-2.5 rounded-lg bg-surface-container border border-primary-container/40 text-primary font-cinzel text-xs uppercase tracking-wider hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      )}

      {/* MODAL: INFORMAÇÕES IMPORTANTES */}
      {activeModal === "info" && (
        <div
          id="modal-info"
          className="modal-panel w-full max-w-xl rounded-2xl bg-gradient-to-b from-[#0c142e] to-[#050a18] border border-primary-container/50 p-6 sm:p-8 shadow-[0_0_50px_rgba(246,202,101,0.25)] relative my-auto"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors p-1 cursor-pointer"
            aria-label="Fechar modal"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <div className="text-center mb-5">
            <span className="text-primary-container text-2xl">✦</span>
            <h3 className="font-cinzel text-xl sm:text-2xl text-primary font-bold tracking-wider uppercase mt-1">
              Informações Importantes
            </h3>
            <p className="text-xs text-secondary font-cinzel tracking-widest uppercase mt-0.5">
              Guia da Cerimônia
            </p>
          </div>
          <div className="space-y-3 font-manrope text-sm text-on-surface">
            <div className="p-3.5 rounded-xl bg-[#070d20] border border-primary-container/20 flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-xl shrink-0">
                alarm_on
              </span>
              <div>
                <strong className="text-primary block font-cinzel">
                  Chegada Pontual às 18:30h
                </strong>{" "}
                Portões e coquetel de boas-vindas abrem pontualmente às 18:30h para
                início da solenidade.
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#070d20] border border-primary-container/20 flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-xl shrink-0">
                badge
              </span>
              <div>
                <strong className="text-primary block font-cinzel">
                  Lista Nominal de Convidados
                </strong>{" "}
                Entrada conferida na recepção com os nomes confirmados pela
                Confirmação.
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#070d20] border border-primary-container/20 flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-xl shrink-0">
                photo_camera
              </span>
              <div>
                <strong className="text-primary block font-cinzel">
                  Fotografias & Cabine Celestial
                </strong>{" "}
                Cabine fotográfica e cenários exclusivos estarão disponíveis durante
                toda a festa.
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-full mt-5 py-2.5 rounded-lg bg-surface-container border border-primary-container/40 text-primary font-cinzel text-xs uppercase tracking-wider hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            Entendi
          </button>
        </div>
      )}

      {/* MODAL: GALERIA CELESTIAL */}
      {activeModal === "galeria" && (
        <div
          id="modal-galeria"
          className="modal-panel w-full max-w-3xl rounded-2xl bg-gradient-to-b from-[#0c142e] to-[#050a18] border border-primary-container/50 p-6 sm:p-8 shadow-[0_0_50px_rgba(246,202,101,0.25)] relative my-auto"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors p-1 cursor-pointer"
            aria-label="Fechar modal"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <div className="text-center mb-5">
            <span className="text-primary-container text-2xl">✦</span>
            <h3 className="font-cinzel text-xl sm:text-2xl text-primary font-bold tracking-wider uppercase mt-1">
              Galeria Celestial
            </h3>
            <p className="text-xs text-secondary font-cinzel tracking-widest uppercase mt-0.5">
              Identidade Visual & O Encontro do Sol com a Lua
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden border border-primary-container/40 shadow-lg relative aspect-video">
              <Image
                src="/arte-principal.jpg"
                alt="Obra de Arte Sophia Fontes"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-xs text-on-surface-variant font-manrope italic">
              A harmonia sagrada entre a luz radiante do Sol e o misticismo protetor
              da Lua, celebrando o nascimento deste novo ciclo.
            </p>
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onReplayIntroVideo();
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary-container/50 bg-[#070d20] hover:bg-surface-container-high text-primary hover:border-primary-container text-xs font-cinzel tracking-[0.15em] uppercase transition-all shadow-[0_0_15px_rgba(246,202,101,0.2)] cursor-pointer"
              >
                <span className="material-symbols-outlined text-base text-secondary">
                  replay
                </span>
                <span>Rever Vídeo de Introdução</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
