import type { Metadata } from "next";
import { Fredoka, Heebo, DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Header/NavBar";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  display: "swap",
});
const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heebo.variable} ${fredoka.variable} ${dmSans.variable} antialiased font-dmSans  bg-[var(--color-dark)] text-[var(--color-light)]`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
