// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold gradient-text">mikeCodeCraft</span>
            <p className="text-gray-400 mt-2">Crafting digital experiences with code.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/mikeCodeCraft/" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://x.com/mikeCodeCraft" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;