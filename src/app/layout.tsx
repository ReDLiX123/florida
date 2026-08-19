import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#fdf9f7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Флорида | Салон красоты премиум-класса в Иркутске",
  description:
    "«Флорида» — салон красоты в Иркутске (ул. Байкальская 124/1). Инновационное LED-наращивание ресниц, SMART-педикюр, маникюр, ламинирование, брови, визаж и свадебные прически. Онлайн-запись.",
  keywords: [
    "салон красоты Иркутск",
    "Флорида салон",
    "LED наращивание ресниц Иркутск",
    "маникюр Байкальская Иркутск",
    "SMART педикюр",
    "ламинирование бровей",
    "свадебный макияж Иркутск",
    "выездной визажист Иркутск",
  ],
  authors: [{ name: "Салон красоты Флорида" }],
  openGraph: {
    title: "Салон красоты «Флорида» · Иркутск",
    description: "Пространство, где хочется цвести. Премиальные ритуалы красоты, LED-наращивание ресниц, ногтевой сервис и авторские образы.",
    url: "https://florida-beauty.ru",
    siteName: "Флорида Beauty Salon",
    locale: "ru_RU",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`scroll-smooth ${cormorant.variable} ${manrope.variable}`}
    >
      <body className="bg-cream-50 text-burgundy font-sans selection:bg-florida-powder selection:text-burgundy min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}

