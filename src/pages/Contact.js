import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-10 bg-[#2a2a2a]">
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8 uppercase">Contact Us</h2>
      <form className="max-w-[600px] mx-auto">
        <input type="text" placeholder="Name" className="w-full p-3 mb-4 border border-gray-300 rounded-md bg-[#3a3a3a] text-white" />
        <input type="email" placeholder="Email" className="w-full p-3 mb-4 border border-gray-300 rounded-md bg-[#3a3a3a] text-white" />
        <textarea placeholder="Message" className="w-full p-3 mb-4 border border-gray-300 rounded-md bg-[#3a3a3a] text-white"></textarea>
        <button className="bg-primary text-black px-6 py-3 rounded-md w-full hover:bg-[#d4a017] transition-all">Send Message</button>
      </form>
      <div className="social-icons mt-4 text-center">
        <a href="#" className="text-2xl mx-2 text-white hover:text-primary"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#" className="text-2xl mx-2 text-white hover:text-primary"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#" className="text-2xl mx-2 text-white hover:text-primary"><FontAwesomeIcon icon={faTwitter} /></a>
      </div>
    </section>
  );
}

export default Contact;