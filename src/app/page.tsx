import { HeroSection } from "@/components/HeroSection";
import LeftPageSide from "@/components/LeftPage/LeftPageSide";
import RightPageSide from "@/components/RightPage/RightPageSide";
export default function Home() {
  return (
    <main className="flex justify-center">
      <section className="w-5xl ">
        <HeroSection />

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Left Side Page Content */}
          <div className="col-span-2">
            <LeftPageSide />
          </div>

          {/* Righ Side Page Content or Sidebar */}
          <div>
            <RightPageSide />
          </div>
        </div>
      </section>
    </main>
  );
}
