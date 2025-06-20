// src/components/Skills.jsx
import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Frontend</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span>HTML</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="skill-bar rounded-full h-2" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>CSS</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="skill-bar rounded-full h-2" style={{ width: '90%' }}></div>
                </div>
              </div><div>
                <div className="flex justify-between mb-1">
                  <span>Tailwindcss</span>
                  <span>70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="skill-bar rounded-full h-2" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Javascript</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="skill-bar rounded-full h-2" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Reactjs</span>
                  <span>70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="skill-bar rounded-full h-2" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Backend & Others</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Python</span>
                  <span>92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="skill-bar rounded-full h-2" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Django</span>
                  <span>88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="skill-bar rounded-full h-2" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Database (MySQL)</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="skill-bar rounded-full h-2" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Git & GitHub</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="skill-bar rounded-full h-2" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>PHP | Laravel</span>
                  <span>70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="skill-bar rounded-full h-2" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <div className="text-4xl text-indigo-500 mb-4">
              <i className="fas fa-code"></i>
            </div>
            <h4 className="font-semibold mb-2">Clean Code</h4>
            <p className="text-gray-600 text-sm">Writing maintainable and efficient code</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <div className="text-4xl text-purple-500 mb-4">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h4 className="font-semibold mb-2">Responsive Design</h4>
            <p className="text-gray-600 text-sm">Perfect on all devices</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <div className="text-4xl text-pink-500 mb-4">
              <i className="fas fa-rocket"></i>
            </div>
            <h4 className="font-semibold mb-2">Fast Performance</h4>
            <p className="text-gray-600 text-sm">Optimized for speed</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <div className="text-4xl text-blue-500 mb-4">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h4 className="font-semibold mb-2">Security</h4>
            <p className="text-gray-600 text-sm">Secure applications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;