import { useBlogContext } from "@/context/BlogContext";
import LeftSide from "@/components/MainContentLeftSide/LeftSide";
import RightSide from "@/components/MainContentRightSide/RightSide";

// এই কম্পোনেন্টটি দুটি কলামের সাথে ডায়নামিক স্ক্রলিং লেআউট তৈরি করে।
export const DualScrollLayout = () => {
  const {
    mainContainerRef,
    rightColumnParentRef,
    rightColumnRef,
    leftColumnRef,
    rightColumnStyle,
  } = useBlogContext();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow max-w-7xl mx-auto">
        <div
          ref={mainContainerRef}
          id="main-container"
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8 bg-background">
          {/* বাম দিকের কলাম - দীর্ঘ কন্টেন্ট */}
          <div ref={leftColumnRef} id="left-column" className="md:col-span-2">
            <LeftSide />
          </div>

          {/* ডান দিকের কলাম - সংক্ষিপ্ত কন্টেন্ট */}
          <div ref={rightColumnParentRef} className="md:col-span-1 relative hidden md:block">
            <div
              ref={rightColumnRef}
              id="right-column"
              className="p-1 rounded-lg shadow-sm"
              style={rightColumnStyle}>
              <RightSide />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
