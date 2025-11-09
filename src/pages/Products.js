// src/pages/Products.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const categories = [
  {
    id: "blossom",
    title: "Blossom Double Wick",
    desc: "100% Natural Soywax Scented Candles",
    img: "/images/Frothy Fantasy-DW 1.jpg",
    btn: "View Double Wick",
    firstProductId: 1, // Berries Bark Double Blossom
  },
  {
    id: "candles",
    title: "Scented Candles",
    desc: "100% Natural Soywax Scented Candles",
    img: "/images/Frothy Fantasy Candle.jpg",
    btn: "View Scented Candles",
    firstProductId: 4, // Frothy Fantasy
  },
  {
    id: "diffusers",
    title: "Reed Diffusers",
    desc: "Best diffuser base and fragrance oils.",
    img: "/images/reed diffuser1.jpg",
    btn: "View Reed Diffusers",
    firstProductId: 7, // Pine Bliss Diffuser
  },
  {
    id: "sprays",
    title: "Room and Linen Sprays",
    desc: "Long lasting room and linen spray.",
    img: "/images/spray1.jpg",
    btn: "View Room and Linen Sprays",
    firstProductId: 9, // Citrus Whisper
  },
  {
    id: "car",
    title: "Car Diffusers",
    desc: "Compact and stylish car diffusers.",
    img: "/images/Car1.jpg",
    btn: "View Car Diffusers",
    firstProductId: 11, // Pine Bliss (Car)
  },
  {
    id: "gift",
    title: "Gift Box",
    desc: "Discover our full range of scented products.",
    img: "/images/GiftBox.jpg",
    btn: "View Gift Box",
    firstProductId: 13, // Gift Box 4000
  },
];

export default function Products() {
  const scroll = (dir) => {
    const el = document.querySelector(".product-grid");
    if (el) el.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
  };

  const goToPricing = (category, productId) => {
    const pricing = document.getElementById("pricing");
    if (!pricing) return;

    pricing.scrollIntoView({ behavior: "smooth" });
    const newUrl = `/#pricing?category=${category}&highlight=${productId}`;
    window.history.pushState(null, "", newUrl);

    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("url-updated"));
    }, 800);
  };

  return (
    <section id="products" className="min-h-screen py-20 px-4 md:px-[10%] bg-[#1b1b1b] text-white">
      <div className="text-center mb-12">
        <h5 className="uppercase font-bold text-[#B8860B] tracking-wider text-sm mb-2">Products</h5>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Discover Our Scented Collection</h2>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={() => scroll("left")} className="bg-[#B8860B] text-[#141414] p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="product-grid flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-thin px-4 py-4 scroll-smooth flex-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => goToPricing(cat.id, cat.firstProductId)}
              className="block w-80 flex-shrink-0 snap-start text-left group"
            >
              <div className="bg-[#2a2a2a] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                <img src={cat.img} alt={cat.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold flex justify-between items-center mb-2">
                    {cat.title} <span className="text-[#B8860B] group-hover:translate-x-1 transition">›</span>
                  </h3>
                  <p className="text-sm text-[#d1d1f1] mb-4">{cat.desc}</p>
                  <span className="block text-center py-3 border-2 border-white rounded-full text-sm font-medium hover:bg-[#28a745] hover:border-[#28a745] transition">
                    {cat.btn}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button onClick={() => scroll("right")} className="bg-[#B8860B] text-[#141414] p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}