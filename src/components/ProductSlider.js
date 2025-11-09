import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ProductSlider({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollAmount = direction === 'left' ? -300 : 300;
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setScrollPosition(slider.scrollLeft + scrollAmount);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => scroll('left')}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-yellow-500 p-2 rounded-full shadow-lg ${
          scrollPosition <= 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-600'
        }`}
        disabled={scrollPosition <= 0}
      >
        <FaChevronLeft className="text-white" />
      </button>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-thin gap-4 px-12 py-4 scroll-smooth"
        onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
      >
        {children}
      </div>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-yellow-500 p-2 rounded-full shadow-lg hover:bg-yellow-600"
      >
        <FaChevronRight className="text-white" />
      </button>
    </div>
  );
}