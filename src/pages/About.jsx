import React from 'react'
import { Link } from 'react-router-dom'

export default function About({ lang }){

  return (
    <main className="bg-white-marble">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full py-5xl px-container bg-gradient-to-b from-primary to-primary/90">
        <div className="max-w-container mx-auto text-center space-y-lg">
          <h1 className="text-display-lg md:text-display-xl font-display font-bold text-white-marble leading-tight">
            The Kingdom of Kush
          </h1>
          <p className="text-body-lg md:text-body-xl text-sand-gold max-w-3xl mx-auto font-light">
            A Living Civilization Forged Through Time
          </p>
        </div>
      </section>

      {/* ===== MAIN ABOUT NARRATIVE ===== */}
      <section className="py-5xl md:py-5xl px-container">
        <div className="max-w-4xl mx-auto space-y-4xl">
          {/* A Living Civilization */}
          <div className="space-y-md">
            <h2 className="text-display-md font-display font-bold text-primary">
              A Living Civilization Forged Through Time
            </h2>
            <p className="text-body-md leading-relaxed text-primary/80">
              The Kingdom of Kush stands as one of humanity's most enduring and resilient civilizations. For three millennia, Kush has been the cradle of remarkable achievement—a crucible where African excellence, spiritual depth, and cultural innovation have flourished. From the trading posts of Meroe to the temples of Napata, our ancestors built empires that rivaled Egypt, Persia, and Rome. Their legacy is not confined to history; it flows through our present and illuminates our future.
            </p>
            <p className="text-body-md leading-relaxed text-primary/80">
              Today, the Kingdom of Kush is a modern nation state, born from a vision to revive, honor, and advance this glorious heritage while building a globally competitive, sovereign state rooted in the values of dignity, unity, prosperity, and service to humanity.
            </p>
          </div>

          {/* Humanitarian Pioneer */}
          <div className="space-y-md">
            <h2 className="text-display-md font-display font-bold text-primary">
              A Humanitarian Pioneer: Three Decades of Transforming Lives
            </h2>
            <p className="text-body-md leading-relaxed text-primary/80">
              Since its establishment, the Kingdom of Kush has committed itself to a sacred principle: that true national wealth is measured not in gold or monuments, but in the potential unlocked within every child.
            </p>
            <p className="text-body-md leading-relaxed text-primary/80">
              For the past 30 years, the Kingdom has invested deeply in orphanages, educational institutions, and youth development programs across the African continent. What began as small acts of compassion has blossomed into a transformative movement. Thousands of children—orphaned, displaced, or marginalized—have passed through our care and emerged as doctors, engineers, teachers, diplomats, business leaders, and visionary changemakers.
            </p>
            <p className="text-body-md leading-relaxed text-primary/80">
              These children—now grown into influential professionals and national leaders—are the true ambassadors of Kush. They carry our values of resilience, compassion, and excellence into every corner of Africa and beyond. They are proof that investment in human capital yields the greatest return: a generation capable of building the future.
            </p>
          </div>

          {/* Modern Kingdom */}
          <div className="space-y-md">
            <h2 className="text-display-md font-display font-bold text-primary">
              A Modern Kingdom Built on Excellence
            </h2>
            <p className="text-body-md leading-relaxed text-primary/80">
              The Kingdom of Kush today is a thriving democratic federation governed by constitutional principles, committed to transparency, rule of law, and citizen participation. Our government balances tradition with innovation, drawing wisdom from our ancestral councils while embracing modern democratic governance, technological advancement, and international cooperation.
            </p>
            <p className="text-body-md leading-relaxed text-primary/80">
              The nation boasts a diverse economy spanning agriculture, heritage tourism, renewable energy, digital infrastructure, and manufacturing. Our strategic location across Sudan and Egypt, coupled with our control of vital Nile Valley resources and heritage sites, positions Kush as a cornerstone of regional stability and economic growth.
            </p>
            <p className="text-body-md leading-relaxed text-primary/80">
              We are home to UNESCO World Heritage Sites, ancient pyramids, and spiritual centers that attract scholars, pilgrims, and travelers worldwide. Yet we do not dwell in the past. Kush is rapidly urbanizing, investing in smart cities, digital governance, and a knowledge economy that rivals emerging markets globally.
            </p>
          </div>

          {/* Visionary Future */}
          <div className="space-y-md">
            <h2 className="text-display-md font-display font-bold text-primary">
              A Visionary Future: Toward 2050 and Beyond
            </h2>
            <p className="text-body-md leading-relaxed text-primary/80">
              The Kingdom of Kush envisions itself as a beacon of African leadership—a model of how heritage and modernity, tradition and innovation, and local wisdom and global engagement can coexist and thrive.
            </p>
            <p className="text-body-md leading-relaxed text-primary/80 font-semibold">
              By 2050, Kush will be:
            </p>
            <ul className="space-y-md text-body-md text-primary/80">
              <li className="flex gap-md">
                <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                <span>A center of African excellence in education, health, and governance.</span>
              </li>
              <li className="flex gap-md">
                <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                <span>A sustainable, technology-driven economy with universal digital access.</span>
              </li>
              <li className="flex gap-md">
                <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                <span>A global partner in climate action, cultural preservation, and diplomatic leadership.</span>
              </li>
              <li className="flex gap-md">
                <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                <span>A nation where every citizen—regardless of background—has access to opportunity and is empowered to reach their potential.</span>
              </li>
            </ul>
            <p className="text-body-md leading-relaxed text-primary/80 pt-md">
              Our development agenda prioritizes sustainable growth, gender equality, youth empowerment, and the preservation of our cultural and natural heritage. We are building hospitals, universities, renewable energy plants, and research institutes. We are creating pathways for diaspora engagement and attracting global talent and investment.
            </p>
            <p className="text-body-md leading-relaxed text-primary/80">
              We are a nation on the rise—grounded in our past, focused on our present, and confident in our future.
            </p>
          </div>

          {/* Together We Prosper */}
          <div className="text-center pt-2xl">
            <p className="text-display-md font-display font-bold text-sand-gold">
              Together We Prosper!
            </p>
          </div>
        </div>
      </section>

      {/* ===== KEY FACTS: OUR HERITAGE ===== */}
      <section className="py-5xl md:py-5xl px-container bg-offwhite border-t border-gold/10">
        <div className="max-w-4xl mx-auto space-y-4xl">
          <div className="space-y-lg">
            <h2 className="text-display-md font-display font-bold text-primary">
              Our Heritage: An Unbroken Lineage
            </h2>
            <div className="space-y-md">
              <div>
                <h3 className="text-body-lg font-semibold text-primary mb-md">Historical Significance</h3>
                <ul className="space-y-sm text-body-md text-primary/80">
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">—</span>
                    <span>The Kingdom of Kush was one of the world's earliest great civilizations, flourishing for over 3,000 years (c. 2500 BCE – 350 CE).</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">—</span>
                    <span>Kush rivaled and sometimes exceeded Egypt in power, culture, and influence; several Kushite pharaohs ruled Egypt during the 25th Dynasty.</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">—</span>
                    <span>The great pyramids of Meroe, the temples of Napata, and the ancient city of Dongola stand as testaments to Kushite architectural and artistic genius.</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">—</span>
                    <span>Kush pioneered iron-working, developed its own written script (Meroitic), and created a sophisticated trade network spanning Africa, the Mediterranean, and Asia.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-body-lg font-semibold text-primary mb-md">Modern Revival</h3>
                <ul className="space-y-sm text-body-md text-primary/80">
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">—</span>
                    <span>In the late 20th and early 21st centuries, descendants of the Kushite peoples, united by a shared vision of cultural and political renewal, established the modern Kingdom of Kush.</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">—</span>
                    <span>The nation honors its ancestral legacy while embracing contemporary governance, human rights, and global cooperation.</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">—</span>
                    <span>Today, the Kingdom of Kush is a UNESCO-recognized guardian of world heritage, working to preserve, study, and celebrate Kushite civilization for future generations.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY FACTS: CURRENT KINGDOM ===== */}
      <section className="py-5xl md:py-5xl px-container">
        <div className="max-w-4xl mx-auto space-y-4xl">
          <div className="space-y-lg">
            <h2 className="text-display-md font-display font-bold text-primary">
              The Current Kingdom: Who We Are Today
            </h2>
            <div className="space-y-md">
              <div>
                <h3 className="text-body-lg font-semibold text-primary mb-md">Government & Structure</h3>
                <p className="text-body-md text-primary/80 leading-relaxed">
                  The Kingdom of Kush operates as a constitutional democracy with a mixed parliamentary-presidential system. Leadership is grounded in democratic elections, transparent institutions, and respect for human rights and the rule of law. A council of regional governors, a national parliament, and an executive branch work in concert to serve the nation's diverse communities.
                </p>
              </div>
              <div>
                <h3 className="text-body-lg font-semibold text-primary mb-md">Population & Diversity</h3>
                <p className="text-body-md text-primary/80 leading-relaxed">
                  The Kingdom is home to over 15 million people, speaking dozens of languages and representing multiple ethnic, religious, and cultural traditions united by common citizenship and shared values. The national motto—<em>Unity in Diversity, Strength in Purpose</em>—reflects this commitment to inclusivity and collective progress.
                </p>
              </div>
              <div>
                <h3 className="text-body-lg font-semibold text-primary mb-md">Economy & Resources</h3>
                <div className="space-y-sm text-body-md text-primary/80">
                  <p><strong>Natural Resources:</strong> The Kingdom controls vast agricultural lands along the Nile Valley, significant mineral deposits (gold, phosphates, iron ore), and renewable energy potential (solar, wind, hydroelectric).</p>
                  <p><strong>Key Industries:</strong> Heritage tourism, agriculture and agribusiness, renewable energy, digital services, manufacturing, and education.</p>
                  <p><strong>GDP Growth:</strong> The Kingdom has achieved consistent annual growth of 6–8% over the past decade, with projections of 8–10% through 2035.</p>
                </div>
              </div>
              <div>
                <h3 className="text-body-lg font-semibold text-primary mb-md">Strategic Assets</h3>
                <ul className="space-y-sm text-body-md text-primary/80">
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                    <span><strong>UNESCO World Heritage Sites:</strong> Multiple pyramids, temples, and archaeological zones recognized globally.</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                    <span><strong>Nile Valley Control:</strong> A critical geopolitical and economic advantage for regional trade, water security, and energy.</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                    <span><strong>Digital Infrastructure:</strong> Rapid expansion of broadband, mobile networks, and smart city initiatives in urban centers.</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                    <span><strong>Human Capital:</strong> A young, educated population with growing technical and professional expertise.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-body-lg font-semibold text-primary mb-md">International Alliances</h3>
                <p className="text-body-md text-primary/80 leading-relaxed">
                  Member of the African Union, United Nations, and numerous regional economic and cultural organizations. Strategic partnerships with nations across Africa, the Middle East, Europe, and Asia for trade, education, technology transfer, and cultural exchange. Active participant in global climate action, sustainable development, and humanitarian initiatives.
                </p>
              </div>
              <div>
                <h3 className="text-body-lg font-semibold text-primary mb-md">Development Projects (Current & Near-Term)</h3>
                <ul className="space-y-sm text-body-md text-primary/80">
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                    <span><strong>The Kush Digital Hub:</strong> A Pan-African technology and innovation center attracting startups, researchers, and global tech companies.</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                    <span><strong>The Nile Valley Regeneration Initiative:</strong> Infrastructure, agriculture, and environmental sustainability projects spanning both Sudan and Egypt borders.</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                    <span><strong>Universal Education & Health Access:</strong> A commitment to provide quality education and healthcare to all citizens by 2035.</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">•</span>
                    <span><strong>Renewable Energy Grid:</strong> Transitioning 60% of national energy to renewable sources by 2030.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY FACTS: FUTURE KINGDOM ===== */}
      <section className="py-5xl md:py-5xl px-container bg-offwhite border-t border-gold/10">
        <div className="max-w-4xl mx-auto space-y-4xl">
          <div className="space-y-lg">
            <h2 className="text-display-md font-display font-bold text-primary">
              The Future Kingdom: Our Vision for Tomorrow
            </h2>
            <div className="space-y-md">
              <div>
                <h3 className="text-body-lg font-semibold text-primary mb-md">2030 Milestones</h3>
                <ul className="space-y-sm text-body-md text-primary/80">
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">✓</span>
                    <span>Universal primary and secondary education with 70% tertiary education enrollment.</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">✓</span>
                    <span>500,000+ new jobs in tech, renewable energy, and services sectors.</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">✓</span>
                    <span>50% reduction in poverty; universal basic healthcare.</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">✓</span>
                    <span>Kush recognized as a top-10 African investment destination.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-body-lg font-semibold text-primary mb-md">2050 Vision</h3>
                <ul className="space-y-sm text-body-md text-primary/80">
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">→</span>
                    <span>A top-5 African economy with a diversified, knowledge-based workforce.</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">→</span>
                    <span>A global leader in cultural heritage preservation and diaspora engagement.</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">→</span>
                    <span>Carbon-neutral operations and a model for sustainable African development.</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="text-sand-gold font-bold flex-shrink-0">→</span>
                    <span>A nation where every child—whether born into privilege or hardship—has the opportunity to thrive.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-body-lg font-semibold text-primary mb-md">Strategic Pillars</h3>
                <div className="space-y-sm text-body-md text-primary/80">
                  <p><strong>1. Human Capital:</strong> Investment in education, health, and skills training to unleash individual potential.</p>
                  <p><strong>2. Sustainable Growth:</strong> Balancing economic expansion with environmental stewardship and social equity.</p>
                  <p><strong>3. Technology & Innovation:</strong> Leapfrogging traditional development stages through digital transformation.</p>
                  <p><strong>4. Cultural Stewardship:</strong> Preserving and celebrating Kushite heritage while fostering contemporary arts and innovation.</p>
                  <p><strong>5. Regional Leadership:</strong> Serving as a diplomatic bridge and development model for the African continent.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CALL-TO-ACTION SECTION ===== */}
      <section className="py-5xl md:py-5xl px-container bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-4xl mx-auto space-y-3xl text-center">
          <h2 className="text-display-md md:text-display-lg font-display font-bold text-white-marble">
            Join the Kingdom of Kush
          </h2>
          <p className="text-body-md md:text-body-lg text-sand-gold leading-relaxed max-w-3xl mx-auto">
            The Kingdom of Kush is not merely a nation; it is a movement—a rising tide of African excellence, humanitarian purpose, and boundless possibility.
          </p>
          <p className="text-body-md text-white-marble/90 leading-relaxed max-w-3xl mx-auto">
            Whether you are a global citizen seeking to invest in a stable, growing economy; an educator or healthcare professional called to serve a transforming nation; a diaspora member reconnecting with ancestral roots; or a young innovator ready to build the future—the Kingdom of Kush welcomes you.
          </p>

          <div className="space-y-2xl pt-lg">
            <div className="space-y-md">
              <h3 className="text-body-lg font-semibold text-sand-gold">Become a Kush Citizen</h3>
              <p className="text-body-md text-white-marble/90">
                Gain access to exclusive investment and entrepreneurship opportunities, educational scholarships and professional development pathways, cultural and spiritual experiences grounded in one of Africa's greatest civilizations, and a global community united by shared values and boundless ambition.
              </p>
            </div>

            <div className="space-y-md">
              <h3 className="text-body-lg font-semibold text-sand-gold">Partner with Kush</h3>
              <p className="text-body-md text-white-marble/90">
                Engage through trade, technology transfer, diplomatic relations, or collaborative development initiatives that benefit both our nations and the world.
              </p>
            </div>

            <div className="space-y-md">
              <h3 className="text-body-lg font-semibold text-sand-gold">Visit Kush</h3>
              <p className="text-body-md text-white-marble/90">
                Witness the majesty of ancient pyramids, the warmth of modern hospitality, and the energy of a nation rising.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-lg justify-center pt-3xl">
            <Link 
              to="/citizenship"
              className="rounded-lg px-2xl py-md bg-sand-gold text-primary font-semibold shadow-md hover:shadow-lg inline-block transition-all duration-300"
            >
              Become a Citizen
            </Link>
            <a 
              href="#contact"
              className="rounded-lg px-2xl py-md bg-transparent border-2 border-sand-gold text-sand-gold font-semibold shadow-md hover:shadow-lg inline-block transition-all duration-300"
            >
              Partner with Us
            </a>
          </div>

          {/* Closing Statement */}
          <div className="pt-3xl border-t border-sand-gold/20 space-y-md">
            <p className="text-body-lg font-semibold text-sand-gold">
              The Kingdom of Kush awaits.
            </p>
            <p className="text-display-md font-display font-bold text-white-marble">
              Together We Build. Together We Prosper. Together We Rise.
            </p>
            <p className="text-body-sm text-white-marble/70">
              Learn more about citizenship, investment, partnerships, and cultural immersion at our official portal. The future of Africa is being written here. Will you be part of it?
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
