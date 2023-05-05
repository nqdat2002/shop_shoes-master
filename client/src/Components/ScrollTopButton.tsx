import React from "react";

const ScrollTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
             in place of 'smooth' */
    });
  };

  return (
    <button
      className="w-9 h-9 bg-black fixed bottom-5 right-5 flex justify-center items-center rounded-sm animate-bounce border border-white"
      onClick={scrollToTop}
    >
      <svg
        className="h-6 w-6 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
        <line x1="12" y1="19" x2="12" y2="5" />{" "}
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
};

export default ScrollTopButton;
