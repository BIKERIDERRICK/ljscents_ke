import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';
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
    if (!size || !price) {
      alert('Please select a size first.');
      return;
    }
    setCart((prev) => {
      const existing = prev.find((item) => item.name === product.name && item.size === size);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { name: product.name, size, price, quantity: 1 }];
    });
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const submitOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('#name').value || 'Unknown';
    const email = form.querySelector('#email').value || 'No email provided';
    const phone = form.querySelector('#phone').value || 'No phone provided';
    const address = form.querySelector('#address').value || 'No address provided';

    if (cart.length === 0) {
      alert('Error: Your cart is empty.');
      return;
    }

    const cartDetails = cart.map((item) => `${item.name} (${item.size}): ${item.quantity}x KES${item.price.toFixed(2)}`).join('; ');
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const message = `Order from ${name}, Email: ${email}, Phone: ${phone}, Address: ${address}, Items: ${cartDetails}, Total: KES${total.toFixed(2)}`;

    console.log('WhatsApp Message:', message);
    const whatsappURL = `https://wa.me/254702899085?text=${encodeURIComponent(message)}`;
    console.log('WhatsApp URL:', whatsappURL);

    if (whatsappURL.length > 4000) {
      alert('Error: Order message is too long. Please reduce items.');
      return;
    }

    setCart([]);
    setShowCheckout(false);
    form.reset();
    try {
      window.location.href = whatsappURL;
      setTimeout(() => {
        alert('If WhatsApp did not open, copy this link: ' + whatsappURL);
      }, 3000);
    } catch (error) {
      console.error('Redirect Error:', error);
      alert('Error redirecting to WhatsApp. Copy this link: ' + whatsappURL);
    }
  };

  return (
    <Router>
      <div className="bg-background">
        <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} setModalImage={setModalImage} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} setShowCheckout={setShowCheckout} submitOrder={submitOrder} showCheckout={showCheckout} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {modalImage && <Modal image={modalImage} close={() => setModalImage(null)} />}
      </div>
    </Router>
  );
}

export default App;