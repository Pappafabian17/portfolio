import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {NextIntlClientProvider} from "next-intl";
import {getLocale, getMessages} from "next-intl/server";
import Header
 from "@/components/Header";
import "./globals.scss"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fabian pappa | Portfolio",
  description: "Portfolio personal: proyectos y contacto",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages(); 
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
        <Header/>
        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
