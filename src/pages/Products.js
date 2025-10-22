import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { products } from '../data/products';

function Products({ addToCart, setModalImage }) {
  useEffect(() => {
    const grid = document.querySelector('#products .product-grid');
    if (grid) grid.scrollLeft = 0;
  }, []);

  const scrollProducts = (direction) => {
    const grid = document.querySelector('#products .product-grid');
    if (grid) {
      grid.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 px-4 md:px-10 bg-secondary">
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8 uppercase">Our Products</h2>
      <div className="flex items-center relative">
        <button
          className="bg-primary text-black p-2 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-[#d4a017]"
          onClick={() => scrollProducts('left')}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="product-grid flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary scrollbar-track-[#2a2a2a] px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card bg-[#2a2a2a] rounded-xl shadow-md w-[280px] sm:w-[90vw] max-w-[300px] flex-shrink-0 snap-start p-4 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-xl cursor-pointer"
                onClick={() => setModalImage(product.image)}
              />
              <h3 className="text-lg font-bold mt-4 text-white">{product.name}</h3>
              <p className="text-sm text-[#d1d1f1] flex-grow">{product.description}</p>
              <select
                className="size-select border border-gray-300 rounded-md p-2 mt-2 text-black"
                data-product={product.name}
              >
                <option value="">Select Size</option>
                {product.sizes.map((size, idx) => (
                  <option key={idx} value={`${size.size}|${size.price}`}>
                    {size.size} - KES {size.price.toFixed(2)}
                  </option>
                ))}
              </select>
              <button
                className="bg-primary text-black py-2 rounded-md mt-4 hover:bg-[#d4a017]"
                onClick={() => {
                  const select = document.querySelector(`.size-select[data-product="${product.name}"]`);
                  if (!select.value) {
                    alert('Please select a size.');
                    return;
                  }
                  const [size, price] = select.value.split('|');
                  addToCart(product, size, parseFloat(price));
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <button
          className="bg-primary text-black p-2 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-[#d4a017]"
          onClick={() => scrollProducts('right')}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}

export default Products;