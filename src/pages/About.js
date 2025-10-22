import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-10 bg-secondary">
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8 uppercase">About Us</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 min-w-[300px] text-center md:text-left">
          <p className="text-lg mb-4 text-white">LJ Scents KE offers premium candles and diffusers crafted with love.</p>
          <a href="/contact" className="inline-block px-4 py-2 border-2 border-[#28a745] text-[#28a745] rounded-md hover:bg-[#28a745] hover:text-white transition-all">
            Contact Us
          </a>
        </div>
        <div className="flex-1 min-w-[300px] text-center">
          <img src="/assets/images/about.jpg" alt="About" className="w-full max-w-[500px] rounded-xl shadow-md" />
        </div>
      </div>
    </section>
  );
}

export default About;