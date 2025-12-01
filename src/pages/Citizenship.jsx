import React, { useState } from 'react'

export default function Citizenship(){
  const [expandedFaq, setExpandedFaq] = useState(null)
  
  return (
    <main>
      {/* Header */}
      <section className="py-4xl md:py-5xl px-container bg-gradient-to-b from-sand-gold/10 to-white-marble">
        <div className="max-w-container mx-auto space-y-md">
          <h1 className="text-headline text-black-stone">Kush Citizenship</h1>
          <p className="text-body-lg text-black-stone/70 max-w-3xl">
            Join a global community celebrating Nubian heritage. Kush citizenship recognizes cultural ties and offers pathways to participate in civic life across our cultural corridor.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-section px-container">
        <div className="max-w-container mx-auto">
          <h2 className="text-subheading mb-3xl text-black-stone">Citizenship Benefits</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2xl">
            {[
              { title: 'Cultural Access', desc: 'Exclusive access to heritage sites, museums, and cultural events.' },
              { title: 'Travel Facilitation', desc: 'Streamlined visa processes and border crossing privileges.' },
              { title: 'Business Support', desc: 'Entrepreneurship grants and trade network access.' },
              { title: 'Education', desc: 'Scholarships and cultural education programs.' },
              { title: 'Healthcare', desc: 'Priority access to health services across borders.' },
              { title: 'Community', desc: 'Global network of Kush citizens and events.' }
            ].map((benefit, idx) => (
              <div 
                key={benefit.title}
                className="p-2xl rounded-minimal border border-sand-gold/20 bg-white-marble rounded-card hover:border-sand-gold/50 hover:shadow-card transition-all duration-300 space-y-md animate-fade-in-up"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <h3 className="text-body-lg font-semibold text-black-stone">{benefit.title}</h3>
                <p className="text-body-sm text-black-stone/70">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-section px-container bg-dark-green/5 border-y border-sand-gold/10">
        <div className="max-w-container mx-auto">
          <h2 className="text-subheading mb-3xl text-black-stone">Who Can Apply?</h2>
          <div className="max-w-2xl space-y-lg">
            <div className="p-2xl rounded-minimal border border-sand-gold/30 bg-white-marble rounded-card space-y-md">
              <h3 className="text-body-lg font-semibold text-black-stone">Eligibility Criteria</h3>
              <ul className="space-y-sm text-body-md text-black-stone/70">
                <li className="flex gap-md">
                  <span className="text-sand-gold flex-shrink-0">•</span>
                  <span>Demonstrated cultural, familial, or historic ties to Nubian/Kush heritage</span>
                </li>
                <li className="flex gap-md">
                  <span className="text-sand-gold flex-shrink-0">•</span>
                  <span>Commitment to preserving and celebrating Kush culture</span>
                </li>
                <li className="flex gap-md">
                  <span className="text-sand-gold flex-shrink-0">•</span>
                  <span>Valid identification documents and residency proof</span>
                </li>
                <li className="flex gap-md">
                  <span className="text-sand-gold flex-shrink-0">•</span>
                  <span>Completion of cultural orientation program</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-section px-container">
        <div className="max-w-container mx-auto">
          <h2 className="text-subheading mb-3xl text-black-stone">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2xl mb-3xl">
            {[
              { step: '1', title: 'Check Eligibility', desc: 'Review requirements and gather documents' },
              { step: '2', title: 'Create Account', desc: 'Register on our platform' },
              { step: '3', title: 'Submit Application', desc: 'Complete form and upload documents' },
              { step: '4', title: 'Verification & Approval', desc: 'Review and citizenship award' }
            ].map((item, idx) => (
              <div key={item.step} className="flex flex-col gap-md animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="w-12 h-12 rounded-minimal bg-gradient-to-br from-sand-gold to-bronze flex items-center justify-center text-white-marble font-display font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-body-lg font-semibold text-black-stone">{item.title}</h4>
                  <p className="text-body-sm text-black-stone/70 mt-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-sand-gold/10 border border-sand-gold/30 rounded-minimal p-2xl">
            <p className="text-body-md text-black-stone/80 mb-lg">
              ⏱️ <strong>Processing Time:</strong> Typical processing times range from 4–8 weeks depending on document verification and volume.
            </p>
            <a href="#apply" className="btn-primary">
              Start Your Application
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section px-container">
        <div className="max-w-container mx-auto max-w-2xl">
          <h2 className="text-subheading mb-3xl text-black-stone">Frequently Asked Questions</h2>
          <div className="space-y-md">
            {[
              { q: 'Who qualifies for Kush citizenship?', a: 'Anyone with cultural, familial, or historic ties to Nubian/Kush heritage can apply. This includes descendants, cultural enthusiasts, and community members.' },
              { q: 'How long does processing take?', a: 'Most applications are reviewed within 4–8 weeks. Complex cases may take longer. We provide status updates throughout the process.' },
              { q: 'Is citizenship permanent?', a: 'Yes, Kush citizenship is permanent. However, it requires annual renewal and active participation in community activities.' },
              { q: 'Can I apply if I live outside Sudan or Egypt?', a: 'Absolutely! Kush citizenship is for global diaspora. You can apply from anywhere in the world.' },
              { q: 'What documents do I need?', a: 'Required documents include: valid identification, birth certificate, proof of residency, and cultural affiliation documentation.' }
            ].map((item, idx) => (
              <details 
                key={item.q}
                className="p-2xl rounded-minimal border border-sand-gold/20 bg-white-marble rounded-card group cursor-pointer"
                open={expandedFaq === idx}
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                <summary className="flex items-start gap-md justify-between text-body-lg font-semibold text-black-stone list-none">
                  {item.q}
                  <span className="text-sand-gold transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-md text-body-md text-black-stone/70">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="py-section px-container bg-black-stone text-white-marble">
        <div className="max-w-container mx-auto text-center space-y-lg">
          <h2 className="text-headline text-white-marble">Ready to Join?</h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Become part of the global Kingdom of Kush community and celebrate your heritage.
          </p>
          <button className="btn-primary mx-auto">
            Apply for Citizenship Today
          </button>
        </div>
      </section>
    </main>
  )
}
