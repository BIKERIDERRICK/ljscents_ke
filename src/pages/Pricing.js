// src/pages/Pricing.js
import React, { useState, useEffect, useRef } from "react";
import { products } from "../data/products";

export default function Pricing({ addToCart, setModalImage }) {
  const [filtered, setFiltered] = useState(products);
  const [highlightId, setHighlightId] = useState(null);
  const productRefs = useRef({});
  const selectRefs = useRef({});

  useEffect(() => {
    const updateFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const category = params.get("category");
      const highlight = params.get("highlight");

      // FILTER BY CATEGORY
      const filteredProducts = category
        ? products.filter((p) => p.category === category)
        : products;

      setFiltered(filteredProducts);
      const highlightNum = highlight ? Number(highlight) : null;
      setHighlightId(highlightNum);

      // AUTO-SCROLL TO FIRST PRODUCT IN CATEGORY
      if (filteredProducts.length > 0) {
        const targetId = highlightNum || filteredProducts[0].id;

        setTimeout(() => {
          const card = productRefs.current[targetId];
          if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "center" });
            card.classList.add("highlight-glow");
            setTimeout(() => card.classList.remove("highlight-glow"), 2000);

            const select = selectRefs.current[targetId];
            if (select) {
              select.focus();
              select.size = Math.min(select.options.length, 5);
            }
          }
        }, 900);
      }
    };

    updateFromUrl();

    const handle = () => updateFromUrl();
    window.addEventListener("url-updated", handle);
    window.addEventListener("popstate", handle);

    return () => {
      window.removeEventListener("url-updated", handle);
      window.removeEventListener("popstate", handle);
    };
  }, []);

  const handleAdd = (p, e) => {
    const select = e.target.closest(".card").querySelector("select");
    if (!select?.value) return alert("Please select a size");
    const [size, priceStr] = select.value.split("|");
    addToCart({ ...p, price: Number(priceStr) }, size, Number(priceStr));
    select.value = "";
  };

  return (
    <section id="pricing" className="min-h-screen py-20 px-4 md:px-[10%] bg-[#f4f1ed]">
      <div className="text-center mb-12">
        <h5 className="uppercase font-bold text-[#B8860B] tracking-wider text-sm mb-2">Pricing</h5>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-8">
          {filtered[0]?.category
            ? `${filtered[0].category.charAt(0).toUpperCase() + filtered[0].category.slice(1)} Collection`
            : "All Products"}
        </h2>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-xl text-gray-600">No products in this category.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filtered.map((p) => (
            <div
              key={p.id}
              ref={(el) => (productRefs.current[p.id] = el)}
              className={`card bg-white rounded-xl shadow-lg p-6 flex flex-col transition-all ${
                highlightId === p.id ? "ring-4 ring-[#B8860B] ring-offset-4 scale-105" : ""
              }`}
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => setModalImage(p.image)}
              />
              <h3 className="text-xl font-bold text-[#1b1b1b] mb-2">{p.name}</h3>

              <select
                ref={(el) => (selectRefs.current[p.id] = el)}
                className="w-full p-3 mb-4 border rounded-md text-sm"
                defaultValue=""
              >
                <option value="" disabled>Select Size</option>
                {p.sizes.map((s, i) => (
                  <option key={i} value={`${s.size}|${s.price}`}>
                    {s.size} - KES {s.price}
                  </option>
                ))}
              </select>

              <button
                onClick={(e) => handleAdd(p, e)}
                className="w-full py-3 bg-[#28a745] text-white font-bold rounded-md hover:bg-[#218838]"
              >
                Add to Cart
              </button>

              <p className="mt-4 text-sm text-gray-600">{p.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}