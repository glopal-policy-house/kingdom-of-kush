import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

const CitizenshipCard = ({ number, title, description, image, delay }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      className="h-72 cursor-pointer perspective"
    >
      <motion.div
        className="w-full h-full bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 flex flex-col items-center justify-between text-center shadow-lg relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* front */}
        <div className="space-y-4" style={{ backfaceVisibility: 'hidden' }}>
          {image && (
            <img src={image} alt={`${title} doc`} className="w-20 h-20 mx-auto rounded-md object-cover shadow-md" />
          )}
          <div className="text-4xl font-display font-bold text-sand-gold">{number}</div>
          <h3 className="text-xl md:text-2xl font-display font-bold text-white-marble">{title}</h3>
        </div>

        {/* back */}
        <div className="space-y-4 absolute inset-0 p-6 flex items-center justify-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <p className="text-white-marble/90 text-sm leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

const PassportCard = ({ delay }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative h-96 group"
    >
      <motion.div
        className="w-full h-full bg-gradient-to-br from-sand-gold to-sand-gold/70 rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg overflow-hidden"
        whileHover={{ scale: 1.05, rotateX: 15, rotateY: -15 }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <div className="relative z-10 text-center space-y-6">
          <img src="https://images.unsplash.com/photo-1608656521055-971c0b00ef46?w=120&h=120&fit=crop" alt="Passport" className="w-24 h-24 mx-auto rounded-lg shadow-lg" />
          <div>
            <h3 className="text-3xl font-display font-bold text-primary mb-2">Kush Passport</h3>
            <p className="text-primary/80">Your key to global mobility</p>
          </div>
          <p className="text-sm text-primary/70 max-w-xs">
            Access 150+ countries with preferred visa waiver agreements
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

const InvestmentCard = ({ tier, amount, benefits, image, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -10 }}
      className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-2xl p-8 min-w-80 shadow-lg"
    >
      <div className="space-y-4">
        {/* top image */}
        {image && (
          <div className="w-full h-40 rounded-lg overflow-hidden mb-2">
            <img src={image} alt={tier} className="w-full h-full object-cover" />
          </div>
        )}
        <h3 className="text-2xl font-display font-bold text-primary">{tier}</h3>
        <div className="text-4xl font-display font-bold text-sand-gold">${amount}K</div>
        <p className="text-primary/70 text-sm">Minimum investment</p>

        <div className="space-y-3 pt-4 border-t border-primary/20">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: delay + idx * 0.1 }}
              className="flex gap-2 items-center text-primary/80 text-sm"
            >
              <span className="text-sand-gold">✓</span>
              <span>{benefit}</span>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-4 px-4 py-3 bg-primary text-white-marble font-display font-bold rounded-lg"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function Citizenship() {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.5, triggerOnce: true })

  const steps = [
    { number: '01', title: 'Apply', description: 'Submit your application online with required documents', image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop' },
    { number: '02', title: 'Review', description: 'Our team verifies your information and background', image: 'https://images.unsplash.com/photo-1532619675605-9f9a4d9b6d3b?w=400&h=400&fit=crop' },
    { number: '03', title: 'Approve', description: 'Receive approval and citizenship certificate', image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&h=400&fit=crop' },
    { number: '04', title: 'Celebrate', description: 'Welcome to the Kingdom of Kush!', image: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=400&h=400&fit=crop' }
  ]

  const investments = [
    {
      tier: 'Entrepreneur',
      amount: 50,
      benefits: ['Residency', 'Business License', 'Tax Benefits', 'Visa-Free Travel'],
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop'
    },
    {
      tier: 'Investor',
      amount: 250,
      benefits: ['Full Citizenship', 'Property Rights', 'Investment Portfolio', 'VIP Status'],
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop'
    },
    {
      tier: 'Major Contributor',
      amount: 1000,
      benefits: ['Lifetime Citizenship', 'Diplomatic Privileges', 'Board Opportunities', 'Legacy Planning'],
      image: 'https://images.unsplash.com/photo-1491895200222-0fc4a92a6c63?w=800&h=600&fit=crop'
    }
  ]

  const youthPrograms = [
    { icon: 'https://images.unsplash.com/photo-1543269865-cbdf26effbad?w=200&h=200&fit=crop', title: 'Education Track', description: 'Scholarships for African students' },
    { icon: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop', title: 'Career Path', description: 'Professional development programs' },
    { icon: 'https://images.unsplash.com/photo-1516534775068-bb57e39c0ae0?w=200&h=200&fit=crop', title: 'Innovation Hub', description: 'Tech entrepreneurship support' },
    { icon: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop', title: 'Global Network', description: 'Connect with peers worldwide' },
    { icon: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop', title: 'Leadership', description: 'Executive training programs' },
    { icon: 'https://images.unsplash.com/photo-1516534775068-bb57e39c0ae0?w=200&h=200&fit=crop', title: 'Mentorship', description: 'One-on-one guidance from experts' }
  ]

  return (
    <main className="bg-white-marble overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center py-5xl px-container overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1577720643272-265b87dd0ca1?w=1200&h=600&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-primary/50" />

        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto space-y-8"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sand-gold font-semibold text-lg tracking-widest uppercase"
          >
            Pathways to Belonging
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white-marble leading-tight"
          >
            Citizenship Programs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl font-display text-sand-gold"
          >
            Join a Nation of Opportunity
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white-marble/90 max-w-2xl mx-auto"
          >
            Become a citizen of the Kingdom of Kush and access unparalleled opportunities for growth, innovation, and prosperity.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-sand-gold text-primary font-display font-bold text-lg rounded-lg shadow-lg inline-block"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </section>

      {/* ===== STEPS TO OBTAIN CITIZENSHIP ===== */}
      <section className="py-5xl px-container bg-white-marble">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-primary text-center mb-5xl"
          >
            Steps to Obtain Citizenship
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <CitizenshipCard key={idx} {...step} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== KUSH PASSPORT ===== */}
      <section className="py-5xl px-container bg-gradient-to-b from-primary/5 to-white-marble">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-primary text-center mb-5xl"
          >
            The Kush Passport
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <PassportCard delay={0} />

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-primary/80 leading-relaxed">
                The Kush passport is more than a travel document—it's a symbol of your connection to one of Africa's most dynamic nations.
              </p>

              <div className="space-y-4">
                {['Access to 150+ countries', 'Visa waiver agreements', 'Priority processing', 'Lifetime renewal benefits', 'Digital & physical copies'].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3 items-center"
                  >
                    <span className="text-sand-gold font-bold text-xl">✓</span>
                    <span className="text-primary/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CITIZENSHIP BY INVESTMENT ===== */}
      <section className="py-5xl px-container bg-white-marble">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-primary text-center mb-5xl"
          >
            Citizenship by Investment
          </motion.h2>

          <div className="flex overflow-x-auto gap-6 pb-6 scroll-smooth">
            {investments.map((inv, idx) => (
              <InvestmentCard key={idx} {...inv} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== YOUTH CITIZENSHIP PROGRAM ===== */}
      <section className="py-5xl px-container bg-gradient-to-b from-primary/5 to-white-marble">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-primary text-center mb-5xl"
          >
            Youth Citizenship Program
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {youthPrograms.map((prog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ borderColor: '#D4AF37', y: -5 }}
                className="border-2 border-primary rounded-2xl p-8 text-center space-y-4 bg-white-marble hover:shadow-lg transition-all"
              >
                <motion.div
                    className="inline-block w-20 h-20 mx-auto rounded-lg overflow-hidden"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <img src={prog.icon} alt={prog.title} className="w-full h-full object-cover" />
                  </motion.div>
                <h3 className="text-xl font-display font-bold text-primary">{prog.title}</h3>
                <p className="text-primary/70 text-sm">{prog.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-5xl px-container bg-gradient-to-br from-primary to-primary/90">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white-marble">
            Ready to Become a Citizen?
          </h2>
          <p className="text-lg text-white-marble/90">
            Take the first step towards a prosperous future in the Kingdom of Kush.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-sand-gold text-primary font-display font-bold text-lg rounded-lg shadow-lg inline-block"
          >
            Apply for Citizenship Today
          </motion.button>
        </motion.div>
      </section>
    </main>
  )
}
