import React from 'react'
import { motion } from 'framer-motion'

export default function Investors(){
  return (
    <div className="py-12 md:py-24 max-w-container mx-auto px-lg">
      <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-8">
        <h1 className="text-display-lg font-display font-bold">Investors</h1>
        <p className="text-body-md text-white-marble/80 mt-3 max-w-2xl mx-auto">Opportunities, incentives, and partnership programs for investors in the Kingdom.</p>
      </motion.header>

      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {title: 'Opportunities', body: 'Priority sectors and projects open for investment.'},
          {title: 'Incentives', body: 'Tax and regulatory incentives for foreign investment.'},
          {title: 'Contacts', body: 'How to connect with our investment office.'}
        ].map((c, i) => (
          <div key={i} className="bg-black-stone/40 p-6 rounded-xl">
            <h3 className="text-body-lg font-semibold text-sand-gold">{c.title}</h3>
            <p className="text-body-sm text-white-marble/80 mt-3">{c.body}</p>
          </div>
        ))}
      </motion.section>
    </div>
  )
}
