import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ServiceCard = ({ number, title, description, icon, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <motion.div
        className="h-80 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all relative overflow-hidden"
        whileHover={{ scale: 1.05, borderColor: '#D4AF37' }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-sand-gold/0 to-sand-gold/10 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.4 }}
        />
        <div className="relative z-10 space-y-4">
          <img src={icon} alt={title} className="w-16 h-16 mx-auto rounded-lg object-cover shadow-lg" />
          <div className="inline-block px-3 py-1 bg-sand-gold/20 text-sand-gold font-semibold text-sm rounded-full">
            Step {number}
          </div>
          <h3 className="text-2xl font-display font-bold text-primary">{title}</h3>
          <p className="text-primary/70 text-sm">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

const TimelineStep = ({ step, number, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      {/* Timeline dot and line */}
      <div className="flex gap-8">
        <div className="flex flex-col items-center">
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-br from-sand-gold to-sand-gold/80 flex items-center justify-center text-primary font-display font-bold text-lg shadow-lg"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: delay + 0.1 }}
          >
            {number}
          </motion.div>
          {number < 4 && (
            <motion.div
              className="w-1 flex-1 bg-gradient-to-b from-sand-gold to-sand-gold/20 my-2"
              style={{ minHeight: '100px' }}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.6, delay: delay + 0.2 }}
            />
          )}
        </div>
        <div className="pb-8">
          <h3 className="text-xl font-display font-bold text-primary mb-2">{step.title}</h3>
          <p className="text-primary/70">{step.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

const ChatBubble = ({ text, isUser, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isUser ? 50 : -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-xs px-4 py-2 rounded-lg ${
          isUser
            ? 'bg-primary text-white-marble'
            : 'bg-primary/10 text-primary border border-primary/20'
        }`}
      >
        <p className="text-sm">{text}</p>
      </div>
    </motion.div>
  )
}

export default function Egov() {
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.5, triggerOnce: true })
  const [isDragActive, setIsDragActive] = useState(false)

  const services = [
    { icon: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop', title: 'License Application', description: 'Apply for business licenses online' },
    { icon: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop', title: 'Permit Management', description: 'Submit and track permit requests' },
    { icon: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop', title: 'Payment Services', description: 'Secure online payment processing' },
    { icon: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop', title: 'Document Services', description: 'Verify and obtain certificates' },
    { icon: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop', title: 'Digital Signatures', description: 'Legally recognized digital signing' },
    { icon: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop', title: 'Business Analytics', description: 'Track applications and statistics' }
  ]

  const trackingSteps = [
    { title: 'Application Submitted', description: 'Your application has been received and queued for review' },
    { title: 'Under Review', description: 'Our team is reviewing your application and documents' },
    { title: 'Additional Info Requested', description: 'We may request additional information' },
    { title: 'Approved & Complete', description: 'Your application is approved and ready for pickup' }
  ]

  const chatMessages = [
    { text: 'Hello! How can I assist you today?', isUser: false, delay: 0 },
    { text: 'I need help with my business license application', isUser: true, delay: 0.3 },
    { text: 'I can help with that. What information do you need?', isUser: false, delay: 0.6 },
    { text: 'Where can I upload my documents?', isUser: true, delay: 0.9 }
  ]

  return (
    <main className="bg-white-marble overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center py-5xl px-container overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
            Digital Government Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white-marble leading-tight"
          >
            E-Government Portal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl font-display text-sand-gold"
          >
            Access Government Services Instantly
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white-marble/90 max-w-2xl mx-auto"
          >
            Submit applications, track requests, and manage government services from anywhere in the Kingdom.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-sand-gold text-primary font-display font-bold text-lg rounded-lg shadow-lg inline-block"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </section>

      {/* ===== AVAILABLE SERVICES ===== */}
      <section className="py-5xl px-container bg-white-marble">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-primary text-center mb-5xl"
          >
            Available Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} number={idx + 1} {...service} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRACK REQUESTS ===== */}
      <section className="py-5xl px-container bg-gradient-to-b from-primary/5 to-white-marble">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-primary text-center mb-5xl"
          >
            Track Your Applications
          </motion.h2>

          <div className="space-y-6">
            {trackingSteps.map((step, idx) => (
              <TimelineStep key={idx} step={step} number={idx + 1} delay={idx * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== UPLOAD DOCUMENTS ===== */}
      <section className="py-5xl px-container bg-white-marble">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-primary text-center mb-5xl"
          >
            Submit Documents
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onDragEnter={() => setIsDragActive(true)}
            onDragLeave={() => setIsDragActive(false)}
            onDrop={() => setIsDragActive(false)}
            className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all ${
              isDragActive
                ? 'border-sand-gold bg-sand-gold/10'
                : 'border-primary/30 bg-primary/5'
            }`}
          >
            <motion.div
              animate={isDragActive ? { scale: 1.1 } : { scale: 1 }}
              className="mb-4"
            >
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=80&h=80&fit=crop" alt="Upload" className="w-20 h-20 mx-auto rounded-lg object-cover" />
            </motion.div>
            <h3 className="text-2xl font-display font-bold text-primary mb-2">
              Drag & Drop Your Documents
            </h3>
            <p className="text-primary/70 mb-4">
              or click to select files. Accepted formats: PDF, DOC, JPG, PNG (Max 10MB)
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-white-marble font-display font-semibold rounded-lg"
            >
              Select Files
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ===== 24/7 CHAT SUPPORT ===== */}
      <section className="py-5xl px-container bg-gradient-to-b from-primary/5 to-white-marble">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-primary text-center mb-5xl"
          >
            24/7 Support Chat
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-2xl p-8 space-y-4 h-96 flex flex-col"
          >
            <div className="flex-1 overflow-y-auto space-y-4">
              {chatMessages.map((msg, idx) => (
                <ChatBubble key={idx} text={msg.text} isUser={msg.isUser} delay={idx * 0.15} />
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-lg border-2 border-primary/30 focus:border-primary outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-white-marble font-display font-semibold rounded-lg"
              >
                Send
              </motion.button>
            </div>
          </motion.div>
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
            Modernize Your Government Experience
          </h2>
          <p className="text-lg text-white-marble/90">
            Fast, secure, and transparent government services at your fingertips.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-sand-gold text-primary font-display font-bold text-lg rounded-lg shadow-lg inline-block"
          >
            Access E-Government Portal
          </motion.button>
        </motion.div>
      </section>
    </main>
  )
}
