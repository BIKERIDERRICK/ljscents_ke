// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Pricing from './pages/Pricing';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Modal from './components/Modal';

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [modalImage, setModalImage] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, size, price) => {
    if (!size || !price) return alert('Select a size');
    setCart(prev => {
      const existing = prev.find(i => i.name === product.name && i.size === size);
      if (existing) {
        return prev.map(i => i.name === product.name && i.size === size
          ? { ...i, quantity: i.quantity + 1 }
          : i
        );
      }
      return [...prev, { name: product.name, size, price, quantity: 1 }];
    });
  };

  const removeFromCart = (i) => setCart(prev => prev.filter((_, idx) => idx !== i));

  const submitOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value || 'Unknown';
    const phone = form.phone.value || 'No phone';
    const address = form.address.value || 'No address';
    const items = cart.map(i => `${i.name} (${i.size}) ×${i.quantity}`).join(', ');
    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const msg = `Order: ${name}, ${phone}, ${address}\nItems: ${items}\nTotal: KES ${total}`;
    window.location.href = `https://wa.me/254702899085?text=${encodeURIComponent(msg)}`;
    setCart([]);
    setShowCheckout(false);
    form.reset();
  };

  return (
    <Router>
      <ScrollHandler />
      <div className="min-h-screen bg-[#f9f5f0] flex flex-col">
        {/* Fixed Navbar */}
        <Navbar cartCount={cart.reduce((s, i) => s + i.quantity, 0)} />

        {/* All Sections in One Page */}
        <main className="flex-grow">
          <Home />
          <About />
          <Products addToCart={addToCart} setModalImage={setModalImage} />
          <Pricing addToCart={addToCart} setModalImage={setModalImage} />
          <Cart cart={cart} removeFromCart={removeFromCart} setShowCheckout={setShowCheckout} showCheckout={showCheckout} submitOrder={submitOrder} />
          <Contact />
        </main>

        <Footer />
        {modalImage && <Modal image={modalImage} close={() => setModalImage(null)} />}
      </div>
    </Router>
  );
}

// SMOOTH SCROLL + URL SYNC
function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const hash = location.hash;
    const id = hash ? hash.slice(1) : path.slice(1) || 'home';

    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location]);

  return null;
}

export default App;