# ✦ Sophia Fontes • 15 Anos | O Encontro do Sol com a Lua ✦

Convite digital cerimonial e imersivo desenvolvido em **Next.js 16 (App Router)** com **React 19**, **TypeScript** e **Tailwind CSS v4** para a celebração de 15 Anos de Sophia Fontes.

---

## 🌟 Funcionalidades
- **Introdução em Vídeo Fullscreen:** Experiência cinematográfica inicial com transição suave e desbloqueio celestial ao término.
- **Trilha Sonora Celestial:** Música de fundo integrada ("O Sol pediu a lua em casamento") com controle de áudio, status pulsante e sincronia com o vídeo.
- **Órbita Celestial Interativa:** Botões orbitais com rotação contínua (60° de intervalo) e pausa ao passar o cursor, abrindo modais para:
  - **Convite Cerimonial (Poema):** Bênção dos pais e texto poético do convite.
  - **Confirmação (RSVP):** Formulário interativo com contagem de convidados, telefone e tela de confirmação nas estrelas.
  - **Localização:** Dados do Ballroom Solarium e rota direta no Google Maps.
  - **Dress Code:** Traje Passeio, proibição de roupas azuis/douradas e exigência de tecidos lisos.
  - **Guia de Presentes:** Tamanhos de vestuário, calçados, joias e cosméticos.
  - **Informações Importantes:** Horários solenes, recepção com lista nominal e cabine fotográfica.
  - **Galeria Celestial:** Obra de arte oficial e botão para rever a introdução em vídeo.
- **Contador Regressivo Astronômico:** Dias, horas, minutos e segundos até 05 de Junho de 2027 às 18:30h.
- **Fundo Estelar Dinâmico em Canvas:** 85 estrelas douradas animadas com variação de brilho e movimento cósmico.
- **Otimização de Performance & SEO:** `next/font/google` com fontes Cinzel, Playfair Display e Manrope sem layout shift, além de metadados Open Graph para prévias no WhatsApp e redes sociais.

---

## 📁 Estrutura do Projeto Next.js
```text
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Layout raiz com fontes Google, SEO e metadata
│   │   ├── page.tsx           # Página principal integrando áudio, vídeo e modais
│   │   └── globals.css        # Tailwind CSS v4, tema astral e animações orbitais
│   └── components/
│       ├── IntroVideoOverlay.tsx  # Experiência de vídeo de abertura e transição
│       ├── HeaderAudio.tsx        # Monograma superior e controle de áudio
│       ├── CelestialCanvas.tsx    # Animação de poeira estelar em Canvas
│       ├── CelestialStage.tsx     # Palco central, obra de arte e órbita 360°
│       ├── CountdownTimer.tsx     # Contagem regressiva em tempo real
│       ├── CelestialModals.tsx    # Diálogos modais informativos e RSVP
│       └── CelestialFooter.tsx    # Rodapé minimalista com crédito MSO Dev
├── public/                    # Mídias e ativos estáticos
│   ├── arte-principal.jpg
│   ├── mso-logo.png
│   ├── musica-sol-e-lua.mpeg
│   └── video-intro.mp4
├── next.config.ts             # Configuração do Next.js e headers de cache de mídia
├── tsconfig.json              # Configuração do TypeScript
├── package.json               # Dependências e scripts do projeto
└── README.md
```

---

## 💻 Como Rodar Localmente

1. **Instale as dependências** (caso ainda não o tenha feito):
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

3. Acesse no navegador:
   ```text
   http://localhost:3000
   ```

4. **Gerar build de produção**:
   ```bash
   npm run build
   ```

---

## 🚀 Como Deployar na Vercel

1. Suba o projeto para seu repositório no GitHub:
   ```bash
   git add .
   git commit -m "feat: migração completa para Next.js 16"
   git push origin main
   ```

2. Na [Vercel](https://vercel.com):
   - Importe o repositório.
   - O preset do framework será detectado automaticamente como **Next.js**.
   - Clique em **Deploy**.
