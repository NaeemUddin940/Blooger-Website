import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/Header/TopNavbar";
import { Navigation } from "@/components/Header/Navigation";
import { BlogContextProvider } from "@/context/BlogContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Blogger Website || By NAEEM UDDIN",
  description: "This is a blog website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}>
        <TopNavbar />
        <Navigation />
        <BlogContextProvider>{children}</BlogContextProvider>
      </body>
    </html>
  );
}
