// src/components/Navbar.jsx
import React, { useState, useEffect, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
  const isAuthenticated = !!localStorage.getItem('access_token');
  const menuRef = useRef();
  const buttonRef = useRef();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await api.post('/auth/revoke-token/', { token, client_id, client_secret });
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      navigate('/login');
    }
  };

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        closeMobileMenu();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Close menu on outside click/touch
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        closeMobileMenu();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  // Smooth scrolling for anchor links
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMobileMenu();
    if (window.location.pathname !== '/') {
      navigate(`/#${targetId}`);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-text"><a href="/"> mikeCodeCraft</a></span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="nav-link px-3 py-2 text-sm font-medium text-gray-700">
                Home
              </a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="nav-link px-3 py-2 text-sm font-medium text-gray-700">
                About
              </a>
              <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="nav-link px-3 py-2 text-sm font-medium text-gray-700">
                Skills
              </a>
              <Link to="/projects" className="nav-link px-3 py-2 text-sm font-medium text-indigo-600">
                Projects
              </Link>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="nav-link px-3 py-2 text-sm font-medium text-gray-700">
                Contact
              </a>
              {isAuthenticated ? (
                <>
                  <Link to="/profile" className="nav-link px-3 py-2 text-sm font-medium text-gray-700">
                    Profile
                  </Link>
                  <button onClick={handleLogout} className="nav-link px-3 py-2 text-sm font-medium text-red-600">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="nav-link px-3 py-2 text-sm font-medium text-gray-700">
                    Login
                  </Link>
                  <Link to="/register" className="nav-link px-3 py-2 text-sm font-medium text-gray-700">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              ref={buttonRef}
              onClick={toggleMobileMenu}
              className="mobile-menu-button p-2 rounded-md text-gray-700 hover:text-indigo-500 focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        ref={menuRef}
        className={`mobile-menu ${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg fixed top-16 left-0 w-full z-50`}
      >
        <div className="px-4 pt-4 pb-2 space-y-2">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="block nav-link px-3 py-2 text-sm font-medium text-gray-700"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="block nav-link px-3 py-2 text-sm font-medium text-gray-700"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => handleNavClick(e, 'skills')}
            className="block nav-link px-3 py-2 text-sm font-medium text-gray-700"
          >
            Skills
          </a>
          <Link to="/projects" onClick={closeMobileMenu} className="block nav-link px-3 py-2 text-sm font-medium text-indigo-600">
            Projects
          </Link>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="block nav-link px-3 py-2 text-sm font-medium text-gray-700"
          >
            Contact
          </a>
          {isAuthenticated ? (
            <>
              <Link to="/profile" onClick={closeMobileMenu} className="block nav-link px-3 py-2 text-sm font-medium text-gray-700">
                Profile
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  closeMobileMenu();
                }}
                className="block nav-link px-3 py-2 text-sm font-medium text-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={closeMobileMenu} className="block nav-link px-3 py-2 text-sm font-medium text-gray-700">
                Login
              </Link>
              <Link to="/register" onClick={closeMobileMenu} className="block nav-link px-3 py-2 text-sm font-medium text-gray-700">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;