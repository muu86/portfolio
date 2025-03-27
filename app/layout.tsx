import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { allDigitalNutritionApplications, allDigitalNutritionInfras } from "content-collections";
import { ScrollStoreProvider } from "@/lib/scroll/context/scroll-context-provider";
import { idToEdges } from "@/config/id-to-edges";
import { ReactNode } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

const notoSans = Noto_Sans_KR({
  variable: "--font-noto-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MJ Portfolio",
  description: "Dev MJ Portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const projectApplication = allDigitalNutritionApplications.map((doc) => doc.id);
  const projectInfra = allDigitalNutritionInfras.map((doc) => doc.id);

  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KRQVMDKV" />
      <body className={`${notoSans.variable} ${geistMono.variable} antialiased`}>
        <ScrollStoreProvider ids={[...projectApplication, ...projectInfra]} idToEdges={idToEdges}>
          <div className="flex min-h-svh w-full flex-col px-4 font-sans">{children}</div>
        </ScrollStoreProvider>

        <SpeedInsights />
      </body>
    </html>
  );
}
