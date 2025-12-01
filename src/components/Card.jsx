import React from 'react'

export default function Card({ item }){
  return (
    <article className="relative rounded-lg overflow-hidden bg-white-marble group transition-all duration-400 ease-out hover:shadow-luxury hover:scale-105 md:hover:-translate-y-2">
      {/* Image Container - Aspect Ratio 16/12 (4:3) */}
      <div className="relative w-full aspect-video md:aspect-[4/3] overflow-hidden bg-black-stone/10">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-75" 
          loading="lazy"
        />
        
        {/* Gradient Overlay - Default opacity 0.4, hover 0.6 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black-stone via-black-stone/30 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
        
        {/* Text Content - Positioned at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-lg md:p-2xl space-y-md z-10">
          {/* Destination Title - 32px mobile, Display M desktop */}
          <h3 className="text-[32px] md:text-display-md font-display font-bold text-sand-gold drop-shadow-lg leading-tight">
            {item.title}
          </h3>
          
          {/* Subtitle/Category - Body S (14px) */}
          <p className="text-label text-white-marble/80 drop-shadow-md">
            {item.excerpt}
          </p>
        </div>
        
        {/* Learn More Link - Hidden by default, shown on hover */}
        <div className="absolute bottom-lg right-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <span className="text-label font-semibold text-sand-gold drop-shadow-lg">Explore →</span>
        </div>
      </div>
    </article>
  )
}
