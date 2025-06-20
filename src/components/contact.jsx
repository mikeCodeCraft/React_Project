import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(false);
    setError(null);
    emailjs.sendForm('service_83ir3uj', 'template_icvor7j', form.current, 'y8mrEI2k7d3KBB-U8')
      .then(
        (result) => {
          setSent(true);
        },
        (error) => {
          setError('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
        <div className="md:flex">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out through any of the channels below.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">Uyo, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">mikecodecraft@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Phone</h4>
                  <p className="text-gray-600">+234 706 240 1262</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4 text-gray-800">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition duration-300">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition duration-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition duration-300">
                  <i className="fab fa-medium"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" name="user_name" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="mike okon" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" name="user_email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="mike@example.com" required />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" name="subject" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Project Inquiry" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" id="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your message here..." required></textarea>
              </div>
              <div>
                <button type="submit" className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300">
                  Send Message
                </button>
              </div>
              {sent && <p className="text-green-600">Message sent successfully!</p>}
              {error && <p className="text-red-600">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;