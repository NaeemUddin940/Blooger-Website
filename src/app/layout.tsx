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
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/Sidebar/admin-sidebar";
import { SiteHeader } from "@/components/site-header";

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
            <BlogContextProvider>
              <SidebarProvider
                style={
                  {
                    "--sidebar-width": "calc(var(--spacing) * 60)",
                    "--header-height": "calc(var(--spacing) * 12)",
                  } as React.CSSProperties
                }>
                <AdminSidebar variant="inset" />
                <SidebarInset>
                  <SiteHeader />
                  <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                        {children}
                        
                      </div>
                    </div>
                  </div>
                </SidebarInset>
              </SidebarProvider>
            </BlogContextProvider>
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
