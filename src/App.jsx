import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Citizenship from './pages/Citizenship'
import Egov from './pages/Egov'
import Events from './pages/Events'

export default function App(){
  const [lang, setLang] = useState('en')
  useEffect(()=>{
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  },[lang])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={lang} setLang={setLang} />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/citizenship" element={<Citizenship />} />
          <Route path="/egov" element={<Egov />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
      <Footer lang={lang} setLang={setLang} />
    </div>
  )
}
