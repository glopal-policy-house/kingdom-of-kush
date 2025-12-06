import React from 'react'
import { motion } from 'framer-motion'

export default function Join(){
  return (
    <div className="py-12 md:py-24 max-w-container mx-auto px-lg">
      <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-8">
        <h1 className="text-display-lg font-display font-bold">Join the Kingdom</h1>
        <p className="text-body-md text-white-marble/80 mt-3 max-w-2xl mx-auto">Pathways to participate as a visitor, resident, investor or cultural partner.</p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div initial={{ scale: 0.98 }} whileHover={{ scale: 1.02 }} className="bg-black-stone/40 p-6 rounded-xl">
          <h3 className="text-body-lg font-semibold text-sand-gold">Visit</h3>
          <p className="text-body-sm text-white-marble/80 mt-2">Short-stay visitor information and cultural itineraries.</p>
        </motion.div>
        <motion.div initial={{ scale: 0.98 }} whileHover={{ scale: 1.02 }} className="bg-black-stone/40 p-6 rounded-xl">
          <h3 className="text-body-lg font-semibold text-sand-gold">Residency & Citizenship</h3>
          <p className="text-body-sm text-white-marble/80 mt-2">Learn about residency programs and steps to apply.</p>
        </motion.div>
      </div>
    </div>
  )
}
