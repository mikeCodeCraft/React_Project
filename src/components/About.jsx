// src/components/About.jsx
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img src="/profile.jpg" alt="Michael Barnabas" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full">
                <i className="fas fa-code text-white text-xl"></i>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-6">Who am I?</h3>
            <p className="text-gray-600 mb-6">
              I'm Michael Barnabas, a passionate web developer and Python engineer with over 3 years of experience in building robust, scalable, and user-friendly applications. I specialize in creating modern web applications using cutting-edge technologies.
            </p>
            <p className="text-gray-600 mb-6">
              My journey in tech started in 2022 with HTML and CSS. Since then, I've been learning and growing, mastering various programming languages and frameworks. I love solving complex problems and turning ideas into reality through code.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <i className="fas fa-check-circle text-indigo-500 mr-2"></i>
                <span>Problem Solver</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-indigo-500 mr-2"></i>
                <span>Clean Code Advocate</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-indigo-500 mr-2"></i>
                <span>Team Player</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-indigo-500 mr-2"></i>
                <span>Continuous Learner</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                Download CV
              </a>
              <a href="#projects" className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition">
                My projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;