import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const manrope = localFont({
  src: "./fonts/Manrope-VariableFont.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  preload: true,
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ремонт квартир в Красодаре и Геленджике",
  description: "Профессиональный ремонт квартир любой сложности на юге России. Опытные мастера, соблюдение сроков, прозрачные цены. Работаем в Краснодаре и Геленджике.", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
