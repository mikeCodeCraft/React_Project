// src/components/Projects.jsx
import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Typing Game',
    image: '/keyboard.jpg',
    description: 'A desktop application that tests and improves your typing speed with programming terminology',
    tags: ['Python'],
    type: 'Python Project',
    detailsLink: 'typing_game.html',
    codeLink: 'https://github.com/mikeCodeCraft/Python_Mini_Projects/blob/main/typingGame.py',
  },
  {
    title: 'Weather Checker App',
    image: '/weather.jpg',
    description: 'A Python application that fetches and displays real-time weather data for any city worldwide',
    tags: ['Python'],
    type: 'Python',
    detailsLink: 'weather_checker.html',
    codeLink: 'https://github.com/mikeCodeCraft/Python_Mini_Projects/blob/main/api_weather.py',
  },
  {
    title: 'File Organizer',
    image: '/file_org.jpg',
    description: 'A desktop application that automatically organizes files into categorized folders with undo functionality',
    tags: ['Python'],
    type: 'AI',
    detailsLink: 'File_organizer.html',
    codeLink: 'https://github.com/mikeCodeCraft/Python_Mini_Projects/tree/main/file-orgs',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover transition duration-500">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className={`bg-${project.type.toLowerCase()}-100 text-${project.type.toLowerCase()}-800 text-xs px-2 py-1 rounded-full`}>{project.type}</span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 px-2 py-1 text-xs rounded">{tag}</span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a href={project.detailsLink} className="text-indigo-600 hover:text-indigo-800">
                    <i className="fas fa-external-link-alt"></i> Details
                  </a>
                  <a href={project.codeLink} className="text-gray-600 hover:text-gray-800">
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="projects.html" className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-600 hover:text-white transition">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;