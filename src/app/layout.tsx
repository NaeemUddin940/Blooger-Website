"use client";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/Header/TopNavbar";
import { Navigation } from "@/components/Header/Navigation";
import { BlogContextProvider } from "@/context/BlogContext";
import { Footer } from "@/components/Footer/Footer";
import { HeroSection } from "@/components/Section/HeroSection";
import RightSide from "@/components/Sidebar/RightSide";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/components/ui/theme-provider";

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

<metadata />;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}>
        {isAdminRoute ? (
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            {children}
          </ThemeProvider>
        ) : (
          // 🔹 Blog Layout
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
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
                  <div className="md:col-span-5 md:col-start-4">
                    <RightSide />
                  </div>
                </div>
              </div>

              <Footer />
            </BlogContextProvider>
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
