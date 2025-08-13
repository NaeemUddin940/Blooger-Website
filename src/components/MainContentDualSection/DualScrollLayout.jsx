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
          className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-xl shadow-lg">
          {/* বাম দিকের কলাম - দীর্ঘ কন্টেন্ট */}
          <div
            ref={leftColumnRef}
            id="left-column"
            className="lg:col-span-2 space-y-2">
            <div className="bg-gray-50 text-background p-6 rounded-lg shadow-sm">
              <LeftSide />
            </div>
          </div>

          {/* ডান দিকের কলাম - সংক্ষিপ্ত কন্টেন্ট */}
          <div ref={rightColumnParentRef} className="lg:col-span-1 relative">
            <div
              ref={rightColumnRef}
              id="right-column"
              className="bg-blue-50 text-background p-1 rounded-lg shadow-sm"
              style={rightColumnStyle}>
              <RightSide />
            </div>
          </div>
        </div>
      </div>

      {/* ফুটার */}
      <footer className="mt-8 py-4 text-center text-gray-600 bg-gray-100 rounded-t-xl">
        <p>© 2023 ডায়নামিক স্ক্রলিং লেআউট।</p>
      </footer>
    </div>
  );
};
