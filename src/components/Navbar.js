import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-nav shadow-md z-50 flex justify-between items-center px-4 py-2 md:px-8">
      <img src="/assets/images/logo.jpg" alt="LJ Scents Logo" className="h-10 md:h-12" />
      <button
        className="md:hidden flex flex-col gap-1.5 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`w-6 h-0.5 bg-black transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-black transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      <div className={`nav-content ${isOpen ? 'block' : 'hidden'} md:flex md:items-center absolute md:static top-0 left-0 w-full md:w-auto bg-nav md:bg-transparent pt-16 md:pt-0 px-4 md:px-0 transition-all duration-300 z-40`}>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
          <li><Link to="/" className="text-[#333] font-bold hover:text-[#28a745]" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/products" className="text-[#333] font-bold hover:text-[#28a745]" onClick={() => setIsOpen(false)}>Products</Link></li>
          <li><Link to="/about" className="text-[#333] font-bold hover:text-[#28a745]" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" className="text-[#333] font-bold hover:text-[#28a745]" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
        <a href="tel:+254702899085" className="flex items-center text-[#333] font-bold mt-4 md:mt-0 md:ml-6 hover:text-[#28a745]">
          <FontAwesomeIcon icon={faPhone} className="mr-1 text-[#28a745]" /> +254 702 899085
        </a>
      </div>
      <div className={`nav-backdrop ${isOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full bg-black/50 z-30 md:hidden`} onClick={() => setIsOpen(false)}></div>
      <Link to="/cart" className="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 text-3xl md:text-4xl text-primary hover:scale-110 transition-transform z-50 relative" onClick={() => setIsOpen(false)}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">{cartCount}</span>
      </Link>
      <a href="https://wa.me/254702899085" className="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 text-3xl md:text-4xl text-[#25D366] hover:scale-110 transition-transform z-50">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </nav>
  );
}

export default Navbar;