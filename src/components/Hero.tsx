// src/components/Hero.jsx
import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-bg min-h-[60vh] md:min-h-screen flex items-center justify-center text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">Michael Barnabas</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Web Developer & Python Engineer
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
          I craft elegant solutions to complex problems through clean code and innovative design.
        </p>
        <div className="flex justify-center space-x-4">
          <ul className="ul">
            <li className="li">
              <a className="a" href="#">
                <i className="fa-brands fa-linkedin-in"></i>
                <span className="span"> - LinkedIn</span>
              </a>
            </li>
            <li className="li">
              <a className="a" href="https://x.com/mikeCodeCraft">
                <i className="fa-brands fa-x-twitter"></i>
                <span className="span"> - Twitter</span>
              </a>
            </li>
            <li className="li">
              <a className="a" href="mailto:mikecodecraft@gmail.com">
                <i className="fa-solid fa-envelope"></i>
                <span className="span"> - Email</span>
              </a>
            </li>
            <li className="li">
              <a className="a" href="https://wa.me/7062401262">
                <i className="fa-brands fa-whatsapp"></i>
                <span className="span"> - WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;