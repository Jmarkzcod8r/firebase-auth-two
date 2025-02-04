import { useEffect, useState } from "react";

const ScrollButtons = () => {
  const scrollByFraction = () => window.innerHeight / 3;

  const scrollUp = () => {
    const currentScroll = window.scrollY;
    const nextScroll = currentScroll - scrollByFraction();

    if (nextScroll <= 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollBy({ top: -scrollByFraction(), behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    const currentScroll = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const nextScroll = currentScroll + scrollByFraction();

    if (nextScroll >= maxScroll) {
      window.scrollTo({ top: maxScroll, behavior: "smooth" });
    } else {
      window.scrollBy({ top: scrollByFraction(), behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2">
      <button
        onClick={scrollUp}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        ↑
      </button>
      <button
        onClick={scrollDown}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        ↓
      </button>
    </div>
  );
};

export default ScrollButtons;
