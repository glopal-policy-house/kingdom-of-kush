import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { t, i18n, ready } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  // Desktop navigation items (main items only)
  const desktopNavItems = useMemo(() => {
    if (!ready) return [];
    return [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Government', path: '/government' },
      { label: 'Citizenship', path: '/citizenship' },
      { label: 'Events', path: '/events' },
      { label: 'Media', path: '/media' },
    ];
  }, [ready]);

  // All navigation items for mobile dropdown
  const allNavItems = useMemo(() => {
    if (!ready) return [];
    return [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Government', path: '/government' },
      { label: 'Citizenship', path: '/citizenship' },
      { label: 'Events', path: '/events' },
      { label: 'E-Gov', path: '/egov' },
      { label: 'Investors', path: '/investors' },
      { label: 'Media', path: '/media' },
    ];
  }, [ready]);

  // Services dropdown items (E-Gov, Investors, Join)
  const servicesItems = [
    { label: 'E-Gov', path: '/egov' },
    { label: 'Investors', path: '/investors' },
    { label: 'Join', path: '/join' },
  ];

  // Social media links with brand colors
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#facebook', color: '#1877F2' },
    { icon: Instagram, label: 'Instagram', href: '#instagram', color: '#E4405F' },
    { icon: Twitter, label: 'X', href: '#twitter', color: '#000000' },
    { icon: Linkedin, label: 'LinkedIn', href: '#linkedin', color: '#0A66C2' }
  ];

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    setLangMenuOpen(false);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0B3D2E] to-[#D4AF37] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="hidden sm:inline font-bold text-[#0B3D2E] text-lg">Kingdom</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 items-center">
            {desktopNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-[#D4AF37] bg-[#0B3D2E] bg-opacity-5'
                    : 'text-gray-700 hover:text-[#0B3D2E]'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Services Hamburger Menu */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                title="Services"
              >
                <Menu size={20} className="text-[#0B3D2E]" />
              </button>

              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-40"
                >
                  {servicesItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setServicesDropdownOpen(false)}
                      className={`block px-4 py-2 text-sm font-medium transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        isActive(item.path)
                          ? 'text-[#D4AF37] bg-[#0B3D2E] bg-opacity-5'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-[#0B3D2E]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {/* Social Media Icons - Desktop Only */}
            <div className="hidden lg:flex items-center space-x-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon size={18} style={{ color: social.color }} />
                  </a>
                );
              })}
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Globe size={18} />
                <span className="text-sm font-medium hidden sm:inline">{i18n.language.toUpperCase()}</span>
              </button>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-lg shadow-lg z-40"
                >
                  <button
                    onClick={() => toggleLanguage('en')}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-t-lg ${
                      i18n.language === 'en' ? 'text-[#D4AF37] font-bold' : 'text-gray-700'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => toggleLanguage('ar')}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 border-t border-gray-200 rounded-b-lg ${
                      i18n.language === 'ar' ? 'text-[#D4AF37] font-bold' : 'text-gray-700'
                    }`}
                  >
                    العربية
                  </button>
                </motion.div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {allNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-[#D4AF37] bg-[#0B3D2E] bg-opacity-5'
                      : 'text-gray-700 hover:text-[#0B3D2E]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Social Media Icons - Mobile */}
              <div className="flex items-center space-x-2 px-3 py-3 border-t border-gray-200 mt-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      aria-label={social.label}
                      title={social.label}
                    >
                      <Icon size={18} style={{ color: social.color }} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
