// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import api from '../api/api';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isAuthenticated = !!localStorage.getItem('access_token');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await api.post('/auth/revoke-token/', {
        token: localStorage.getItem('access_token'),
        client_id: 'M4KPVSbc7K6DH2Kl7V29Y2heIF0tzZuGutGq0kML',
        client_secret: 'zzBIxrpxVVAD7cfpO3x2XAyGeFi9tUJaqgMPd5wEnOXIwX50FsVdIJDAeRfjcXfn23NATEkoBxOYyzpZouLzOeTMonxm7r570TtABVcRf0I0rnXqHVwceGwW6gA3gUVA',
      });
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-text">mikeCodeCraft</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="nav-link px-3 py-2 text-sm font-medium">Home</Link>
              <Link to="/about" className="nav-link px-3 py-2 text-sm font-medium">About</Link>
              <Link to="/skills" className="nav-link px-3 py-2 text-sm font-medium">Skills</Link>
              <Link to="/projects" className="nav-link px-3 py-2 text-sm font-medium">Projects</Link>
              {isAuthenticated ? (
                <>
                  <Link to="/profile" className="nav-link px-3 py-2 text-sm font-medium">Profile</Link>
                  <button onClick={handleLogout} className="nav-link px-3 py-2 text-sm font-medium text-red-600">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="nav-link px-3 py-2 text-sm font-medium">Login</Link>
                  <Link to="/register" className="nav-link px-3 py-2 text-sm font-medium">Register</Link>
                </>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="mobile-menu-button p-2 rounded-md text-gray-700 hover:text-indigo-500 focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg fixed top-16 left-0 w-full z-50`}>
        <div className="px-4 pt-4 pb-2 space-y-2">
          <Link to="/" className="block nav-link px-3 py-2 text-sm font-medium">Home</Link>
          <Link to="/about" className="block nav-link px-3 py-2 text-sm font-medium">About</Link>
          <Link to="/skills" className="block nav-link px-3 py-2 text-sm font-medium">Skills</Link>
          <Link to="/projects" className="block nav-link px-3 py-2 text-sm font-medium text-indigo-600">Projects</Link>
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="block nav-link px-3 py-2 text-sm font-medium">Profile</Link>
              <button onClick={handleLogout} className="block nav-link px-3 py-2 text-sm font-medium text-red-600">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block nav-link px-3 py-2 text-sm font-medium">Login</Link>
              <Link to="/register" className="block nav-link px-3 py-2 text-sm font-medium">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;