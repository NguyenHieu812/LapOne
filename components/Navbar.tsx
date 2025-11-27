// Navbar.tsx (Đã được chỉnh sửa)
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Menu, X, Sun, Moon } from 'lucide-react';
import Button from './ui/Button';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Models', href: '#products' },
    { name: 'Why LapOne', href: '#features' },
    { name: 'Support', href: '#footer' },
  ];

  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-slate-400 hover:text-emerald-400 transition-colors bg-slate-800 md:bg-transparent"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </motion.div>
      </AnimatePresence>
    </button>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'nav-scrolled' : 'nav-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Laptop className="w-8 h-8 text-emerald-500" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary">
            LapOne
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-nav-link hover:text-emerald-400 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
          {/* Cập nhật: Nút Get Started cho Desktop */}
          <a
            href="https://zalo.me/0823456232"
            target="_blank" // Mở trong tab mới
            rel="noopener noreferrer" // Bảo mật
          >
            <Button variant="primary" size="sm">Get Started</Button>
          </a>
        </div>

        {/* Mobile Toggle & Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-nav-link p-2"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mobile-menu-bg border-b border-border-color overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-nav-link-mobile hover:text-emerald-400 block px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              {/* Cập nhật: Nút Get Started cho Mobile */}
              <a
                href="https://zalo.me/0823456232"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)} // Đóng menu khi click
              >
                <Button className="w-full">Get Started</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
