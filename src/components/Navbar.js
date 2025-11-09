import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll && currentScroll > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <>
      <nav className={`fixed top-0 w-full shadow-md z-[1000] flex justify-between items-center px-4 md:px-8 py-0 transition-all duration-300 ${
        isHidden ? 'bg-[#1b1b1b]' : 'bg-[#f4f1ed]'
      }`}>
        {/* Hamburger Menu */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50 p-2.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Logo */}
        <img src="/assets/images/logo.jpg" alt="LJ Scents Logo" className="h-12 md:h-14" />

        {/* Navigation Content */}
        <div className={`${
          isOpen ? 'left-0' : '-left-full'
        } md:left-auto fixed md:static top-0 w-full md:w-auto h-auto bg-[#f4f1ed] md:bg-transparent z-40 md:z-auto flex flex-col md:flex-row items-center md:items-center justify-center md:justify-end pt-20 md:pt-0 px-4 md:px-0 pb-5 md:pb-0 transition-all duration-300`}>
          <ul className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-6 w-full md:w-auto py-4 md:py-0">
            <li>
              <Link 
                to="/" 
                className={`font-bold transition-colors px-2.5 py-2.5 block ${
                  isHidden ? 'text-[#2a2a2a] hover:text-[#28a745]' : 'text-[#333] hover:text-[#28a745]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`font-bold transition-colors px-2.5 py-2.5 block ${
                  isHidden ? 'text-[#2a2a2a] hover:text-[#28a745]' : 'text-[#333] hover:text-[#28a745]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className={`font-bold transition-colors px-2.5 py-2.5 block ${
                  isHidden ? 'text-[#2a2a2a] hover:text-[#28a745]' : 'text-[#333] hover:text-[#28a745]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="/pricing" 
                className={`font-bold transition-colors px-2.5 py-2.5 block ${
                  isHidden ? 'text-[#2a2a2a] hover:text-[#28a745]' : 'text-[#333] hover:text-[#28a745]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`font-bold transition-colors px-2.5 py-2.5 block ${
                  isHidden ? 'text-[#2a2a2a] hover:text-[#28a745]' : 'text-[#333] hover:text-[#28a745]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/cart" 
                className={`font-bold transition-colors px-2.5 py-2.5 flex items-center ${
                  isHidden ? 'text-[#2a2a2a] hover:text-[#28a745]' : 'text-[#333] hover:text-[#28a745]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon icon={faShoppingCart} className="mr-1" /> ({cartCount})
              </Link>
            </li>
          </ul>

          {/* Phone Number */}
          <a 
            href="tel:+254702899085" 
            className={`flex items-center font-bold mt-8 md:mt-0 md:ml-6 transition-colors px-2.5 py-2.5 ${
              isHidden ? 'text-[#2a2a2a] hover:text-[#28a745]' : 'text-[#333] hover:text-[#28a745]'
            }`}
          >
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-[#28a745]" /> +254702899085
          </a>
        </div>

        {/* Backdrop */}
        {isOpen && (
          <div 
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </nav>

      {/* WhatsApp Icon - Fixed Left */}
      <a 
        href="https://wa.me/254702899085" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-5 top-1/2 -translate-y-1/2 text-[2.5rem] text-[#25D366] z-[1001] transition-transform hover:scale-110"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>

      {/* Cart Icon - Fixed Right */}
      <Link 
        to="/cart" 
        className="fixed right-5 top-1/2 -translate-y-1/2 text-[2.5rem] text-[#B8860B] z-[1001] transition-transform hover:scale-110 flex items-center"
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="absolute -top-2.5 -right-2.5 bg-[#ff4d4d] text-white text-base px-2 py-0.5 rounded-full min-w-[20px] text-center">
          {cartCount}
        </span>
      </Link>
    </>
  );
}

export default Navbar;