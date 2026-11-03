import type { Metadata, Viewport } from "next";
import { Cinzel, Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sophia-fontes-15anos.vercel.app"),
  title: "Sophia Fontes • 15 Anos | O Encontro do Sol com a Lua",
  description:
    "Celebração de 15 Anos de Sophia Fontes — O Encontro do Sol com a Lua. Confirme sua presença e viva esta noite mágica no Ballroom Solarium.",
  icons: {
    icon: "/arte-principal.jpg",
    apple: "/arte-principal.jpg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Sophia Fontes • 15 Anos | O Encontro do Sol com a Lua",
    description:
      "Você é nosso convidado de honra para celebrar os 15 anos da Sophia Fontes. Toque para abrir a experiência do convite.",
    images: [
      {
        url: "/arte-principal.jpg",
        width: 1200,
        height: 630,
        alt: "Sophia Fontes • 15 Anos | O Encontro do Sol com a Lua",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sophia Fontes • 15 Anos | O Encontro do Sol com a Lua",
    description:
      "Você é nosso convidado de honra para celebrar os 15 anos da Sophia Fontes.",
    images: ["/arte-principal.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#070d20",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${cinzel.variable} ${playfair.variable} ${manrope.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-[#070d20] font-manrope text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
