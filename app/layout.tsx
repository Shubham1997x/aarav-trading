import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aarav Trading | Premium Cleaning Products Catalogue",
  description:
    "Browse Aarav Trading's catalogue of premium cleaning products — floor cleaners, disinfectants, mops, brooms and more. Enquire via WhatsApp or email.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
