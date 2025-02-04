import { useEffect, useState } from "react";

const ScrollButtons = () => {
  const scrollByFraction = () => window.innerHeight / 3;

  const scrollUp = () => {
    window.scrollBy({ top: -scrollByFraction(), behavior: "smooth" });
  };

  const scrollDown = () => {
    window.scrollBy({ top: scrollByFraction(), behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-1 right-7 flex flex-col gap-2 ">
      <button
        onClick={scrollUp}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 hover:scale-125 transition"
      >
        ↑
      </button>
      <button
        onClick={scrollDown}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 hover:scale-125 transition"
      >
        ↓
      </button>
    </div>
  );
};

export default ScrollButtons;
