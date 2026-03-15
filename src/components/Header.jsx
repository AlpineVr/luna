import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', page: 'Home' },
    { name: 'Projects', page: 'Projects' },
    { name: 'Services', page: 'Services' },
    { name: 'About', page: 'About' },
    { name: 'Contact', page: 'Contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 pt-6 transition-all duration-500">
        <motion.div
          initial={false}
          animate={{
            backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.3 }}
          className={`relative transition-all duration-500 ${
            isScrolled ? 'rounded-2xl border border-white/10 shadow-2xl' : ''
          }`}
        >
          {!isScrolled && (
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none rounded-2xl" />
          )}
          
          <nav className="relative px-6 py-6 flex items-center justify-between">
            {/* Logo - Left */}
            <Link 
              to={createPageUrl('Home')}
              className="flex items-center gap-3 z-10"
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6943951666ddcf725fc087e7/8b7f7f3a2_output-onlinepngtools1.png"
                alt="Darcy Thripp LX"
                className="h-10 w-10 object-contain"
              />
              <span 
                className="text-base md:text-lg tracking-[0.15em] font-light uppercase text-white"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Darcy Thripp LX
              </span>
            </Link>

            {/* Desktop Nav - Right */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
                    currentPageName === link.page 
                      ? 'text-white' 
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white/70 hover:text-white transition-colors z-50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.page}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={createPageUrl(link.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl tracking-[0.2em] uppercase transition-colors duration-300 ${
                      currentPageName === link.page 
                        ? 'text-white' 
                        : 'text-white/50 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}