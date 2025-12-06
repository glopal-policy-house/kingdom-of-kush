import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer({ lang, setLang }){
  const [email, setEmail] = useState('')
  
  const exploreLinks = [
    { label: 'Featured Destinations', href: '/#destinations' },
    { label: 'Events & Festivals', href: '/events' },
    { label: 'Cultural Heritage', href: '/about' },
    { label: 'Visitor Guide', href: '/about' },
    { label: 'Gallery', href: '/about' },
    { label: 'Government', href: '/government' },
    { label: 'Join Us', href: '/join' }
  ]
  
  const serviceLinks = [
    { label: 'Kush Citizenship', href: '/citizenship' },
    { label: 'E-Government Portal', href: '/egov' },
    { label: 'Visa Information', href: '/egov' },
    { label: 'Travel Resources', href: '/about' },
    { label: 'Contact Us', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Investors', href: '/investors' },
    { label: 'Media & News', href: '/media-news' }
  ]
  
  const socialLinks = [
    { icon: '👍', label: 'Facebook', href: '#' },
    { icon: '📷', label: 'Instagram', href: '#' },
    { icon: '𝕏', label: 'Twitter', href: '#' },
    { icon: '💼', label: 'LinkedIn', href: '#' }
  ]

  return (
    <footer className="bg-dark-green text-white-marble w-full">
      {/* Main Footer Grid */}
      <div className="border-b border-white-marble/20">
        <div className="max-w-6xl mx-auto px-lg md:px-2xl lg:px-4xl py-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3xl md:gap-2xl lg:gap-4xl">
            
            {/* Column 1: Brand */}
            <div className="space-y-lg animate-fade-in-up">
              <h3 className="text-display-md font-display font-bold text-white-marble">
                Kingdom of Kush
              </h3>
              <p className="text-body-sm text-white-marble/80">
                The Future of Ancient Kush
              </p>
              
              {/* Social Links */}
              <div className="flex gap-md pt-lg">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    title={social.label}
                    className="text-sand-gold text-2xl hover:text-bronze hover:scale-125 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Column 2: Explore */}
            <div className="space-y-lg animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h4 className="text-body-lg font-display font-bold text-white-marble">
                Explore
              </h4>
              <ul className="space-y-sm">
                {exploreLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-body-sm text-white-marble/80 hover:text-sand-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 3: Services */}
            <div className="space-y-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h4 className="text-body-lg font-display font-bold text-white-marble">
                Services
              </h4>
              <ul className="space-y-sm">
                {serviceLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-body-sm text-white-marble/80 hover:text-sand-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 4: Connect */}
            <div className="space-y-lg animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h4 className="text-body-lg font-display font-bold text-white-marble">
                Connect
              </h4>
              
              {/* Newsletter Signup */}
              <div className="space-y-sm">
                <p className="text-label font-semibold text-sand-gold">
                  Stay Updated
                </p>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent border-b-2 border-sand-gold text-body-sm text-white-marble placeholder-white-marble/60 focus:outline-none focus:border-bronze transition-colors duration-300 pb-sm"
                  />
                  <button
                    onClick={() => setEmail('')}
                    className="ml-md bg-sand-gold text-black-stone px-md py-sm text-label font-semibold hover:bg-sand-gold/90 transition-colors duration-300 rounded-minimal"
                  >
                    →
                  </button>
                </div>
                <p className="text-body-xs text-white-marble/70">
                  Get news, events, and offers
                </p>
              </div>
              
              {/* Language Toggle */}
              <div className="space-y-sm pt-md">
                <p className="text-label font-semibold text-sand-gold">
                  Language
                </p>
                <div className="flex gap-sm">
                  <button
                    onClick={() => setLang('en')}
                    className={`px-md py-sm text-label font-semibold rounded-minimal transition-all duration-300 ${
                      lang === 'en'
                        ? 'bg-sand-gold text-black-stone'
                        : 'border border-sand-gold/50 text-white-marble hover:border-sand-gold'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLang('ar')}
                    className={`px-md py-sm text-label font-semibold rounded-minimal transition-all duration-300 ${
                      lang === 'ar'
                        ? 'bg-sand-gold text-black-stone'
                        : 'border border-sand-gold/50 text-white-marble hover:border-sand-gold'
                    }`}
                  >
                    AR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom - Legal & Attribution */}
      <div className="max-w-6xl mx-auto px-lg md:px-2xl lg:px-4xl py-2xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-lg md:gap-2xl text-body-xs md:text-body-sm">
          {/* Left: Copyright */}
          <p className="text-white-marble/60 text-center md:text-left order-3 md:order-1">
            © 2025 Kingdom of Kush. All rights reserved.
          </p>
          
          {/* Middle: Legal Links */}
          <div className="flex gap-lg md:gap-2xl justify-center text-white-marble/80 order-1 md:order-2">
            <a href="#" className="hover:text-sand-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-white-marble/40">|</span>
            <a href="#" className="hover:text-sand-gold transition-colors duration-300">
              Terms of Service
            </a>
            <span className="text-white-marble/40">|</span>
            <a href="#" className="hover:text-sand-gold transition-colors duration-300">
              Accessibility
            </a>
          </div>
          
          {/* Right: Attribution */}
          <p className="text-white-marble/70 text-center md:text-right order-2 md:order-3">
            Designed for the future. Built with purpose.
          </p>
        </div>
      </div>
    </footer>
  )
}
