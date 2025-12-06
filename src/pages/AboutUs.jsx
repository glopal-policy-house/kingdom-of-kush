import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const CounterNumber = ({ finalNumber, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    if (!inView) return

    let start = 0
    const increment = finalNumber / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= finalNumber) {
        setCount(finalNumber)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, finalNumber, duration])

  return <span ref={ref}>{count}+</span>
}

const AboutCard = ({ title, subtitle, content, image, icon, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: 'easeOut' }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, delay: delay + 0.2 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  }

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: { duration: 0.6, delay: delay + custom * 0.1 }
    })
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="group"
    >
      <div
        className="bg-gradient-to-br from-primary/5 to-primary/10 border border-gold/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container with Parallax Effect */}
        <motion.div
          className="relative h-72 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center"
          variants={imageVariants}
          whileHover="hover"
        >
          {/* Background Image with Proper Loading */}
          <img
            src={image}
            alt={title}
            className="absolute w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.target.style.opacity = '0.3'
            }}
          />
          
          {/* Glow Overlay on Hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-sand-gold/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Icon Badge with Spring Animation - Better Positioned */}
          {icon && (
            <motion.div
              className="absolute top-3 right-3 md:top-4 md:right-4 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-3xl md:text-4xl shadow-xl z-10 border-2 border-sand-gold/40"
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: delay + 0.3, type: 'spring', stiffness: 120 }}
            >
              <span className="text-white-marble">{icon}</span>
            </motion.div>
          )}
        </motion.div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-4">
          <motion.h3
            className="text-2xl md:text-3xl font-display font-bold text-primary"
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {title}
          </motion.h3>

          {subtitle && (
            <motion.p
              className="text-body-md text-sand-gold font-semibold"
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            className="space-y-3 text-body-md text-primary/75 leading-relaxed"
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {Array.isArray(content) ? (
              <ul className="space-y-2">
                {content.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-sand-gold font-bold flex-shrink-0 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>{content}</p>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function AboutUs({ lang }){
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.5, triggerOnce: true })

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.1, type: 'spring', stiffness: 100 }
    }
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3 }
    }
  }

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.5 }
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 30px rgba(225, 210, 160, 0.6)',
      transition: { duration: 0.3 }
    }
  }

  const aboutCards = [
    {
      title: 'History of the Kingdom of Kush',
      subtitle: '3,000 Years of Glory',
      icon: '⭐',
      image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&q=80&crop=entropy&cs=tinysrgb',
      content: [
        'One of the world\'s greatest ancient civilizations',
        'Rivaled and sometimes exceeded Egypt in power',
        'Advanced iron-working and trade networks',
        'Home to the iconic pyramids of Meroe and temples of Napata',
        'A 3,000-year unbroken legacy of innovation and culture'
      ]
    },
    {
      title: 'Current Kingdom of Kush',
      subtitle: 'A Modern Nation Rooted in Heritage',
      icon: '🌍',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80&crop=entropy&cs=tinysrgb',
      content: [
        'Constitutional democracy with transparent governance',
        'Population of 15+ million across diverse communities',
        'Strategic Nile Valley location and UNESCO World Heritage Sites',
        'Growing economy: 6-8% annual growth with tech and renewable energy sectors',
        'Regional leader in education, culture, and sustainable development'
      ]
    },
    {
      title: 'Future Kingdom of Kush',
      subtitle: 'Vision 2050: A Continental Beacon',
      icon: '✨',
      image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&q=80&crop=entropy&cs=tinysrgb',
      content: [
        'Top-5 African economy with knowledge-based workforce',
        'Global leader in cultural heritage preservation',
        'Carbon-neutral operations by 2050',
        'Universal education and healthcare access',
        'Center for African excellence, innovation, and diplomatic leadership'
      ]
    },
    {
      title: 'Humanitarian Legacy',
      subtitle: '30 Years of Transforming Lives',
      icon: '🤝',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80&crop=entropy&cs=tinysrgb',
      content: [
        'Three decades investing in orphanages across Africa',
        'Thousands of children empowered through education and care',
        'Alumni now serve as doctors, engineers, teachers, and leaders',
        'Committed to unlocking potential in every child',
        'Building a generation of changemakers and nation-builders'
      ]
    }
  ]

  return (
    <main className="bg-white-marble overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full min-h-screen flex items-center justify-center py-5xl px-container bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-sand-gold/5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-sand-gold/5 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Hero Content */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          className="relative z-10 text-center max-w-4xl mx-auto space-y-6"
        >
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white-marble leading-tight"
          >
            ABOUT US
          </motion.h1>

          <motion.p
            variants={titleVariants}
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            className="text-3xl md:text-4xl font-display font-bold text-sand-gold"
          >
            The Birth of a Nation
          </motion.p>

          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            className="text-lg md:text-xl text-white-marble/90 max-w-2xl mx-auto leading-relaxed"
          >
            From ancient kingdoms to modern vision: the Kingdom of Kush rises as Africa's beacon of excellence, heritage, and boundless possibility.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-6"
          >
            <svg
              className="w-6 h-6 mx-auto text-sand-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== ABOUT CARDS SECTION ===== */}
      <section className="py-5xl md:py-5xl px-container bg-white-marble">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-5xl space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              The Kingdom Unveiled
            </h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">
              Discover the four pillars that define the Kingdom of Kush: our glorious past, dynamic present, ambitious future, and humanitarian heart.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {aboutCards.map((card, idx) => (
              <AboutCard
                key={card.title}
                {...card}
                delay={idx * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIVIDER SECTION ===== */}
      <section className="py-8 md:py-12 px-container bg-gradient-to-r from-primary/5 via-sand-gold/10 to-primary/5 border-y border-gold/20">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-lg md:text-2xl font-display font-bold text-primary italic"
          >
            "Three thousand years of legacy. A modern vision. An infinite future."
          </motion.p>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-5xl md:py-5xl px-container bg-white-marble">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-5xl"
          >
            By The Numbers
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: 3000, label: 'Years of History', icon: '📜' },
              { number: 15, label: 'M Population', icon: '👥' },
              { number: 30, label: 'Years Humanitarian Work', icon: '❤️' },
              { number: 6, label: '% Annual Growth', icon: '📈' }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-gold/20 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                  <CounterNumber finalNumber={stat.number} duration={2} />
                </div>
                <div className="text-body-md text-primary/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-5xl md:py-5xl px-container bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white-marble"
          >
            Join the Kingdom
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-white-marble/90"
          >
            The Kingdom of Kush welcomes visionaries, builders, and changemakers from around the world.
          </motion.p>

          <motion.div
            variants={ctaVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <Link
              to="/citizenship"
              className="inline-block px-8 md:px-12 py-4 bg-sand-gold text-primary font-display font-bold text-lg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Learn More About Citizenship →
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-body-md text-white-marble/70 pt-4"
          >
            Together We Build. Together We Prosper. Together We Rise.
          </motion.p>
        </div>
      </section>
    </main>
  )
}
