import React from 'react'
import { motion } from 'framer-motion'

export default function MediaNews(){
  return (
    <div className="py-12 md:py-24 max-w-container mx-auto px-lg">
      <motion.header initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-8">
        <h1 className="text-display-lg font-display font-bold">Media & News</h1>
        <p className="text-body-md text-white-marble/80 mt-3 max-w-2xl mx-auto">Latest announcements, press releases and media resources from the Kingdom.</p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1,2,3,4].map((n) => (
          <motion.article key={n} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-black-stone/40 p-6 rounded-xl">
            <h3 className="text-body-lg font-semibold text-sand-gold">Press Release {n}</h3>
            <p className="text-body-sm text-white-marble/80 mt-2">Summary of the announcement and a link to read more.</p>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
