import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ lang, setLang }){
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full sticky top-0 z-50 bg-black-stone/95 backdrop-blur-md border-b border-sand-gold/20 shadow-luxury">
      <div className="max-w-container mx-auto px-lg md:px-2xl lg:px-4xl py-md md:py-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-display text-display-md text-sand-gold hover:text-sand-gold/80 transition-colors duration-300">
            Kingdom of Kush
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-xl">
            <Link to="/" className="text-body-sm text-white-marble hover:text-sand-gold transition-colors duration-300">Home</Link>
            <Link to="/about" className="text-body-sm text-white-marble hover:text-sand-gold transition-colors duration-300">About</Link>
            <Link to="/citizenship" className="text-body-sm text-white-marble hover:text-sand-gold transition-colors duration-300">Citizenship</Link>
            <Link to="/egov" className="text-body-sm text-white-marble hover:text-sand-gold transition-colors duration-300">E-Gov</Link>
            <Link to="/events" className="text-body-sm text-white-marble hover:text-sand-gold transition-colors duration-300">Events</Link>
            <Link to="/government" className="text-body-sm text-white-marble hover:text-sand-gold transition-colors duration-300">Government</Link>
            <Link to="/join" className="text-body-sm text-white-marble hover:text-sand-gold transition-colors duration-300">Join</Link>
            <Link to="/investors" className="text-body-sm text-white-marble hover:text-sand-gold transition-colors duration-300">Investors</Link>
            <Link to="/media-news" className="text-body-sm text-white-marble hover:text-sand-gold transition-colors duration-300">Media</Link>
            {/* Language Toggle */}
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} 
              className="ml-lg px-md py-xs bg-sand-gold text-black-stone rounded-minimal font-semibold text-label hover:bg-sand-gold/90 transition-all duration-300"
            >
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-md">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} 
              className="px-sm py-xs bg-sand-gold text-black-stone rounded-minimal font-semibold text-label hover:bg-sand-gold/90 transition-all"
            >
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-sand-gold hover:text-white-marble transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-lg space-y-md pt-lg border-t border-sand-gold/20">
            <Link to="/" className="block text-body-sm text-white-marble hover:text-sand-gold transition-colors">Home</Link>
            <Link to="/about" className="block text-body-sm text-white-marble hover:text-sand-gold transition-colors">About</Link>
            <Link to="/citizenship" className="block text-body-sm text-white-marble hover:text-sand-gold transition-colors">Citizenship</Link>
            <Link to="/egov" className="block text-body-sm text-white-marble hover:text-sand-gold transition-colors">E-Gov</Link>
            <Link to="/events" className="block text-body-sm text-white-marble hover:text-sand-gold transition-colors">Events</Link>
            <Link to="/government" className="block text-body-sm text-white-marble hover:text-sand-gold transition-colors">Government</Link>
            <Link to="/join" className="block text-body-sm text-white-marble hover:text-sand-gold transition-colors">Join</Link>
            <Link to="/investors" className="block text-body-sm text-white-marble hover:text-sand-gold transition-colors">Investors</Link>
            <Link to="/media-news" className="block text-body-sm text-white-marble hover:text-sand-gold transition-colors">Media</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
