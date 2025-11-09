import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 text-center bg-[#2a2a2a]">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contact Us</h2>
      
      <form 
        action="https://formspree.io/f/xzzrjdqe" 
        method="POST" 
        className="max-w-[600px] mx-auto"
      >
        <label htmlFor="name" className="block mb-1 text-left text-white font-medium">Your Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          className="w-full p-3 mb-4 border border-gray-300 rounded-md bg-[#3a3a3a] text-white"
        />
        
        <label htmlFor="email" className="block mb-1 text-left text-white font-medium">Your Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          className="w-full p-3 mb-4 border border-gray-300 rounded-md bg-[#3a3a3a] text-white"
        />
        
        <label htmlFor="message" className="block mb-1 text-left text-white font-medium">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows="5" 
          required 
          className="w-full p-3 mb-4 border border-gray-300 rounded-md bg-[#3a3a3a] text-white resize-none"
        ></textarea>
        
        <button 
          type="submit" 
          className="w-full px-8 py-3 bg-[#B8860B] text-black rounded-md hover:bg-[#d4a017] transition-all duration-300 font-medium"
        >
          Send Feedback
        </button>
      </form>
      
      <p className="mt-4 text-white">
        <strong>Location:</strong> Nairobi
      </p>
      
      <div className="social-icons mt-4 flex justify-center gap-4">
        <a 
          href="https://www.instagram.com/lj_scents.ke" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl text-white hover:text-[#B8860B] transition-colors"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a 
          href="https://www.tiktok.com/@lj_scents.ke" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl text-white hover:text-[#B8860B] transition-colors"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a 
          href="mailto:ljscentske@gmail.com"
          className="text-2xl text-white hover:text-[#B8860B] transition-colors"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </section>
  );
}

export default Contact;