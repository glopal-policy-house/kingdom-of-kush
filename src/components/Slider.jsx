import React, { useRef } from 'react'

export default function Slider({ items }){
  const ref = useRef()
  const scroll = (dir) => {
    if(!ref.current) return
    const w = ref.current.clientWidth
    ref.current.scrollBy({ left: dir * w * 0.9, behavior: 'smooth' })
  }
  
  return (
    <div className="relative group">
      {/* Slider Container: Desktop 3-4 visible, Tablet 2, Mobile 1.2 */}
      <div 
        ref={ref} 
        className="flex gap-2xl overflow-x-auto scroll-smooth pb-md snap-x snap-mandatory scrollbar-hide"
      >
        {items.map(i => (
          <div 
            key={i.id}
            className="flex-shrink-0 w-60 md:w-80 lg:w-96 h-96 rounded-lg overflow-hidden bg-white-marble shadow-card hover:shadow-luxury transition-all duration-300 cursor-pointer group/card hover:scale-105"
          >
            {/* Image Section: 240px height */}
            <div className="relative h-60 w-full overflow-hidden bg-gradient-to-br from-sand-gold to-dark-green">
              <img 
                src={i.image} 
                alt={i.title} 
                className="w-full h-full object-cover transition-opacity duration-300 group-hover/card:opacity-90" 
                loading="lazy" 
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black-stone via-transparent to-transparent opacity-30" />
            </div>
            
            {/* Content Section: 180px height, flex-based layout */}
            <div className="p-5 h-36 flex flex-col justify-between">
              {/* Title */}
              <div className="space-y-2">
                <h4 className="text-body-lg font-display font-bold text-dark-green leading-snug line-clamp-2">
                  {i.title}
                </h4>
              </div>
              
              {/* Meta: Date & Location */}
              <div className="text-body-xs text-bronze space-y-1">
                <p className="flex items-center gap-1">
                  <span>📅</span>
                  <span>{i.date}</span>
                </p>
                <p className="flex items-center gap-1">
                  <span>📍</span>
                  <span>{i.location}</span>
                </p>
              </div>
              
              {/* Description */}
              <p className="text-body-sm text-black-stone/70 leading-relaxed line-clamp-2">
                {i.excerpt || 'Experience unforgettable cultural moments'}
              </p>
              
              {/* CTA Button: Hidden by default, visible on hover */}
              <a 
                href="#" 
                className="text-sand-gold font-semibold text-body-sm opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 hover:text-sand-gold/80 text-right"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <button 
        onClick={() => scroll(-1)} 
        className="absolute left-md top-1/2 -translate-y-1/2 z-20 bg-sand-gold/90 text-black-stone p-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-sand-gold shadow-luxury"
        aria-label="Scroll left"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={() => scroll(1)} 
        className="absolute right-md top-1/2 -translate-y-1/2 z-20 bg-sand-gold/90 text-black-stone p-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-sand-gold shadow-luxury"
        aria-label="Scroll right"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
