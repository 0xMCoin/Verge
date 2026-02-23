import type { Metadata } from "next";
import { Manrope, DM_Sans, Bebas_Neue, Montserrat, Rubik } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const rubik = Rubik({
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ubuntu Kids",
  description:
    "Ubuntu Kids",
  keywords: ["pódio tickets", "tickets", "events", "management"],
  authors: [{ name: "Ubuntu Kids Team" }],
  creator: "Ubuntu Kids",
  publisher: "Ubuntu Kids",
  robots: "index, follow",
  openGraph: {
    title: "Ubuntu Kids",
    description:
      "Ubuntu Kids",
    type: "website",
    locale: "pt-BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubuntu Kids",
    description:
      "Ubuntu Kids",
  },
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "64x64", type: "image/png" },
      { url: "/images/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/images/logo.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${dmSans.variable} ${bebasNeue.variable} ${montserrat.variable} ${rubik.variable}`}>
      <head>
        <link rel="icon" href="/images/logo-ubuntukids.png" />
      </head>

      <body suppressHydrationWarning className="scroll-smooth antialiased">
        <div className="flex flex-col min-h-screen bg-[#121b17]">
          <Header />

          <div className="pt-0 overflow-hidden">{children}</div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
