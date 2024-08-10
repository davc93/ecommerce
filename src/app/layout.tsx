import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
// import { Navbar } from "@/components/navbar";
// const inter = Inter({ subsets: ["latin"] });
import Providers from "@/providers";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>{children}</Providers>
        {/* <Navbar /> */}
        <Toaster />
      </body>
    </html>
  );
}
