import React from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Slider from '../components/Slider'
import { destinations, events, locales } from '../data/data'
import { Link } from 'react-router-dom'

export default function Home({ lang }){
  const t = locales[lang]
  
  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <Hero 
        title={t.heroTitle} 
        subtitle={t.heroSubtitle} 
        ctaLeft={t.explore} 
        ctaRight={t.plan} 
        mediaUrl={destinations[0].image}
        ctaLeftLink="#destinations"
        ctaRightLink="#citizenship"
      />

      {/* ===== FEATURED DESTINATIONS ===== */}
      <section id="destinations" className="py-section px-container">
        <div className="max-w-container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-3xl md:mb-5xl space-y-md">
            <h2 className="text-display-md md:text-display-lg font-display font-bold text-dark-green">
              Discover Ancient & Future Kush
            </h2>
            <p className="text-body-md md:text-body-lg text-black-stone/70 max-w-2xl mx-auto">
              Explore four iconic destinations spanning the Kingdom of Kush across Sudan and Egypt.
            </p>
          </div>
          
          {/* Grid: 1 column (mobile), 2 columns (tablet), 4 columns (desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md sm:gap-lg lg:gap-2xl">
            {destinations.map((d, idx) => (
              <div key={d.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <Card item={d} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY KUSH SECTION ===== */}
      <section className="py-4xl md:py-5xl px-container bg-white-marble border-y border-sand-gold/10">
        <div className="max-w-container mx-auto">
          {/* Section Header - Centered */}
          <div className="text-center mb-3xl md:mb-5xl">
            <h2 className="text-display-md md:text-display-lg font-display font-bold text-dark-green">
              Why Choose Kingdom of Kush
            </h2>
          </div>
          
          {/* Grid: 1 column (mobile), 2 columns (tablet), 4 columns (desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg md:gap-2xl">
            {[
              { title: 'Cultural Heritage', icon: '👑', desc: 'Explore 3,000 years of Nubian civilization through temples, artifacts, and living traditions' },
              { title: 'Nile Experience', icon: '🌊', desc: 'Journey along the legendary Nile Valley, witnessing ancient landscapes untouched by time' },
              { title: 'Future Tourism', icon: '✨', desc: 'Be part of a new era: innovative infrastructure, digital services, and visionary governance' },
              { title: 'Ancient Architecture', icon: '🏛️', desc: 'Witness pyramids, temples, and fortresses—architectural marvels of the ancient world' }
            ].map((item, idx) => (
              <div 
                key={item.title}
                className="text-center space-y-md animate-scale-in hover:-translate-y-1 transition-transform duration-300"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {/* Icon Container: 80x80px with gradient background */}
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center bg-gradient-to-br from-sand-gold to-bronze group hover:from-sand-gold/80 hover:to-bronze/80 transition-all duration-300">
                  <span className="text-4xl text-white-marble">{item.icon}</span>
                </div>
                
                {/* Title */}
                <h4 className="text-body-lg font-display font-bold text-dark-green leading-tight">
                  {item.title}
                </h4>
                
                {/* Description */}
                <p className="text-body-md text-black-stone/70 leading-relaxed max-w-sm mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== UPCOMING EVENTS ===== */}
      <section className="py-4xl md:py-5xl px-container bg-dark-green/10">
        <div className="max-w-container mx-auto space-y-4xl">
          {/* Section Header */}
          <div className="space-y-md">
            <h2 className="text-display-md md:text-display-lg font-display font-bold text-dark-green">
              Upcoming Cultural Events
            </h2>
            <p className="text-body-md md:text-body-lg text-black-stone/70 max-w-2xl">
              Join our cultural celebrations and immersive experiences.
            </p>
          </div>
          <Slider items={events} />
        </div>
      </section>

      {/* ===== CITIZENSHIP PREVIEW ===== */}
      <section id="citizenship" className="w-full bg-white-marble py-5xl md:py-5xl px-container">
        <div className="max-w-5xl mx-auto">
          {/* Flex Layout: 2 columns desktop, column mobile/tablet */}
          <div className="flex flex-col lg:flex-row gap-4xl lg:gap-5xl items-center">
            {/* Left Column: Text Content */}
            <div className="flex-1 animate-fade-in-up">
              {/* Section Label */}
              <div className="text-label font-semibold text-sand-gold uppercase mb-md tracking-wide">
                Become a Kush Citizen
              </div>
              
              {/* Title */}
              <h2 className="text-display-md md:text-display-md lg:text-display-lg font-display font-bold text-dark-green mb-lg">
                Join the Future of Kush
              </h2>
              
              {/* Description */}
              <p className="text-body-md md:text-body-lg text-black-stone/80 leading-relaxed mb-3xl max-w-2xl">
                Become part of a thriving global community celebrating Nubian heritage, culture, and sustainable development. Access exclusive benefits, from cultural events to digital governance and investment opportunities.
              </p>
              
              {/* Key Benefits - Bulleted List */}
              <div className="space-y-md mb-3xl">
                {[
                  'Cultural belonging & heritage rights',
                  'Digital governance access',
                  'Exclusive events & experiences',
                  'Investment opportunities',
                  'Voting rights in future decisions'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-md animate-slide-in-left" style={{ animationDelay: `${idx * 60}ms` }}>
                    <span className="text-sand-gold text-xl flex-shrink-0 mt-1">✓</span>
                    <p className="text-body-sm md:text-body-md text-black-stone/80 leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <Link 
                to="/citizenship"
                className="inline-block px-2xl py-md rounded-sm bg-sand-gold text-black-stone font-semibold text-body-md hover:bg-sand-gold/90 transition-colors duration-300 shadow-card hover:shadow-luxury"
              >
                Explore Citizenship →
              </Link>
            </div>
            
            {/* Right Column: Visual Block */}
            <div className="flex-1 w-full animate-scale-in">
              <div className="bg-gradient-to-br from-sand-gold to-bronze rounded-2xl p-4xl overflow-hidden relative h-80 md:h-96 lg:h-96 flex items-center justify-center shadow-luxury">
                {/* Background decorative shapes */}
                <div className="absolute top--10 right--10 w-40 h-40 border-2 border-sand-gold/30 rounded-full"></div>
                <div className="absolute bottom--5 left--5 w-32 h-32 border-2 border-bronze/30 rounded-lg"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center space-y-lg">
                  <div className="text-8xl animate-bounce" style={{ animationDuration: '3s' }}>
                    👑
                  </div>
                  <h3 className="text-display-md md:text-display-lg font-display font-bold text-white-marble leading-tight">
                    Citizenship Awaits
                  </h3>
                  <p className="text-body-md text-white-marble/90 max-w-xs mx-auto">
                    Join a legacy 3,000 years in the making
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== E-GOVERNMENT SERVICES ===== */}
      <section className="w-full bg-sand-gold/5 py-5xl md:py-5xl px-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-4xl text-center">
            {/* Section Label */}
            <div className="text-label font-semibold text-dark-green uppercase mb-md tracking-wide">
              Government Services
            </div>
            
            {/* Title */}
            <h2 className="text-display-md md:text-display-lg font-display font-bold text-dark-green mb-md">
              Digital Governance for Citizens & Visitors
            </h2>
            
            {/* Subtext */}
            <p className="text-body-md md:text-body-lg text-black-stone/70 max-w-2xl mx-auto">
              Seamless, modern services for permits, visas, and official documentation
            </p>
          </div>
          
          {/* Service Cards Grid: 4 desktop, 2 tablet, 1 mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg md:gap-2xl">
            {[
              { title: 'Visa & Entry', icon: '🛂', desc: 'Apply for cultural and tourist visas instantly' },
              { title: 'Documentation', icon: '📜', desc: 'Official document authentication across borders' },
              { title: 'Civil Services', icon: '🧾', desc: 'Birth, marriage, and identification documents' },
              { title: 'Permits & Licenses', icon: '⚖️', desc: 'Business and cultural event permits' },
              { title: 'Authentication', icon: '✅', desc: 'Verify credentials and certifications' },
              { title: 'Support Center', icon: '💬', desc: 'Live chat and multilingual assistance' }
            ].map((service, idx) => (
              <div
                key={service.title}
                className="bg-white-marble border border-bronze/20 p-2xl rounded-lg text-center cursor-pointer transition-all duration-300 hover:border-sand-gold hover:shadow-card animate-fade-in-up group"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {/* Icon Container: 60x60px with gradient */}
                <div className="w-15 h-15 mx-auto mb-md rounded-lg bg-gradient-to-br from-sand-gold to-bronze flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white-marble">{service.icon}</span>
                </div>
                
                {/* Service Title */}
                <h4 className="text-body-lg font-display font-bold text-dark-green mb-sm">
                  {service.title}
                </h4>
                
                {/* Description */}
                <p className="text-body-sm text-black-stone/70 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-4xl">
            <Link 
              to="/egov"
              className="inline-block px-2xl py-md rounded-sm bg-dark-green text-white-marble font-semibold text-body-md hover:bg-dark-green/90 transition-colors duration-300 shadow-card hover:shadow-luxury"
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
