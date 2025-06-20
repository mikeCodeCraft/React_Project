import React from 'react';

const services = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Frontend Development',
    description: 'Building interactive and responsive user interfaces with React.js and JavaScript.'
  },
  {
    icon: 'fas fa-server',
    title: 'Backend Development',
    description: 'Developing robust server-side applications using Python [Django] PHP [Laravel].'
  },
  {
    icon: 'fas fa-layer-group',
    title: 'Fullstack Solutions',
    description: 'End-to-end web solutions combining frontend and backend technologies for seamless experiences.'
  },
  {
    icon: 'fas fa-database',
    title: 'Database Management',
    description: 'Designing and managing databases with MySQL and PostgreSQL for scalable applications.'
  },
  {
    icon: 'fas fa-code',
    title: 'API Development & Integration',
    description: 'Creating and integrating RESTful APIs for modern web and mobile applications.'
  },
  {
    icon: 'fas fa-robot',
    title: 'Automation & Scripting',
    description: 'Python scripts and automation tools to boost productivity and streamline workflows.'
  },

  {
    icon: 'fas fa-cloud',
    title: 'Cloud Solutions',
    description: 'we deploy and manage your apps on modern cloud platforms.'
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Security & Performance Optimization',
    description: 'Ensuring application security and optimizing performance for a better user experience.'
  }

];

const Services = () => (
  <section id="services" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-4 text-indigo-700">My Services</h2>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        I offer a range of services to help you build, launch, and grow your digital presence.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <div className="flex justify-center mb-4">
              <span className="text-indigo-600 text-4xl">
                <i className={service.icon}></i>
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
