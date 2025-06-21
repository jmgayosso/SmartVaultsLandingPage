
import React, { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['hero', 'features', 'collaborative', 'business', 'key-agents', 'faq', 'about'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Features', id: 'features' },
    { name: 'Collaborative', id: 'collaborative' },
    { name: 'Business', id: 'business' },
    { name: 'Key Agents', id: 'key-agents' },
    { name: 'FAQ', id: 'faq' },
    { name: 'About', id: 'about' },
  ];

  const getNavItemClasses = (itemId: string) => {
    const baseClasses = "text-sm font-medium transition-colors";
    const activeClasses = "text-blue-500 border-b-2 border-blue-500 pb-1";
    const inactiveClasses = isScrolled ? 'text-gray-700 hover:text-blue-400' : 'text-white hover:text-blue-400';
    
    return activeSection === itemId 
      ? `${baseClasses} ${activeClasses}`
      : `${baseClasses} ${inactiveClasses}`;
  };

  const getMobileNavItemClasses = (itemId: string) => {
    const baseClasses = "block w-full text-left px-4 py-2 transition-colors";
    const activeClasses = "text-blue-600 bg-blue-50 font-medium";
    const inactiveClasses = "text-gray-700 hover:bg-gray-100";
    
    return activeSection === itemId 
      ? `${baseClasses} ${activeClasses}`
      : `${baseClasses} ${inactiveClasses}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            {/* <Shield className={`w-8 h-8 mr-3 ${isScrolled ? 'text-blue-600' : 'text-blue-400'}`} /> */}
            <img
              src="/public/images/svIcon.svg"
              alt="Smart Vaults Logo"
              className={`w-20 h-20 mr-1 mt-3 ${isScrolled ? 'filter grayscale' : ''}`}
            />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Smart Vaults
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={getNavItemClasses(item.id)}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('key-agents')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Join Waiting List
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={getMobileNavItemClasses(item.id)}
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => scrollToSection('key-agents')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Join Waiting List
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
