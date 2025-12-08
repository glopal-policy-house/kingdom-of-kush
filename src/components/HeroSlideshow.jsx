import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * HeroSlideshow Component - Redesigned
 * Background: Rotating image slideshow (no text overlay animation)
 * Foreground: Static hero text, CTA, and social icons (fade-in on load only)
 * Design: Premium gold accents, smooth transitions, professional spacing
 */
const HeroSlideshow = ({ 
  title = "Experience the Future of the Ancient Kingdom of Kush",
  subtitle = "Where Nubian heritage meets a bold, sustainable future — spanning Sudan and Egypt.",
  ctaText = "Explore Kingdom",
  ctaLink = "#destinations"
}) => {
  // Hero images from assets folder
  const heroImages = [
    '/assets/images/photo_2025-12-02_05-29-14.jpg',
    '/assets/images/photo_2025-12-02_05-30-59.jpg',
    '/assets/images/photo_2025-12-02_05-31-44.jpg',
  ];

  // State management
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [direction, setDirection] = useState(0);

  // Auto-rotate slideshow every 6 seconds
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay, heroImages.length]);

  // Handle previous image
  const handlePrevious = () => {
    setDirection(-1);
    setIsAutoPlay(false);
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  // Handle next image
  const handleNext = () => {
    setDirection(1);
    setIsAutoPlay(false);
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  // Resume autoplay after manual control
  useEffect(() => {
    if (!isAutoPlay) {
      const timer = setTimeout(() => setIsAutoPlay(true), 10000);
      return () => clearTimeout(timer);
    }
  }, [isAutoPlay]);

  // ===== MOTION VARIANTS =====
  // Slideshow image fade transition (background only)
  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
    }),
    center: {
      opacity: 1,
    },
    exit: (dir) => ({
      opacity: 0,
    }),
  };

  // Text container - fade in on load only (NOT during slideshow)
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Individual text items - slide up on load only
  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Arrow button hover variants
  const arrowVariants = {
    hover: {
      backgroundColor: 'rgba(212, 175, 55, 0.3)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0B3D2E]">
      {/* ===== BACKGROUND SLIDESHOW (z-10) ===== */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentImageIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full z-10"
        >
          <img
            src={heroImages[currentImageIndex]}
            alt={`Hero slide ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1920x1080?text=Kingdom+of+Kush';
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/45 transition-colors duration-300" />
        </motion.div>
      </AnimatePresence>

      {/* ===== STATIC FOREGROUND CONTENT (z-30) ===== */}
      {/* Text Content - Centered, animates only on load, stays static during slideshow */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-30 pointer-events-none"
        variants={textContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl text-center space-y-6">
          {/* Main Title */}
          <motion.h1
            variants={textItemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight drop-shadow-lg"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={textItemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-gray-50 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons - Static after load */}
          <motion.div variants={textItemVariants} className="pt-6 pointer-events-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* Explore Kingdom Button */}
              <motion.a
                href={ctaLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#D4AF37] to-[#f0d54f] text-[#0B3D2E] font-bold rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {ctaText}
              </motion.a>
              
              {/* Chat With Us Button */}
              <motion.a
                href="https://twilight-guide-bot.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#D4AF37] to-[#f0d54f] text-[#0B3D2E] font-bold rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Chat With Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ===== NAVIGATION ARROWS (z-20) ===== */}
      {/* Left Arrow - Positioned to avoid social icons (min 24px gap) */}
      <motion.button
        onClick={handlePrevious}
        variants={arrowVariants}
        whileHover="hover"
        className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:text-[#D4AF37] transition-colors duration-300 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="sm:w-8 sm:h-8 drop-shadow-lg" />
      </motion.button>

      {/* Right Arrow - Positioned to avoid social icons (min 24px gap) */}
      <motion.button
        onClick={handleNext}
        variants={arrowVariants}
        whileHover="hover"
        className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:text-[#D4AF37] transition-colors duration-300 z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="sm:w-8 sm:h-8 drop-shadow-lg" />
      </motion.button>

      {/* ===== SLIDE INDICATORS (z-20) ===== */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => {
              setDirection(idx > currentImageIndex ? 1 : -1);
              setCurrentImageIndex(idx);
              setIsAutoPlay(false);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentImageIndex
                ? 'bg-[#D4AF37] w-8'
                : 'bg-white/50 w-2 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;

