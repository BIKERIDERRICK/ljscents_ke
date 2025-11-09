// src/pages/Home.js
export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f4f1ed] to-[#e0d9cf] px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-[#1b1b1b] mb-6 leading-tight">
          Welcome to <span className="text-[#B8860B]">LJ SCENTS</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#333] mb-10">
          Handcrafted scents for your space, made with love in Kenya.
        </p>
        <a href="/#products" className="inline-block bg-[#28a745] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#218838] transition transform hover:scale-105">
          Explore Products
        </a>
      </div>
    </section>
  );
}