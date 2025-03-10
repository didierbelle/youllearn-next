import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KW-AI",
  description: "KW-AI est une  application qui utilise l'IA pour suggerer des mots cles en fonction d'un centre d'interet saisi par un utilisateur, et qui utilisera ces mots cles pour rechercher des videos youtube permettant de se renseigner efficacement sur le sujet choisi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-4 h-screen`}
      >
          {children} 
      </body>
    </html>
  );
}
