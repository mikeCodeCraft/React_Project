// src/components/Hero.jsx
import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-bg min-h-[60vh] md:min-h-screen flex items-center justify-center text-white pt-16 relative overflow-hidden">
      {/* Animated Gradient Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-30 rounded-full w-96 h-96 blur-3xl animate-pulse-slow left-[-10%] top-[-10%]" />
        <div className="absolute bg-gradient-to-tr from-pink-400 via-indigo-400 to-purple-400 opacity-20 rounded-full w-80 h-80 blur-2xl animate-pulse-slow right-[-8%] bottom-[-8%]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left: Text Content */}
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">
              Hi, I'm <span className="gradient-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">Michael Barnabas</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 animate-fade-in-up delay-100">
              Web Developer & Python Engineer
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 animate-fade-in-up delay-200">
              I craft elegant solutions to complex problems through clean code and innovative design.<br/>
        
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in-up delay-300">
              <ul className="ul flex flex-wrap justify-center gap-4">
                <li className="li">
                  <a className="a" href="https://discord.gg/EfD6fbVD" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-discord"></i>
                    <span className="span"> - Discord</span>
                  </a>
                </li>
                <li className="li">
                  <a className="a" href="https://x.com/mikeCodeCraft">
                    <i className="fa-brands fa-x-twitter"></i>
                    <span className="span"> - Twitter</span>
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
            {/* Call to Action Buttons */}
            <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-center animate-bounce">
              <a href="#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-300">
                Contact Me
              </a>
              <a href="#projects" className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-300">
                Check My Projects
              </a>
            </div>
          </div>
          {/* Right: Web Dev Themed Image */}
          <div className="hidden md:flex md:w-1/3 justify-center animate-fade-in-up delay-200">
            <div className="w-60 h-60 md:w-80 md:h-80 rounded-2xl border-4 border-white bg-white/20 overflow-hidden flex items-center justify-center drop-shadow-2xl">
              <img src="/webdev.jpg" alt="Web Development" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/*
Add the following to your global CSS (e.g., index.css or Hero.css) for custom animations:

@keyframes fade-in-down {
  0% { opacity: 0; transform: translateY(-30px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}
.animate-fade-in-down { animation: fade-in-down 1s ease-out; }
.animate-fade-in-up { animation: fade-in-up 1s ease-out; }
.animate-gradient-x { background-size: 200% 200%; animation: gradient-x 4s ease-in-out infinite; }
.animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
*/