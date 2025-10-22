import React, { useState, useEffect } from 'react';
import { slides } from '../data/products';

function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${index === slideIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Welcome to LJ Scents KE</h1>
        <p className="text-lg md:text-xl mb-6 text-white">Discover our luxurious candles and diffusers</p>
        <a href="/products" className="inline-block px-6 py-3 border-2 border-white text-white rounded-md hover:bg-[#28a745] hover:border-[#28a745] transition-all">Shop Now</a>
      </div>
    </section>
  );
}

export default Home;