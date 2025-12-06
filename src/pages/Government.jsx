import React from 'react'
import { motion } from 'framer-motion'

export default function Government(){
  return (
    <div className="py-12 md:py-24 max-w-container mx-auto px-lg">
      <motion.header
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-display-lg font-display font-bold">Government</h1>
        <p className="text-body-md text-white-marble/80 mt-4 max-w-2xl mx-auto">
          Learn about the governance, ministries, and public initiatives shaping the Kingdom of Kush.
        </p>
      </motion.header>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          {title: 'Ministries', body: 'Overview of ministries and leadership.'},
          {title: 'Public Policy', body: 'Key policy priorities and initiatives.'},
          {title: 'Transparency', body: 'Open data and accountability programs.'}
        ].map((card, i) => (
          <div key={i} className="bg-black-stone/40 p-6 rounded-xl hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-body-lg text-sand-gold">{card.title}</h3>
            <p className="text-body-sm text-white-marble/80 mt-3">{card.body}</p>
          </div>
        ))}
      </motion.section>
    </div>
  )
}
