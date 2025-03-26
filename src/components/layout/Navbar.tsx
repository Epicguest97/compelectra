
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isLoggedIn = false; // To be replaced with auth state

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              TenderLink
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : 'text-foreground/70'}`}>
              Home
            </Link>
            <Link to="/how-it-works" className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/how-it-works' ? 'text-primary' : 'text-foreground/70'}`}>
              How It Works
            </Link>
            <div className="relative group">
              <button className="flex items-center text-sm font-medium transition-colors hover:text-primary text-foreground/70 focus:outline-none">
                Solutions <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-1 rounded-md bg-white/90 backdrop-blur-md shadow-sm border border-border">
                  <Link to="/for-buyers" className="block px-4 py-2 text-sm text-foreground/70 hover:bg-primary/5 hover:text-primary">
                    For Buyers
                  </Link>
                  <Link to="/for-sellers" className="block px-4 py-2 text-sm text-foreground/70 hover:bg-primary/5 hover:text-primary">
                    For Sellers
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/pricing" className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/pricing' ? 'text-primary' : 'text-foreground/70'}`}>
              Pricing
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {isLoggedIn ? (
              <Link to="/dashboard">
                <Button variant="default" size="sm">Dashboard</Button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="default" size="sm">Register</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/70 hover:text-primary focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-sm"
          >
            <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
              <Link to="/" className={`block py-2 text-base font-medium transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : 'text-foreground/70'}`}>
                Home
              </Link>
              <Link to="/how-it-works" className={`block py-2 text-base font-medium transition-colors hover:text-primary ${location.pathname === '/how-it-works' ? 'text-primary' : 'text-foreground/70'}`}>
                How It Works
              </Link>
              <Link to="/for-buyers" className={`block py-2 text-base font-medium transition-colors hover:text-primary ${location.pathname === '/for-buyers' ? 'text-primary' : 'text-foreground/70'}`}>
                For Buyers
              </Link>
              <Link to="/for-sellers" className={`block py-2 text-base font-medium transition-colors hover:text-primary ${location.pathname === '/for-sellers' ? 'text-primary' : 'text-foreground/70'}`}>
                For Sellers
              </Link>
              <Link to="/pricing" className={`block py-2 text-base font-medium transition-colors hover:text-primary ${location.pathname === '/pricing' ? 'text-primary' : 'text-foreground/70'}`}>
                Pricing
              </Link>
              <div className="pt-2 flex flex-col space-y-2">
                {isLoggedIn ? (
                  <Link to="/dashboard">
                    <Button className="w-full" variant="default">Dashboard</Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/login">
                      <Button className="w-full" variant="outline">Login</Button>
                    </Link>
                    <Link to="/register">
                      <Button className="w-full" variant="default">Register</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
