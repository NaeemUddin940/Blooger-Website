import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/Header/TopNavbar";
import { Navigation } from "@/components/Header/Navigation";
import { BlogContextProvider } from "@/context/BlogContext";
import { Footer } from "@/components/Footer/Footer";
import { HeroSection } from "@/components/Section/HeroSection";
import RightSide from "@/components/MainContentRightSide/RightSide";

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
});

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
        <BlogContextProvider>
          <TopNavbar />
          <Navigation />
          <div className="flex justify-center">
            <div className="w-5xl">
              <HeroSection />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-5xl grid grid-cols-1 md:grid-cols-5 gap-5 lg:grid-cols-4">
              <div className="lg:col-span-3 md:col-span-3">{children}</div>
              <div  className="md:col-span-5 md:col-start-4">
                <RightSide />
              </div>
            </div>
          </div>
          <Footer />
        </BlogContextProvider>
      </body>
    </html>
  );
}
