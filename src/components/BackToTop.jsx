import React from "react";
import ScrollToTop from "react-scroll-up";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const BackToTop = () => {
  return (
    <ScrollToTop showUnder={170} style={{ zIndex: 100 }}>
      <div className="relative">
        <div className="size-10 sm:size-14 rounded-full border-2 border-dashed  animate-custom-spin relative border-red-500"></div>
        <div className="absolute inset-0 flex items-center justify-center animate-custom-bounce text-2xl sm:text-3xl text-red-500">
          <MdOutlineKeyboardDoubleArrowUp />
        </div>
      </div>
    </ScrollToTop>
  );
};

export default BackToTop;
