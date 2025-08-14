import { useBlogContext } from "@/context/BlogContext";

import RightSide from "@/components/MainContentRightSide/RightSide";

// এই কম্পোনেন্টটি দুটি কলামের সাথে ডায়নামিক স্ক্রলিং লেআউট তৈরি করে।
export const DualScrollLayout = () => {
  const {
    rightColumnParentRef,
    rightColumnRef,
    rightColumnStyle,
  } = useBlogContext();

  return (
    <div>
      <div
        ref={rightColumnParentRef}
        className="md:col-span-1 relative hidden md:block">
        <div
          ref={rightColumnRef}
          id="right-column"
          className="p-1 rounded-lg shadow-sm"
          style={rightColumnStyle}>
          <RightSide />
        </div>
      </div>
    </div>
  );
};
